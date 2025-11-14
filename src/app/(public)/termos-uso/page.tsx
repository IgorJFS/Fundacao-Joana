import { Metadata } from "next";
import { FileText, AlertCircle, Scale, Users, Ban, RefreshCw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso do site da Fundação Joanna de Ângelis.",
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/termos-uso',
  },
  openGraph: {
    title: "Termos de Uso - Fundação Joanna de Ângelis",
    description: "Termos e condições de uso do site da Fundação Joanna de Ângelis",
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

export default function TermosUso() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Termos de Uso</h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8 space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Aceitação dos Termos</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ao acessar e usar o site da Fundação Joanna de Ângelis, você concorda em cumprir e estar 
                  vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer 
                  parte destes termos, não deverá usar nosso site.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Uso do Site</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Ao usar este site, você concorda em:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Não usar o site para qualquer propósito ilegal ou não autorizado</li>
                    <li>Não tentar interferir no funcionamento adequado do site</li>
                    <li>Não coletar informações de outros usuários sem autorização</li>
                    <li>Fornecer informações verdadeiras e precisas quando solicitado</li>
                    <li>Respeitar os direitos de propriedade intelectual</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Propriedade Intelectual</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Todo o conteúdo presente neste site, incluindo textos, imagens, logotipos, gráficos e 
                  software, é propriedade da Fundação Joanna de Ângelis ou de seus fornecedores de conteúdo 
                  e está protegido pelas leis de direitos autorais brasileiras e internacionais.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Doações</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Sobre as doações realizadas através do site:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Todas as doações são voluntárias e não reembolsáveis</li>
                    <li>Recibos serão emitidos para fins de declaração de imposto de renda</li>
                    <li>Os fundos serão utilizados conforme os objetivos da fundação</li>
                    <li>Você pode solicitar informações sobre o uso das doações a qualquer momento</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Ban className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Limitação de Responsabilidade</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A Fundação Joanna de Ângelis não se responsabiliza por quaisquer danos diretos, indiretos, 
                  incidentais ou consequenciais resultantes do uso ou da impossibilidade de usar este site. 
                  Nos esforçamos para manter as informações atualizadas e corretas, mas não garantimos a 
                  completude ou precisão do conteúdo.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Links Externos</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Este site pode conter links para sites externos que não são operados por nós. Não temos 
                  controle sobre o conteúdo e práticas desses sites e não assumimos qualquer responsabilidade 
                  por eles. Recomendamos que você revise os termos e políticas de privacidade de qualquer 
                  site de terceiros que visitar.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Lei Aplicável</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer 
                  disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais 
                  brasileiros.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-semibold">Modificações</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                  entram em vigor imediatamente após a publicação no site. O uso continuado do site após 
                  as modificações constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
                </p>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-medium">Fundação Joanna de Ângelis</p>
                  <p className="text-sm text-muted-foreground">Email: funjodangelis@yahoo.com.br</p>
                  <p className="text-sm text-muted-foreground">WhatsApp: (22) 99938-2357</p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
