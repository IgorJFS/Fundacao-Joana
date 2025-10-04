import { getColaboradores } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, User } from "lucide-react";

export default async function Colaboradores() {
  const colaboradores = await getColaboradores();

  const pessoasFisicas = colaboradores.filter(
    (c) => c.tipo === "pessoa_fisica"
  );
  const empresas = colaboradores.filter((c) => c.tipo === "empresa");

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos Colaboradores
              </h1>
              <p className="text-lg text-muted-foreground">
                Agradecemos a todos que contribuem mensalmente para manter nosso
                trabalho
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {colaboradores.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Total de Colaboradores
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {pessoasFisicas.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Pessoas Físicas
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {empresas.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Empresas Parceiras
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Empresas Parceiras */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Empresas Parceiras</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {empresas.map((colaborador) => (
                  <Card
                    key={colaborador.id}
                    className="hover:shadow-soft transition-shadow"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2">
                        {colaborador.nome_completo}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Colaborador desde{" "}
                        {new Date(colaborador.data_inicio).toLocaleDateString(
                          "pt-BR",
                          { month: "long", year: "numeric" }
                        )}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pessoas Físicas */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <User className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Pessoas Físicas</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {pessoasFisicas.map((colaborador) => (
                  <Card
                    key={colaborador.id}
                    className="hover:shadow-soft transition-shadow"
                  >
                    <CardContent className="p-4">
                      <p className="font-medium text-sm">
                        {colaborador.nome_completo}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto bg-gradient-hero border-none">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Torne-se um Colaborador
                </h2>
                <p className="text-muted-foreground mb-8">
                  Com sua contribuição mensal, você nos ajuda a manter nossos
                  projetos e expandir nosso alcance. Juntos, podemos fazer ainda
                  mais!
                </p>
                <a
                  href="/doacao"
                  className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition-colors shadow-medium"
                >
                  Quero Colaborar Mensalmente
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
