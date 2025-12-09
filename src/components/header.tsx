"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ChevronRight } from "lucide-react";
import Logo from "@/components/logo";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para mudar estilo do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/noticias", label: "Notícias" },
    { path: "/doacao", label: "Doação" },
    { path: "/contato", label: "Contato" },
    { path: "/apoiadores", label: "Apoiadores" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-white/20 backdrop-blur-lg shadow-md" 
          : "bg-white/30 backdrop-blur-lg shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Logo width={50} height={50} className="md:w-[65px] md:h-[55px]" />
            <span className="text-base md:text-lg font-bold text-slate-800">
              Fundação Joanna de Ângelis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 group ${
                  isActive(link.path)
                    ? "bg-sky-500 text-white"
                    : "text-slate-900 "
                }`}
              >
                {link.label}
                {!isActive(link.path) && (
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)] group-hover:left-3"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link href="/doacao" className="hidden md:block">
              <Button className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all rounded-full px-6 font-bold">
                <Heart className="w-4 h-4 mr-2" />
                Doar Agora
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-slate-700" />
              ) : (
                <Menu size={24} className="text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden absolute left-0 right-0 top-16 bg-white border-b border-slate-200 shadow-lg z-50 animate-in slide-in-from-top-2 duration-200">
            <nav className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive(link.path)
                        ? "bg-sky-500 text-white"
                        : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    }`}
                  >
                    {link.label}
                    <ChevronRight className={`w-4 h-4 ${isActive(link.path) ? "text-white" : "text-slate-400"}`} />
                  </Link>
                ))}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <Link
                  href="/doacao"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-white shadow-lg shadow-teal-500/30 rounded-lg py-6 text-base font-bold">
                    <Heart className="w-5 h-5 mr-2" />
                    Fazer uma Doação
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
