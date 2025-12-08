import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-children.webp";
import volunteersImage from "@/assets/volunteers-helping.webp";
import saude from "@/assets/saude.webp";
import gravida from "@/assets/gravidas.webp";
import Image from "next/image";
import LogoMarquee from "@/components/logo-carousel";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Metadata } from "next";
import { anos } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Início",
  description: "Fundação Joanna de Ângelis - ONG em Rio das Ostras dedicada à assistência social, educação e desenvolvimento comunitário. Mais de 900 famílias impactadas e 22 anos fazendo a diferença.",
  alternates: {
    canonical: 'https://fundacaojoanna.org.br',
  },
  openGraph: {
    title: "Fundação Joanna de Ângelis - Transformando Vidas",
    description: "ONG em Rio das Ostras com mais de 20 anos transformando vidas através de trabalho voluntário e doações",
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

export default function Home() {
  const stats = [
    {
      icon: Heart,
      value: 900,
      suffix: "+",
      label: "Famílias Impactadas",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      value: 130,
      suffix: "+",
      label: "Voluntários Ativos",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: HandHeart,
      value: 2000,
      suffix: "+",
      label: "Doações Recebidas",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: TrendingUp,
      value: anos,
      suffix: " anos",
      label: "De História",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NGO",
            "name": "Fundação Joanna de Ângelis",
            "alternateName": "Fundação Joanna",
            "url": "https://fundacaojoanna.org.br",
            "logo": "https://fundacaojoanna.org.br/logo.webp",
            "description": "ONG sem fins lucrativos que promove assistência social, educação e desenvolvimento comunitário em Rio das Ostras",
            "foundingDate": "2003",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rio das Ostras",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-22-99938-2357",
              "contactType": "customer service",
              "email": "funjodangelis@yahoo.com.br",
              "availableLanguage": "Portuguese"
            },
            "sameAs": [
              "https://facebook.com/fundacaojoanna",
              "https://instagram.com/fundacaojoanna"
            ],
            "nonprofitStatus": "Nonprofit501c3"
          })
        }}
      />
      <main className="flex-1">
        {/* Hero Section - Redesenhado */}
        <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden -mt-16 pt-16">
          {/* Background com overlay gradiente */}
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt="Crianças felizes sendo assistidas pela Fundação Joanna de Ângelis em Rio das Ostras"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/40 via-sky-800/20 to-transparent"></div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Conteúdo Principal */}
              <div className="text-white">
                <div className="inline-block mb-4">
                  <span className="bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                    ✨ Transformando Vidas Desde 2003
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Juntos por um
                  <span className="block text-sky-300">Futuro Melhor</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 text-white/85 leading-relaxed">
                  Cada doação transforma vidas. Faça parte dessa mudança e 
                  ajude a construir um amanhã mais justo e solidário.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/doacao">
                    <Button
                      size="lg"
                      className="bg-sky-400 hover:bg-sky-300 text-sky-950 font-semibold shadow-lg w-full sm:w-auto text-lg px-8 py-6 transition-all hover:scale-105"
                    >
                      💙 Fazer Doação
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/5522999382357"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-sky-900 text-lg px-8 py-6 transition-all"
                    >
                      🤝 Seja Voluntário
                    </Button>
                  </a>
                </div>
              </div>

              {/* Card de impacto - Design criativo */}
              <div className="hidden md:block relative">
                {/* Glow effect de fundo */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-emerald-400/20 rounded-[2rem] blur-2xl"></div>
                
                <div className="relative bg-white/10 backdrop-blur-xl rounded-[2rem] p-1 border border-white/20">
                  <div className="bg-gradient-to-br from-slate-900/80 via-sky-950/75 to-slate-900/80 backdrop-blur-sm rounded-[1.75rem] p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">Nosso Impacto</h3>
                      <div className="bg-white/10 p-3 rounded-2xl">
                        <Heart className="w-6 h-6 text-sky-400" />
                      </div>
                    </div>
                    
                    {/* Stats em formato diferenciado */}
                    <div className="space-y-4">
                      {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        const colors = [
                          { bar: "from-sky-400 to-cyan-400", text: "text-sky-400" },
                          { bar: "from-emerald-400 to-teal-400", text: "text-emerald-400" },
                          { bar: "from-amber-400 to-orange-400", text: "text-amber-400" },
                          { bar: "from-violet-400 to-purple-400", text: "text-violet-400" },
                        ];
                        const color = colors[index % colors.length];
                        
                        return (
                          <div 
                            key={index} 
                            className="group relative bg-white/5 hover:bg-white/10 rounded-2xl p-4 transition-all duration-300 border border-white/5 hover:border-white/10"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${color.bar} shadow-lg`}>
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-white/60 text-sm">{stat.label}</p>
                                  <div className={`text-2xl font-bold ${color.text}`}>
                                    <AnimatedCounter
                                      end={stat.value}
                                      suffix={stat.suffix}
                                      duration={3000}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color.bar} flex items-center justify-center`}>
                                  <TrendingUp className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            </div>
                            {/* Barra de progresso decorativa */}
                            <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${color.bar} rounded-full`}
                                style={{ width: `${Math.min(100, (stat.value / 25) * 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
            <svg
              className="w-8 h-8 text-white/60"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </section>

        {/* Stats Section Mobile - Versão simplificada */}
        <section className="py-12 md:hidden bg-gradient-page">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center shadow-soft border-sky-100">
                    <CardContent className="p-6">
                      <div className="bg-sky-100 p-3 rounded-xl inline-flex mb-3">
                        <Icon className="w-6 h-6 text-sky-600" />
                      </div>
                      <div className="text-3xl font-bold text-sky-700 mb-1">
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={3000}
                        />
                      </div>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Instituições Parceiras - Redesenhado */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                🏛️ Parceiros Oficiais
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Instituições que Confiam no Nosso Trabalho
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Reconhecidos e apoiados por órgãos públicos e organizações
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-soft">
              <LogoMarquee />
            </div>
          </div>
        </section>

        {/* Nossos Projetos Section - Redesenhado */}
        <section className="py-20 bg-gradient-page">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                💚 Conheça Nosso Trabalho
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Projetos que Transformam Vidas
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Cada projeto é cuidadosamente desenvolvido para gerar impacto real e duradouro na vida de quem mais precisa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: volunteersImage,
                  title: "Assistência Social",
                  description: "A Fundação Joanna de Ângelis oferece apoio integral às famílias em situação de vulnerabilidade, promovendo inclusão social e melhoria da qualidade de vida.",
                  icon: "🤲",
                  mobileVisible: true,
                },
                {
                  image: saude,
                  title: "Projeto Saúde",
                  description: "Serviço Social, Psicologia (para adultos). Psicanálise online e presencial, Nutricionista, Ginecologista, Angiologista, Clínica Médica, Reiki, Pedriatra, Podologia e Dentista. Agendamento via WhatsApp.",
                  icon: "🏥",
                  mobileVisible: true,
                },
                {
                  image: heroImage,
                  title: "Projeto Educacional",
                  description: "Aula de Reforço de Matemática e Física terça feiras das 14:00 ás 16:00. E Aula de produção textual (Foco em ENEM, concursos e etc) Quinta-feira, quinzenalmente nas primeira e terceira quinta-feira do mês, das 14:00 ás 16:00.",
                  icon: "📚",
                  mobileVisible: true,
                },
                {
                  image: gravida,
                  title: "Projeto AdoleSER com gravidez",
                  description: "Funciona as terças-feiras, das 8:30 ás 13:00. A adolescente grávida terá: café da manhã, lanche, almoço e passagem no valor de R$7,50 patronicados pela FJA.",
                  icon: "🤰",
                  mobileVisible: false,
                },
              ].map((projeto, index) => (
                <Card
                  key={index}
                  className={`group overflow-hidden border-0 shadow-large hover:shadow-colored transition-all duration-300 hover:-translate-y-2 py-0 ${
                    !projeto.mobileVisible ? 'hidden md:flex md:flex-col' : ''
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={projeto.image}
                      alt={projeto.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-5xl">{projeto.icon}</div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {projeto.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {projeto.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Chegar Section - Redesenhado */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  📍 Nossa Localização
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  Visite Nossa Sede
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Estamos de portas abertas para receber você, voluntários e doações presenciais. 
                  Venha conhecer nosso trabalho de perto!
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Informações de Contato - 2 colunas */}
                <div className="lg:col-span-2 space-y-4">
                  <Card className="shadow-medium border-primary/10 hover:shadow-large transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                          <span className="text-2xl">📍</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Endereço</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            R. Vassouras, Lote 20 - Quadra 16<br />
                            Jardim Mariléa<br />
                            Rio das Ostras - RJ<br />
                            CEP: 28890-000
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium border-accent/10 hover:shadow-large transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-xl shrink-0">
                          <span className="text-2xl">🕒</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-3">Horário de Funcionamento</h3>
                          <div className="space-y-1 text-sm">
                            {[
                              { dia: "2ª Feira", hora: "8:30-12:00 / 13:00-17:00" },
                              { dia: "3ª Feira", hora: "8:00-16:00" },
                              { dia: "4ª Feira", hora: "8:30-12:00" },
                              { dia: "5ª Feira", hora: "14:00-18:00" },
                              { dia: "6ª Feira", hora: "8:30-12:00" },
                              { dia: "Sábado", hora: "8:00-15:00" },
                              { dia: "Domingo", hora: "17:00-20:00" },
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between py-1 border-b border-border/50 last:border-0">
                                <span className="font-medium text-foreground">{item.dia}</span>
                                <span className="text-muted-foreground">{item.hora}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-medium border-primary/10 hover:shadow-large transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                          <span className="text-2xl">📞</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">Contato</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            WhatsApp: (22) 99938-2357<br />
                            Telefone: (22) 2764-9273<br />
                            Email: funjodangelis@yahoo.com.br<br />
                            <br />
                            CNPJ: 06.261.897/0001-93
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <a
                    href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-gradient-hero text-white shadow-medium hover:shadow-large hover-glow" size="lg">
                      📍 Abrir no Google Maps
                    </Button>
                  </a>
                </div>

                {/* Mapa - 3 colunas */}
                <Card className="lg:col-span-3 overflow-hidden shadow-large border-0">
                  <CardContent className="p-0 h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1764651226313!6m8!1m7!1s2ES131dTYULvEh6Yh2BM-A!2m2!1d-22.50167289947236!2d-41.93094355159263!3f11.39317874846103!4f3.0190674857738173!5f1.088183033840005"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "600px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Fundação Joanna - Rio das Ostras"
                      className="rounded-xl"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Redesenhado */}
        <section className="py-24 bg-gradient-hero relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                💚 Faça Parte Dessa História
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Sua Doação Faz a Diferença
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Cada real doado vai diretamente para quem mais precisa. 
                Seja parte dessa transformação hoje e ajude a construir um futuro melhor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/doacao">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white shadow-colored hover:shadow-large hover-glow text-lg px-8 py-6"
                  >
                    💝 Doe Agora
                  </Button>
                </Link>
                <Link href="/nossahistoria">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                  >
                    📖 Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
