import React from 'react';
import { useGlitch } from 'react-powerglitch';

const Contact: React.FC = () => {
  const glitch = useGlitch({ playMode: 'hover' });
  return (
    <section className="contact-section">
      <h2 ref={glitch.ref}>Connect with Me</h2>
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
      <a ref={glitch.ref} href="/cv.pdf" download className="cv-button">Download CV</a>
    </section>
  );
};

export default Contact;
