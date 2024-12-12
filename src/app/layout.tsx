import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Mecal - Especialistas em Hidrojateamento Industrial',
  description:
    'Desde 1996, fornecemos soluções de alta pressão para limpeza industrial em todo o Brasil. Serviços especializados como desobstrução de tubulações, limpeza de tanques, manutenção de trocadores de calor, e mais.',
  keywords: [
    'hidrojateamento industrial',
    'limpeza industrial',
    'manutenção preventiva',
    'remoção de incrustações',
    'desobstrução de tubulações',
    'alta pressão',
    'Mecal',
    'limpeza de trocadores de calor',
    'limpeza de tanques',
    'hidrojateamento de alta pressão',
    'segurança em áreas de risco',
  ],
  openGraph: {
    title: 'Mecal - Especialistas em Hidrojateamento Industrial',
    description:
      'Soluções de hidrojateamento para limpeza industrial desde 1996. Serviços especializados como limpeza de trocadores de calor, tubulações, tanques e mais.',
    url: 'https://www.mecal.com.br',
    siteName: 'Mecal',
    images: [
      {
        url: 'https://www.mecal.com.br/images/hidrojateamento-industrial.jpg',
        width: 1200,
        height: 630,
        alt: 'Hidrojateamento industrial em ação',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecal - Especialistas em Hidrojateamento Industrial',
    description:
      'Desde 1996, a Mecal oferece hidrojateamento de alta pressão para soluções industriais seguras e eficientes.',
    images: [
      {
        url: 'https://www.mecal.com.br/images/hidrojateamento-industrial.jpg',
        alt: 'Hidrojateamento industrial em ação',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.mecal.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={openSans.className}>
      <body className='antialiased min-h-screen flex flex-col'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
