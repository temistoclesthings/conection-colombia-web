-- Create enum for request type
CREATE TYPE public.tipo_solicitud_pqr AS ENUM ('peticion', 'queja', 'reclamo');

-- Create enum for document type
CREATE TYPE public.tipo_documento AS ENUM ('CC', 'CE', 'NIT', 'Pasaporte', 'TI');

-- Create enum for PQR status
CREATE TYPE public.estado_pqr AS ENUM ('radicada', 'en_proceso', 'resuelta');

-- Create PQRs table
CREATE TABLE public.pqrs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  radicado_number TEXT NOT NULL UNIQUE,
  tipo_solicitud tipo_solicitud_pqr NOT NULL,
  nombre_completo TEXT NOT NULL,
  documento_identidad TEXT NOT NULL,
  tipo_documento tipo_documento NOT NULL,
  direccion TEXT NOT NULL,
  telefono TEXT NOT NULL,
  email TEXT NOT NULL,
  descripcion TEXT NOT NULL,
  estado estado_pqr NOT NULL DEFAULT 'radicada',
  fecha_radicado TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  fecha_respuesta TIMESTAMP WITH TIME ZONE,
  respuesta TEXT,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.pqrs ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can create a PQR (anonymous or authenticated)
CREATE POLICY "Anyone can create PQR"
ON public.pqrs
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Users can view their own PQRs if they provided user_id
CREATE POLICY "Users can view own PQRs"
ON public.pqrs
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy: Anonymous users can view PQR by radicado number (for consultation)
CREATE POLICY "Anyone can view by radicado"
ON public.pqrs
FOR SELECT
TO public
USING (true);

-- Create function to generate radicado number
CREATE OR REPLACE FUNCTION public.generate_radicado_number()
RETURNS TEXT
LANGUAGE plpgsql
AS $$
DECLARE
  new_radicado TEXT;
  year_part TEXT;
  sequence_part TEXT;
BEGIN
  year_part := TO_CHAR(NOW(), 'YYYY');
  
  -- Get the next sequence number for this year
  SELECT LPAD((COUNT(*) + 1)::TEXT, 6, '0')
  INTO sequence_part
  FROM public.pqrs
  WHERE EXTRACT(YEAR FROM created_at) = EXTRACT(YEAR FROM NOW());
  
  new_radicado := 'PQR-' || year_part || '-' || sequence_part;
  
  RETURN new_radicado;
END;
$$;

-- Create trigger to auto-generate radicado number
CREATE OR REPLACE FUNCTION public.set_radicado_number()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NEW.radicado_number IS NULL OR NEW.radicado_number = '' THEN
    NEW.radicado_number := generate_radicado_number();
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER trigger_set_radicado_number
BEFORE INSERT ON public.pqrs
FOR EACH ROW
EXECUTE FUNCTION public.set_radicado_number();

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_pqrs_updated_at
BEFORE UPDATE ON public.pqrs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster lookups
CREATE INDEX idx_pqrs_radicado ON public.pqrs(radicado_number);
CREATE INDEX idx_pqrs_user_id ON public.pqrs(user_id);
CREATE INDEX idx_pqrs_estado ON public.pqrs(estado);