import React from 'react';
import '../css/About.css';
import profile from '../assets/profile.jpg';

const About = () => {
  const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C#', 'Kotlin', 'Node.js',
    'HTML/CSS', 'SQL', 'Tailwind CSS', 'React', 'Firebase', 'Express.js'
  ];

  const achievements = [
    'Built a client based E-Commerce Website',
    'Participated for the first time in a hackathon',
    'Led development team of 3 members',
    'Created a simple portfolio about me',
    'Deployed various websites on both academic and for fun projects'
  ];

  const certifications = [
    'Certificate of Completion- Accenture Academy Intern (2025)',
    'Certificate of Completion- Alliance Jumpstart Program (2024)'
  ];

  return (
    <div className="about-container">
      <div className="about-content">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1 className="about-title">About Me</h1>
            <p className="about-subtitle">Vibe Coder & AI Enthusiast</p>
          </div>
        </section>

        {/* Personal Info Section */}
        <section className="about-section">
          <div className="section-card">
            <h2 className="section-title">Personal Information</h2>
            <div className="personal-info">
              <div className="profile-image-container">
                <div className="profile-image">
                  <img 
                    src={profile} 
                    alt="Profile" 
                    className="profile-img"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
              <div className="info-details">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Earl Brando A. Andrino</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Mandaue City, Cebu</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">earlbrandx@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Github:</span>
                  <span className="info-value">andrino25</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="about-section">
          <div className="section-card">
            <h2 className="section-title">Achievements So Far</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">🏆</div>
                  <p className="achievement-text">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="about-section">
          <div className="section-card">
            <h2 className="section-title">Education</h2>
            <div className="education-info">
              <div className="education-item">
                <h3 className="degree-title">Bachelor of Science in Information Technology</h3>
                <p className="university-name">University of Cebu-Banilad</p>
                <p className="graduation-year">Graduated: 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programming Languages Section */}
        <section className="about-section">
          <div className="section-card">
            <h2 className="section-title">Programming Languages & Technologies</h2>
            <div className="languages-grid">
              {programmingLanguages.map((language, index) => (
                <div key={index} className="language-tag">
                  {language}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="about-section">
          <div className="section-card">
            <h2 className="section-title">Certifications</h2>
            <div className="certifications-list">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <div className="cert-icon">📜</div>
                  <div className="cert-info">
                    <h4 className="cert-name">{cert}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer Section */}
      <footer className="about-footer">
        <div className="footer-text">
          © 2025 Earl Brando A. Andrino. Always happy to connect!
        </div>
      </footer>
    </div>
  );
};

export default About;