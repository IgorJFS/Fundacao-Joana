import Image from "next/image";
import { getVoluntarios } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";

export default async function Voluntarios() {
  const voluntarios = await getVoluntarios();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossos Voluntários
              </h1>
              <p className="text-lg text-muted-foreground">
                Conheça as pessoas incríveis que dedicam seu tempo e talento
                para transformar vidas
              </p>
            </div>
          </div>
        </section>

        {/* Voluntários Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {voluntarios.map((voluntario) => (
                <Card
                  key={voluntario.id}
                  className="overflow-hidden hover:shadow-medium transition-shadow"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={voluntario.foto_url}
                      alt={voluntario.nome_completo}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">
                      {voluntario.nome_completo}
                    </h3>
                    <p className="text-primary font-medium mb-3">
                      {voluntario.funcao}
                    </p>
                    {voluntario.descricao && (
                      <p className="text-sm text-muted-foreground">
                        {voluntario.descricao}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Seja um Voluntário</h2>
              <p className="text-muted-foreground mb-8">
                Quer fazer parte desta equipe? Entre em contato conosco e
                descubra como você pode contribuir!
              </p>
              <a
                href="mailto:contato@fundacaojoanna.org.br"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary-dark transition-colors"
              >
                Quero ser Voluntário
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
