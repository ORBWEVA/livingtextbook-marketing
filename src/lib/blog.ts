// Blog post metadata - managed by n8n workflow
// New posts are prepended to the array (newest first)

export interface BlogPostMeta {
  id: string;        // Unique ID, format: "loka-{timestamp}"
  slug: string;      // URL-safe slug, e.g., "interactive-whiteboard-teaching-20260215"
  slugs?: {          // Optional locale-specific slugs for AI SEO
    ja?: string;
    ko?: string;
  };
  date: string;      // ISO date, e.g., "2026-02-15"
  category: string;  // One of: "Platform", "Learning Science", "AI", "Teaching", "Assessment", "Technology", "Trending"
  readTime: string;  // e.g., "8 min read"
  author: string;    // e.g., "Loka Team"
  heroImage?: string; // Optional AI-generated hero image URL
}

export interface BlogPost extends BlogPostMeta {
  title: string;
  excerpt: string;
  content: string;
}

export interface BlogMessages {
  blog: {
    pageTitle: string;
    pageSubtitle: string;
    backToBlog: string;
    readMore: string;
    noPosts?: string;
    posts: {
      [id: string]: {
        title: string;
        excerpt: string;
        content: string;
      };
    };
  };
}

// Blog posts array - n8n workflow prepends new posts here
// DO NOT manually edit - changes will be overwritten by automation
export const blogPosts: BlogPostMeta[] = [
  {
    id: 'loka-1774983904753',
    slug: 'independent-language-teacher-tools-2026-20260401',
    slugs: {
      ja: '--20260401',
    },
    date: '2026-04-01',
    category: 'Teaching',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774983904753.png',
  },
  {
    id: 'loka-1774897504319',
    slug: 'ai-language-teaching-assistant-2026-20260331',
    slugs: {
      ko: 'ai-2026-20260331',
      ja: 'ai-2026-20260331',
    },
    date: '2026-03-31',
    category: 'AI',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774897504319.png',
  },
  {
    id: 'loka-1774811104849',
    slug: 'spaced-repetition-language-learning-2026-20260330',
    slugs: {
      ko: 'the-living-textbook--20260330',
      ja: 'the-living-textbook--20260330',
    },
    date: '2026-03-30',
    category: 'Learning Science',
    readTime: '14 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774811104849.png',
  },
  {
    id: 'loka-1774728304446',
    slug: 'interactive-whiteboard-language-teaching-20260329',
    slugs: {
      ko: '--20260329',
      ja: '--20260329',
    },
    date: '2026-03-29',
    category: 'Platform',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774728304446.png',
  },
  {
    id: 'loka-1774641904652',
    slug: 'ai-powered-tutoring-innovations-for-personalized-l-20260328',
    slugs: {
      ko: '-2026--20260328',
      ja: 'edtech-2026--20260328',
    },
    date: '2026-03-28',
    category: 'Trending',
    readTime: '8 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774641904652.png',
  },
  {
    id: 'loka-1774555505267',
    slug: 'language-learning-platform-comparison-2026-20260327',
    slugs: {
      ko: 'duolingo-vs--20260327',
      ja: 'duolingo-vs--20260327',
    },
    date: '2026-03-27',
    category: 'Technology',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774555505267.png',
  },
  {
    id: 'loka-1774469104452',
    slug: 'cefr-aligned-language-assessment-tools-20260326',
    slugs: {
      ko: 'cefr--20260326',
      ja: 'cefr--20260326',
    },
    date: '2026-03-26',
    category: 'Assessment',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774469104452.png',
  },
  {
    id: 'loka-1774382704495',
    slug: 'independent-language-teacher-tools-2026-20260325',
    slugs: {
      ko: '--20260325',
      ja: '--20260325',
    },
    date: '2026-03-25',
    category: 'Teaching',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774382704495.png',
  },
  {
    id: 'loka-1774296304825',
    slug: 'ai-language-teaching-assistant-2026-20260324',
    slugs: {
      ko: 'ai-2026-20260324',
      ja: 'ai-2026-20260324',
    },
    date: '2026-03-24',
    category: 'AI',
    readTime: '10 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774296304825.png',
  },
  {
    id: 'loka-1774209904064',
    slug: 'spaced-repetition-language-learning-2026-20260323',
    slugs: {
      ko: 'the-living-textbook--20260323',
      ja: 'the-living-textbook--20260323',
    },
    date: '2026-03-23',
    category: 'Learning Science',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774209904064.png',
  },
  {
    id: 'loka-1774123504371',
    slug: 'interactive-whiteboard-language-teaching-20260322',
    slugs: {
      ko: '--20260322',
      ja: '--20260322',
    },
    date: '2026-03-22',
    category: 'Platform',
    readTime: '8 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774123504371.png',
  },
  {
    id: 'loka-1774037105005',
    slug: 'ai-powered-emotional-intelligence-tutors-revolutio-20260321',
    slugs: {
      ko: '-2026--20260321',
      ja: 'edtech-2026--20260321',
    },
    date: '2026-03-21',
    category: 'Trending',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1774037105005.png',
  },
  {
    id: 'loka-1773864304711',
    slug: 'cefr-aligned-language-assessment-tools-20260319',
    slugs: {
      ko: 'cefr--20260319',
      ja: 'cefr--20260319',
    },
    date: '2026-03-19',
    category: 'Assessment',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773864304711.png',
  },
  {
    id: 'loka-1773777904488',
    slug: 'independent-language-teacher-tools-2026-20260318',
    slugs: {
      ko: '--20260318',
      ja: '--20260318',
    },
    date: '2026-03-18',
    category: 'Teaching',
    readTime: '15 min read',
    author: 'Ryan Ahamer',
  },
  {
    id: 'loka-1773691505398',
    slug: 'ai-language-teaching-assistant-2026-20260317',
    slugs: {
      ko: 'ai-2026-20260317',
      ja: 'ai-2026-20260317',
    },
    date: '2026-03-17',
    category: 'AI',
    readTime: '10 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773691505398.png',
  },
  {
    id: 'loka-1773605104586',
    slug: 'spaced-repetition-language-learning-2026-20260316',
    slugs: {
      ko: 'the-living-textbook--20260316',
      ja: 'the-living-textbook--20260316',
    },
    date: '2026-03-16',
    category: 'Learning Science',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773605104586.png',
  },
  {
    id: 'loka-1773518704821',
    slug: 'interactive-whiteboard-language-teaching-20260315',
    slugs: {
      ko: '--20260315',
    },
    date: '2026-03-15',
    category: 'Platform',
    readTime: '15 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773518704821.png',
  },
  {
    id: 'loka-1773432304367',
    slug: 'ai-powered-emotion-recognition-in-language-learnin-20260314',
    slugs: {
      ko: '-2026--20260314',
      ja: 'edtech-2026--20260314',
    },
    date: '2026-03-14',
    category: 'Trending',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773432304367.png',
  },
  {
    id: 'loka-1773259504913',
    slug: 'cefr-aligned-language-assessment-tools-20260312',
    slugs: {
      ko: 'cefr--20260312',
      ja: 'cefr--20260312',
    },
    date: '2026-03-12',
    category: 'Assessment',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773259504913.png',
  },
  {
    id: 'loka-1773173104333',
    slug: 'independent-language-teacher-tools-2026-20260311',
    slugs: {
      ko: '--20260311',
      ja: '--20260311',
    },
    date: '2026-03-11',
    category: 'Teaching',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773173104333.png',
  },
  {
    id: 'loka-1773086704442',
    slug: 'ai-language-teaching-assistant-2026-20260310',
    slugs: {
      ko: 'ai-2026-20260310',
      ja: 'ai-2026-20260310',
    },
    date: '2026-03-10',
    category: 'AI',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773086704442.png',
  },
  {
    id: 'loka-1773000304406',
    slug: 'spaced-repetition-language-learning-2026-20260309',
    slugs: {
      ko: 'the-living-textbook--20260309',
      ja: 'the-living-textbook--20260309',
    },
    date: '2026-03-09',
    category: 'Learning Science',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773000304406.png',
  },
  {
    id: 'loka-1772913904509',
    slug: 'interactive-whiteboard-language-teaching-20260308',
    slugs: {
      ko: '--20260308',
      ja: '--20260308',
    },
    date: '2026-03-08',
    category: 'Platform',
    readTime: '15 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772913904509.png',
  },
  {
    id: 'loka-1772827504163',
    slug: 'ai-powered-emotional-intelligence-tutors-revolutio-20260307',
    slugs: {
      ko: '-2026--20260307',
      ja: 'edtech-2026--20260307',
    },
    date: '2026-03-07',
    category: 'Trending',
    readTime: '9 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772827504163.png',
  },
  {
    id: 'loka-1772741104626',
    slug: 'language-learning-platform-comparison-2026-20260306',
    slugs: {
      ko: 'duolingo-vs--20260306',
      ja: 'duolingo-vs--20260306',
    },
    date: '2026-03-06',
    category: 'Technology',
    readTime: '15 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772741104626.png',
  },
  {
    id: 'loka-1772654704674',
    slug: 'cefr-aligned-language-assessment-tools-20260305',
    slugs: {
      ko: 'cefr--20260305',
      ja: 'cefr--20260305',
    },
    date: '2026-03-05',
    category: 'Assessment',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772654704674.png',
  },
  {
    id: 'loka-1772568306984',
    slug: 'independent-language-teacher-tools-2026-20260304',
    slugs: {
      ko: '--20260304',
      ja: '--20260304',
    },
    date: '2026-03-04',
    category: 'Teaching',
    readTime: '10 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772568306984.png',
  },
  {
    id: 'loka-1772481904715',
    slug: 'ai-language-teaching-assistant-2026-20260303',
    slugs: {
      ko: 'ai-2026-20260303',
      ja: 'ai-2026-20260303',
    },
    date: '2026-03-03',
    category: 'AI',
    readTime: '14 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772481904715.png',
  },
  {
    id: 'loka-1772395504494',
    slug: 'spaced-repetition-language-learning-2026-20260302',
    slugs: {
      ko: 'the-living-textbook--20260302',
      ja: 'the-living-textbook--20260302',
    },
    date: '2026-03-02',
    category: 'Learning Science',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772395504494.png',
  },
  {
    id: 'loka-1772309104935',
    slug: 'interactive-whiteboard-language-teaching-20260301',
    slugs: {
      ko: '--20260301',
      ja: '--20260301',
    },
    date: '2026-03-01',
    category: 'Platform',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772309104935.png',
  },
  {
    id: 'loka-1772222704591',
    slug: 'ai-powered-emotional-intelligence-tutors-revolutio-20260228',
    slugs: {
      ko: '-2026--20260228',
      ja: 'edtech-2026--20260228',
    },
    date: '2026-02-28',
    category: 'Trending',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772222704591.png',
  },
  {
    id: 'loka-1772136304294',
    slug: 'language-learning-platform-comparison-2026-20260227',
    slugs: {
      ko: 'duolingo-vs--20260227',
      ja: 'duolingo-vs--20260227',
    },
    date: '2026-02-27',
    category: 'Technology',
    readTime: '10 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772136304294.png',
  },
  {
    id: 'loka-1772057304289',
    slug: 'cefr-aligned-language-assessment-tools-20260226',
    slugs: {
      ko: 'cefr--20260226',
      ja: 'cefr--20260226',
    },
    date: '2026-02-26',
    category: 'Assessment',
    readTime: '9 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772057304289.png',
  },
  {
    id: 'loka-1771929006675',
    slug: 'ai-language-teaching-assistant-2026-20260224',
    slugs: {
      ja: 'ai-gogaku-kyouiku-assistant-2026',
      ko: 'ai-eohag-gyoyug-bojo-2026',
    },
    date: '2026-02-24',
    category: 'AI',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771929006675.png',
  },
  {
    id: 'loka-1771842606916',
    slug: 'spaced-repetition-language-learning-2026-20260223',
    slugs: {
      ja: 'kankaku-hanpuku-gengo-gakushuu-2026',
      ko: 'gangyeok-banbog-eohag-hakseup-2026',
    },
    date: '2026-02-23',
    category: 'Learning Science',
    readTime: '8 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771842606916.png',
  },
  {
    id: 'loka-1771756206753',
    slug: 'interactive-whiteboard-language-teaching-20260222',
    slugs: {
      ja: 'interactive-whiteboard-gogaku-kyouiku',
      ko: 'interactive-whiteboard-eohag-gyoyug',
    },
    date: '2026-02-22',
    category: 'Platform',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771756206753.png?v=2',
  },
  {
    id: 'loka-1771669807772',
    slug: 'ai-powered-real-time-language-tutoring-how-multimo-20260221',
    slugs: {
      ja: 'edtech-trend-gogaku-kyouiku-2026',
      ko: 'edtech-trend-eohag-hakseup-2026',
    },
    date: '2026-02-21',
    category: 'Trending',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771669807772.png',
  },
  {
    id: 'loka-1771583407497',
    slug: 'language-learning-platform-comparison-2026-20260220',
    slugs: {
      ja: 'gogaku-gakushuu-platform-hikaku-2026',
      ko: 'eohag-hakseup-platform-bigyo-2026',
    },
    date: '2026-02-20',
    category: 'Technology',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771583407497.png?v=2',
  },
  {
    id: 'loka-1771497006991',
    slug: 'cefr-aligned-language-assessment-tools-20260219',
    slugs: {
      ja: 'cefr-gogaku-hyouka-tool-2026',
      ko: 'cefr-eohag-pyeongga-dogu-2026',
    },
    date: '2026-02-19',
    category: 'Assessment',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771497006991.png',
  },
  {
    id: 'loka-1771410608177',
    slug: 'independent-language-teacher-tools-2026-20260218',
    slugs: {
      ja: 'eikaiwa-school-kanri-soft-mirai',
      ko: 'hagwon-gwanri-software-hyeogsin-2026',
    },
    date: '2026-02-18',
    category: 'Teaching',
    readTime: '12 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771410608177.png',
  },
  {
    id: 'loka-1771297210445',
    slug: 'ai-language-teaching-assistant-2026-20260217',
    date: '2026-02-17',
    category: 'AI',
    readTime: '9 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771297210445.png?v=3',
  },
  {
    id: 'loka-1771237807261',
    slug: 'spaced-repetition-language-learning-2026-20260216',
    slugs: {
      ja: 'kankaku-hanpuku-gogaku-gakushuu-guide-2026',
      ko: 'gangyeok-banbog-eohag-hakseup-ai-2026',
    },
    date: '2026-02-16',
    category: 'Learning Science',
    readTime: '8 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771237807261.png?v=3',
  },
  {
    id: 'loka-1771077825805',
    slug: 'interactive-whiteboard-language-teaching-20260215',
    date: '2026-02-14',
    category: 'Platform',
    readTime: '8 min read',
    author: 'Ryan Ahamer',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771077825805.png?v=2',
  },
];

// LTB blog categories — product and learning science focused
export const blogCategories = ['Platform', 'Learning Science', 'AI', 'Teaching', 'Assessment', 'Technology', 'Trending'] as const;
export type BlogCategory = typeof blogCategories[number];

// Helper: get localized slug or fallback to base slug
export function getLocalizedSlug(post: BlogPostMeta, locale: string): string {
  if (locale === 'en') return post.slug;
  const localizedSlug = post.slugs?.[locale as keyof typeof post.slugs];
  return localizedSlug || post.slug;
}

// Helper: find which locale a slug belongs to
export function findSlugLocale(slug: string): { post: BlogPostMeta; locale: string } | undefined {
  const decodedSlug = decodeURIComponent(slug);
  for (const post of blogPosts) {
    if (post.slug === decodedSlug) return { post, locale: 'en' };
    if (post.slugs?.ja === decodedSlug) return { post, locale: 'ja' };
    if (post.slugs?.ko === decodedSlug) return { post, locale: 'ko' };
  }
  return undefined;
}

// Helper: get full blog post with content from messages
export function getFullBlogPost(slug: string, messages: BlogMessages, locale?: string): BlogPost | undefined {
  const decodedSlug = decodeURIComponent(slug);

  const meta = blogPosts.find(post => {
    if (locale === 'ja' && post.slugs?.ja === decodedSlug) return true;
    if (locale === 'ko' && post.slugs?.ko === decodedSlug) return true;
    return post.slug === decodedSlug;
  });
  if (!meta) return undefined;

  const postContent = messages.blog?.posts?.[meta.id];
  if (!postContent) return undefined;

  return { ...meta, ...postContent };
}

// Helper: get all blog posts with content
export function getAllBlogPosts(messages: BlogMessages): BlogPost[] {
  return blogPosts
    .map(meta => {
      const postContent = messages.blog?.posts?.[meta.id];
      if (!postContent) return null;
      return { ...meta, ...postContent };
    })
    .filter((post): post is BlogPost => post !== null);
}

// Helper: get blog posts filtered by category
export function getBlogPostsByCategory(category: string, messages: BlogMessages): BlogPost[] {
  return getAllBlogPosts(messages).filter(post => post.category === category);
}
