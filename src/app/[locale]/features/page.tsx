import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { PenLine, Brain, Users, Calendar, RefreshCw, Award, Globe, Key, Code } from 'lucide-react';
import { AnimatedCard, FadeIn } from '@/components/ui/animated-card';
import { getPageSeo } from '@/lib/seo';

const featureIcons = [PenLine, Brain, Users, Calendar, RefreshCw, Award, Globe, Key, Code];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return getPageSeo('features', locale);
}

export default function FeaturesPage() {
  const t = useTranslations('features');

  const cards = t.raw('cards') as Array<{ title: string; description: string }>;

  return (
    <>
      {/* Hero */}
      <section className="py-hero">
        <div className="container-custom text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">{t('hero.title')}</h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-text max-w-2xl mx-auto">{t('hero.subtitle')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, i) => {
              const Icon = featureIcons[i] || Code;
              return (
                <FadeIn key={i} delay={i * 80}>
                  <AnimatedCard className="p-8 h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                    <p className="text-text text-sm leading-relaxed">{card.description}</p>
                  </AnimatedCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
