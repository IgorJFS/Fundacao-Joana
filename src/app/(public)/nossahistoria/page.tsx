import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import handsImage from "@/assets/hands-together.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import Image from "next/image";
import { Metadata } from "next";
import { anos } from "@/lib/utils";
import {
  Heart,
  Users,
  BookOpen,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  HandHeart,
  Star,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nossa História",
  description: "Conheça a trajetória da Fundação Joanna de Ângelis, uma ONG que há mais de 20 anos transforma vidas em Rio das Ostras através de projetos sociais, educação e assistência comunitária.",
  keywords: ['história', 'missão', 'valores', 'fundação', 'trajetória', 'ONG Rio das Ostras'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/nossahistoria',
  },
  openGraph: {
    title: "Nossa História - Fundação Joanna de Ângelis",
    description: "Mais de 20 anos transformando vidas em Rio das Ostras através de projetos sociais e educação",
    type: "website",
  },
};

export default function NossaHistoria() {
  const valores = [
    {
      icon: HandHeart,
      titulo: "ACOLHER",
      descricao:
        "Receber com afeto, carinho e alegria a todos que aqui adentrarem",
    },
    {
      icon: Users,
      titulo: "TRABALHAR EM EQUIPE",
      descricao:
        "Atuar com entusiasmo, comprometimento, disciplina, afeto e espírito de equipe otimizando o tempo doado por cada SER (Voluntário)",
    },
    {
      icon: Shield,
      titulo: "DISCIPLINA",
      descricao:
        "Agir respeitando as normas e regulamentos garantindo a satisfação de todos envolvidos, contribuindo para o bom funcionamento da FJA",
    },
    {
      icon: Heart,
      titulo: "RESPEITAR/VALORIZAR",
      descricao:
        "Compreender e respeitar as diferenças buscando conhecer a importância de cada atitude e zelar por seus atos e palavras, procurando fazer de sua vida um exemplo de respeito ao próximo",
    },
    {
      icon: Heart,
      titulo: "AMAR AO PRÓXIMO",
      descricao: "Estimular a vivência do amor fraterno em todas as ações",
    },
    {
      icon: Star,
      titulo: "ACREDITAR",
      descricao:
        "Ter a coragem de acreditar que possuímos os requisitos necessários, em nosso interior, para ser a diferença para o meu próximo (SER)",
    },
    {
      icon: BookOpen,
      titulo: "CAPACITAR E EDUCAR",
      descricao: "Propiciar condições para o desenvolvimento do SER",
    },
    {
      icon: TrendingUp,
      titulo: "EVOLUIR",
      descricao: "Sempre na direção do crescimento social e profissional",
    },
    {
      icon: Target,
      titulo: "PERSEVERAR",
      descricao: "Com entusiasmo no desenvolvimento do SER",
    },
    {
      icon: Sparkles,
      titulo: "INTEGRAR",
      descricao: "O SER consigo mesmo, com sua família e com a sociedade",
    },
  ];
  

  return (
    <div className="min-h-screen flex bg-gradient-page flex-col">
      <main className="flex-1">
        {/* Hero Section - Modernizado */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nossa História
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Uma jornada de amor, solidariedade e transformação social
                inspirada por Joanna de Ângelis
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-16">
                {/* Origem */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    Como Tudo Começou
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Em 2010, um grupo de voluntários dedicados se reuniu com um
                    sonho comum: fazer a diferença na vida de pessoas em
                    situação de vulnerabilidade social. Inspirados pelos
                    ensinamentos de{" "}
                    <strong className="text-foreground">
                      Joanna de Ângelis
                    </strong>
                    , iniciamos pequenas ações em uma comunidade local que
                    rapidamente cresceram e se transformaram em um movimento de
                    solidariedade que impacta milhares de vidas.
                  </p>
                </div>

                {/* Missão */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-none">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-primary-foreground" />
                      </div>
                      Nossa Missão
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Captar recursos materiais e humanos e aplicá-los para
                      promover iniciativas relacionadas à prática de valores
                      morais, éticos, religiosos, educacionais e de assistência
                      para a promoção social, na formação do homem de bem.
                    </p>
                  </CardContent>
                </Card>

                {/* O que fazemos */}
                <div>
                  <h2 className="text-3xl font-bold mb-8 text-center">
                    O Que Fazemos
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <Image
                        src={volunteersImage}
                        alt="Voluntários em ação"
                        className="w-full h-64 object-cover"
                      />
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-primary" />
                          Educação Transformadora
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Oferecemos reforço escolar, material didático e bolsas
                          de estudo para crianças e jovens carentes,
                          proporcionando oportunidades reais de crescimento.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-primary/20">
                      <div className="h-64 bg-gradient-to-br from-accent/10 to-accent/20 dark:from-accent/5 dark:to-accent/10 flex items-center justify-center">
                        <Heart className="w-20 h-20 text-accent dark:text-accent" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-primary" />
                          Alimentação para Todos
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Distribuímos cestas básicas e refeições diárias para
                          famílias em situação de insegurança alimentar,
                          garantindo dignidade e nutrição.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden hover:shadow-lg transition-shadow border-accent/20">
                      <div className="h-64 bg-gradient-to-br from-primary/10 to-primary/20 dark:from-primary/5 dark:to-primary/10 flex items-center justify-center">
                        <Sparkles className="w-20 h-20 text-primary dark:text-primary" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="font-semibold text-xl mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          Assistência Social
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Oferecemos apoio integral às famílias, com atendimento
                          psicológico, orientação jurídica e encaminhamento para
                          serviços essenciais.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Section - Redesenhado */}
        <section className="py-20 bg-gradient-to-b from-secondary/50 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nossos 10 Valores Fundamentais
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Princípios que guiam cada ação da Fundação Joanna de Ângelis
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {valores.map((valor, index) => {
                  const Icon = valor.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all hover:border-primary/50"
                    >
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 mb-1 md:mb-2">
                              <span className="text-primary font-bold text-xs md:text-sm flex-shrink-0">
                                {String(index + 1).padStart(2, "0")}
                              </span>
                              <h3 className="font-bold text-base md:text-lg">
                                {valor.titulo}
                              </h3>
                            </div>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                              {valor.descricao}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Seção Curiosidade - Quem é Joanna de Ângelis */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 shadow-soft">
                <CardContent className="p-6 md:p-10">
                  <div className="flex items-start gap-3 md:gap-4 mb-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Info className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Curiosidade
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground">
                        Quem foi Joanna de Ângelis?
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {/* Imagem */}
                    <div className="w-full md:w-48 flex-shrink-0 mx-auto md:mx-0">
                      <div className="relative w-40 md:w-48 mx-auto">
                        <Image
                          src="/JoannaAngelis.jpg"
                          alt="Joanna de Ângelis"
                          width={192}
                          height={240}
                          className="rounded-xl shadow-lg border-2 border-primary/20"
                        />
                      </div>
                    </div>

                    {/* Texto */}
                    <div className="flex-1 space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                      <p>
                        <strong className="text-foreground">
                          Joanna de Ângelis
                        </strong>{" "}
                        é uma entidade espiritual muito respeitada no
                        espiritismo brasileiro. Segundo a doutrina espírita, ela
                        foi{" "}
                        <strong className="text-foreground">
                          madre superiora de um convento na Espanha
                        </strong>{" "}
                        durante o século XVI e dedicou sua vida ao amor ao
                        próximo e à caridade.
                      </p>

                      <p>
                        Após sua desencarnação, passou a atuar como{" "}
                        <strong className="text-foreground">
                          mentora espiritual
                        </strong>
                        , transmitindo mensagens através da psicografia pelo
                        médium{" "}
                        <strong className="text-foreground">
                          Divaldo Pereira Franco
                        </strong>
                        .
                      </p>

                      <Card className="bg-white/50 dark:bg-gray-900/50 border-none">
                        <CardContent className="p-4">
                          <blockquote className="text-sm md:text-base italic border-l-4 border-primary pl-4">
                            &quot;O amor é a essência da vida, e através dele
                            podemos transformar o mundo.&quot;
                          </blockquote>
                          <p className="mt-2 text-xs text-primary font-semibold">
                            — Joanna de Ângelis
                          </p>
                        </CardContent>
                      </Card>

                      <p>
                        Nossa fundação leva seu nome como inspiração para seguir
                        os{" "}
                        <strong className="text-foreground">
                          princípios de amor incondicional, caridade e dedicação
                          ao próximo
                        </strong>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impacto Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Nosso Impacto até Hoje
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      15.000+
                    </div>
                    <p className="text-muted-foreground">Vidas Impactadas</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <HandHeart className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-4xl font-bold text-accent mb-2">
                      500+
                    </div>
                    <p className="text-muted-foreground">Voluntários Ativos</p>
                  </CardContent>
                </Card>

                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {anos} anos
                    </div>
                    <p className="text-muted-foreground">de Dedicação</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg text-muted-foreground text-center leading-relaxed">
                Ao longo de <strong className="text-foreground">{anos} anos</strong>{" "}
                de atuação, já impactamos positivamente mais de{" "}
                <strong className="text-foreground">15.000 vidas</strong>. Com a
                ajuda de nossos{" "}
                <strong className="text-foreground">500 voluntários</strong> e
                milhares de doadores generosos, conseguimos oferecer educação de
                qualidade, alimentação, assistência social e muito mais. Mas
                nossa jornada está apenas começando!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none bg-gradient-to-r from-primary via-primary/90 to-accent">
                <CardContent className="p-12 text-center text-white">
                  <Heart className="w-16 h-16 mx-auto mb-6 opacity-90" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Faça Parte Desta História
                  </h3>
                  <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                    Sua doação nos ajuda a continuar transformando vidas e
                    seguindo os ensinamentos de Joanna de Ângelis. Juntos,
                    podemos fazer ainda mais!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/doacao">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                      >
                        <Heart className="w-5 h-5 mr-2" />
                        Fazer Doação Agora
                      </Button>
                    </Link>
                    <Link href="/contato">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform w-full sm:w-auto"
                      >
                        <HandHeart className="w-5 h-5 mr-2" />
                        Quero Ser Voluntário
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
