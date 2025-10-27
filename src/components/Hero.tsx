import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-fiber.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fibra óptica de alta velocidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-success/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Fibra Óptica de Última Generación</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Conectamos tu mundo con{" "}
            <span className="text-gradient glow-primary">velocidad</span> y{" "}
            <span className="text-gradient glow-primary">confiabilidad</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Internet ultrarrápido y televisión de alta definición. 
            Experimenta la mejor conectividad en Colombia.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("planes")}
              className="group"
            >
              Ver Planes
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("cobertura")}
            >
              Verificar Cobertura
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Mbps de velocidad</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte técnico</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-success">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-accent">50K+</div>
              <div className="text-sm text-muted-foreground">Clientes felices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
