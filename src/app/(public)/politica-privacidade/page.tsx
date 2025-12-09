import { Metadata } from "next";
import { Shield, Eye, Lock, UserCheck, FileText, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da Fundação Joanna de Ângelis sobre coleta, uso e proteção de dados pessoais.",
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/politica-privacidade',
  },
  openGraph: {
    title: "Política de Privacidade - Fundação Joanna de Ângelis",
    description: "Nossa política de privacidade e proteção de dados pessoais",
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

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1 pt-20 md:pt-24 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Política de Privacidade</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl font-semibold">Introdução</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A Fundação Joanna de Ângelis está comprometida em proteger a privacidade dos nossos apoiadores, 
                  voluntários e visitantes do site. Esta política descreve como coletamos, usamos e protegemos 
                  suas informações pessoais.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Informações que Coletamos</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Podemos coletar as seguintes informações:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo e informações de contato (email, telefone)</li>
                    <li>Informações sobre doações e contribuições</li>
                    <li>Dados de navegação e cookies (endereço IP, tipo de navegador)</li>
                    <li>Informações fornecidas voluntariamente em formulários</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Como Usamos Suas Informações</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Utilizamos suas informações para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Processar doações e emitir recibos</li>
                    <li>Enviar atualizações sobre nossos projetos e campanhas</li>
                    <li>Responder às suas perguntas e solicitações</li>
                    <li>Melhorar nossos serviços e experiência do usuário</li>
                    <li>Cumprir obrigações legais e regulatórias</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Proteção de Dados</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações 
                  pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Seus dados são 
                  armazenados em servidores seguros e o acesso é restrito apenas a pessoal autorizado.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Seus Direitos</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Acessar suas informações pessoais</li>
                    <li>Corrigir dados incompletos ou desatualizados</li>
                    <li>Solicitar a exclusão de seus dados</li>
                    <li>Revogar seu consentimento a qualquer momento</li>
                    <li>Solicitar a portabilidade de seus dados</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Contato</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato conosco:
                </p>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="font-medium">Fundação Joanna de Ângelis</p>
                  <p className="text-sm text-muted-foreground">Email: funjodangelis@yahoo.com.br</p>
                  <p className="text-sm text-muted-foreground">WhatsApp: (22) 99938-2357</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de atualizar esta política periodicamente. Notificaremos sobre 
                  mudanças significativas através do nosso site ou por email.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
