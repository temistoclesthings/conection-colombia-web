import { Link } from "react-router-dom";
import { Home, Shield, FileText, Users, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                Información Legal
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Conoce nuestras políticas, términos y tus derechos como usuario de CLICK-ON.
              </p>
            </div>
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <Home className="w-4 h-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="privacidad" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            <TabsTrigger value="privacidad" className="gap-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Privacidad</span>
            </TabsTrigger>
            <TabsTrigger value="terminos" className="gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Términos</span>
            </TabsTrigger>
            <TabsTrigger value="derechos" className="gap-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Derechos</span>
            </TabsTrigger>
            <TabsTrigger value="datos" className="gap-2">
              <Database className="w-4 h-4" />
              <span className="hidden sm:inline">Datos</span>
            </TabsTrigger>
          </TabsList>

          {/* Política de Privacidad */}
          <TabsContent value="privacidad">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Shield className="w-6 h-6 text-primary" />
                  Política de Privacidad
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">1. Introducción</h3>
                  <p>
                    CLICK-ON S.A.S. (en adelante "CLICK-ON") se compromete a proteger la privacidad de sus usuarios. 
                    Esta política describe cómo recopilamos, utilizamos y protegemos su información personal en 
                    cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">2. Información que Recopilamos</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Datos de identificación: nombre completo, número de documento, dirección</li>
                    <li>Datos de contacto: teléfono, correo electrónico</li>
                    <li>Datos de facturación y pago</li>
                    <li>Información técnica del servicio contratado</li>
                    <li>Registros de navegación y uso del servicio</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">3. Uso de la Información</h3>
                  <p>Utilizamos su información para:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Prestación del servicio de telecomunicaciones contratado</li>
                    <li>Facturación y cobro de servicios</li>
                    <li>Atención de peticiones, quejas y reclamos</li>
                    <li>Mejora continua de nuestros servicios</li>
                    <li>Cumplimiento de obligaciones legales y regulatorias</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">4. Protección de Datos</h3>
                  <p>
                    Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger 
                    su información contra acceso no autorizado, pérdida o alteración. Nuestros sistemas 
                    cumplen con los estándares de seguridad de la industria.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">5. Derechos del Titular</h3>
                  <p>
                    Como titular de los datos, usted tiene derecho a conocer, actualizar, rectificar y 
                    suprimir su información personal, así como a revocar la autorización otorgada para 
                    el tratamiento de sus datos.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">6. Contacto</h3>
                  <p>
                    Para ejercer sus derechos o realizar consultas sobre nuestra política de privacidad, 
                    puede contactarnos a través de nuestros canales de atención al cliente o presentando 
                    una PQR en nuestra página web.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Términos y Condiciones */}
          <TabsContent value="terminos">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <FileText className="w-6 h-6 text-primary" />
                  Términos y Condiciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">1. Objeto del Contrato</h3>
                  <p>
                    Los presentes términos y condiciones regulan la relación contractual entre CLICK-ON 
                    y el usuario para la prestación del servicio de acceso a internet y/o televisión 
                    por suscripción, según el plan contratado.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">2. Obligaciones del Proveedor</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prestar el servicio de manera continua y eficiente</li>
                    <li>Garantizar las velocidades mínimas establecidas en el contrato</li>
                    <li>Atender oportunamente las PQR presentadas por los usuarios</li>
                    <li>Informar sobre cambios en tarifas o condiciones del servicio</li>
                    <li>Respetar los derechos del consumidor establecidos en la ley</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">3. Obligaciones del Usuario</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pagar oportunamente el valor del servicio contratado</li>
                    <li>Usar el servicio de manera legal y ética</li>
                    <li>No redistribuir el servicio a terceros sin autorización</li>
                    <li>Mantener actualizados sus datos de contacto</li>
                    <li>Permitir el acceso para instalación y mantenimiento</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">4. Facturación y Pagos</h3>
                  <p>
                    La facturación es mensual y anticipada. El usuario debe pagar dentro de los primeros 
                    10 días del periodo facturado. El no pago oportuno puede generar la suspensión del 
                    servicio e intereses de mora conforme a la ley.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">5. Suspensión y Terminación</h3>
                  <p>
                    CLICK-ON puede suspender el servicio por mora en el pago superior a 30 días o por 
                    uso indebido del servicio. El usuario puede solicitar la terminación del contrato 
                    en cualquier momento, cumpliendo con el periodo mínimo de permanencia si aplica.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">6. Limitación de Responsabilidad</h3>
                  <p>
                    CLICK-ON no será responsable por interrupciones del servicio causadas por fuerza 
                    mayor, caso fortuito, o situaciones fuera de su control. En caso de fallas atribuibles 
                    a CLICK-ON, se realizará la compensación correspondiente según la regulación vigente.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Derechos del Usuario */}
          <TabsContent value="derechos">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Users className="w-6 h-6 text-primary" />
                  Derechos de los Usuarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Marco Legal</h3>
                  <p>
                    De conformidad con la Ley 1341 de 2009, la Resolución CRC 5111 de 2017 y demás 
                    normas aplicables, los usuarios de servicios de telecomunicaciones tienen los 
                    siguientes derechos:
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Derechos Fundamentales</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Derecho a la información:</strong> Recibir información clara, veraz y oportuna sobre los servicios, tarifas y condiciones</li>
                    <li><strong>Libre elección:</strong> Elegir libremente el proveedor y plan de su preferencia</li>
                    <li><strong>Calidad del servicio:</strong> Recibir el servicio en las condiciones de calidad ofrecidas</li>
                    <li><strong>Protección de datos:</strong> Que sus datos personales sean tratados de manera confidencial</li>
                    <li><strong>Atención oportuna:</strong> Recibir respuesta a sus PQR en los tiempos establecidos por la ley</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Derechos en la Prestación del Servicio</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Conocer las velocidades mínimas garantizadas de su plan</li>
                    <li>Solicitar medición de la calidad del servicio</li>
                    <li>Recibir compensación por interrupciones del servicio</li>
                    <li>No ser objeto de prácticas de degradación intencional del servicio</li>
                    <li>Mantener su número telefónico al cambiar de proveedor (portabilidad)</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Derechos en Facturación</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Recibir facturación clara y detallada</li>
                    <li>No pagar por servicios no contratados o no prestados</li>
                    <li>Reclamar cobros indebidos y recibir devolución si procede</li>
                    <li>Conocer con anticipación cambios en tarifas</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Derecho a Presentar PQR</h3>
                  <p>
                    Todo usuario tiene derecho a presentar Peticiones, Quejas y Reclamos ante CLICK-ON 
                    y a recibir respuesta en los siguientes tiempos:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Peticiones:</strong> 15 días hábiles</li>
                    <li><strong>Quejas y Reclamos:</strong> 15 días hábiles</li>
                    <li><strong>Recursos de reposición:</strong> 5 días hábiles</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Entidades de Vigilancia</h3>
                  <p>
                    Si considera que sus derechos han sido vulnerados, puede acudir a:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Superintendencia de Industria y Comercio (SIC)</li>
                    <li>Comisión de Regulación de Comunicaciones (CRC)</li>
                    <li>Ministerio de Tecnologías de la Información (MINTIC)</li>
                  </ul>
                </section>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tratamiento de Datos */}
          <TabsContent value="datos">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Database className="w-6 h-6 text-primary" />
                  Tratamiento de Datos Personales
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Responsable del Tratamiento</h3>
                  <p>
                    <strong>CLICK-ON S.A.S.</strong><br />
                    NIT: 900.XXX.XXX-X<br />
                    Dirección: [Dirección de la empresa]<br />
                    Teléfono: [Teléfono de contacto]<br />
                    Correo: datos@click-on.com.co
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Finalidades del Tratamiento</h3>
                  <p>CLICK-ON tratará sus datos personales para las siguientes finalidades:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Ejecutar la relación contractual de prestación del servicio</li>
                    <li>Gestionar el proceso de facturación y cobro</li>
                    <li>Atender solicitudes, peticiones, quejas y reclamos</li>
                    <li>Cumplir con obligaciones legales y regulatorias</li>
                    <li>Enviar información comercial (solo con autorización expresa)</li>
                    <li>Realizar estudios de mercado y satisfacción del cliente</li>
                    <li>Prevenir fraudes y garantizar la seguridad de la red</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Derechos como Titular</h3>
                  <p>De acuerdo con la Ley 1581 de 2012, usted tiene derecho a:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Conocer:</strong> Acceder a los datos personales que tenemos sobre usted</li>
                    <li><strong>Actualizar:</strong> Solicitar la corrección de datos incompletos o inexactos</li>
                    <li><strong>Rectificar:</strong> Modificar información que resulte incorrecta</li>
                    <li><strong>Suprimir:</strong> Solicitar la eliminación de sus datos cuando no exista obligación legal de conservarlos</li>
                    <li><strong>Revocar:</strong> Retirar la autorización para el tratamiento de sus datos</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Transferencia de Datos</h3>
                  <p>
                    CLICK-ON podrá transferir o transmitir datos personales a terceros únicamente para:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Cumplir obligaciones contractuales con proveedores de servicios</li>
                    <li>Atender requerimientos de autoridades competentes</li>
                    <li>Gestionar cobranzas a través de terceros autorizados</li>
                  </ul>
                  <p className="mt-2">
                    En todos los casos, garantizamos que los terceros cumplan con los estándares 
                    de protección de datos establecidos en la ley colombiana.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Vigencia de los Datos</h3>
                  <p>
                    Los datos personales serán conservados durante la vigencia de la relación 
                    contractual y por el tiempo adicional requerido para cumplir con obligaciones 
                    legales, contables y fiscales, después de lo cual serán eliminados de nuestras 
                    bases de datos.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Procedimiento para Ejercer sus Derechos</h3>
                  <p>
                    Para ejercer cualquiera de sus derechos, puede:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Enviar un correo a datos@click-on.com.co</li>
                    <li>Presentar una PQR a través de nuestra página web</li>
                    <li>Comunicarse a nuestra línea de atención al cliente</li>
                    <li>Acudir personalmente a nuestras oficinas</li>
                  </ul>
                  <p className="mt-2">
                    La respuesta a su solicitud será enviada en un plazo máximo de 10 días hábiles 
                    contados a partir de la recepción de la misma.
                  </p>
                </section>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Back Link */}
        <div className="mt-12 text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              <Home className="w-5 h-5" />
              Volver al Inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Legal;
