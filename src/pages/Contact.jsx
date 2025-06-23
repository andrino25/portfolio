import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock, MessageCircle, Send } from 'lucide-react';
import '../css/Contact.css';
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        {/* Hero Section */}
        <div className="contact-hero">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Let's connect and discuss opportunities</p>
        </div>

        {/* Social Links Section */}
        <div className="contact-section">
          <div className="section-card">
            <h2 className="section-title">Connect With Me</h2>
            <div className="social-links">
              <a href="https://www.facebook.com/earlbrando.andrino.1" className="social-item facebook" target="_blank" rel="noopener noreferrer">
                <Facebook className="social-icon" />
                <div className="social-details">
                  <h3>Facebook</h3>
                  <p>Follow for updates and posts</p>
                </div>
              </a>

              <a href="https://www.instagram.com/andrino_25/" className="social-item instagram" target="_blank" rel="noopener noreferrer">
                <Instagram className="social-icon" />
                <div className="social-details">
                  <h3>Instagram</h3>
                  <p>Behind the scenes content</p>
                </div>
              </a>

              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=earlbrandx@gmail.com&su=Your%20Subject%20Here&body=Your%20Message%20Here" className="social-item gmail">
                <Mail className="social-icon" />
                <div className="social-details">
                  <h3>Gmail</h3>
                  <p>Direct email communication</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-section">
          <div className="section-card">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-info">
              <div className="info-card">
                <MapPin className="info-icon" />
                <h3 className="info-title">Location</h3>
                <p className="info-text">
                  Mandaue City Cebu, <br />
                  Philippines
                </p>
              </div>

              <div className="info-card">
                <Phone className="info-icon" />
                <h3 className="info-title">Phone</h3>
                <p className="info-text">
                  +639 686 117 835<br />
                  Available during business hours
                </p>
              </div>

              <div className="info-card">
                <Clock className="info-icon" />
                <h3 className="info-title">Availability</h3>
                <p className="info-text">
                  Monday-Sunday: 11AM - 8PM<br />
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="contact-section">
          <div className="quick-contact">
            <h3>Ready to Start a Conversation?</h3>
            <p>Choose your preferred way to get in touch and I'll get back to you as soon as possible.</p>
            <div className="contact-buttons">
              <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=earlbrandx@gmail.com&su=Your%20Subject%20Here&body=Your%20Message%20Here" className="contact-btn">
                <Send className="btn-icon" />
                Send Email
              </a>
              <a href="https://www.facebook.com/earlbrando.andrino.1" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="btn-icon" />
                Message on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="contact-section">
          <div className="section-card">
            <h2 className="section-title">What to Expect</h2>
            <div className="expectations-grid">
              <div className="expectation-item">
                <div className="expectation-icon">⚡</div>
                <h4>Quick Response</h4>
                <p>I typically respond to emails within 24 hours during business days.</p>
              </div>
              
              <div className="expectation-item">
                <div className="expectation-icon">💬</div>
                <h4>Personal Touch</h4>
                <p>Every message gets a personal response - no automated replies here.</p>
              </div>
              
              <div className="expectation-item">
                <div className="expectation-icon">🤝</div>
                <h4>Professional Service</h4>
                <p>Whether it's business or casual, I maintain professionalism in all communications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p className="footer-text">© 2025 Earl Brando A. Andrino. Always happy to connect!</p>
      </div>
    </div>
  );
};

export default Contact;