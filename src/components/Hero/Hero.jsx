import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/portfolioData'
import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaCode className="badge-icon" />
              <span>Available for work</span>
            </div>
            
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>
            <p className="hero-description">
              Passionate developer creating innovative solutions with modern technologies. 
              I build scalable applications and love solving complex problems.
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <FaRocket className="stat-icon" />
                <div>
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
              <div className="stat-item">
                <FaCode className="stat-icon" />
                <div>
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years</span>
                </div>
              </div>
            </div>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a 
                href="http://localhost:5000/api/download/resume" 
                className="btn btn-outline" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload /> Resume
              </a>
            </div>

            <div className="social-links">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={`mailto:${socialLinks.email}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
