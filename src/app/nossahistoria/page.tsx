import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handsImage from "@/assets/hands-together.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import Image from "next/image";

export default function NossaHistoria() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Nossa História
              </h1>
              <p className="text-lg text-muted-foreground">
                Uma jornada de amor, solidariedade e transformação social
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden mb-8">
                <Image
                  src={handsImage}
                  alt="Unidos pela solidariedade"
                  className="w-full h-64 object-cover"
                />
              </Card>

              <div className="prose prose-lg max-w-none space-y-6 text-foreground">
                <h2 className="text-3xl font-bold mb-4">Como Tudo Começou</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Em 2010, um grupo de voluntários dedicados se reuniu com um
                  sonho comum: fazer a diferença na vida de pessoas em situação
                  de vulnerabilidade social. O que começou como pequenas ações
                  em uma comunidade local rapidamente cresceu e se transformou
                  em um movimento de solidariedade que impacta milhares de
                  vidas.
                </p>

                <Card className="bg-secondary border-none my-8">
                  <CardContent className="p-6">
                    <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                      Acreditamos que a verdadeira mudança começa quando
                      estendemos a mão para ajudar o próximo. Cada gesto de
                      solidariedade cria ondas de transformação que alcançam
                      toda a sociedade.
                    </blockquote>
                    <p className="mt-4 text-sm text-muted-foreground">
                      — Fundadores da (Nome da ONG)
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-3xl font-bold mb-4 mt-12">Nossa Missão</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos incansavelmente para promover dignidade, educação,
                  saúde e oportunidades para famílias e crianças em situação de
                  vulnerabilidade. Através de programas educacionais,
                  distribuição de alimentos, atendimento médico gratuito e apoio
                  psicológico, construímos pontes para um futuro melhor.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <Card className="overflow-hidden">
                    <Image
                      src={volunteersImage}
                      alt="Voluntários em ação"
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-xl mb-2">
                        Educação Transformadora
                      </h3>
                      <p className="text-muted-foreground">
                        Oferecemos reforço escolar, material didático e bolsas
                        de estudo para crianças e jovens carentes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h3 className="font-semibold text-xl mb-2">
                        Alimentação para Todos
                      </h3>
                      <p className="text-muted-foreground">
                        Distribuímos cestas básicas e refeições diárias para
                        famílias em situação de insegurança alimentar.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-3xl font-bold mb-4 mt-12">
                  Nossos Valores
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">
                        Solidariedade:
                      </strong>{" "}
                      Acreditamos no poder da união e da empatia
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">
                        Transparência:
                      </strong>{" "}
                      Prestamos contas de cada doação recebida
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Respeito:</strong>{" "}
                      Tratamos todos com dignidade e compaixão
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>
                      <strong className="text-foreground">Compromisso:</strong>{" "}
                      Dedicamos nosso melhor para causar impacto real
                    </span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold mb-4 mt-12">
                  Impacto até Hoje
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao longo de 13 anos de atuação, já impactamos positivamente
                  mais de 15.000 vidas. Com a ajuda de nossos 500 voluntários e
                  milhares de doadores generosos, conseguimos oferecer educação
                  de qualidade para crianças, alimentação para famílias,
                  atendimento médico gratuito e muito mais. Mas nossa jornada
                  está apenas começando.
                </p>
              </div>

              {/* CTA */}
              <Card className="mt-12 bg-gradient-hero border-none">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Faça Parte Desta História
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Sua doação nos ajuda a continuar transformando vidas.
                    Juntos, podemos fazer ainda mais!
                  </p>
                  <Link href="/doacao">
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium"
                    >
                      Fazer Doação Agora
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
