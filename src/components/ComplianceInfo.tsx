import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, ClipboardList, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComplianceInfo = () => {
  const infoCards = [
    {
      title: "Procedimientos para presentar una PQR",
      description: "Conoce cómo presentar Peticiones, Quejas y Reclamos de manera fácil y efectiva.",
      icon: FileText,
      link: "/pqr",
    },
    {
      title: "Mecanismos Seguros",
      description: "Información sobre los protocolos de seguridad y protección de datos personales.",
      icon: Shield,
      link: "/mecanismos-seguros",
    },
    {
      title: "Ficha Técnica",
      description: "Especificaciones técnicas de nuestros servicios de internet y televisión.",
      icon: ClipboardList,
      link: "#",
    },
    {
      title: "Indicadores de Atención al Usuario",
      description: "Métricas de calidad y tiempo de respuesta en nuestro servicio al cliente.",
      icon: BarChart3,
      link: "#",
    },
  ];

  return (
    <section id="informacion" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Información y Transparencia
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cumplimos con todos los lineamientos de MINTIC para garantizar tus derechos como usuario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <a href={item.link}>Ver Detalles</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComplianceInfo;
