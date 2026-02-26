import { getPageSeo } from '@/lib/seo';
import { getTranslations } from 'next-intl/server';
import HomeContent from '@/components/home/HomeContent';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return getPageSeo('home', locale, '');
}

export default async function HomePage() {
  const t = await getTranslations('home');
  const faqItems = t.raw('faq.items') as Array<{ question: string; answer: string }>;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
