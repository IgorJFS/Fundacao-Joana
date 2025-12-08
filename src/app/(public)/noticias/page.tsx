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
    data: "21 de Maio, 2025",
    imagemUrl: "/noticia1.webp",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/conselho-de-direitos-da-crianca-e-do-adolescente-de-rio-das-ostras-da-posse-a-novos-membros/",
  },
  {
    id: 2,
    titulo: "Município dá início à Pré-Conferência de Assistência Social",
    resumo:
      "Começou nesta quarta-feira, dia 14, a Pré-Conferência Municipal de Assistência Social de Rio das Ostras. Com o tema “20 Anos do SUAS: Construção Social e Resistência”, o evento é uma preparação para os debates da Conferência Municipal, que acontece no mês de junho.",
    data: "14 de Maio, 2025",
    imagemUrl: "/noticia3.webp",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/municipio-da-inicio-a-pre-conferencia-de-assistencia-social/",
  },
  {
    id: 3,
    titulo:
      "Portal da Assistência: CMDCA. Conselho Municipal dos Direitos da Criança e do Adolescente",
    resumo:
      "O CMDCA é por sua natureza órgão Normativo, Consultivo, Deliberativo e Controlador da política de promoção, atendimento e de defesa dos direitos da Criança e do Adolescente.",
    data: "30 de Julho, 2022",
    imagemUrl: "/noticia4.webp",
    linkExterno: "https://www.riodasostras.rj.gov.br/cmdca/",
  },
  {
    id: 4,
    titulo:
      "Rio das Ostras empossa Conselheiros Municipais de Assistência Social",
    resumo:
      "Os novos conselheiros do Conselho Municipal de Assistência Social de Rio das Ostras tomaram posse na manhã nesta terça, dia 14, no auditório da sede da Secretaria de Educação, Esporte e Lazer. Titulares e Suplentes assumiram os cargos para as cadeiras de representação governamental e não governamental. Ao todo, foram 20 empossados, que atuarão no biênio 2021/2022.",
    data: "14 de Janeiro, 2020",
    imagemUrl: "/noticia5.webp",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/cmdca-empossa-novos-conselheiros/",
  },
  {
    id: 5,
    titulo:
      "Rio das Ostras realiza Fórum das Entidades e Organizações Não Governamentais",
    resumo:
      "Nesta sexta-feira, dia 28 de março, o Conselho Municipal de Direitos da Criança e do Adolescente (CMDCA) realizou o Fórum Municipal das Entidades e Organizações Não Governamentais que atuam na Política de Atendimento aos Direitos da Criança e do Adolescente, na Câmara Municipal, em Verdes Mares.",
    data: "28 de Março, 2025",
    imagemUrl: "/noticia6.webp",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/rio-das-ostras-realiza-forum-das-entidades-e-organizacoes-nao-governamentais-em-defesa-da-crianca-e-do-adolescente/",
  },
  {
    id: 6,
    titulo: "Rio das Ostras recebe doações de cestas básicas e hortaliças",
    resumo:
      "Famílias de Rio das Ostras em situação de vulnerabilidade social que participam de atividades em instituições socioassistenciais e de projetos e de programas da Assistência Social são contempladas com distribuição de alimentos não perecíveis e de hortaliças.",
    data: "2 de Setembro, 2021",
    imagemUrl: "/noticia2.webp",
    linkExterno:
      "https://www.riodasostras.rj.gov.br/rio-das-ostras-recebe-doacoes-de-cestas-basicas-e-hortalicas/",
  },
];

export default function NoticiasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mt-16 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Notícias
          </h1>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div><br/>
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
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10"></div>
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
