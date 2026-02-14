import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCard, FadeIn } from '@/components/ui/animated-card';
import { getPageSeo } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageSeo('learners', locale);
}

export default function ForLearnersPage() {
  const t = useTranslations('learners');

  const learningSteps = t.raw('learningFlow.steps') as Array<{ label: string; description: string }>;
  const dashboardItems = t.raw('dashboardSection.items') as string[];
  const dimensions = t.raw('progressSection.dimensions') as string[];

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

      {/* Learning Flow */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom max-w-4xl">
          <FadeIn>
            <h2 className="text-center mb-12">{t('learningFlow.title')}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="relative">
                  <AnimatedCard className="p-6 text-center h-full">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-3">{i + 1}</span>
                    <h4 className="text-base font-semibold mb-2">{step.label}</h4>
                    <p className="text-sm text-text">{step.description}</p>
                  </AnimatedCard>
                  {i < learningSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-5 h-5 text-accent -translate-y-1/2 z-20" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-section">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <h2 className="text-center mb-8">{t('dashboardSection.title')}</h2>
          </FadeIn>
          <AnimatedCard className="p-8">
            <ul className="space-y-4">
              {dashboardItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedCard>
        </div>
      </section>

      {/* Spaced Repetition */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom max-w-3xl text-center">
          <FadeIn>
            <h2 className="mb-4">{t('spacedRepSection.title')}</h2>
            <p className="text-text leading-relaxed">{t('spacedRepSection.description')}</p>
          </FadeIn>
        </div>
      </section>

      {/* 5 Dimensions */}
      <section className="py-section">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <h2 className="text-center mb-4">{t('progressSection.title')}</h2>
            <p className="text-center text-text mb-10">{t('progressSection.description')}</p>
          </FadeIn>
          <div className="space-y-4">
            {dimensions.map((dim, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                  <span className="font-medium flex-shrink-0 w-48">{dim}</span>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full transition-all" style={{ width: `${60 + i * 7}%` }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
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
