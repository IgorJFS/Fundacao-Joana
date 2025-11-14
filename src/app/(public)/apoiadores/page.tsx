import { getDoadoresEternizados } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { ApoiadoresList } from "@/components/apoiadores-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossos Apoiadores",
  description: "Conheça as pessoas e empresas que apoiam a Fundação Joanna de Ângelis e contribuem para transformar vidas em Rio das Ostras. Mais de 120 apoiadores que fazem a diferença.",
  keywords: ['apoiadores', 'doadores', 'parceiros', 'contribuintes', 'solidariedade'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/apoiadores',
  },
  openGraph: {
    title: "Nossos Apoiadores - Fundação Joanna de Ângelis",
    description: "Mais de 120 pessoas e empresas que ajudam a transformar vidas",
    type: "website",
  },
};

export default async function Apoiadores() {
  // Busca apenas doadores que optaram por eternizar o nome
  const apoiadores = await getDoadoresEternizados();

  // Ordenar alfabeticamente
  const apoiadoresOrdenados = [...apoiadores].sort((a, b) =>
    a.nome_completo.localeCompare(b.nome_completo)
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1">
        {/* Hero Section */}
        <section className=" py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos Apoiadores
              </h1>
              <div className="w-40 h-1 bg-gradient-hero mx-auto rounded-full"></div><br/>
              <p className="text-xl text-muted-foreground mb-8">
                Agradecemos de coração a cada pessoa e empresa que acredita e
                contribui com nosso trabalho
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-3xl font-bold text-primary">
                  {apoiadores.length}
                </span>
                <span className="text-muted-foreground font-medium">
                  pessoas que ajudaram vidas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de Apoiadores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ApoiadoresList apoiadores={apoiadoresOrdenados} />

              {/* Mensagem de Agradecimento */}
              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardContent className="p-8">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      Muito Obrigado! 💖
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                      Cada contribuição nos permite continuar transformando
                      vidas e levando esperança para quem mais precisa. Vocês
                      são essenciais para nossa missão!
                    </p>
                    <a
                      href="/doacao"
                      className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition-colors shadow-medium"
                    >
                      Quero Fazer uma Doação
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
