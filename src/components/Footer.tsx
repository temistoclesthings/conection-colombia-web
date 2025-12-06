import { Facebook, Instagram, Twitter, Youtube, Wifi } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Wifi className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-2xl font-bold text-gradient">CLICK-ON</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectamos tu mundo con la mejor tecnología de fibra óptica en Colombia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#planes" className="hover:text-primary transition-colors">
                  Planes de Internet
                </a>
              </li>
              <li>
                <a href="#tv" className="hover:text-primary transition-colors">
                  Televisión Digital
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Internet Empresarial
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-primary transition-colors">
                  Cobertura
                </a>
              </li>
            </ul>
          </div>

          {/* Soporte */}
          <div id="soporte">
            <h3 className="font-semibold text-lg mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Reportar Falla
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Estado del Servicio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal (MINTIC) */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/legal?tab=privacidad" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/legal?tab=terminos" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/pqr" className="hover:text-primary transition-colors">
                  PQR - Peticiones y Quejas
                </a>
              </li>
              <li>
                <a href="/legal?tab=derechos" className="hover:text-primary transition-colors">
                  Derechos del Usuario
                </a>
              </li>
              <li>
                <a href="/legal?tab=datos" className="hover:text-primary transition-colors">
                  Tratamiento de Datos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>© 2025 CLICK-ON Colombia. Todos los derechos reservados.</p>
              <p className="mt-1">
                Proveedor registrado ante la CRC - Registro RPTC No. 12345
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span>Vigilado por:</span>
              <span className="font-semibold text-primary">MINTIC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
