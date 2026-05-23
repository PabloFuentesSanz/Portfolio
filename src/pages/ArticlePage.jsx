import { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import Navigation from '../components/Navigation';
import {
  getArticleBySlug,
  getRelatedArticles,
  formatArticleDate,
} from '../data/articles';
import './ArticlePage.css';

function ArticleCover({ src, alt }) {
  const handleError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement?.classList.add('article-hero-cover--empty');
  };
  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      className="article-hero-cover-img"
    />
  );
}

function RelatedCover({ src, alt }) {
  const handleError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement?.classList.add('related-cover--empty');
  };
  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className="related-cover-img"
    />
  );
}

const CALLOUT_PATTERN = /^([\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}])\s+/u;

function getCalloutFromChildren(children) {
  const childArray = Array.isArray(children) ? children : [children];
  const firstParagraph = childArray.find(
    (child) => child?.props?.node?.tagName === 'p',
  );
  if (!firstParagraph) return null;

  const paragraphChildren = firstParagraph.props.children;
  const firstChild = Array.isArray(paragraphChildren)
    ? paragraphChildren[0]
    : paragraphChildren;
  if (typeof firstChild !== 'string') return null;

  const match = firstChild.match(CALLOUT_PATTERN);
  if (!match) return null;

  return { icon: match[1], offset: match[0].length };
}

const markdownComponents = {
  blockquote: ({ children, ...rest }) => {
    const callout = getCalloutFromChildren(children);
    if (!callout) {
      return <blockquote {...rest}>{children}</blockquote>;
    }

    const childArray = Array.isArray(children) ? children : [children];
    const cleaned = childArray.map((child, index) => {
      if (index === 0 && child?.props?.node?.tagName === 'p') {
        const paragraphChildren = child.props.children;
        const list = Array.isArray(paragraphChildren)
          ? [...paragraphChildren]
          : [paragraphChildren];
        if (typeof list[0] === 'string') {
          list[0] = list[0].slice(callout.offset);
        }
        return <p key="callout-body">{list}</p>;
      }
      return child;
    });

    return (
      <aside className="article-callout">
        <span className="article-callout-icon" aria-hidden="true">
          {callout.icon}
        </span>
        <div className="article-callout-body">{cleaned}</div>
      </aside>
    );
  },
  a: ({ href, children, ...rest }) => {
    const isExternal = href?.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  },
  pre: ({ children, ...rest }) => {
    const codeChild = Array.isArray(children) ? children[0] : children;
    const langClass = codeChild?.props?.className ?? '';
    const langMatch = langClass.match(/language-([\w-]+)/);
    const lang = langMatch?.[1];
    return (
      <pre data-lang={lang || undefined} {...rest}>
        {children}
      </pre>
    );
  },
  img: ({ src, alt }) => {
    if (!alt) {
      return <img src={src} alt="" loading="lazy" />;
    }
    return (
      <figure>
        <img src={src} alt={alt} loading="lazy" />
        <figcaption>{alt}</figcaption>
      </figure>
    );
  },
};

function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article || article.draft) {
    return <Navigate to="/#articles" replace />;
  }

  const related = getRelatedArticles(slug);

  return (
    <div className="article-page">
      <Navigation />

      <article className="article">
        <div className="article-container">
          <Link to="/#articles" className="article-back">
            ← All articles
          </Link>

          <figure className="article-hero-cover">
            <ArticleCover src={article.cover} alt={article.title} />
            <span className="article-hero-cover-fallback" aria-hidden="true">
              {article.title.charAt(0)}
            </span>
          </figure>

          <header className="article-header">
            <div className="article-tags">
              {article.tags.map((tag) => (
                <span key={tag} className="article-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="article-title">{article.title}</h1>
            {article.subtitle && (
              <p className="article-subtitle">{article.subtitle}</p>
            )}
            <div className="article-meta">
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </div>
            {article.canonicalUrl && (
              <a
                href={article.canonicalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-canonical"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Originally published in {article.canonicalSource ?? 'an external publication'}
              </a>
            )}
          </header>

          <div className="article-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[
                [
                  rehypeHighlight,
                  {
                    ignoreMissing: true,
                    aliases: { javascript: ['jsx'], typescript: ['tsx'] },
                  },
                ],
              ]}
              components={markdownComponents}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {article.signature && (
            <p className="article-signature">{article.signature}</p>
          )}
        </div>
      </article>

      {related.length > 0 && (
        <section className="related-section">
          <div className="article-container">
            <h2 className="related-title">Keep reading</h2>
            <div className="related-carousel" role="list">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/articles/${item.slug}`}
                  className="related-card"
                  role="listitem"
                >
                  <div className="related-cover">
                    <RelatedCover src={item.cover} alt={item.title} />
                    <span className="related-cover-fallback" aria-hidden="true">
                      {item.title.charAt(0)}
                    </span>
                  </div>
                  <div className="related-body">
                    <time className="related-date" dateTime={item.date}>
                      {formatArticleDate(item.date)}
                    </time>
                    <h3 className="related-card-title">{item.title}</h3>
                    <p className="related-excerpt">{item.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default ArticlePage;
