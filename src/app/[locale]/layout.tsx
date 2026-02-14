import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Exo_2, Noto_Sans_JP, JetBrains_Mono } from 'next/font/google';
import { Header, Footer } from "@/components/layout";
import { ThemeProvider } from "@/components/ThemeProvider";
import { locales, type Locale } from '@/i18n';

const exo2 = Exo_2({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-exo2',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "The Living Textbook",
  alternateName: "Loka The Living Textbook",
  url: "https://thelivingtextbook.lokalingo.com",
  description: "AI-powered language learning platform that builds a personalized curriculum from real conversations. Canvas system, 5-dimension AI assessment, CEFR-aligned progress tracking.",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "6.00",
    priceCurrency: "USD",
    description: "Per active seat, per month",
  },
  creator: {
    "@type": "Organization",
    name: "LokaLingo",
    url: "https://lokalingo.com",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${exo2.variable} ${notoSansJP.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Header />
            <main className="flex-1 overflow-visible">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
