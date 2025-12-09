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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-50 via-white to-teal-50">
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
            <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-cyan-800/40 to-teal-700/30"></div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Conteúdo Principal - Centralizado no Desktop */}
            <div className="text-white text-center max-w-4xl mx-auto">
              
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                Juntos por um
                <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">Futuro Melhor</span>
              </h1>
              
              <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
                Cada gesto de <span className="text-emerald-300 font-semibold">amor</span> transforma realidades. 
                Faça parte dessa corrente do bem!  
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/doacao">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 text-slate-900 font-bold shadow-xl shadow-teal-500/30 w-full sm:w-auto text-lg px-10 py-7 transition-all hover:scale-105 rounded-full"
                  >
                    💚 Fazer Doação
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
                    className="w-full sm:w-auto bg-white/15 backdrop-blur-md border-2 border-white/40 text-white hover:bg-white hover:text-teal-600 text-lg px-10 py-7 transition-all hover:scale-105 rounded-full font-semibold"
                  >
                    🤝 Seja Voluntário
                  </Button>
                </a>
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

        {/* Stats Section Desktop - Horizontal abaixo do Hero */}
        <section className="hidden md:block py-16 bg-gradient-to-r from-sky-50 via-cyan-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const colors = [
                  { bg: "from-sky-500 to-blue-500", text: "text-sky-600", border: "border-sky-200", shadow: "shadow-sky-500/20" },
                  { bg: "from-teal-500 to-emerald-500", text: "text-teal-600", border: "border-teal-200", shadow: "shadow-teal-500/20" },
                  { bg: "from-orange-500 to-amber-500", text: "text-orange-600", border: "border-orange-200", shadow: "shadow-orange-500/20" },
                  { bg: "from-violet-500 to-purple-500", text: "text-violet-600", border: "border-violet-200", shadow: "shadow-violet-500/20" },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <div 
                    key={index} 
                    className={`group relative bg-white hover:bg-gradient-to-br hover:from-white hover:to-sky-50 rounded-3xl p-8 transition-all duration-500 ${color.border} border-2 shadow-xl ${color.shadow} hover:shadow-2xl hover:-translate-y-2`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`p-5 rounded-2xl bg-gradient-to-br ${color.bg} shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`text-5xl font-black ${color.text} mb-2`}>
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={3000}
                        />
                      </div>
                      <p className="text-slate-600 text-sm font-semibold">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section Mobile - Versão simplificada */}
        <section className="py-12 md:hidden bg-gradient-to-b from-sky-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const mobileColors = [
                  { bg: "bg-gradient-to-br from-sky-100 to-blue-100", icon: "text-sky-500", text: "text-sky-600" },
                  { bg: "bg-gradient-to-br from-teal-100 to-emerald-100", icon: "text-teal-500", text: "text-teal-600" },
                  { bg: "bg-gradient-to-br from-orange-100 to-amber-100", icon: "text-orange-500", text: "text-orange-600" },
                  { bg: "bg-gradient-to-br from-violet-100 to-purple-100", icon: "text-violet-500", text: "text-violet-600" },
                ];
                const mColor = mobileColors[index % mobileColors.length];
                return (
                  <Card key={index} className={`text-center shadow-lg border-0 ${mColor.bg}`}>
                    <CardContent className="p-6">
                      <div className="bg-white/80 p-3 rounded-xl inline-flex mb-3 shadow-sm">
                        <Icon className={`w-6 h-6 ${mColor.icon}`} />
                      </div>
                      <div className={`text-3xl font-black ${mColor.text} mb-1`}>
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={3000}
                        />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Instituições Parceiras - Redesenhado */}
        <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-sky-50 relative overflow-hidden">
          {/* Decoração de fundo */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
                Instituições que Confiam em Nós
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Reconhecidos e apoiados por órgãos públicos e organizações
              </p>
            </div>
            <div className="bg-gradient-to-r from-sky-50 via-white to-teal-50 rounded-3xl p-8 shadow-xl border border-sky-100">
              <LogoMarquee />
            </div>
          </div>
        </section>

        {/* Nossos Projetos Section - Redesenhado */}
        <section className="py-24 bg-gradient-to-b from-cyan-50 via-sky-50 to-teal-50 relative overflow-hidden">
          {/* Elementos decorativos */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-6xl font-extrabold mb-4 text-gradient">
                Projetos que Transformam
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Cada projeto é desenvolvido com amor para gerar impacto real na vida de quem mais precisa
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
                  className={`group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 py-0 rounded-3xl bg-white ${
                    !projeto.mobileVisible ? 'hidden md:flex md:flex-col' : ''
                  }`}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={projeto.image}
                      alt={projeto.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-teal-800/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-5xl drop-shadow-lg">{projeto.icon}</div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600">Em atividade</div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-black mb-3 group-hover:text-teal-600 transition-colors">
                      {projeto.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {projeto.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Chegar Section - Redesenhado */}
        <section className="py-24 bg-gradient-to-b from-white via-sky-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-gradient">
                  Visite Nossa Sede
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  Estamos de portas abertas para receber você! 
                  Venha conhecer nosso trabalho de perto 🤗
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Informações de Contato - 2 colunas */}
                <div className="lg:col-span-2 space-y-4">
                  <Card className="shadow-lg border-2 border-sky-100 rounded-2xl bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl shrink-0">📍</span>
                        <div>
                          <h3 className="font-black text-lg mb-2 text-slate-800">Endereço</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            R. Vassouras, Lote 20 - Quadra 16<br />
                            Jardim Mariléa<br />
                            Rio das Ostras - RJ<br />
                            CEP: 28890-000
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-2 border-teal-100 rounded-2xl bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl shrink-0">🕒</span>
                        <div className="flex-1">
                          <h3 className="font-black text-lg mb-3 text-slate-800">Horário de Funcionamento</h3>
                          <div className="space-y-1.5 text-sm">
                            {[
                              { dia: "Segunda", hora: "8:30-12:00 / 13:00-17:00" },
                              { dia: "Terça", hora: "8:00-16:00" },
                              { dia: "Quarta", hora: "8:30-12:00" },
                              { dia: "Quinta", hora: "14:00-18:00" },
                              { dia: "Sexta", hora: "8:30-12:00" },
                              { dia: "Sábado", hora: "8:00-15:00" },
                              { dia: "Domingo", hora: "17:00-20:00" },
                            ].map((item, i) => (
                              <div key={i} className="flex justify-between items-center py-2 px-3 rounded-lg odd:bg-teal-50">
                                <span className="font-semibold text-slate-700">{item.dia}</span>
                                <span className="text-teal-600 font-semibold">{item.hora}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-2 border-emerald-100 rounded-2xl bg-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl shrink-0">📞</span>
                        <div>
                          <h3 className="font-black text-lg mb-2 text-slate-800">Contato</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            <span className="text-emerald-600 font-bold">WhatsApp: (22) 99938-2357</span><br />
                            Telefone: (22) 2764-9273<br />
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
                    <Button className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-xl shadow-sky-500/30 hover:shadow-2xl font-bold rounded-xl" size="lg">
                      📍 Abrir no Google Maps
                    </Button>
                  </a>
                </div>

                {/* Mapa - 3 colunas */}
                <div className="lg:col-span-3 overflow-hidden rounded-2xl shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1764651226313!6m8!1m7!1s2ES131dTYULvEh6Yh2BM-A!2m2!1d-22.50167289947236!2d-41.93094355159263!3f11.39317874846103!4f3.0190674857738173!5f1.088183033840005"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "600px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Fundação Joanna - Rio das Ostras"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Redesenhado */}
        <section className="py-32 bg-gradient-to-br from-sky-600 via-cyan-500 to-teal-500 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='white'/%3E%3C/svg%3E\")" }}></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-4xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-lg">
                Sua Doação<br />Faz a Diferença
              </h2>
              <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
                Cada real doado vai diretamente para quem mais precisa. 
                Seja parte dessa transformação hoje! 🌟
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/doacao">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-slate-100 text-teal-600 shadow-2xl hover:shadow-3xl text-xl px-12 py-8 rounded-full font-black transition-all hover:scale-105"
                  >
                    💚 Doe Agora
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/50 backdrop-blur-sm text-xl px-12 py-8 rounded-full font-bold transition-all hover:scale-105"
                  >
                    📖 Nossa História
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
