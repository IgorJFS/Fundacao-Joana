import { getColaboradores } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default async function Apoiadores() {
  const apoiadores = await getColaboradores();

  // Ordenar alfabeticamente
  const apoiadoresOrdenados = [...apoiadores].sort((a, b) =>
    a.nome_completo.localeCompare(b.nome_completo)
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Nossos Apoiadores
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Agradecemos de coração a cada pessoa e empresa que acredita e
                contribui mensalmente com nosso trabalho
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-soft">
                <span className="text-3xl font-bold text-primary">
                  {apoiadores.length}
                </span>
                <span className="text-muted-foreground font-medium">
                  apoiadores comprometidos
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Lista de Apoiadores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="border-2 shadow-medium">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apoiadoresOrdenados.map((apoiador, index) => (
                      <div key={apoiador.id} className="group relative">
                        <div className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-all duration-200 hover:scale-105">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-white font-bold shadow-soft">
                            {apoiador.nome_completo.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {apoiador.nome_completo}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Desde{" "}
                              {new Date(
                                apoiador.data_inicio
                              ).toLocaleDateString("pt-BR", {
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Mensagem de Agradecimento */}
              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-br from-primary/5 to-cyan-500/5 border-primary/20">
                  <CardContent className="p-8">
                    <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-3">
                      Muito Obrigado! ❤️
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                      Cada contribuição mensal nos permite continuar
                      transformando vidas e levando esperança para quem mais
                      precisa. Vocês são essenciais para nossa missão!
                    </p>
                    <a
                      href="/doacao"
                      className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition-colors shadow-medium"
                    >
                      Quero Apoiar a Fundação
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
