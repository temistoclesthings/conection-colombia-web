import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Search, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Coverage = () => {
  const [address, setAddress] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      toast.error("Por favor ingresa una dirección");
      return;
    }

    setIsChecking(true);
    // Simulate API call
    setTimeout(() => {
      setIsChecking(false);
      toast.success("¡Excelente! Tenemos cobertura en tu zona", {
        description: "Un asesor se comunicará contigo pronto",
        icon: <CheckCircle2 className="text-success" />,
      });
    }, 1500);
  };

  return (
    <section id="cobertura" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-success/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-border shadow-card overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <CardHeader className="text-center space-y-4 relative z-10">
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-float">
                <MapPin className="w-10 h-10 text-foreground" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold">
                Verifica <span className="text-gradient">Cobertura</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Ingresa tu dirección y descubre si podemos llevar nuestra fibra óptica a tu hogar o negocio
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
              <form onSubmit={handleCheckCoverage} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Ej: Calle 123 #45-67, Bogotá"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="pl-10 h-12 bg-input border-border"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isChecking}
                    className="sm:w-auto w-full"
                  >
                    {isChecking ? "Verificando..." : "Verificar Cobertura"}
                  </Button>
                </div>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-border">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Ciudades con cobertura</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-muted-foreground">Barrios conectados</div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-success">24h</div>
                  <div className="text-sm text-muted-foreground">Tiempo de instalación</div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h4 className="font-semibold text-lg">Principales ciudades con cobertura:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Bogotá
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Medellín
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    Cali
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Barranquilla
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    Cartagena
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    Bucaramanga
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    Pereira
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Santa Marta
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
