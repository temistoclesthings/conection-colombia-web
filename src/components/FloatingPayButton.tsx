import { CreditCard } from "lucide-react";

const FloatingPayButton = () => {
  return (
    <a
      href="https://co-clickon.pagoralia.cloud/wisphub"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center gap-3 bg-gradient-hero text-foreground font-bold px-5 py-3 rounded-full shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-slow">
        <CreditCard className="w-6 h-6" />
        <span className="text-sm md:text-base">¡Paga tu factura aquí!</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full" />
      </div>
    </a>
  );
};

export default FloatingPayButton;
