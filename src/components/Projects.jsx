import "./Projects.css";

const projects = [
  {
    name: "Kanso UI",
    tagline: "Minimalist React Component Library",
    description:
      "A modern, accessible, and highly customizable React component library built with TypeScript. Features a comprehensive set of components following design system best practices.",
    highlights: [
      "Published on NPM with TypeScript support",
      "Comprehensive Storybook documentation",
      "Fully accessible (WCAG 2.1 compliant)",
      "Tree-shakeable and optimized for performance",
    ],
    tech: ["React", "TypeScript", "Storybook", "Vite"],
    links: {
      demo: "https://kanso-ui.vercel.app/",
      npm: "https://www.npmjs.com/package/kanso-ui",
      github: "https://github.com/PabloFuentesSanz/kanso-ui",
    },
    featured: true,
  },
  {
    name: "CodeWithPablo",
    tagline: "Project Scaffolding CLI Tool",
    description:
      "A powerful CLI tool to quickly scaffold modern web projects with best practices baked in. Supports multiple frameworks and includes pre-configured tooling for TDD.",
    highlights: [
      "Interactive project setup wizard",
      "Multiple framework templates (React, Vue, Svelte)",
      "Pre-configured testing environment",
      "ESLint and Prettier integration",
    ],
    tech: ["Node.js", "CLI", "TypeScript", "Vite"],
    links: {
      npm: "https://www.npmjs.com/package/create-codewithpablo",
      github: "https://github.com/PabloFuentesSanz/codewithpablo-boilerplate",
      docs: "https://pablofuentessanz.github.io/codewithpablo-docs/",
    },
    featured: false,
  },
  {
    name: "Plattio",
    tagline: "Restaurant Management Platform",
    description:
      "As Founding Engineer, building a comprehensive restaurant management application that is beginning to launch across Europe. Leading the technical architecture and development of a platform designed to streamline operations for the hospitality industry.",
    highlights: [
      "Founding Engineer role with full technical ownership",
      "Building scalable platform for European restaurant market",
      "Architecting end-to-end restaurant management solutions",
      "Leading product development from concept to launch",
    ],
    tech: ["React", "TypeScript", "Full Stack", "Cloud Architecture"],
    links: {
      website: "https://plattio.com/",
    },
    featured: true,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Open-source tools and libraries used by developers worldwide
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              {project.featured && (
                <div className="featured-badge">⭐ Featured</div>
              )}

              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>

              <p className="project-description">{project.description}</p>

              <ul className="project-highlights">
                {project.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Website →
                  </a>
                )}
                {project.links.npm && (
                  <a
                    href={project.links.npm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    NPM →
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub →
                  </a>
                )}
                {project.links.docs && (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Docs →
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
