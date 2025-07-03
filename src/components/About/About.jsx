import React from 'react'
import { FaLightbulb, FaHeart, FaCode } from 'react-icons/fa'
import { aboutMe, personalInfo } from '../../data/portfolioData'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-main">
            <div className="about-intro">
              <FaCode className="intro-icon" />
              <h3>{personalInfo.title}</h3>
              <p className="about-description">{aboutMe.description}</p>
            </div>
            
            <div className="about-grid">
              <div className="about-card">
                <FaLightbulb className="card-icon" />
                <h4>Problem Solver</h4>
                <p>I love tackling complex challenges and finding elegant solutions.</p>
              </div>
              
              <div className="about-card">
                <FaHeart className="card-icon" />
                <h4>Passionate</h4>
                <p>Genuinely passionate about creating meaningful digital experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
 