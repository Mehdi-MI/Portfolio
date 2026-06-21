import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
} from "react-icons/fa";
import { personalInfo, socialLinks, resumeConfig } from "../../data/portfolioData.js";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <FaCode className="badge-icon" />
              <span>Open to opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="highlight">{personalInfo.name}</span>
            </h1>
            <h2 className="hero-subtitle">{personalInfo.title}</h2>
            <p className="hero-description">
              I design, build, and deploy reliable software solutions — from
              interactive frontends to scalable backends and Dockerized
              infrastructure. Always learning, always shipping.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a
                href={resumeConfig.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FaDownload /> Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href={`mailto:${socialLinks.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;