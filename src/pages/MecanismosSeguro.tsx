import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, AlertCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const MecanismosSeguro = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="ghost" className="mb-4 text-primary-foreground hover:bg-primary-foreground/20">
              <Home className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Mecanismos Seguros</h1>
          </div>
          <p className="text-lg text-primary-foreground/90 max-w-3xl">
            Información sobre las normativas de seguridad y protección que cumplimos en CLICK-ON
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Introduction */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Compromiso con la Seguridad</CardTitle>
              </div>
              <CardDescription className="text-base">
                En CLICK-ON cumplimos estrictamente con las normativas colombianas de protección y seguridad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Como proveedor de servicios de internet, nos comprometemos a cumplir con todas las leyes y 
                regulaciones establecidas por el gobierno colombiano para garantizar la seguridad de nuestros usuarios, 
                especialmente en la protección de menores de edad y la prevención de contenidos ilegales.
              </p>
            </CardContent>
          </Card>

          {/* Ley 679 de 2001 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Ley 679 de 2001 (Agosto 3)</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">
                Prevención y represión de la explotación, pornografía y turismo sexual con menores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Objetivo de la Ley:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Esta ley establece normas para prevenir y contrarrestar la explotación, pornografía, 
                  turismo sexual y otras formas de abuso sexual con menores de edad, mediante el establecimiento 
                  de normas de carácter preventivo y sancionatorio.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Nuestro Compromiso:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implementamos filtros y mecanismos de control para prevenir el acceso a contenidos relacionados con explotación de menores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Colaboramos activamente con las autoridades en la identificación y reporte de contenidos ilegales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Capacitamos a nuestro personal en la detección y manejo de situaciones relacionadas con esta ley</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Decreto 067 de 2003 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Decreto 067 de 2003 (Enero 15)</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">
                Reglamentación de medidas de protección al menor de edad en Internet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Alcance del Decreto:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Este decreto reglamenta las medidas que deben adoptar los proveedores de servicios de Internet 
                  para proteger a los menores de edad del material pornográfico y de contenido nocivo disponible en Internet.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Medidas Implementadas:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Sistemas de filtrado de contenido para protección de menores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Información clara a los usuarios sobre control parental</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Promoción de campañas de uso responsable de Internet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mecanismos de denuncia de contenidos inapropiados</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Decreto 1524 de 2002 */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Decreto 1524 de 2002 (Julio 24)</CardTitle>
              </div>
              <CardDescription className="text-base font-semibold">
                Obligaciones de los proveedores de servicios de Internet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Propósito del Decreto:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Establece las obligaciones específicas de los proveedores o servidores de Internet, 
                  administradores de sitios web y demás actores involucrados en el servicio de Internet, 
                  en relación con la protección de menores de edad.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Obligaciones Cumplidas:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Registro y conservación de logs de actividad según lo establecido por la ley</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Colaboración inmediata con autoridades en investigaciones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Información visible sobre la prohibición de uso de servicios para actividades ilegales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Procedimientos de denuncia y reporte establecidos</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-foreground">¿Necesitas reportar algo?</h3>
                <p className="text-muted-foreground">
                  Si identificas contenido inapropiado o actividad sospechosa, contáctanos de inmediato
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/pqr">
                    <Button className="w-full sm:w-auto">
                      Presentar Denuncia
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button variant="outline" className="w-full sm:w-auto">
                      Volver al Inicio
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MecanismosSeguro;
