import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tv, Film, Trophy, Music } from "lucide-react";

const TVPackages = () => {
  const packages = [
    {
      name: "TV Básica",
      channels: "80+",
      price: "29.900",
      icon: Tv,
      features: [
        "Canales nacionales en HD",
        "Entretenimiento familiar",
        "Noticias y deportes básicos",
        "Deco HD incluido",
      ],
    },
    {
      name: "TV Premium",
      channels: "150+",
      price: "59.900",
      icon: Film,
      features: [
        "Todos los canales básicos",
        "Películas y series HBO, Fox Premium",
        "Deportes en vivo ESPN, Fox Sports",
        "Deco HD con grabación",
      ],
    },
    {
      name: "TV Sports",
      channels: "100+",
      price: "69.900",
      icon: Trophy,
      features: [
        "Todos los eventos deportivos",
        "Win Sports, ESPN Pack completo",
        "FOX Sports, DIRECTV Sports",
        "Repeticiones y highlights",
      ],
    },
    {
      name: "TV Total",
      channels: "200+",
      price: "89.900",
      icon: Music,
      features: [
        "Todos los paquetes incluidos",
        "Canales internacionales",
        "Música, documentales, infantil",
        "Netflix incluido 6 meses",
      ],
    },
  ];

  return (
    <section id="tv" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Televisión <span className="text-gradient">Digital</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Disfruta de la mejor programación en alta definición. Miles de horas de entretenimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <Card
                key={pkg.name}
                className="bg-gradient-card hover:scale-105 transition-all duration-300 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-gradient">{pkg.channels}</span>
                    <span className="text-muted-foreground"> canales</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground">${pkg.price}</div>
                    <div className="text-sm text-muted-foreground">/mes</div>
                  </div>

                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="default" className="w-full">
                    Agregar al Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center space-y-4 p-8 bg-gradient-card rounded-2xl border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold">¿Quieres Internet + TV?</h3>
          <p className="text-muted-foreground">
            Contrata un combo y ahorra hasta un <span className="text-accent font-bold">30%</span> en tu factura mensual
          </p>
          <Button variant="hero" size="lg">
            Ver Combos Disponibles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TVPackages;
