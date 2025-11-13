import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notícias e Novidades",
  description: "Acompanhe as últimas notícias e novidades da Fundação Joanna de Ângelis. Fique por dentro dos projetos, eventos e ações sociais em Rio das Ostras.",
  keywords: ['notícias', 'novidades', 'eventos', 'projetos sociais', 'ações sociais', 'CMDCA', 'Rio das Ostras'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/noticias',
  },
  openGraph: {
    title: "Notícias - Fundação Joanna de Ângelis",
    description: "Últimas notícias e eventos da nossa fundação",
    type: "website",
  },
};

export default function NoticiasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
