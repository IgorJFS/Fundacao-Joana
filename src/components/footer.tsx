import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-accent-foreground  border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo width={50} height={50} />
              <span className="text-lg font-bold">Fundação Joanna</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A Fundação Joanna de Ângelis, é uma entidade de Direito Privado,
              sem fins lucrativos.
            </p>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
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
                  href="/apoiadores"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Nossos Apoiadores
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

          {/* Email Subscription */}
          <div>
            <h3 className="font-semibold mb-4">Receba novidades</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fique por dentro das nossas campanhas
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                required
                className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Cadastrar
              </button>
            </form>
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
