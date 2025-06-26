import React, { useEffect } from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaStethoscope, FaGlobe, FaBriefcase, FaCarSide, FaAward, FaChartBar, FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    name: "Car Showroom Website",
    link: "https://carshowroom-ttwp.onrender.com/"
  },
  {
    name: "Disease Diagnosis System",
    link: "https://final-year-disease-prediction-project.onrender.com/"
  },
  {
    name: "Sales Dashboard (Power BI)",
    link: "https://drive.google.com/uc?export=download&id=14m5662sVeE0dxk_5sHSEfQ7L59q00OeE",
    isPBIX: true
  }
];

const certifications = [
  {
    name: "BIG DATA COMPUTING",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1BYjc-l711XwBfqNod-JzhY_QES96Ctuq/view?usp=drive_link"
  },
  {
    name: "GOOGLE CLOUD COMPUTING FOUNDATIONS",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1aae8PFfYuniK7JKnmXsDEDdF1J_F7ZMr/view?usp=drive_link"
  },
  {
    name: "INTRODUCTION TO INDUSTRY 4.0 AND INDUSTRIAL INTERNET OF THINGS",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1_hFdvzf7byKXZbPqQQo3co740sriCXzu/view?usp=drive_link"
  },
  {
    name: "PRIVACY AND SECURITY IN ONLINE SOCIAL MEDIA",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1bOq8I-SuYuA4SGmdSJf-iJXzFs5_0jcq/view?usp=drive_link"
  },
  {
    name: "THE JOY OF COMPUTING USING PYTHON",
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1mFB2-vVdnRaWmCfMcyx8mVO87QaqoC6k/view?usp=drive_link"
  },
  {
    name: "UiPath Automation Explorer",
    issuer: "UiPath",
    link: "https://drive.google.com/file/d/1--o-dLnwpV7OcFMM8EC678NqqTbWvm39/view?usp=drive_link"
  }
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: false, mirror: true });
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-flex hero-reverse">
          <img src="/profile.jpg" alt="G.Pranav Profile" className="profile-photo" />
          <div className="hero-info hero-info-center">
            <h1>G.Pranav</h1>
            <h2>B.Tech Student, Computer Science & Business Systems</h2>
            <p className="intro">
              Hi, I'm Pranav – a passionate and detail-oriented B.Tech student in Computer Science and Business Systems at Rajalakshmi Engineering College. I specialize in Python, C/C++, SQL, and data visualization with Power BI. With hands-on experience in building AI-powered applications and developing user-friendly web interfaces, I aim to solve real-world problems through smart, data-driven solutions. I'm constantly learning and growing, with NPTEL certifications in Python, Google Cloud, Big Data, and Industry 4.0, Privacy and Security in Online Social Media and I actively lead events for UIPHORIA, our RPA-focused club.
            </p>
            <div className="hero-links">
              <a href="https://github.com/pranav1494" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/pranav-krish-22286823a/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.instagram.com/pranav_krishna14/" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </header>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <h3>Tech Stack</h3>
        <div className="stack-list">
          <div className="stack-category" data-aos="slide-right">
            <h4>Programming Languages</h4>
            <ul>
              <li>Python</li>
              <li>C/C++</li>
            </ul>
          </div>
          <div className="stack-category" data-aos="slide-right">
            <h4>Web Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div className="stack-category" data-aos="slide-right">
            <h4>Data Analysis & Visualization</h4>
            <ul>
              <li>Power BI</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="stack-category" data-aos="slide-right">
            <h4>Automation Tools</h4>
            <ul>
              <li>UiPath</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h3>Projects</h3>
        <div className="project-list">
          {projects.map((project, idx) => (
            <div className="project-card" key={idx} data-aos="slide-right">
              {/* Show icon based on project name */}
              {project.name === "Car Showroom Website" && <FaCarSide className="project-icon" />}
              {project.name === "Disease Diagnosis System" && <FaStethoscope className="project-icon" />}
              {project.name === "Sales Dashboard (Power BI)" && <FaChartBar className="project-icon" />}
              <h4>{project.name}</h4>
              {project.isPBIX ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="pbix-download-btn">Download PBIX</a>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-action-btn">View Project</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications">
        <h3>Certifications</h3>
        <div className="cert-list">
          {certifications.map((cert, idx) => (
            <div className="cert-card" key={idx} data-aos="slide-right">
              <FaAward className="cert-icon" />
              <div>
                <a href={cert.link} target="_blank" rel="noopener noreferrer">{cert.name}</a>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
