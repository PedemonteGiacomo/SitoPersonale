import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <TypeAnimation
        sequence={['$ whoami', 1000, 'Giacomo Pedemonte', 2000]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="whitespace-pre"
      />
    </div>
  );
};

export default Intro;
