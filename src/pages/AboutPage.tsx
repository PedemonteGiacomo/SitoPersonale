import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold text-neon-green mb-4 font-mono"
          >
            $ whoami
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.headline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center space-x-6 mt-6 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-neon-green" />
              <span>{portfolioData.location}</span>
            </div>
          </motion.div>
        </div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-semibold text-neon-green mb-6 flex items-center">
            <span className="text-gray-400 mr-2">$</span> cat about.txt
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a passionate software engineer specializing in cloud platforms, DevOps practices, 
              and medical imaging technologies. Currently working at Esaote, I develop cloud-native 
              solutions for advanced medical imaging systems.
            </p>
            <p>
              My journey in technology started with a Bachelor's degree in Computer Science from 
              the University of Genoa, where I graduated with top honors (110/110). I then pursued 
              a Master's degree in Software Engineering, graduating summa cum laude (110/110 cum laude).
            </p>
            <p>
              I'm particularly passionate about accessibility in technology and AI applications, 
              as demonstrated by my AccessAI Chrome extension project. I believe in creating 
              inclusive technology that empowers everyone.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-neon-green mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3" />
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.position}</h3>
                    <p className="text-neon-green font-medium">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 md:mt-0">
                    <p>{exp.location}</p>
                    <p>{exp.period}</p>
                  </div>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <h2 className="text-2xl font-semibold text-neon-green mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3" />
            Education
          </h2>
          
          <div className="space-y-6">
            {portfolioData.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-neon-green font-medium">{edu.institution}</p>
                    {edu.grade && (
                      <p className="text-neon-blue font-mono text-sm mt-1">{edu.grade}</p>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm mt-2 md:mt-0">
                    <p>{edu.location}</p>
                    <p>{edu.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}