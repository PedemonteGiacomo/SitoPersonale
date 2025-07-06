import React, { useEffect, useState } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const asciiArt = `
  _   __                 _      
 | | / /                | |     
 | |/ /  ___   _   _  __| | ___ 
 |    \ / _ \ | | | |/ _\` |/ __|
 | |\  \  __/ | |_| | (_| | (__ 
 |_| \_/\___|  \__,_|\__,_|\___|
`;

const NerdSection: React.FC = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let index = 0;

    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key === KONAMI_SEQUENCE[index]) {
        index += 1;
        if (index === KONAMI_SEQUENCE.length) {
          setActive(true);
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, []);

  return (
    <div
      style={{
        padding: '1rem',
        textAlign: 'center',
        background: active ? '#222' : 'inherit',
        color: active ? '#0f0' : 'inherit',
        transition: 'background 0.5s',
      }}
    >
      {active && (
        <pre style={{ whiteSpace: 'pre', fontFamily: 'monospace', fontSize: '1rem' }}>
          {asciiArt}
        </pre>
      )}
    </div>
  );
};

export default NerdSection;
