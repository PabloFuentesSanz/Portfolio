import { useEffect, useState, useCallback } from 'react';
import './Projects.css';

const plattio = {
  name: 'Plattio',
  tagline: 'Restaurant Operating System',
  description:
    'Plattio is the all-in-one platform helping restaurants manage reservations, reviews and live orders (comandas) from a single place. Today it powers operations for 50+ restaurants across Spain, with a product ecosystem built around the day-to-day reality of the hospitality industry.',
  stats: [
    { value: '50+', label: 'Restaurants in production' },
    { value: '3', label: 'Products in the ecosystem' },
    { value: 'Global Payments', label: 'Strategic partner (CaixaBank)' },
  ],
  links: {
    website: 'https://plattio.com/',
    linkedin: 'https://www.linkedin.com/company/plattio/',
    instagram: 'https://www.instagram.com/plattio_app/',
  },
  products: [
    {
      name: 'Plattio Web',
      description:
        'Customer-facing booking and discovery experience. Restaurants get their own branded space to handle reservations and reviews.',
      tag: 'Web',
    },
    {
      name: 'Plattio POS',
      description:
        'In-house point of sale built in partnership with Global Payments (CaixaBank). Manages comandas, table state and payments end to end.',
      tag: 'POS · Global Payments',
    },
    {
      name: 'Plattio API',
      description:
        'Backbone of the ecosystem. Unified API powering web, POS and integrations with third-party reservation and payment providers.',
      tag: 'API',
    },
  ],
  gallery: [
    {
      src: '/assets/plattio/gallery-1.png',
      alt: 'Plattio product screenshot 1',
    },
    {
      src: '/assets/plattio/gallery-2.png',
      alt: 'Plattio product screenshot 2',
    },
    {
      src: '/assets/plattio/gallery-3.png',
      alt: 'Plattio product screenshot 3',
    },
    {
      src: '/assets/plattio/gallery-4.jpeg',
      alt: 'Plattio product screenshot 4',
    },
    {
      src: '/assets/plattio/gallery-5.jpeg',
      alt: 'Plattio product screenshot 5',
    },
    {
      src: '/assets/plattio/gallery-6.jpeg',
      alt: 'Plattio product screenshot 6',
    },
  ],
  partners: [
    {
      name: 'Il Poeta del Faro',
      logo: '/assets/plattio/restaurants/il-poeta-del-faro.png',
    },
    {
      name: 'Puerto la Gasca',
      logo: '/assets/plattio/restaurants/puerto-la-gasca.png',
    },
    { name: 'Los Gallos', logo: '/assets/plattio/restaurants/los-gallos.png' },
    {
      name: 'Vistas Reales',
      logo: '/assets/plattio/restaurants/vistas-reales.png',
    },
    {
      name: 'A la Broaster',
      logo: '/assets/plattio/restaurants/a-la-broaster.jpeg',
    },
  ],
};

const otherProjects = [
  {
    name: 'Kanso UI',
    tagline: 'Minimalist React Component Library',
    description:
      'Accessible, tree-shakeable React components in TypeScript, published on NPM with full Storybook documentation.',
    tech: ['React', 'TypeScript', 'Storybook'],
    links: {
      demo: 'https://kanso-ui.vercel.app/',
      npm: 'https://www.npmjs.com/package/kanso-ui',
      github: 'https://github.com/PabloFuentesSanz/kanso-ui',
    },
  },
  {
    name: 'CodeWithPablo',
    tagline: 'Project Scaffolding CLI',
    description:
      'CLI tool to scaffold modern web projects with TDD and best practices baked in. Supports React, Vue and Svelte templates.',
    tech: ['Node.js', 'CLI', 'TypeScript'],
    links: {
      npm: 'https://www.npmjs.com/package/create-codewithpablo',
      github: 'https://github.com/PabloFuentesSanz/codewithpablo-boilerplate',
      docs: 'https://pablofuentessanz.github.io/codewithpablo-docs/',
    },
  },
];

function ImageWithFallback({ src, alt, className }) {
  const handleError = (event) => {
    event.currentTarget.style.display = 'none';
    event.currentTarget.parentElement?.classList.add(
      'media-placeholder--empty',
    );
  };
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
    />
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, onPrev, onNext]);

  const image = images[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="lightbox-button lightbox-close"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <button
        type="button"
        className="lightbox-button lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="lightbox-img"
        onClick={(event) => event.stopPropagation()}
      />
      <button
        type="button"
        className="lightbox-button lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>
      <span className="lightbox-counter">
        {index + 1} / {images.length}
      </span>
    </div>
  );
}

function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex(
        (current) =>
          (current - 1 + plattio.gallery.length) % plattio.gallery.length,
      ),
    [],
  );
  const showNext = useCallback(
    () => setLightboxIndex((current) => (current + 1) % plattio.gallery.length),
    [],
  );

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            From shipping a full restaurant operating system to open-source
            tooling used by other developers
          </p>
        </div>

        <article className="plattio-showcase">
          <header className="plattio-header">
            <div className="plattio-identity">
              <div className="plattio-logo media-placeholder">
                <ImageWithFallback
                  src="/assets/plattio/logo.png"
                  alt="Plattio logo"
                  className="plattio-logo-img"
                />
                <span className="media-placeholder-fallback">PL</span>
              </div>
              <div>
                <p className="plattio-eyebrow">Founding Engineer</p>
                <h3 className="plattio-name">{plattio.name}</h3>
                <p className="plattio-tagline">{plattio.tagline}</p>
              </div>
            </div>

            <div className="plattio-socials">
              <a
                href={plattio.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="plattio-social"
                aria-label="Plattio website"
              >
                <GlobeIcon />
              </a>
              <a
                href={plattio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="plattio-social"
                aria-label="Plattio on LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href={plattio.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="plattio-social"
                aria-label="Plattio on Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </header>

          <p className="plattio-description">{plattio.description}</p>

          <div className="plattio-stats">
            {plattio.stats.map((stat) => (
              <div key={stat.label} className="plattio-stat">
                <span className="plattio-stat-value">{stat.value}</span>
                <span className="plattio-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="plattio-block">
            <h4 className="plattio-block-title">The ecosystem</h4>
            <div className="plattio-products">
              {plattio.products.map((product) => (
                <div key={product.name} className="plattio-product">
                  <span className="plattio-product-tag">{product.tag}</span>
                  <h5 className="plattio-product-name">{product.name}</h5>
                  <p className="plattio-product-description">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="plattio-block">
            <h4 className="plattio-block-title">Inside the product</h4>
            <div className="plattio-gallery" role="list">
              {plattio.gallery.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  className="plattio-gallery-item media-placeholder"
                  role="listitem"
                  onClick={() => setLightboxIndex(index)}
                  aria-label={`Open ${image.alt}`}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="plattio-gallery-img"
                  />
                  <span className="media-placeholder-fallback">Image</span>
                  <span className="plattio-gallery-zoom" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="plattio-block">
            <h4 className="plattio-block-title">Trusted by restaurants across Spain</h4>
            <div className="plattio-partners">
              {plattio.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="plattio-partner media-placeholder"
                  title={partner.name}
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="plattio-partner-img"
                  />
                  <span className="media-placeholder-fallback">
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="other-projects">
          <h3 className="other-projects-title">Also building</h3>
          <div className="other-projects-grid">
            {otherProjects.map((project) => (
              <div key={project.name} className="mini-project">
                <div>
                  <h4 className="mini-project-name">{project.name}</h4>
                  <p className="mini-project-tagline">{project.tagline}</p>
                </div>
                <p className="mini-project-description">
                  {project.description}
                </p>
                <div className="mini-project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mini-project-links">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link"
                    >
                      Demo →
                    </a>
                  )}
                  {project.links.npm && (
                    <a
                      href={project.links.npm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link"
                    >
                      NPM →
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.links.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mini-project-link"
                    >
                      Docs →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={plattio.gallery}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </section>
  );
}

export default Projects;
