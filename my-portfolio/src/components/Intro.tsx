import React from 'react';
import Box from '@mui/material/Box';
import { TypeAnimation } from 'react-type-animation';

const Intro: React.FC = () => (
  <Box id="intro" textAlign="center" sx={{ py: 8 }}>
    <TypeAnimation
      sequence={['$ whoami', 1000, 'Giacomo Pedemonte', 2000]}
      wrapper="span"
      cursor
      repeat={Infinity}
      style={{ fontSize: '1.5rem', whiteSpace: 'pre' }}
    />
  </Box>
);

export default Intro;
