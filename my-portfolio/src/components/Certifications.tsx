import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

interface CertificationEvent {
  title: string;
  subtitle: string;
  date: string;
}

const events: CertificationEvent[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    subtitle: 'University of Genoa',
    date: '2019 - 2022',
  },
  {
    title: "Master's Degree in Software Engineering",
    subtitle: 'University of Genoa',
    date: '2022 - Present',
  },
  {
    title: 'Google Cloud Digital Leader',
    subtitle: 'Certification',
    date: '2024',
  },
  {
    title: 'Azure Fundamentals AZ-900',
    subtitle: 'Certification',
    date: '2024',
  },
  {
    title: 'Oracle Cloud Foundations Associate',
    subtitle: 'Certification',
    date: '2024',
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

export default function Certifications() {
  return (
    <Timeline position="alternate">
      {events.map((event, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {i < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} style={{ padding: '6px 16px' }}>
                <Typography variant="h6" component="h1">
                  {event.title}
                </Typography>
                <Typography variant="subtitle2">{event.subtitle}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {event.date}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      ))}
    </Timeline>
  );
}
