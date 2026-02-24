import type { Metadata } from 'next';

const locales = ['en', 'ja', 'ko'] as const;

const siteConfig = {
  name: 'The Living Textbook',
  url: 'https://thelivingtextbook.lokalingo.com',
  description: 'A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.',
};

function generateAlternates(path: string, locale: string) {
  const normalizedPath = path === '/' ? '' : path;
  const languages: Record<string, string> = {};
  locales.forEach((loc) => {
    languages[loc] = `${siteConfig.url}/${loc}${normalizedPath}`;
  });
  languages['x-default'] = `${siteConfig.url}/en${normalizedPath}`;

  return {
    canonical: `${siteConfig.url}/${locale}${normalizedPath}`,
    languages,
  };
}

function getOgLocale(locale: string): string {
  if (locale === 'ja') return 'ja_JP';
  if (locale === 'ko') return 'ko_KR';
  return 'en_US';
}

type PageKey = 'home' | 'features' | 'educators' | 'learners';

const pageSeo: Record<PageKey, Record<string, { title: string; description: string }>> = {
  home: {
    en: {
      title: 'AI-Powered Language Learning Platform',
      description: 'A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.',
    },
    ja: {
      title: 'AI搭載言語学習プラットフォーム',
      description: '会話から生まれるカリキュラム。AIを活用し、神経科学に基づき、教育者のために教育者が構築した語学学習プラットフォームです。',
    },
    ko: {
      title: 'AI 기반 언어 학습 플랫폼',
      description: '대화에서 배우는 커리큘럼. AI로 구동되고, 신경과학에 기반하며, 교육자가 교육자를 위해 만든 언어 학습 플랫폼입니다.',
    },
  },
  features: {
    en: {
      title: 'Canvas, AI Assessment & Spaced Repetition Features',
      description: 'Explore The Living Textbook platform features: Canvas system for real-time lesson capture, AI assessment engine, student management, booking, spaced repetition, and BYOK AI integration.',
    },
    ja: {
      title: '機能 - キャンバス・AI評価・間隔反復',
      description: 'リアルタイムレッスンキャプチャのキャンバスシステム、5次元AI評価エンジン、生徒管理、予約、間隔反復、CEFR対応、BYOK AI統合機能。',
    },
    ko: {
      title: '기능 - 캔버스, AI 평가, 간격 반복',
      description: '실시간 수업 캡처 캔버스 시스템, 5차원 AI 평가 엔진, 학생 관리, 예약, 간격 반복, CEFR 레벨 추적, BYOK AI 통합 기능.',
    },
  },
  educators: {
    en: {
      title: 'AI Teaching Tools for Independent Language Educators',
      description: 'Built for educators who want control. Canvas workflow, AI-powered assessment, student management, and flat $6/seat pricing with no commissions. Keep nearly 94% of your earnings.',
    },
    ja: {
      title: '教育者向け - AI教育ツール',
      description: 'キャンバスワークフロー、AI搭載評価、生徒管理を定額$6/席で。手数料なしで収入の約94%を維持でき、独立した教育が実現します。',
    },
    ko: {
      title: '교육자용 - AI 교육 도구',
      description: '캔버스 워크플로우, AI 기반 평가, 학생 관리를 정액 $6/석으로. 수수료 없이 수입의 약 94%를 유지하며 독립적인 교육이 가능합니다.',
    },
  },
  learners: {
    en: {
      title: 'Track Your Language Progress with AI Assessment',
      description: 'Your real conversations become your curriculum. Track progress across 5 skill dimensions with AI-powered review, spaced repetition, and CEFR-aligned assessments.',
    },
    ja: {
      title: '学習者向け - AI評価で進捗を可視化',
      description: '実際の会話から生まれるパーソナライズされたカリキュラム。AI搭載レビューで5つのスキル次元の進捗を追跡し、間隔反復で定着させます。',
    },
    ko: {
      title: '학습자용 - AI 평가로 진행 상황 추적',
      description: '실제 대화에서 만들어지는 맞춤형 커리큘럼. AI 기반 리뷰로 5가지 스킬 차원의 진행 상황을 추적하고, 간격 반복으로 학습을 정착시킵니다.',
    },
  },
};

export const getPageSeo = (page: PageKey, locale: string, path: string = ''): Metadata => {
  const seo = pageSeo[page]?.[locale] || pageSeo[page]?.en;
  return {
    title: seo.title,
    description: seo.description,
    alternates: generateAlternates(path, locale),
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${siteConfig.url}/${locale}${path === '/' ? '' : path}`,
      siteName: siteConfig.name,
      locale: getOgLocale(locale),
      type: 'website',
      images: [{ url: `${siteConfig.url}/logo.png`, width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${siteConfig.url}/logo.png`],
    },
  };
};

export { siteConfig };
