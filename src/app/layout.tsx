import type { Metadata, Viewport } from 'next';
import { portfolioData } from '@/data/portfolio';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${portfolioData.name} - ${portfolioData.title}`,
  description: portfolioData.description,
  keywords: [
    'Developer',
    'Portfolio',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Full Stack',
  ],
  authors: [{ name: portfolioData.name }],
  creator: portfolioData.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.description,
    siteName: portfolioData.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f0f23" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
