import PlanCard from "./PlanCard";

const InternetPlans = () => {
  const plans = [
    {
      name: "Plan Básico",
      speed: "100",
      price: "49.900",
      features: [
        "Ideal para navegar y redes sociales",
        "Hasta 3 dispositivos conectados",
        "Instalación gratuita",
        "Router WiFi incluido",
        "Soporte técnico 24/7",
      ],
    },
    {
      name: "Plan Pro",
      speed: "300",
      price: "79.900",
      features: [
        "Perfecto para streaming en HD",
        "Hasta 8 dispositivos conectados",
        "Instalación gratuita",
        "Router WiFi de alta velocidad",
        "Soporte técnico prioritario 24/7",
        "1 mes gratis al contratar",
      ],
      highlighted: true,
    },
    {
      name: "Plan Ultra",
      speed: "600",
      price: "119.900",
      features: [
        "Gaming y streaming en 4K sin límites",
        "Dispositivos ilimitados",
        "Instalación express gratuita",
        "Router WiFi 6 de última generación",
        "Soporte técnico VIP 24/7",
        "IP pública estática incluida",
        "2 meses gratis al contratar",
      ],
    },
    {
      name: "Plan Gamer",
      speed: "1000",
      price: "159.900",
      features: [
        "Máxima velocidad para gaming competitivo",
        "Latencia ultra baja optimizada",
        "Dispositivos ilimitados",
        "Instalación premium gratuita",
        "Router Gaming WiFi 6E",
        "Soporte técnico Gaming VIP 24/7",
        "IP pública estática",
        "Prioridad en tráfico de gaming",
        "3 meses gratis al contratar",
      ],
    },
  ];

  return (
    <section id="planes" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Planes de <span className="text-gradient">Internet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu hogar o negocio. Velocidad simétrica garantizada con fibra óptica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PlanCard {...plan} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            * Todos los planes incluyen instalación gratuita. Consulta términos y condiciones.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternetPlans;
