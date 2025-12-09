import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Fundação Joanna de Ângelis. Visite nossa sede em Rio das Ostras, ligue para nosso WhatsApp ou envie um email.",
  keywords: ['contato', 'endereço', 'telefone', 'email', 'localização', 'Rio das Ostras'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/contato',
  },
  openGraph: {
    title: "Contato - Fundação Joanna de Ângelis",
    description: "Entre em contato conosco. Estamos em Rio das Ostras prontos para atender você.",
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

export default function ContatoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section Compacto */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 text-gradient">
                Entre em Contato
              </h1>
              <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full"></div>
              <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
                Estamos sempre prontos para ajudar. Entre em contato conosco!
              </p>
            </div>
          </div>
        </section>

        {/* Informações Principais - Grid Compacto */}
        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* WhatsApp - Destaque */}
              <Card className="bg-gradient-accent border-none shadow-large">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center gap-4 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-8 h-8" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-bold text-xl mb-1">Fale Conosco pelo WhatsApp</h3>
                      <p className="text-white/90">Atendimento rápido e direto</p>
                    </div>
                    <a
                      href="https://wa.me/5522999382357"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto"
                    >
                      <Button size="lg" variant="secondary" className="w-full md:w-auto">
                        (22) 99938-2357
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Grid 2 Colunas - Endereço e Horário */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Endereço */}
                <Card className="shadow-medium hover:shadow-large transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">Nossa Sede</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      R. Vassouras, Lote 20 - Quadra 16<br />
                      Jardim Mariléa<br />
                      Rio das Ostras - RJ<br />
                      CEP: 28890-000
                    </p>
                    <a
                      href="https://www.google.com/maps/dir//R.+Vassouras,+Lote+20+-+Quadra+16+-+Jardim+Maril%C3%A9a,+Rio+das+Ostras+-+RJ,+28890-000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Abrir no Google Maps
                      </Button>
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="shadow-medium hover:shadow-large transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl">Email</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      funjodangelis@yahoo.com.br
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Envie sua mensagem que respondemos em breve
                    </p>
                    <a href="mailto:funjodangelis@yahoo.com.br">
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar Email
                      </Button>
                    </a>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground">
                        <strong>CNPJ:</strong> 06.261.897/0001-93
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Horário de Funcionamento */}
              <Card className="shadow-medium border-accent/20">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-xl">Horário de Funcionamento</h3>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { dia: "Segunda", hora: "8:30-12:00 / 13:00-17:00" },
                      { dia: "Terça", hora: "8:00-16:00" },
                      { dia: "Quarta", hora: "8:30-12:00" },
                      { dia: "Quinta", hora: "14:00-18:00" },
                      { dia: "Sexta", hora: "8:30-12:00" },
                      { dia: "Sábado", hora: "8:00-15:00" },
                      { dia: "Domingo", hora: "17:00-20:00" },
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex justify-between items-center py-2 px-4 rounded-lg bg-secondary/20"
                      >
                        <span className="font-semibold text-sm">{item.dia}</span>
                        <span className="text-muted-foreground text-sm">{item.hora}</span>
                      </div>
                    ))}
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
