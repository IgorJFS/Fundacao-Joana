import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça Sua Doação",
  description: "Faça sua doação para a Fundação Joanna de Ângelis via PIX, transferência bancária ou cartão. Cada contribuição transforma vidas em Rio das Ostras.",
  keywords: ['doação', 'doar', 'PIX', 'transferência bancária', 'contribuir', 'ajudar', 'caridade', 'ONG'],
  alternates: {
    canonical: 'https://fundacaojoanna.org.br/doacao',
  },
  openGraph: {
    title: "Faça Sua Doação - Fundação Joanna de Ângelis",
    description: "Contribua com a transformação de vidas. Doe via PIX, transferência ou cartão.",
    type: "website",
  },
};

export default function DoacaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
