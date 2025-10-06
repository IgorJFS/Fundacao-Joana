import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, HandHeart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import volunteersImage from "@/assets/volunteers-helping.jpg";
import handsImage from "@/assets/hands-together.jpg";
import Image from "next/image";
import LogoMarquee from "@/components/logo-carousel";

export default function Home() {
  const stats = [
    { icon: Heart, value: "15.000+", label: "Vidas Impactadas" },
    { icon: Users, value: "500+", label: "Voluntários Ativos" },
    { icon: HandHeart, value: "2.000+", label: "Doações Recebidas" },
    { icon: TrendingUp, value: "13 Anos", label: "Fazendo a Diferença" },
  ];

  const achievements = [
    {
      title: "Educação para Todos",
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
        "Realizamos 1.200 atendimentos médicos e psicológicos gratuitos.",
      image: handsImage,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-20 md:py-32">
          <div className="absolute inset-0 opacity-80">
            <Image
              src={heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
                Transforme Vidas com Sua Doação
              </h1>
              <p className="text-lg md:text-xl text-foreground mb-8 animate-fade-in">
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
                  href="https://wa.me/5511999999999"
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
            <div className="grid  grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="text-center bg-card hover:shadow-soft transition-shadow"
                >
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
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
                Nossas Conquistas em 2024
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
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h
                        <br />
                        Sábado: 8h às 12h
                        <br />
                        Domingo: Fechado
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-4">📞 Contato</h3>
                      <p className="text-muted-foreground">
                        Telefone: (22) 1234-5678
                        <br />
                        WhatsApp: (22) 91234-5678
                        <br />
                        Email: contato@fundacaojoanna.org.br
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
