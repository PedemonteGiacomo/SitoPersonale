import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutMe: React.FC = () => (
  <Box id="about" sx={{ backgroundColor: '#1e1e1e', color: '#fff', p: 3, borderRadius: 1 }}>
    <Typography variant="h5" gutterBottom>
      About Me
    </Typography>
    <Typography>
      Software engineer by profession, systems tinkerer by obsession.
    </Typography>
  </Box>
);

export default AboutMe;
