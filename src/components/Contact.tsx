import React from 'react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      <GlitchClip>
        <h2>Connect with Me</h2>
      </GlitchClip>
      <ul>
        <li>
          <a href="mailto:giacomopedemonte@libero.it" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/giacomo-pedemonte-3983a6236" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/PedemonteGiacomo" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
      </ul>
      <GlitchClip>
        <a href="/cv.pdf" download className="cv-button">Download CV</a>
      </GlitchClip>
    </section>
  );
};

export default Contact;
