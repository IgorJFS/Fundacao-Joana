import { Metadata } from "next";
import { Eye, FileText, Users, TrendingUp, PieChart, Download, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Transparência",
  description: "Informações sobre transparência, prestação de contas e relatórios da Fundação Joanna de Ângelis.",
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/transparencia',
  },
};

export default function Transparencia() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-page">
      <main className="flex-1 pt-20 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Eye className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Transparência</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprometidos com a transparência e prestação de contas, apresentamos informações 
              sobre nossas atividades, finanças e impacto social.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {/* Informações Institucionais */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Informações Institucionais
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Razão Social</p>
                    <p className="font-semibold">Fundação Joanna de Ângelis</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">CNPJ</p>
                    <p className="font-semibold">06.261.897/0001-93</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Ano de Fundação</p>
                    <p className="font-semibold">2003</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Natureza Jurídica</p>
                    <p className="font-semibold">Fundação Privada sem fins lucrativos</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Endereço</p>
                    <p className="font-semibold">Rio das Ostras - RJ</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Contato</p>
                    <p className="font-semibold">(22) 99938-2357</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Áreas de Atuação */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Áreas de Atuação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Assistência Social</p>
                      <p className="text-sm text-muted-foreground">
                        Apoio às famílias em situação de vulnerabilidade social
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Educação</p>
                      <p className="text-sm text-muted-foreground">
                        Programas educacionais e culturais para crianças e adolescentes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Desenvolvimento Comunitário</p>
                      <p className="text-sm text-muted-foreground">
                        Fortalecimento de vínculos e participação social
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold">Direitos da Criança</p>
                      <p className="text-sm text-muted-foreground">
                        Proteção e promoção dos direitos infantojuvenis
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prestação de Contas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Prestação de Contas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A Fundação Joanna de Ângelis mantém registros financeiros detalhados e presta contas 
                  regularmente aos órgãos competentes e à comunidade.
                </p>
                
                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Documentos e Relatórios</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Estatuto Social</p>
                          <p className="text-xs text-muted-foreground">Documento fundacional</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <a 
                          href="/ESTATUTO_2014.pdf" 
                          download="Estatuto_Social_FJA.pdf"
                          className="text-sm text-primary hover:underline flex items-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          Baixar
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Comprovante de Inscrição e de Situação Cadastral</p>
                          <p className="text-xs text-muted-foreground">CNPJ</p>
                        </div>
                      </div>
                      <a 
                        href="/Cnpjreva_Comprovante.pdf" 
                        download="CNPJ_FJA.pdf"
                        className="text-sm text-primary hover:underline flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Baixar
                      </a>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium text-muted-foreground">Balanço Patrimonial</p>
                          <p className="text-xs text-muted-foreground">Em preparação</p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Em breve
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Para solicitar documentos, entre em contato pelo WhatsApp <strong>(22) 99938-2357</strong> ou 
                    email <strong>funjodangelis@yahoo.com.br</strong>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
