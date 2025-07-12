import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, Box } from '@mui/material';
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  repo: string;
  snippet: string;
}

const projects: Project[] = [
  {
    title: "Example Project",
    description: "Short project description.",
    repo: "https://github.com/user/example",
    snippet: "$ git clone https://github.com/user/example\n$ cd example\n$ npm install\n$ npm start"
  }
];

const cardStyle = {
  width: 300,
  height: 200,
  perspective: 1000,
  margin: '1rem',
};

export default function Projects() {
  return (
    <Box id="projects">
      <Typography variant="h5" gutterBottom>
        Projects
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            style={cardStyle as React.CSSProperties}
            whileHover={{ rotateY: 15, rotateX: 10 }}
          >
            <HoverCard project={project} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

function HoverCard({ project }: { project: Project }) {
  const [hover, setHover] = React.useState(false);

  return (
    <Card
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{ height: "100%" }}
    >
      {hover ? (
        <CardContent sx={{ backgroundColor: "#222", color: "#0f0", height: "100%" }}>
          <Typography component="pre" sx={{ fontFamily: "monospace", whiteSpace: "pre" }}>
            {project.snippet}
          </Typography>
        </CardContent>
      ) : (
        <>
          <CardContent>
            <Typography variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" href={project.repo} target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}

