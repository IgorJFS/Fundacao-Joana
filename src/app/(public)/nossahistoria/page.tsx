import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handsImage from "@/assets/hands-together.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import Image from "next/image";

export default function NossaHistoria() {
  return (
    <div className="min-h-screen flex bg-gradient-page flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16">
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
                  Captar recursos materiais e humanos e aplicá-los para promover
                  iniciativas relacionadas a prática de valores morais, éticos,
                  religiosos, educacionais e de assistência para a promoção
                  social, na formação do homem de bem.
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
                  Valores da Fundação Joanna de Ângelis
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">I)</span>
                    <span>
                      <strong className="text-foreground">ACOLHER:</strong>{" "}
                      Receber com afeto, carinho e alegria a todos que aqui
                      adentrarem;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">II)</span>
                    <span>
                      <strong className="text-foreground">
                        TRABALHAR EM EQUIPE:
                      </strong>{" "}
                      Atuar com entusiasmo, comprometimento, disciplina, afeto e
                      espírito de equipe otimizando o tempo doado por cada SER
                      (Voluntário);
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">III)</span>
                    <span>
                      <strong className="text-foreground">DISCIPLINA:</strong>{" "}
                      Agir respeitando as normas e regulamentos garantindo a
                      satisfação de todos envolvidos, contribuindo para o bom
                      funcionamento da FJA;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">IV)</span>
                    <span>
                      <strong className="text-foreground">
                        RESPEITAR/VALORIZAR:
                      </strong>{" "}
                      Compreender e respeitar as diferenças buscando conhecer a
                      importância de cada atitude e zelar por seus atos e
                      palavras, procurando fazer de sua vida um exemplo de
                      respeito ao próximo;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">V)</span>
                    <span>
                      <strong className="text-foreground">
                        AMAR AO PRÓXIMO:
                      </strong>{" "}
                      Estimular a vivência;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">VI)</span>
                    <span>
                      <strong className="text-foreground">ACREDITAR:</strong>{" "}
                      Ter a coragem de acreditar que possuímos os requisitos
                      necessários, em nosso interior, para ser a diferença para
                      o meu próximo (SER);
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">VII)</span>
                    <span>
                      <strong className="text-foreground">
                        CAPACITAR E EDUCAR:
                      </strong>{" "}
                      Propiciar condições para o desenvolvimento do SER;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">VIII)</span>
                    <span>
                      <strong className="text-foreground">EVOLUIR:</strong>{" "}
                      Sempre na direção do crescimento social, profissional;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">IX)</span>
                    <span>
                      <strong className="text-foreground">PERSEVERAR:</strong>{" "}
                      Com entusiasmo no desenvolvimento do SER;
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">X)</span>
                    <span>
                      <strong className="text-foreground">INTEGRAR:</strong> O
                      SER consigo mesmo, com sua família;
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
              <Card className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 border-none">
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
                      className="bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-medium"
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
