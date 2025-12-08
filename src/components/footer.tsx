"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Building,
  Heart,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  const quickLinks = [
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/doacao", label: "Fazer Doação" },
    { href: "/noticias", label: "Notícias" },
    { href: "/contato", label: "Contato" },
    { href: "/apoiadores", label: "Apoiadores" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 py-10">
        {/* Main Grid - 5 colunas no desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Fundação - coluna maior */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <Logo width={50} height={50}  />
              <h3 className="text-lg font-bold text-white">
                Fundação Joanna de Ângelis
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Entidade sem fins lucrativos dedicada à assistência social, 
              educação e cidadania em Rio das Ostras.
            </p>
            {/* Redes Sociais inline */}
            <div className="flex items-center gap-2">
              <Link
                href="https://www.facebook.com/fundja"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#1877F2] hover:bg-[#4293f5] text-white rounded-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.instagram.com/fundacaojoanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:opacity-80 text-white rounded-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://www.youtube.com/@fundjoannadeangelis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-[#FF0000] hover:bg-[#ff3333] text-white rounded-lg transition-all"
                aria-label="Youtube"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Contato
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />
                <a href="mailto:funjodangelis@yahoo.com.br" className="hover:text-sky-400 transition-colors">
                  funjodangelis@yahoo.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />
                <span>(22) 99938-2357</span>
              </li>
              <li className="flex items-start gap-2">
                <Building className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />
                <span>CNPJ: 06.261.897/0001-93</span>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">
              Endereço
            </h4>
            <div className="flex items-start gap-2 text-sm text-slate-400 mb-3">
              <MapPin className="w-4 h-4 mt-0.5 text-sky-500 shrink-0" />
              <div>
                <p>R. Vassouras, Lote 20</p>
                <p>Jardim Mariléa</p>
                <p>Rio das Ostras - RJ</p>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-500" />
              <span>© {new Date().getFullYear()} Fundação Joanna de Ângelis</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/politica-privacidade" className="hover:text-sky-400 transition-colors">
                Privacidade
              </Link>
              <Link href="/termos-uso" className="hover:text-sky-400 transition-colors">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
