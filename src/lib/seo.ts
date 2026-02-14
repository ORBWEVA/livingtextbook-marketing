import type { Metadata } from 'next';

const siteConfig = {
  name: 'The Living Textbook',
  url: 'https://thelivingtextbook.lokalingo.com',
  description: 'A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.',
};

type PageKey = 'home' | 'features' | 'educators' | 'learners';

const pageSeo: Record<PageKey, Record<string, { title: string; description: string }>> = {
  home: {
    en: {
      title: 'The Living Textbook | AI-Powered Language Learning Platform',
      description: 'A curriculum that learns from you. Powered by AI. Guided by neuroscience. Built by educators, for educators.',
    },
    ja: {
      title: 'ザ・リビング テキストブック | AI搭載言語学習プラットフォーム',
      description: 'あなたから学ぶカリキュラム。AIを活用し、神経科学に基づき、教育者のために教育者が構築しました。',
    },
    ko: {
      title: '더 리빙 텍스트북 | AI 기반 언어 학습 플랫폼',
      description: '당신에게서 배우는 커리큘럼. AI로 구동되고, 신경과학에 기반하며, 교육자가 교육자를 위해 만들었습니다.',
    },
  },
  features: {
    en: {
      title: 'Features | The Living Textbook',
      description: 'Canvas system, AI assessment engine, student management, booking, spaced repetition, CEFR levels, and BYOK AI integration.',
    },
    ja: {
      title: '機能 | ザ・リビング テキストブック',
      description: 'キャンバスシステム、AI評価エンジン、生徒管理、予約、間隔反復、CEFRレベル、BYOK AI統合。',
    },
    ko: {
      title: '기능 | 더 리빙 텍스트북',
      description: '캔버스 시스템, AI 평가 엔진, 학생 관리, 예약, 간격 반복, CEFR 레벨, BYOK AI 통합.',
    },
  },
  educators: {
    en: {
      title: 'For Educators | The Living Textbook',
      description: 'Canvas workflow, AI assessment, student management, and flat $6/seat pricing. Keep nearly 94% of your earnings.',
    },
    ja: {
      title: '教育者向け | ザ・リビング テキストブック',
      description: 'キャンバスワークフロー、AI評価、生徒管理、定額$6/席。収入の約94%を維持できます。',
    },
    ko: {
      title: '교육자용 | 더 리빙 텍스트북',
      description: '캔버스 워크플로우, AI 평가, 학생 관리, 정액 $6/석. 수입의 약 94%를 유지하세요.',
    },
  },
  learners: {
    en: {
      title: 'For Learners | The Living Textbook',
      description: 'Personalized curriculum from your real conversations. Track progress across 5 skill dimensions with AI-powered review.',
    },
    ja: {
      title: '学習者向け | ザ・リビング テキストブック',
      description: '実際の会話から生まれるパーソナライズされたカリキュラム。AI搭載レビューで5つのスキル次元の進捗を追跡。',
    },
    ko: {
      title: '학습자용 | 더 리빙 텍스트북',
      description: '실제 대화에서 만들어지는 맞춤형 커리큘럼. AI 기반 리뷰로 5가지 스킬 차원의 진행 상황을 추적하세요.',
    },
  },
};

export const getPageSeo = (page: PageKey, locale: string): Metadata => {
  const seo = pageSeo[page]?.[locale] || pageSeo[page]?.en;
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  };
};

export { siteConfig };
