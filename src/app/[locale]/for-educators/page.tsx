import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCard, FadeIn } from '@/components/ui/animated-card';
import { getPageSeo } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageSeo('educators', locale, '/for-educators');
}

export default function ForEducatorsPage() {
  const t = useTranslations('educators');

  const canvasItems = t.raw('canvasSection.items') as string[];
  const managementItems = t.raw('managementSection.items') as string[];
  const dimensions = t.raw('aiSection.dimensions') as string[];
  const earningsHeaders = t.raw('earnings.headers') as string[];
  const earningsRows = t.raw('earnings.rows') as string[][];

  return (
    <>
      {/* Hero */}
      <section className="py-hero">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('hero.title')}</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-text max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Canvas Workflow */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-center mb-4">{t('canvasSection.title')}</h2>
            <p className="text-center text-text mb-10 max-w-2xl mx-auto">{t('canvasSection.description')}</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {canvasItems.map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text text-sm">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assessment */}
      <section className="py-section">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-center mb-4">{t('aiSection.title')}</h2>
            <p className="text-center text-text mb-10 max-w-2xl mx-auto">{t('aiSection.description')}</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {dimensions.map((dim, i) => (
              <FadeIn key={i} delay={i * 60}>
                <span className="px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">{dim}</span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Student Management */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <h2 className="text-center mb-8">{t('managementSection.title')}</h2>
          </FadeIn>
          <AnimatedCard className="p-8">
            <ul className="space-y-4">
              {managementItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </div>
      </section>

      {/* Earnings Comparison */}
      <section className="py-section">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-center mb-2">{t('earnings.title')}</h2>
            <p className="text-center text-text mb-8">{t('earnings.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent/10">
                    {earningsHeaders.map((h, i) => (
                      <th key={i} className="px-4 py-3 text-left font-semibold text-primary">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {earningsRows.map((row, i) => (
                    <tr key={i} className="border-b border-border">
                      {row.map((cell, j) => (
                        <td key={j} className={`px-4 py-3 ${j === 3 ? 'text-accent font-semibold' : 'text-text'}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-primary dark:bg-[hsl(230,60%,8%)]">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-white mb-2">{t('cta.title')}</h2>
            <p className="text-white/80 mb-8">{t('cta.subtitle')}</p>
          </FadeIn>
          <FadeIn delay={100}>
            <Button asChild variant="accent" size="xl">
              <Link href="/login">{t('cta.button')}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
