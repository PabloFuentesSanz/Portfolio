import { Link } from 'react-router-dom';
import { articles, formatArticleDate } from '../data/articles';
import './Articles.css';

function CoverImage({ src, alt }) {
  const handleError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement?.classList.add('article-cover--empty');
  };
  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      loading="lazy"
      className="article-cover-img"
    />
  );
}

function ArticleCardInner({ article }) {
  return (
    <>
      <div className="article-cover">
        <CoverImage src={article.cover} alt={article.title} />
        <span className="article-cover-fallback" aria-hidden="true">
          {article.title.charAt(0)}
        </span>
        {article.draft && (
          <span className="article-draft-badge">Coming soon</span>
        )}
      </div>
      <div className="article-body">
        <div className="article-meta">
          {article.draft ? (
            <span>Pending publication</span>
          ) : (
            <>
              <time dateTime={article.date}>{formatArticleDate(article.date)}</time>
              <span className="article-meta-dot" aria-hidden="true">·</span>
              <span>{article.readingTime}</span>
            </>
          )}
        </div>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-excerpt">{article.excerpt}</p>
        <div className="article-tags">
          {article.tags.map((tag) => (
            <span key={tag} className="article-tag">
              {tag}
            </span>
          ))}
        </div>
        {!article.draft && (
          <span className="article-read-more">Read article →</span>
        )}
      </div>
    </>
  );
}

function Articles() {
  return (
    <section id="articles" className="articles">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Writing</h2>
          <p className="section-subtitle">
            Notes on engineering, building products, and the lessons I keep coming back to
          </p>
        </div>

        <div className="articles-list">
          {articles.map((article) =>
            article.draft ? (
              <div
                key={article.slug}
                className="article-card article-card--draft"
                aria-disabled="true"
              >
                <ArticleCardInner article={article} />
              </div>
            ) : (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="article-card"
              >
                <ArticleCardInner article={article} />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Articles;
