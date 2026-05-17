import whyIDeletedMyUseMemos from './articles-content/why-i-deleted-my-usememos.md?raw';
import shippingARestaurantOs from './articles-content/shipping-a-restaurant-os.md?raw';
import tddOnRealProducts from './articles-content/tdd-on-real-products.md?raw';
import reactArchitectureAtScale from './articles-content/react-architecture-at-scale.md?raw';
import extremeProgrammingMercadona from './articles-content/extreme-programming-mercadona.md?raw';

export const articles = [
  {
    slug: 'why-i-deleted-my-usememos',
    title: 'Why I deleted all my useMemos but my app is still slow',
    subtitle: 'React Compiler — the realistic guide',
    excerpt:
      'Originally published in the Mercadona Tech newsletter. A lab project comparing three React rendering strategies: no optimization, manual memoization, and the new React Compiler — with hard numbers from the Profiler.',
    cover: '/assets/articles/react-compiler/cover.jpeg',
    date: '2026-03-30',
    readingTime: '10 min read',
    tags: ['React', 'Performance', 'Architecture'],
    signature: 'Pablo Fuentes — Frontend Engineer @ Mercadona Online',
    canonicalUrl:
      'https://www.linkedin.com/pulse/por-qu%C3%A9-borr%C3%A9-mis-usememo-pero-mi-app-sigue-lenta-mercadonatech-e3fee/',
    canonicalSource: 'Mercadona Tech newsletter',
    content: whyIDeletedMyUseMemos,
  },
  {
    slug: 'shipping-a-restaurant-os',
    title: 'Shipping a restaurant OS as a founding engineer',
    excerpt:
      'Lessons from building Plattio from zero to 50+ restaurants in production. Architecture decisions, scope cuts, and what I would do differently.',
    cover: '/assets/articles/article-1.jpg',
    date: '2026-05-10',
    readingTime: '8 min read',
    tags: ['Engineering', 'Product'],
    draft: true,
    content: shippingARestaurantOs,
  },
  {
    slug: 'tdd-on-real-products',
    title: 'TDD on real products, not katas',
    excerpt:
      'Why test-driven development survives contact with real codebases — and the small adjustments that make it stick on a shipping team.',
    cover: '/assets/articles/article-2.jpg',
    date: '2026-04-22',
    readingTime: '6 min read',
    tags: ['Engineering', 'Testing'],
    draft: true,
    content: tddOnRealProducts,
  },
  {
    slug: 'react-architecture-at-scale',
    title: 'React architecture that survives the team growing',
    excerpt:
      'How to structure a React app so that the second, fifth, and tenth engineer can ship without stepping on each other.',
    cover: '/assets/articles/article-3.jpg',
    date: '2026-03-15',
    readingTime: '10 min read',
    tags: ['React', 'Architecture'],
    draft: true,
    content: reactArchitectureAtScale,
  },
  {
    slug: 'extreme-programming-mercadona',
    title: 'What I learned about XP at Mercadona Tech',
    excerpt:
      'Pair programming, no estimates, and continuous deployment — the parts of Extreme Programming that actually changed how I work.',
    cover: '/assets/articles/article-4.jpg',
    date: '2026-02-28',
    readingTime: '7 min read',
    tags: ['Engineering', 'Culture'],
    draft: true,
    content: extremeProgrammingMercadona,
  },
];

export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug, limit = 3) {
  return articles
    .filter((article) => article.slug !== slug && !article.draft)
    .slice(0, limit);
}

export function formatArticleDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
