import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutMe: React.FC = () => (
  <Box id="about" sx={{ backgroundColor: '#1e1e1e', color: '#fff', p: 3, borderRadius: 1 }}>
    <Typography variant="h5" gutterBottom>
      About Me
    </Typography>
    <Typography paragraph>
      Software engineer by profession, systems tinkerer by obsession. I am currently pursuing a Master&#39;s degree in Software Engineering at the University of Genoa while working at Esaote on medical imaging software.
    </Typography>
    <Typography paragraph>
      My interests span distributed systems, cloud native technologies and high performance computing. I love experimenting with new tech and sharing open source projects on GitHub.
    </Typography>
  </Box>
);

export default AboutMe;
