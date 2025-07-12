import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface CertificationEvent {
  title: string;
  subtitle: string;
  date: string;
  badgeId?: string;
}

const events: CertificationEvent[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    subtitle: 'University of Genoa',
    date: '2019 - 2022',
  },
  {
    title: "Master's Degree in Software Engineering",
    subtitle: 'University of Genoa (ongoing)',
    date: '2022 - Present',
  },
  {
    title: 'Software Engineering Internship',
    subtitle: 'Ericsson',
    date: '2024',
  },
  {
    title: 'Software Engineer',
    subtitle: 'Esaote',
    date: '2024 - Present',
  },
  {
    title: 'AWS Certified Developer – Associate',
    subtitle: 'Certification',
    date: '2024',
    badgeId: 'f16fd4e4-a3a9-4540-9cad-258998f11034',
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
  useEffect(() => {
    if (!document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')) {
      const script = document.createElement('script');
      script.src = '//cdn.credly.com/assets/utilities/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <Box id="certifications">
      <Typography variant="h5" gutterBottom>
        Career & Certifications
      </Typography>
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
                  {event.badgeId && (
                    <Box
                      sx={{ mt: 1 }}
                      dangerouslySetInnerHTML={{
                        __html: `<div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="${event.badgeId}" data-share-badge-host="https://www.credly.com"></div>`,
                      }}
                    />
                  )}
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </Box>
  );
}
