import { ArrowLeft, FileText, Send, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PQR = () => {
  const steps = [
    {
      title: "1. Identifícate",
      description: "Proporciona tu nombre completo, documento de identidad, dirección y datos de contacto.",
      icon: FileText,
    },
    {
      title: "2. Describe tu solicitud",
      description: "Explica claramente tu petición, queja o reclamo. Incluye toda la información relevante y adjunta documentos si es necesario.",
      icon: Send,
    },
    {
      title: "3. Envía tu PQR",
      description: "Puedes presentar tu PQR de forma presencial, por correo electrónico, teléfono o a través de nuestra página web.",
      icon: Clock,
    },
    {
      title: "4. Recibe respuesta",
      description: "Recibirás una respuesta dentro de los términos legales establecidos: 15 días hábiles para peticiones y 15 días hábiles para quejas y reclamos.",
      icon: CheckCircle,
    },
  ];

  const channels = [
    {
      title: "Presencial",
      description: "Visita nuestras oficinas en horario de atención al cliente",
    },
    {
      title: "Correo Electrónico",
      description: "pqr@click-on.com.co",
    },
    {
      title: "Teléfono",
      description: "Línea de atención: 01-8000-123-456",
    },
    {
      title: "Página Web",
      description: "A través del formulario de contacto en nuestra sección de contacto",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                Procedimientos para presentar una PQR
              </h1>
              <p className="text-lg text-muted-foreground">
                En CLICK-ON nos importa tu opinión y estamos comprometidos con brindarte el mejor servicio. 
                Aquí te explicamos cómo presentar tus Peticiones, Quejas y Reclamos de manera fácil y efectiva.
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Pasos para presentar tu PQR
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Canales de Atención
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {channels.map((channel, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{channel.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {channel.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Important Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Información Importante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Tiempos de Respuesta</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Peticiones: 15 días hábiles</li>
                    <li>Quejas y Reclamos: 15 días hábiles</li>
                    <li>Consultas: 10 días hábiles</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Tus Derechos</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Recibir atención oportuna y respetuosa</li>
                    <li>Obtener respuesta clara y completa a tu solicitud</li>
                    <li>Conocer el estado de tu PQR en cualquier momento</li>
                    <li>Escalar tu caso si no estás satisfecho con la respuesta</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PQR;
