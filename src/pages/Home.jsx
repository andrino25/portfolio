import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { Github, Facebook, Instagram, Mail, ArrowRight, Download, Sparkles } from 'lucide-react';

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Below Average Developer",
    "Not-So-Good Coder",
    "Prompt Engineer",
    "Vibe Programmer",
    "AI Enthusiast"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Spline Viewer Background */}
      <div className="spline-wrapper">
        <spline-viewer
          url="https://prod.spline.design/GtdF-wbb-jbvjRg0/scene.splinecode"
          className="spline-canvas"
        ></spline-viewer>
      </div>

      {/* Overlay Content */}
      <div className="overlay-content">
        <div className={`content ${isVisible ? 'visible' : ''}`}>
          <div className="tag">
            <span className="dot" />
            <span className="text">Available for Projects</span>
          </div>

          <h1 className="main-title">
            <span className="typing-animation gradient-name">Earl Brando Andrino</span>
          </h1>

          <p className="role">{roles[currentRole]}</p>
          <p className="description">
            Just your friendly neighborhood vibe coder, weaving wonders with AI instead of webs, 
            always eager to learn of the advancement of technlogies.
          </p>

          <div className="buttons">
            <a href="/resume.pdf"  download="Andrino_Resume.pdf" className="btn-primary">
              <Download className="icon" />
              Download Resume
              <ArrowRight className="icon" />
            </a>

            <a href="/portfolio" className="btn-secondary">
              <Sparkles className="icon" />
              Explore Work
            </a>
          </div>

          <div className="socials">
            <SocialIcon href="https://github.com/andrino25" icon={<Github />} label="GitHub" />
            <SocialIcon href="https://www.facebook.com/earlbrando.andrino.1" icon={<Facebook />} label="Facebook" />
            <SocialIcon href="https://www.instagram.com/andrino_25/" icon={<Instagram />} label="Instagram" />
            <SocialIcon href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=earlbrandx@gmail.com&su=Your%20Subject%20Here&body=Your%20Message%20Here" icon={<Mail />} label="Email" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social-icon">
      {icon}
    </a>
  );
}

export default Home;
