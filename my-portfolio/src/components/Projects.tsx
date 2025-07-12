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
    title: 'AccessAI Chrome Extension',
    description: 'Automatically generates descriptive alt text for better web accessibility.',
    repo: 'https://github.com/PedemonteGiacomo/AccessAI',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/AccessAI\n$ cd AccessAI\n$ npm install\n$ npm run build',
  },
  {
    title: 'Distributed Computing Project',
    description: 'High-impact distributed system tackling queuing and scheduling challenges.',
    repo: 'https://github.com/PedemonteGiacomo/DistributedComputingProject',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/DistributedComputingProject',
  },
  {
    title: 'Parking Simulation System',
    description: 'IoT project using AI for license plate recognition.',
    repo: 'https://github.com/PedemonteGiacomo/SmartParking',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/SmartParking',
  },
  {
    title: 'Book Recommendation System',
    description: 'Machine learning models predicting book genres from a decade of best sellers.',
    repo: 'https://github.com/PedemonteGiacomo/BookRecommendationSystem',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/BookRecommendationSystem',
  },
  {
    title: 'cv2kinesis',
    description: 'Real-time object detection and streaming with YOLOv8 and AWS Kinesis.',
    repo: 'https://github.com/PedemonteGiacomo/cv2kinesis',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/cv2kinesis\n$ cd cv2kinesis',
  },
  {
    title: 'Virtualization and Cloud Computing',
    description: 'Automated multi-node infrastructure setup using Ansible.',
    repo: 'https://github.com/PedemonteGiacomo/VirtualizationAndCloudComputing',
    snippet: '$ git clone https://github.com/PedemonteGiacomo/VirtualizationAndCloudComputing',
  },
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

