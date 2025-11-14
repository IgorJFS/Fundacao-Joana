import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import handsImage from "@/assets/hands-together.jpg";
import Image from "next/image";
import LogoMarquee from "@/components/logo-carousel";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Metadata } from "next";
import { anos } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Início",
  description: "Fundação Joanna de Ângelis - ONG em Rio das Ostras dedicada à assistência social, educação e desenvolvimento comunitário. Mais de 1000 vidas impactadas e 20 anos fazendo a diferença.",
  alternates: {
    canonical: 'https://fundacaojoanna.org.br',
  },
  openGraph: {
    title: "Fundação Joanna de Ângelis - Transformando Vidas",
    description: "ONG em Rio das Ostras com mais de 20 anos transformando vidas através de projetos sociais",
    type: "website",
  },
};

export default function Home() {
  const stats = [
    {
      icon: Heart,
      value: 1000,
      suffix: "+",
      label: "Vidas Impactadas",
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
      color: "text-pink-600",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: TrendingUp,
      value: anos,
      suffix: " Anos",
      label: "Fazendo a Diferença",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
    },
  ];

  const achievements = [
    {
      title: "Projeto AmanhãSER",
      description:
        "Mais de 3.000 crianças receberam material escolar e apoio educacional em 2024.",
      image: heroImage,
    },
    {
      title: "Alimentação Solidária",
      description:
        "Distribuímos mais de 50 mil refeições para famílias em situação de vulnerabilidade.",
      image: volunteersImage,
    },
    {
      title: "Saúde e Bem-estar",
      description:
        "Realizamos múltiplos atendimentos médicos e psicológicos gratuitos.",
      image: handsImage,
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
            "logo": "https://fundacaojoanna.org.br/logo.png",
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
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 opacity-100">
            <Image
              src={heroImage}
              alt="Crianças felizes sendo assistidas pela Fundação Joanna de Ângelis em Rio das Ostras"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                Transforme Vidas com Sua Doação
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 animate-fade-in">
                Cada contribuição faz a diferença para milhares de pessoas.
                Juntos, construímos um futuro melhor para todos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                <Link href="/doacao">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium w-full sm:w-auto"
                  >
                    Fazer Doação
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
                    className="w-full sm:w-auto"
                  >
                    Seja Voluntário
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card
                    key={index}
                    className="text-center hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                      <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                        <AnimatedCounter
                          end={stat.value}
                          suffix={stat.suffix}
                          duration={3000}
                        />
                      </div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Instituições Parceiras */}
        <section className="py-12  border-y border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Instituições que Confiam na Nossa Fundação
              </h2>
              <p className="text-muted-foreground">
                Apoiados e reconhecidos por órgãos públicos
              </p>
            </div>
            <LogoMarquee />
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 ">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossas Conquistas em {anos} Anos
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Veja como suas doações estão transformando vidas e construindo
                um futuro melhor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="overflow-hidden bg-gradient-card hover:shadow-medium transition-shadow"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Como Chegar Section */}
        <section className="py-16 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Visite Nossa Sede
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Estamos de portas abertas para receber você, voluntários e
                  doações presenciais.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Informações de Contato */}
                <Card>
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-4">
                        📍 Endereço
                      </h3>
                      <p className="text-muted-foreground">
                        R. Vassouras, Lote 20 - Quadra 16
                        <br />
                        Jardim Mariléa
                        <br />
                        Rio das Ostras - RJ
                        <br />
                        CEP: 28890-000
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">
                        🕒 Horário de Funcionamento
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <strong>2ª Feira:</strong> 8:30-12:00 / 13:00-17:00
                        <br />
                        <strong>3ª Feira:</strong> 8:00-16:00
                        <br />
                        <strong>4ª Feira:</strong> 8:30-12:00
                        <br />
                        <strong>5ª Feira:</strong> 14:00-18:00
                        <br />
                        <strong>6ª Feira:</strong> 8:30-12:00
                        <br />
                        <strong>Sábado:</strong> 8:00-15:00
                        <br />
                        <strong>Domingo:</strong> 17:00-20:00
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">📞 Contato</h3>
                      <p className="text-muted-foreground">
                        WhatsApp: (22) 99938-2357
                        <br />
                        Email: funjodangelis@yahoo.com.br
                        <br />
                        <br />
                        CNPJ: 06.261.897/0001-93
                      </p>
                    </div>

                    <a
                      href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full" variant="outline">
                        Abrir no Google Maps
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Mapa */}
                <Card className="overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1759306537451!6m8!1m7!1sD7yGkO9TPswgLzK_sp4csA!2m2!1d-22.50166265609518!2d-41.93095581335224!3f14.819350323818071!4f3.228379886412796!5f0.7820865974627469"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização da Fundação Joanna - Rio das Ostras"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua Doação Faz a Diferença
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada real doado vai diretamente para quem mais precisa. Seja parte
              dessa transformação hoje.
            </p>
            <Link href="/doacao">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground cursor-pointer shadow-medium"
              >
                Doe Agora
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
