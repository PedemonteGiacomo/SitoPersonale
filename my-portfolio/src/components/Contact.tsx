import React from 'react';
import { useGlitch } from 'react-powerglitch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Contact: React.FC = () => {
  const glitch = useGlitch({ playMode: 'hover' });
  return (
    <Box id="contact" textAlign="center">
      <Typography variant="h5" gutterBottom ref={glitch.ref as any}>
        Connect with Me
      </Typography>
      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
        <li>
          <Link href="mailto:giacomopedemonte@libero.it" target="_blank" rel="noopener noreferrer">
            Email
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/giacomo-pedemonte-3983a6236" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://github.com/PedemonteGiacomo" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </li>
      </Box>
      <Button ref={glitch.ref} href="/cv.pdf" download variant="outlined" sx={{ mt: 2 }}>
        Download CV
      </Button>
    </Box>
  );
};

export default Contact;
