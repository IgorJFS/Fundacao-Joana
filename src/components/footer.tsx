import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo width={50} height={50} />
              <span className="text-lg font-bold">Fundação Joanna</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transformando vidas através da solidariedade e do amor ao próximo
              desde 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/nossahistoria"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nossa História
                </Link>
              </li>
              <li>
                <Link
                  href="/doacao"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Fazer Doação
                </Link>
              </li>
              <li>
                <Link
                  href="/voluntarios"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Seja Voluntário
                </Link>
              </li>
              <li>
                <Link
                  href="/colaboradores"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nossos Colaboradores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>contato@fundacaojoanna.org.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>(11) 1234-5678</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Fundação Joanna. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
