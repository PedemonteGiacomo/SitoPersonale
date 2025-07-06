import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Starfield from './components/Starfield';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import NerdSection from './components/NerdSection';
import InteractiveCV from './components/InteractiveCV';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Starfield />
      <Box sx={{ p: 2 }}>
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Certifications />
        <NerdSection />
        <InteractiveCV />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}
