import "./Experience.css";

const experiences = [
  {
    company: "Mercadona Tech",
    logo: "/assets/mercadona.jpeg",
    role: "Senior Frontend Engineer",
    period: "Nov. 2024 - Present",
    location: "Valencia, Spain",
    description:
      "Responsible for frontend development of a core business vertical focused on sales planning, working within a highly disciplined engineering environment. Applying Extreme Programming (XP) principles, Test-Driven Development (TDD), and Lean methodologies to deliver robust React-based solutions.",
    achievements: [
      "Developing and maintaining critical sales planning features using React",
      "Practicing Test-Driven Development to ensure code quality and reliability",
      "Collaborating in an Extreme Programming environment with pair programming and continuous integration",
      "Applying Lean principles to optimize development workflows and reduce waste",
    ],
    tech: [
      "React",
      "TypeScript",
      "TDD",
      "Extreme Programming",
      "Lean",
      "SOLID",
    ],
  },
  {
    company: "Inditex",
    logo: "/assets/inditex.png",
    role: "Senior Frontend Engineer – Alten Delivery Center",
    period: "Dec. 2023 - Nov. 2024",
    location: "Madrid, Spain",
    description:
      "Frontend-focused role working on one of Inditex's most innovative and business-critical verticals. Responsible for frontend architecture decisions, task definition and breakdown, and ensuring high standards of code quality, performance, and long-term maintainability.",
    achievements: [
      "Contributed to frontend architecture for a high-impact business vertical",
      "Defined and broke down complex technical tasks for team execution",
      "Maintained high code quality standards through rigorous code reviews",
      "Optimized application performance and ensured scalable solutions",
      "Collaborated with cross-functional teams to deliver business-critical features",
    ],
    tech: [
      "React",
      "TypeScript",
      "Frontend Architecture",
      "Performance Optimization",
      "Code Quality",
    ],
  },
  {
    company: "MACQ",
    logo: "/assets/macq.png",
    role: "Full Stack Developer – Alten Delivery Center",
    period: "Dec. 2021 - Dec. 2023",
    location: "Brussels, Belgium (Remote from Spain)",
    description:
      "Worked on Smart Cities and traffic mobility solutions, contributing to the development of large-scale systems for optimizing traffic management across Belgium. Utilized a diverse tech stack including React, Angular, and Scala to build robust, scalable applications.",
    achievements: [
      "Developed large-scale traffic management systems serving major Belgian cities",
      "Built full-stack features using React and Angular for frontend, Scala for backend",
      "Contributed to Smart Cities initiatives improving urban mobility and traffic flow",
      "Implemented real-time data processing for traffic monitoring and optimization",
      "Collaborated with multidisciplinary teams on complex transportation solutions",
    ],
    tech: [
      "React",
      "Angular",
      "Scala",
      "TypeScript",
      "Smart Cities",
      "Full Stack",
    ],
  },
  {
    company: "Zalcu",
    logo: "/assets/zalcu.webp",
    role: "Full Stack Developer",
    period: "Jan. 2021 - Dec. 2021",
    location: "Madrid, Spain",
    description:
      "Developed and delivered multiple full-stack projects using modern web technologies. Worked across the entire stack, from frontend interfaces to backend APIs, database design, and cloud infrastructure deployment on AWS.",
    achievements: [
      "Built and shipped multiple projects using React for frontend and Node.js for backend",
      "Designed and implemented database solutions using both SQL and MongoDB",
      "Deployed and managed applications on AWS cloud infrastructure",
      "Worked independently across the full development lifecycle",
      "Delivered scalable solutions meeting client requirements and deadlines",
    ],
    tech: [
      "React",
      "Node.js",
      "SQL",
      "MongoDB",
      "AWS",
      "JavaScript",
      "Full Stack",
    ],
  },
  {
    company: "Universidad Politécnica de Madrid (UPM)",
    logo: "/assets/upm.png",
    role: "Educational Innovation Intern",
    period: "2017 - 2021",
    location: "Madrid, Spain",
    description:
      "Awarded educational innovation grants while pursuing a Software Engineering degree. Contributed to research and development projects, gaining hands-on experience in DevOps practices and educational platform development.",
    achievements: [
      "Worked on a DevOps research project, exploring modern deployment and automation practices",
      "Developed plugins for the Moodle learning platform using PHP",
      "Applied web development skills with HTML and CSS in educational contexts",
      "Balanced academic studies with practical software development experience",
      "Contributed to innovation initiatives within the university",
    ],
    tech: ["PHP", "Moodle", "HTML", "CSS", "DevOps", "Research"],
  },
];

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building exceptional digital products with world-class companies
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="company-logo"
                      />
                    )}
                    <div>
                      <h3 className="experience-company">{exp.company}</h3>
                      <h4 className="experience-role">{exp.role}</h4>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="experience-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
