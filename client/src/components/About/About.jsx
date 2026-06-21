import React from 'react'
import { FaLightbulb, FaHeart, FaCode, FaBriefcase, FaGraduationCap, FaLanguage } from 'react-icons/fa'
import { aboutMe, personalInfo, skills, experience, education, languages } from '../../data/portfolioData.js'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">

          {/* Intro */}
          <div className="about-intro">
            <FaCode className="intro-icon" />
            <h3>{personalInfo.title}</h3>
            <p className="about-description">{aboutMe.description}</p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <FaLightbulb className="card-icon" />
              <h4>Problem Solver</h4>
              <p>I love tackling complex challenges and finding elegant, efficient solutions.</p>
            </div>
            <div className="about-card">
              <FaHeart className="card-icon" />
              <h4>Self-Learner</h4>
              <p>Continuously expanding my expertise across full-stack development and DevOps.</p>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>

            <div className="skills-categories">
              <div className="skill-category">
                <span className="skill-category-label">Languages</span>
                <div className="skills-grid">
                  {skills.languages.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-category-label">Frontend</span>
                <div className="skills-grid">
                  {skills.frontend.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-category-label">Backend</span>
                <div className="skills-grid">
                  {skills.backend.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-category-label">Databases</span>
                <div className="skills-grid">
                  {skills.database.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-category-label">DevOps</span>
                <div className="skills-grid">
                  {skills.devops.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
              <div className="skill-category">
                <span className="skill-category-label">Tools</span>
                <div className="skills-grid">
                  {skills.tools.map(s => <span key={s} className="skill-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="timeline-section">
            <h3 className="skills-title"><FaBriefcase style={{marginRight:'0.5rem'}}/>Experience</h3>
            <div className="timeline">
              {experience.map(exp => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-body">
                    <div className="timeline-header">
                      <h4>{exp.position}</h4>
                      <span className="timeline-badge">{exp.duration}</span>
                    </div>
                    <p className="timeline-company">{exp.company} — {exp.type}</p>
                    <p className="timeline-desc">{exp.description}</p>
                    <div className="timeline-tags">
                      {exp.technologies.map(t => <span key={t} className="tech-tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="timeline-section">
            <h3 className="skills-title"><FaGraduationCap style={{marginRight:'0.5rem'}}/>Education</h3>
            <div className="timeline">
              {education.map(edu => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-body">
                    <div className="timeline-header">
                      <h4>{edu.degree}</h4>
                      <span className="timeline-badge">{edu.duration}</span>
                    </div>
                    <p className="timeline-company">{edu.school}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="skills-section">
            <h3 className="skills-title"><FaLanguage style={{marginRight:'0.5rem'}}/>Languages</h3>
            <div className="skills-grid" style={{justifyContent:'center'}}>
              {languages.map(l => (
                <span key={l.name} className="skill-tag">
                  {l.name} — {l.level}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About