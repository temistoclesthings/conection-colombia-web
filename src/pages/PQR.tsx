import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PQRForm from "@/components/PQRForm";
import PQRConsulta from "@/components/PQRConsulta";

const PQR = () => {
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
                Peticiones, Quejas y Reclamos
              </h1>
              <p className="text-lg text-muted-foreground">
                En CLICK-ON nos importa tu opinión. Aquí puedes presentar tus solicitudes y consultar el estado de las mismas.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <Tabs defaultValue="crear" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="crear">Crear PQR</TabsTrigger>
                <TabsTrigger value="consultar">Consultar PQR</TabsTrigger>
              </TabsList>
              
              <TabsContent value="crear">
                <PQRForm />
              </TabsContent>
              
              <TabsContent value="consultar">
                <PQRConsulta />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Important Info */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">Información Importante</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Tiempos de Respuesta</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Peticiones: 15 días hábiles</li>
                  <li>Quejas y Reclamos: 15 días hábiles</li>
                  <li>Consultas: 10 días hábiles</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2 text-lg">Tus Derechos</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Recibir atención oportuna y respetuosa</li>
                  <li>Obtener respuesta clara y completa a tu solicitud</li>
                  <li>Conocer el estado de tu PQR en cualquier momento</li>
                  <li>Escalar tu caso si no estás satisfecho con la respuesta</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-lg">Canales Adicionales</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Correo: pqr@click-on.com.co</li>
                  <li>Teléfono: 01-8000-123-456</li>
                  <li>Presencial: En nuestras oficinas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PQR;
