'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Heart, Compass, Zap, Key, PenLine, Brain, CheckCircle, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCard, FadeIn } from '@/components/ui/animated-card';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { useState } from 'react';

const pillarIcons = { nurture: Heart, guide: Compass, accelerate: Zap };

export default function HomeContent() {
  const t = useTranslations('home');
  const locale = useLocale();
  const [activeTab, setActiveTab] = useState<'educator' | 'learner'>('educator');

  return (
    <>
      {/* Hero */}
      <section className="relative py-hero overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
        <div className="container-custom relative text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-balance">
              {t('hero.title')}
            </h1>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-10 text-balance">
              {t('hero.subtitle')}
            </p>
          </FadeIn>
          <FadeIn delay={200}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="xl">
                <Link href="/login">{t('hero.primaryCta')}</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href={`/${locale}/features`}>{t('hero.secondaryCta')}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-center mb-16">{t('pillars.sectionTitle')}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {(['nurture', 'guide', 'accelerate'] as const).map((pillar, i) => {
              const Icon = pillarIcons[pillar];
              return (
                <FadeIn key={pillar} delay={i * 100}>
                  <AnimatedCard className="p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-accent">{t(`pillars.${pillar}.title`)}</span>
                        <p className="text-sm text-muted-foreground">{t(`pillars.${pillar}.subtitle`)}</p>
                      </div>
                    </div>
                    <p className="text-text mb-4">{t(`pillars.${pillar}.description`)}</p>
                    <ul className="space-y-2 mt-auto">
                      {(t.raw(`pillars.${pillar}.bullets`) as string[]).map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text">
                          <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* BYOK */}
      <section className="py-section">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 mb-4">
                <Key className="w-6 h-6 text-accent" />
                <span className="text-xs font-bold uppercase tracking-widest text-accent">BYOK</span>
              </div>
              <h2 className="mb-4">{t('byok.title')}</h2>
              <p className="text-text max-w-2xl mx-auto">{t('byok.description')}</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {(t.raw('byok.cards') as Array<{ title: string; description: string }>).map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <AnimatedCard className="p-6 h-full">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-text text-sm">{card.description}</p>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-sm text-muted-foreground italic">{t('byok.beta')}</p>
          </FadeIn>
        </div>
      </section>

      {/* Canvas System */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <PenLine className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="mb-4">{t('canvas.title')}</h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {(t.raw('canvas.items') as Array<{ abbr: string; title: string; description: string }>).map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <AnimatedCard className="p-6 h-full text-center">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full mb-3">{item.abbr}</span>
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-text">{item.description}</p>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-text italic max-w-2xl mx-auto">{t('canvas.message')}</p>
          </FadeIn>
        </div>
      </section>

      {/* AI Assessment */}
      <section className="py-section">
        <div className="container-custom">
          <FadeIn>
            <div className="text-center mb-12">
              <Brain className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="mb-4">{t('assessment.title')}</h2>
              <p className="text-text max-w-2xl mx-auto mb-2">{t('assessment.description')}</p>
              <p className="text-sm text-accent font-medium">{t('assessment.levels')}</p>
            </div>
          </FadeIn>
          <div className="max-w-2xl mx-auto space-y-4">
            {(t.raw('assessment.dimensions') as Array<{ abbr: string; title: string }>).map((dim, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex items-center gap-4 bg-card border border-border rounded-lg p-4">
                  <span className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-sm font-bold text-accent flex-shrink-0">{dim.abbr}</span>
                  <span className="font-medium">{dim.title}</span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full" style={{ width: `${65 + i * 5}%` }} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Educator vs Learner Tabs */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom max-w-3xl">
          <FadeIn>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-lg border border-border bg-card p-1">
                <button
                  onClick={() => setActiveTab('educator')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'educator' ? 'bg-accent text-accent-foreground' : 'text-text hover:text-primary'}`}
                >
                  {t('tabs.educatorTab')}
                </button>
                <button
                  onClick={() => setActiveTab('learner')}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'learner' ? 'bg-accent text-accent-foreground' : 'text-text hover:text-primary'}`}
                >
                  {t('tabs.learnerTab')}
                </button>
              </div>
            </div>
          </FadeIn>
          <AnimatedCard className="p-8">
            <ul className="space-y-4 mb-8">
              {(t.raw(`tabs.${activeTab}.items`) as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-text">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="accent" size="lg" className="w-full sm:w-auto">
              <Link href="/login">{t(`tabs.${activeTab}.cta`)}</Link>
            </Button>
          </AnimatedCard>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-section">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-center mb-12">{t('testimonials.title')}</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {(t.raw('testimonials.items') as Array<{ quote: string; name: string; title: string }>).map((item, i) => (
              <FadeIn key={i} delay={i * 100}>
                <AnimatedCard className="p-8 h-full">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  <p className="text-text italic mb-6 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.title}</p>
                  </div>
                </AnimatedCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-muted/50 dark:bg-secondary/50">
        <div className="container-custom">
          <FadeIn>
            <h2 className="text-center mb-12">{t('faq.title')}</h2>
          </FadeIn>
          <FAQAccordion
            categories={[{
              title: '',
              items: (t.raw('faq.items') as Array<{ question: string; answer: string }>),
            }]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-section bg-primary dark:bg-[hsl(230,60%,8%)]">
        <div className="container-custom text-center">
          <FadeIn>
            <h2 className="text-white mb-8 max-w-2xl mx-auto">{t('finalCta.title')}</h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="accent" size="xl">
                <Link href="/login">{t('finalCta.primaryCta')}</Link>
              </Button>
              <Button asChild size="xl" className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
                <a href="https://lokalingo.com/en/contact">{t('finalCta.secondaryCta')}</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
