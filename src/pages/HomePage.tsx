import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Github } from 'lucide-react';
import { Terminal } from '../components/Terminal';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { portfolioData } from '../data/portfolio';

export function HomePage() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section with Terminal */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-6xl font-bold text-white mb-4"
              >
                <span className="text-neon-green font-mono">$</span> {portfolioData.name}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-300 mb-6 max-w-lg leading-relaxed"
              >
                {portfolioData.headline}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-4 text-gray-400 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-neon-green" />
                  <span>{portfolioData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-neon-green" />
                  <span>Available for opportunities</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  to="/projects"
                  className="px-6 py-3 bg-neon-green text-gray-950 font-semibold rounded-lg hover:bg-neon-blue transition-colors inline-flex items-center space-x-2 focus-ring"
                >
                  <span>View Projects</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                
                <a 
                  href={portfolioData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-gray-950 transition-colors rounded-lg inline-flex items-center space-x-2 focus-ring"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Terminal */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Terminal />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title="~ /experience">
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-neon-green/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neon-green">{exp.position}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>{exp.location}</p>
                  <p className="text-sm">{exp.period}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="~ /education" className="bg-gray-900/20">
        <div className="space-y-8">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-neon-green/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-neon-green">{edu.degree}</h3>
                  <p className="text-lg text-gray-300">{edu.institution}</p>
                  {edu.grade && (
                    <p className="text-neon-blue font-mono">{edu.grade}</p>
                  )}
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  <p>{edu.location}</p>
                  <p className="text-sm">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="~ /skills">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(portfolioData.toolbox).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-neon-green/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-neon-green mb-4 capitalize">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600 font-mono hover:border-neon-green/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="projects" title="~ /projects" className="bg-gray-900/20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-gray-950 transition-colors rounded-lg focus-ring"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="~ /contact">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-300 mb-8">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and build something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-neon-green text-gray-950 font-semibold rounded-lg hover:bg-neon-blue transition-colors inline-flex items-center justify-center space-x-2 focus-ring"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}