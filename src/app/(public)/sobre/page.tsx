import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";
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
  Book,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a Fundação Joanna de Ângelis, entidade sem fins lucrativos dedicada à assistência social, educação, cultura e promoção da cidadania em Rio das Ostras.",
  keywords: ['sobre', 'missão', 'valores', 'vocação', 'fundação', 'ONG Rio das Ostras'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/sobre',
  },
  openGraph: {
    title: "Sobre - Fundação Joanna de Ângelis",
    description: "Entidade de assistência social transformando vidas através de valores morais, éticos e educacionais",
    type: "website",
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Logo Fundação Joanna de Ângelis',
      },
    ],
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

        {/* Quem Somos - Redesenhado */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              {/* Header da Seção */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Quem Somos?
                </h2>
                <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
              </div>

              {/* Card Único - Descrição Principal */}
              <Card className="bg-gradient-to-br from-white to-primary/5 border-primary/20 shadow-large hover:shadow-colored transition-all duration-300 mb-12">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Entidade Privada Sem Fins Lucrativos</h3>
                  </div>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p>
                      A <strong className="text-foreground">Fundação Joanna de Ângelis</strong> é uma entidade de Direito Privado sem fins lucrativos, de promoção de <strong className="text-foreground">Assistência Social, da Cultura, do Voluntariado, do Combate à Pobreza, da Segurança Alimentar e Nutricional</strong>, da Ética, da Paz, da Cidadania, dos Direitos Humanos, da Proteção ao Meio Ambiente, da Recreação e Desporto e da <strong className="text-foreground">Proteção à Criança e ao Adolescente</strong>.
                    </p>
                    <p>
                      Fundada em 2003, inspirados pelos ensinamentos de <strong className="text-foreground">Joanna de Ângelis</strong>, trabalhamos incansavelmente para promover a transformação social através de ações concretas que impactam milhares de vidas em Rio das Ostras e região.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card Grande - Áreas de Atuação */}
              <Card className="bg-white border-none shadow-large hover:shadow-colored transition-shadow">
                <CardContent className="p-8 md:p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-gradient-accent rounded-xl flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold">Nossas Frentes de Atuação</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { icon: Heart, text: "Assistência Social", color: "text-rose-600", bgColor: "bg-rose-50", borderColor: "border-rose-200" },
                      { icon: BookOpen, text: "Cultura e Educação", color: "text-purple-600", bgColor: "bg-purple-50", borderColor: "border-purple-200" },
                      { icon: HandHeart, text: "Voluntariado", color: "text-pink-600", bgColor: "bg-pink-50", borderColor: "border-pink-200" },
                      { icon: Users, text: "Combate à Pobreza", color: "text-indigo-600", bgColor: "bg-indigo-50", borderColor: "border-indigo-200" },
                      { icon: Heart, text: "Segurança Alimentar", color: "text-amber-600", bgColor: "bg-amber-50", borderColor: "border-amber-200" },
                      { icon: Shield, text: "Proteção de Crianças", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
                      { icon: Sparkles, text: "Direitos Humanos", color: "text-teal-600", bgColor: "bg-teal-50", borderColor: "border-teal-200" },
                      { icon: Users, text: "Serviço Comunitário", color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" },
                      { icon: Star, text: "Orientação Espiritual", color: "text-violet-600", bgColor: "bg-violet-50", borderColor: "border-violet-200" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className={`flex items-center gap-4 p-5 rounded-xl ${item.bgColor} hover:shadow-large transition-all border-2 ${item.borderColor}`}
                        >
                          <Icon className={`w-7 h-7 ${item.color} flex-shrink-0`} />
                          <span className="font-semibold text-base text-foreground">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Missão e Vocação */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Missão */}
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 shadow-medium hover:shadow-large transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Nossa Missão</h2>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    Captar recursos materiais e humanos e aplicá-los para promover iniciativas relacionadas à prática de valores morais, éticos, religiosos, educacionais e de assistência para a promoção social, na <strong className="text-foreground">formação do homem de bem</strong>.
                  </p>
                </CardContent>
              </Card>

              {/* Vocação */}
              <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 shadow-medium hover:shadow-large transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Nossa Vocação</h2>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    A Fundação Joanna de Ângelis poderá construir e manter serviços de natureza <strong className="text-foreground">assistencial, educacional, cultural e religiosa</strong> para os cidadãos em geral, sem distinção de qualquer espécie, podendo instalar e administrar <strong className="text-foreground">abrigos, creches, escolas, ambulatórios, hospitais, centros de convivência social e grupos espíritas</strong>, bem como estabelecimentos similares para prestação de serviços em consonância com seus fins estatutários.
                  </p>
                </CardContent>
              </Card>
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
                <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div><br/>
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
              <Card className="overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 shadow-soft">
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

                      <Card className="bg-white/50 border-none">
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
