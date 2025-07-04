import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa'
import { personalInfo, socialLinks } from '../../data/portfolioData.js'
import './Hero.css'

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement('a')
    link.href = '/cv/Hasbellaoui Mehdi.pdf'
    link.download = 'Hasbellaoui Mehdi.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
              Crafting digital experiences that blend creativity with cutting-edge technology. 
              I transform complex ideas into elegant, user-friendly solutions that make a real impact.
            </p>
            
            <div className="hero-actions">
              <button 
                onClick={handleResumeDownload}
                className="btn btn-outline"
              >
                <FaDownload /> Resume
              </button>
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