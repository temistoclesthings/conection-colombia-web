-- Fix search_path for generate_radicado_number function
CREATE OR REPLACE FUNCTION public.generate_radicado_number()
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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

-- Fix search_path for update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;