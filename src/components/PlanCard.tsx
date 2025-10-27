import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PlanCardProps {
  name: string;
  speed: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

const PlanCard = ({ name, speed, price, features, highlighted = false }: PlanCardProps) => {
  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow ${
        highlighted ? "border-2 border-primary shadow-glow" : "bg-gradient-card"
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-1 text-sm font-semibold">
          Más Popular
        </div>
      )}
      
      <CardHeader className="space-y-4 pb-8">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-gradient">{speed}</span>
            <span className="text-muted-foreground">Mbps</span>
          </div>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-foreground">${price}</span>
            <span className="text-muted-foreground">/mes</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">* Precio promocional primer año</p>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          variant={highlighted ? "hero" : "default"}
          className="w-full"
        >
          Contratar Ahora
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
