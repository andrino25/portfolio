import React from 'react';
import '../css/Portfolio.css';

const Portfolio = () => {
  const myWorks = [
    {
      icon: '🛒',
      title: 'Shibuya Store Website',
      description: 'A simple e-commerce platform for figurines using React with a simple functionalities of an e-commerce website.',
      technologies: ['React', 'Node.js', 'Firebase', 'Express.js'],
      link: 'https://shibuya-store-react.vercel.app/'
    },
    
    {
      icon: '🖥️',
      title: 'Simple Stripe Server',
      description: 'A third-party payment server utilizing Stripe without handling real money including receipt for capstone purposes.',
      technologies: ['Javascript'],
      link: 'https://github.com/andrino25/server-stripe-test'
    },

     {
      icon: '🛒',
      title: 'Viora Cosemtics Store',
      description: 'A simple e-commerce platform for cosmetics with basic functionalities using local storage.',
      technologies: ['React', 'Node.js', 'Firebase', 'Express.js'],
      link: 'https://viora-cosmetics.vercel.app/'
    },

    {
      icon: '💻',
      title: 'Simple Content Based Filtering Algorithm',
      description: 'A python script related to our capstone project filtering out service recommendations categories.',
      technologies: ['Python'],
      link: '#'
    }
  ];

  const projectsInvolved = [

        {
      icon: '📱',
      title: 'PeopleConnect',
      description: 'A mobile service application providing ease access of personal aide and errands.',
      technologies: ['Kotlin', 'Firebase', 'WitAi', 'OpenAI Api', 'Python'],
      link: 'https://github.com/vjoseph6/PeopleConnectCapstone'
    },

    {
      icon: '🕷',
      title: 'Gagambrawl',
      description: 'A simple spider inventory management system application for spider enthusiast.',
      technologies: ['Kotlin', 'PHP', 'Laravel'],
      link: 'https://github.com/andrino25/ELDROID_KotlinBois_-130FRI-'
    },
    {
      icon: '👨🏻‍💼',
      title: 'PeopleConnect Admin',
      description: 'A web application for tracking and monitoring the mobile version of the capstone project.',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Open Source APIs'],
      link: '#'
    },
    {
      icon: '📊',
      title: 'Expense Tracker',
      description: 'Personal finance management tool for tracking expenses, creating budgets, and generating financial reports with data visualization.',
      technologies: ['C#', 'Tailwind CSS', 'MSSQL', 'Chart.js'],
      link: '#'
    }
  ];

  const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-header">
      <div className="project-icon">{project.icon}</div>
      <h3 className="project-title">{project.title}</h3>
    </div>
    <p className="project-description">{project.description}</p>
    <div className="project-technologies">
      {project.technologies.map((tech, index) => (
        <span key={index} className="tech-tag">{tech}</span>
      ))}
    </div>
    {project.link && project.link !== '#' ? (
      <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
        <span>View Project</span>
        <span className="button-icon">🔗</span>
      </a>
    ) : (
      <div className="project-button disabled">
        <span>Private Project</span>
        <span className="button-icon">🔒</span>
      </div>
    )}
  </div>
);

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        {/* Hero Section */}
        <section className="portfolio-hero">
          <div className="hero-content">
            <h1 className="portfolio-title">My Portfolio</h1>
            <p className="portfolio-subtitle">A showcase of my development journey and achievements</p>
          </div>
        </section>

        {/* Projects Involved Section */}
        <section className="portfolio-section">
          <div className="section-card">
            <h2 className="section-title">Projects Involved</h2>
            <div className="projects-grid">
              {projectsInvolved.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* My Works Section */}
        <section className="portfolio-section">
          <div className="section-card">
            <h2 className="section-title">My Works</h2>
            <div className="projects-grid">
              {myWorks.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer Section */}
      <footer className="portfolio-footer">
        <div className="footer-text">
          © 2025 Earl Brando A. Andrino. Always happy to connect!
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;