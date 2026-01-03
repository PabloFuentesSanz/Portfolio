import "./Skills.css";

const skillCategories = [
  {
    category: "Core Technologies",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Node.js", level: 80 },
    ],
  },
  {
    category: "Engineering Practices",
    skills: [
      { name: "Test-Driven Development (TDD)", level: 95 },
      { name: "Extreme Programming (XP)", level: 90 },
      { name: "SOLID Principles", level: 90 },
      { name: "Clean Code", level: 90 },
      { name: "Pair Programming", level: 85 },
    ],
  },
  {
    category: "Tools & Frameworks",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vite & Webpack", level: 85 },
      { name: "Jest & Testing Library", level: 90 },
      { name: "Storybook", level: 85 },
      { name: "Redux & State Management", level: 85 },
    ],
  },
];

const methodologies = [
  {
    title: "Test-Driven Development",
    description:
      "Red-Green-Refactor cycle: writing failing tests first, making them pass, then improving the code while maintaining test coverage",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Extreme Programming",
    description:
      "Embracing change through continuous feedback, pair programming, and sustainable development practices",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "SOLID Principles",
    description:
      "Building maintainable, scalable software with clean architecture and design patterns",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: "Lean Methodology",
    description:
      "Eliminating waste, optimizing workflows, and delivering value through continuous improvement",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Combining technical excellence with proven engineering methodologies
          </p>
        </div>

        <div className="methodologies-grid">
          {methodologies.map((method, index) => (
            <div key={index} className="methodology-card">
              <div className="methodology-icon">{method.icon}</div>
              <h3 className="methodology-title">{method.title}</h3>
              <p className="methodology-description">{method.description}</p>
            </div>
          ))}
        </div>

        <div className="skills-categories">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
