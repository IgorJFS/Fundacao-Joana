"use client";
import Link from "next/link";
import { ExternalLink, Calendar } from "lucide-react";
import Image from "next/image";

// Mock de notícias - você pode substituir pelos dados reais depois
const noticias = [
  {
    id: 1,
    titulo:
      "Conselho de Direitos da Criança e do Adolescente dá posse a novos membros",
    resumo:
      "O Conselho Municipal dos Direitos da Criança e do Adolescente (CMDCA) de Rio das Ostras deu posse e elegeu a presidência na tarde desta terça-feira, dia 20. A reunião foi realizada na sede da Secretaria Municipal de Assistência Social e os novos membros vão atuar no biênio 2025/2026.",
    data: "15 de Dezembro, 2024",
    imagemUrl: "/noticia1.jpg",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/conselho-de-direitos-da-crianca-e-do-adolescente-de-rio-das-ostras-da-posse-a-novos-membros/",
  },
  {
    id: 2,
    titulo: "Parceria com universidade traz novos voluntários",
    resumo:
      "Acordo firmado com universidade local amplia o time de voluntários da fundação e traz novas perspectivas.",
    data: "1 de Dezembro, 2024",
    imagemUrl: "/noticia3.jpeg",
    linkExterno: "https://exemplo.com/noticia-3",
  },
  {
    id: 3,
    titulo: "Parceria com universidade traz novos voluntários",
    resumo:
      "Acordo firmado com universidade local amplia o time de voluntários da fundação e traz novas perspectivas.",
    data: "1 de Dezembro, 2024",
    imagemUrl: "/noticia4.jpeg",
    linkExterno: "https://exemplo.com/noticia-4",
  },
  {
    id: 4,
    titulo: "Parceria com universidade traz novos voluntários",
    resumo:
      "Acordo firmado com universidade local amplia o time de voluntários da fundação e traz novas perspectivas.",
    data: "1 de Dezembro, 2024",
    imagemUrl: "/noticia5.jpg",
    linkExterno: "https://exemplo.com/noticia-3",
  },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Notícias
          </h1>
          <p className="text-lg text-muted-foreground">
            Acompanhe as últimas novidades e conquistas da Fundação Joanna de
            Ângelis
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {noticias.map((noticia) => (
            <Link
              key={noticia.id}
              href={noticia.linkExterno}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="relative w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={noticia.imagemUrl}
                    alt={noticia.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback se imagem não existir
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  {/* Fallback visual */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
                    <ExternalLink className="w-12 h-12 text-muted-foreground/30" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{noticia.data}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {noticia.titulo}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                  {noticia.resumo}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Ler mais</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center border border-border">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quer saber mais sobre nosso trabalho?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Acompanhe nossas redes sociais ou entre em contato para conhecer
            mais sobre as ações da Fundação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/nossahistoria"
              className="px-6 py-3 bg-background border border-border rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Conheça Nossa História
            </Link>
            <Link
              href="/doacao"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Fazer uma Doação
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
