import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Loader2, Search, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const consultaSchema = z.object({
  radicado_number: z.string()
    .min(1, "Debes ingresar el número de radicado")
    .trim(),
});

type ConsultaValues = z.infer<typeof consultaSchema>;

interface PQRData {
  id: string;
  radicado_number: string;
  tipo_solicitud: "peticion" | "queja" | "reclamo";
  nombre_completo: string;
  estado: "radicada" | "en_proceso" | "resuelta";
  fecha_radicado: string;
  fecha_respuesta: string | null;
  respuesta: string | null;
  descripcion: string;
}

const PQRConsulta = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [pqrData, setPqrData] = useState<PQRData | null>(null);

  const form = useForm<ConsultaValues>({
    resolver: zodResolver(consultaSchema),
    defaultValues: {
      radicado_number: "",
    },
  });

  const onSubmit = async (values: ConsultaValues) => {
    setIsSearching(true);
    setPqrData(null);

    try {
      const { data, error } = await supabase
        .from("pqrs")
        .select("*")
        .eq("radicado_number", values.radicado_number.trim())
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        toast({
          variant: "destructive",
          title: "No encontrado",
          description: "No se encontró ninguna PQR con ese número de radicado.",
        });
        return;
      }

      setPqrData(data as PQRData);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Ocurrió un error al consultar tu PQR.",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getEstadoBadge = (estado: PQRData["estado"]) => {
    const configs = {
      radicada: {
        label: "Radicada",
        variant: "secondary" as const,
        icon: AlertCircle,
      },
      en_proceso: {
        label: "En Proceso",
        variant: "default" as const,
        icon: Clock,
      },
      resuelta: {
        label: "Resuelta",
        variant: "default" as const,
        icon: CheckCircle,
      },
    };

    const config = configs[estado];
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1 w-fit">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const getTipoLabel = (tipo: PQRData["tipo_solicitud"]) => {
    const labels = {
      peticion: "Petición",
      queja: "Queja",
      reclamo: "Reclamo",
    };
    return labels[tipo];
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Consultar Estado de PQR</CardTitle>
          <CardDescription>
            Ingresa tu número de radicado para conocer el estado de tu solicitud.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="radicado_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de Radicado</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input placeholder="Ej: PQR-2025-000001" {...field} />
                      </FormControl>
                      <Button type="submit" disabled={isSearching}>
                        {isSearching ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Search className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>

      {pqrData && (
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Detalles de tu PQR</CardTitle>
                <CardDescription className="mt-1">
                  Radicado: {pqrData.radicado_number}
                </CardDescription>
              </div>
              {getEstadoBadge(pqrData.estado)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tipo de Solicitud</p>
                <p className="text-base">{getTipoLabel(pqrData.tipo_solicitud)}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fecha de Radicado</p>
                <p className="text-base">
                  {new Date(pqrData.fecha_radicado).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Solicitante</p>
                <p className="text-base">{pqrData.nombre_completo}</p>
              </div>
              {pqrData.fecha_respuesta && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fecha de Respuesta</p>
                  <p className="text-base">
                    {new Date(pqrData.fecha_respuesta).toLocaleDateString("es-CO", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              )}
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Descripción</p>
              <p className="text-base p-4 bg-muted/30 rounded-lg">{pqrData.descripcion}</p>
            </div>

            {pqrData.respuesta && (
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Respuesta</p>
                <p className="text-base p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  {pqrData.respuesta}
                </p>
              </div>
            )}

            {pqrData.estado !== "resuelta" && (
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Tu solicitud será atendida en un plazo máximo de 15 días hábiles desde la fecha de radicado.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PQRConsulta;
