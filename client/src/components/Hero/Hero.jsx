import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaCode,
} from "react-icons/fa";
import { personalInfo, socialLinks } from "../../data/portfolioData.js";
import "./Hero.css";

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
              Crafting digital experiences that blend creativity with
              cutting-edge technology. I transform complex ideas into elegant,
              user-friendly solutions that make a real impact.
            </p>

            <div className="hero-actions">
              <a
                href="https://drive.google.com/uc?export=download&id=1bnyosWoYJr2HeebungL6RojUJAKvCtrQ"
                download="hasbellaoui-mehdi-cv.pdf"
                className="btn btn-outline inline-flex items-center gap-2"
              >
                <FaDownload /> Resume
              </a>
            </div>

            <div className="social-links">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
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
  );
};

export default Hero;