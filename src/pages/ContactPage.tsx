import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { copyToClipboard } from '../utils';

export function ContactPage() {
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const handleCopy = async (text: string, field: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: portfolioData.social.email,
      href: `mailto:${portfolioData.social.email}`,
      color: 'text-red-400',
      copyable: true
    },
    {
      icon: Github,
      label: 'GitHub',
      value: portfolioData.social.github,
      href: portfolioData.social.github,
      color: 'text-gray-400',
      copyable: false
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: portfolioData.social.linkedin,
      href: portfolioData.social.linkedin,
      color: 'text-blue-400',
      copyable: false
    }
  ];

  // Add phone if available
  if (portfolioData.social.phone) {
    contactMethods.push({
      icon: Phone,
      label: 'Phone',
      value: portfolioData.social.phone,
      href: `tel:${portfolioData.social.phone}`,
      color: 'text-green-400',
      copyable: true
    });
  }

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
            $ contact --help
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Let's connect! I'm always open to discussing new opportunities, 
            collaborations, or just having a chat about technology.
          </motion.p>
        </div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:border-neon-green/50 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <method.icon className={`w-6 h-6 mt-1 ${method.color} group-hover:scale-110 transition-transform`} />
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                  <p className="text-gray-300 text-sm break-all">{method.value}</p>
                  
                  <div className="flex items-center space-x-3 mt-4">
                    <a
                      href={method.href}
                      target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
                      rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center space-x-2 ${method.color} hover:text-neon-green transition-colors focus-ring rounded px-2 py-1`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">
                        {method.label === 'Email' ? 'Send Email' : 
                         method.label === 'Phone' ? 'Call' : `Open ${method.label}`}
                      </span>
                    </a>
                    
                    {method.copyable && (
                      <button
                        onClick={() => handleCopy(method.value, method.label)}
                        className="flex items-center space-x-2 text-gray-400 hover:text-neon-green transition-colors focus-ring rounded px-2 py-1"
                      >
                        {copiedField === method.label ? (
                          <>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-green-400">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span className="text-sm">Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-gray-900/30 border border-gray-700 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-semibold text-neon-green mb-4">
            Ready to Start a Conversation?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Whether you have a project in mind, want to discuss technology, 
            or explore potential collaborations, I'd love to hear from you. 
            Don't hesitate to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${portfolioData.social.email}`}
              className="px-6 py-3 bg-neon-green text-gray-950 font-semibold rounded-lg hover:bg-neon-blue transition-colors inline-flex items-center justify-center space-x-2 focus-ring"
            >
              <Mail className="w-5 h-5" />
              <span>Send an Email</span>
            </a>
            
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-neon-green text-neon-green hover:bg-neon-green hover:text-gray-950 transition-colors rounded-lg inline-flex items-center justify-center space-x-2 focus-ring"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Fun Terminal Output */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-12 bg-gray-900/80 border border-gray-700 rounded-lg p-4 font-mono text-sm"
        >
          <div className="text-neon-green mb-2">giacomo@portfolio:~$ echo "Looking forward to hearing from you!"</div>
          <div className="text-gray-300">Looking forward to hearing from you!</div>
          <div className="text-neon-green mt-2">giacomo@portfolio:~$ <span className="animate-pulse">_</span></div>
        </motion.div>
      </motion.div>
    </div>
  );
}