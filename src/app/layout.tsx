import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fundacaojoanna.org.br'),
  title: {
    default: 'Fundação Joanna de Ângelis - ONG em Rio das Ostras',
    template: '%s | Fundação Joanna de Ângelis'
  },
  description: 'A Fundação Joanna de Ângelis é uma ONG sem fins lucrativos que atua em Rio das Ostras, RJ, promovendo assistência social, educação e desenvolvimento comunitário há mais de 20 anos.',
  keywords: ['ONG', 'Fundação Joanna', 'Rio das Ostras', 'assistência social', 'doação', 'voluntariado', 'caridade', 'ajuda social', 'terceiro setor', 'filantropia'],
  authors: [{ name: 'Fundação Joanna de Ângelis' }],
  creator: 'Fundação Joanna de Ângelis',
  publisher: 'Fundação Joanna de Ângelis',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://fundacaojoanna.org.br',
    title: 'Fundação Joanna de Ângelis - Transformando Vidas em Rio das Ostras',
    description: 'ONG sem fins lucrativos que promove assistência social, educação e desenvolvimento comunitário há mais de 20 anos.',
    siteName: 'Fundação Joanna de Ângelis',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'Logo Fundação Joanna de Ângelis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fundação Joanna de Ângelis',
    description: 'ONG transformando vidas em Rio das Ostras há mais de 20 anos',
    images: ['/logo.webp'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logoSemFundo.png',
    apple: '/logoSemFundo.png',
  },
  verification: {
    // Adicione seus códigos de verificação aqui quando obtê-los
    // google: 'seu-codigo-google',
    // yandex: 'seu-codigo-yandex',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
