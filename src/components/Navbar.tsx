import { useState } from "react";
import { Menu, X, Wifi, Tv, MapPin, HeadphonesIcon, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Wifi className="w-6 h-6 text-foreground" />
            </div>
            <span className="text-2xl font-bold text-gradient">ConexNet</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("planes")}
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <Wifi className="w-4 h-4" />
              <span>Planes Internet</span>
            </button>
            <button
              onClick={() => scrollToSection("tv")}
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <Tv className="w-4 h-4" />
              <span>TV</span>
            </button>
            <button
              onClick={() => scrollToSection("cobertura")}
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Cobertura</span>
            </button>
            <button
              onClick={() => scrollToSection("soporte")}
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <HeadphonesIcon className="w-4 h-4" />
              <span>Soporte</span>
            </button>
            <Button variant="hero" size="sm" onClick={() => scrollToSection("contacto")}>
              <Phone className="w-4 h-4" />
              Contáctanos
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("planes")}
              className="flex items-center space-x-2 w-full py-2 hover:text-primary transition-colors"
            >
              <Wifi className="w-4 h-4" />
              <span>Planes Internet</span>
            </button>
            <button
              onClick={() => scrollToSection("tv")}
              className="flex items-center space-x-2 w-full py-2 hover:text-primary transition-colors"
            >
              <Tv className="w-4 h-4" />
              <span>TV</span>
            </button>
            <button
              onClick={() => scrollToSection("cobertura")}
              className="flex items-center space-x-2 w-full py-2 hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Cobertura</span>
            </button>
            <button
              onClick={() => scrollToSection("soporte")}
              className="flex items-center space-x-2 w-full py-2 hover:text-primary transition-colors"
            >
              <HeadphonesIcon className="w-4 h-4" />
              <span>Soporte</span>
            </button>
            <Button variant="hero" size="sm" className="w-full" onClick={() => scrollToSection("contacto")}>
              <Phone className="w-4 h-4" />
              Contáctanos
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
