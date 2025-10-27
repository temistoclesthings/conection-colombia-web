import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("¡Mensaje enviado!", {
        description: "Nos pondremos en contacto contigo pronto",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1500);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/573001234567?text=Hola,%20quiero%20información%20sobre%20los%20planes", "_blank");
  };

  return (
    <section id="contacto" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes dudas? Nuestro equipo está listo para ayudarte
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">Línea Nacional</CardTitle>
                <CardDescription className="text-primary font-semibold text-lg">
                  01 8000 123 456
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">WhatsApp</CardTitle>
                <CardDescription>
                  <Button
                    variant="link"
                    onClick={handleWhatsApp}
                    className="text-success font-semibold text-lg p-0 h-auto"
                  >
                    +57 300 123 4567
                  </Button>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-2">
                  <Mail className="w-6 h-6 text-foreground" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription className="text-primary font-semibold">
                  info@click-on.com.co
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 bg-gradient-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita una cotización</CardTitle>
              <CardDescription>
                Completa el formulario y un asesor te contactará en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nombre completo *</label>
                    <Input
                      type="text"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Teléfono *</label>
                    <Input
                      type="tel"
                      placeholder="300 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-input border-border"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-input border-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje (opcional)</label>
                  <Textarea
                    placeholder="Cuéntanos qué plan te interesa o si tienes alguna pregunta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-input border-border min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
