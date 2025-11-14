"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/components/logo";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/noticias", label: "Notícias" },
    { path: "/doacao", label: "Doação" },
    { path: "/contato", label: "Contato" },
    { path: "/apoiadores", label: "Apoiadores" },
  ];

  const visibleLinks = navLinks.slice(0, 5);
  const menuLinks = navLinks.slice(0);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Logo width={40} height={40} className="md:w-[50px] md:h-[50px]" />
            <span className="text-lg md:text-xl font-bold text-foreground">
              Fundação Joanna de Ângelis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/doacao" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary-dark text-white shadow-medium">
                Doar Agora
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-secondary rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Visible Links */}
        <nav className="md:hidden flex gap-1 pb-2 overflow-x-auto -mx-2 px-2">
          {visibleLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors ${
                isActive(link.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background border-b border-border shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/doacao"
                onClick={() => setIsMenuOpen(false)}
                className="block"
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft">
                  Doar Agora
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
