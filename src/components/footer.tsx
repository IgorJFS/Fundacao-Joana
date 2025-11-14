"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Building,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";
import { toast } from "sonner";
import { z } from "zod";

const emailSchema = z.string().email("Email inválido");

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validar email
      emailSchema.parse(email);

      // Enviar para o Formspree
      const response = await fetch("https://formspree.io/f/movyqwqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "Nova inscrição na Newsletter - Fundação Joanna",
        }),
      });

      if (response.ok) {
        toast.success(
          "Email cadastrado com sucesso! Obrigado por se inscrever! 💙"
        );
        setEmail("");
      } else {
        toast.error("Erro ao cadastrar email. Tente novamente.");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error("Por favor, insira um email válido.");
      } else {
        toast.error("Erro ao cadastrar email. Tente novamente.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="bg-accent-foreground  border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo width={50} height={50} />
              <span className="text-lg font-bold">
                Fundação Joanna de Ângelis
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              A Fundação Joanna de Ângelis, é uma entidade de Direito Privado,
              sem fins lucrativos.
            </p>
            <h4 className="text-muted-foreground text-sm mb-2 font-semibold">
              Siga-nos nas redes sociais
            </h4>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com/fundja"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#1877F2] text-white hover:bg-[#1460c7] rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/fundacaojoanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white hover:opacity-80 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@fundjoannadeangelis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#FF0000] text-white hover:bg-[#cc0000] rounded-full transition-all duration-300"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
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
                  href="/noticias"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
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
                <span>funjodangelis@yahoo.com.br</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>(22) 99938-2357</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Rio das Ostras, RJ - Brasil</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Building className="h-4 w-4 mt-0.5 text-primary" />
                <span>CNPJ: 06.261.897/0001-93</span>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Horário de Funcionamento
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex justify-between">
                <span className="font-medium">2ª Feira:</span>
                <span className="text-right">8:30-12:00 / 13:00-17:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">3ª Feira:</span>
                <span>8:00-16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">4ª Feira:</span>
                <span>8:30-12:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">5ª Feira:</span>
                <span>14:00-18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">6ª Feira:</span>
                <span>8:30-12:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sábado:</span>
                <span>8:00-15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Domingo:</span>
                <span>17:00-20:00</span>
              </li>
            </ul>
          </div>

          {/* Email Subscription */}
          <div>
            <h3 className="font-semibold mb-4">Receba novidades</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fique por dentro das nossas campanhas
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 px-3 py-2 bg-background border border-border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary-dark transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
              >
                {isSubmitting ? "Enviando..." : "Cadastrar"}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Fundação Joanna de Ângelis. Todos os direitos
              reservados.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/politica-privacidade"
                className="hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <span className="hidden md:inline">•</span>
              <Link
                href="/termos-uso"
                className="hover:text-primary transition-colors"
              >
                Termos de Uso
              </Link>
              {/* <span className="hidden md:inline">•</span>
              <Link
                href="/transparencia"
                className="hover:text-primary transition-colors"
              >
                Transparência
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
