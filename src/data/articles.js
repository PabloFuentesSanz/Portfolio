import whyIDeletedMyUseMemos from './articles-content/why-i-deleted-my-usememos.md?raw';
import testsThatSurviveRefactors from './articles-content/tests-that-survive-refactors.md?raw';

export const articles = [
  {
    slug: 'why-i-deleted-my-usememos',
    title: 'Why I deleted all my useMemos but my app is still slow',
    subtitle: 'React Compiler — the realistic guide',
    excerpt:
      'Originally published in the Mercadona Tech newsletter. A lab project comparing three React rendering strategies: no optimization, manual memoization, and the new React Compiler — with hard numbers from the Profiler.',
    cover: '/assets/articles/react-compiler/cover.png',
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
    slug: 'tests-that-survive-refactors',
    title: 'Tests that survive refactors',
    subtitle: 'Frontend TDD with MSW — beyond the 95% coverage trap',
    excerpt:
      'A 95% coverage suite that breaks 400 tests on a library swap isn\'t protecting the product — it\'s protecting the implementation. How black-box TDD with MSW changes that.',
    cover: '/assets/articles/tests-that-survive-refactors/cover.jpeg',
    date: '2026-05-23',
    readingTime: '9 min read',
    tags: ['Testing', 'TDD', 'Frontend'],
    content: testsThatSurviveRefactors,
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
