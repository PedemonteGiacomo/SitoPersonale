import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'nerd', label: 'Nerd' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(6px)' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Giacomo Pedemonte
        </Typography>
        {sections.map((s) => (
          <Button key={s.id} color="inherit" href={`#${s.id}`} sx={{ textTransform: 'none' }}>
            {s.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}
