import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatWeDo: React.FC = () => {
  const [activeService, setActiveService] = useState<string>('creative');

  const services = [
    {
      id: 'creative',
      title: 'Creative Expression',
      subtitle: 'Storytelling & Content Creation',
      icon: '🎬',
      description: 'We develop and distribute content that connects with audiences on a human level.',
      features: [
        'Film & Video Production',
        'Digital Content Creation',
        'Brand Storytelling',
        'Creative Direction'
      ],
      projects: ['Ann & Dan Series', 'Holiday Fiancée', 'Sleep Feature Film']
    },
    {
      id: 'digital',
      title: 'Digital Experiences',
      subtitle: 'Platforms & Technology',
      icon: '💻',
      description: 'We design platforms that simplify, connect, and add value to daily life.',
      features: [
        'Web & Mobile Development',
        'UI/UX Design',
        'Digital Product Strategy',
        'Technology Consulting'
      ],
      projects: ['Ovotox Platform', 'Digital Learning Systems', 'Content Management Solutions']
    },
    {
      id: 'learning',
      title: 'Learning & Empowerment',
      subtitle: 'Education & Training',
      icon: '🎓',
      description: 'We create access to knowledge that fuels both personal and professional transformation.',
      features: [
        'Multimedia Training',
        'Professional Workshops',
        'Creative Mentorship',
        'Industry Education'
      ],
      projects: ['Film Production Courses', 'Digital Skills Training', 'Industry Workshops']
    },
    {
      id: 'opportunity',
      title: 'Opportunity & Access',
      subtitle: 'Resources & Networks',
      icon: '🚀',
      description: 'We open doors to resources, networks, and marketplaces that move people forward.',
      features: [
        'Industry Partnerships',
        'Talent Development',
        'Market Access',
        'Resource Provision'
      ],
      projects: ['Partner Collaborations', 'Talent Incubation', 'Market Distribution']
    }
  ];

  return (
    <section id="what-we-do" aria-label="What We Do at Ovotox" className="page-section">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>What We Do</h1>
          <p className="page-subtitle">
            Comprehensive solutions across creative technology and digital innovation
          </p>
        </motion.div>

        <div className="services-container">
          <motion.div
            className="services-nav"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <span className="service-icon">{service.icon}</span>
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="services-content">
            <AnimatePresence mode="wait">
              {services.map((service) => 
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    className="service-detail"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="service-header">
                      <div className="service-title">
                        <h2>{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                      </div>
                      <div className="service-highlight">
                        <span className="highlight-icon">{service.icon}</span>
                      </div>
                    </div>

                    <div className="service-features">
                      <h4>What We Offer</h4>
                      <div className="features-grid">
                        {service.features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            className="feature-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                          >
                            <div className="feature-dot"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="service-projects">
                      <h4>Featured Projects</h4>
                      <div className="projects-list">
                        {service.projects.map((project, index) => (
                          <motion.div
                            key={project}
                            className="project-item"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                          >
                            <div className="project-marker"></div>
                            <span>{project}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Ready to Start Your Project?</h3>
          <p>Let's discuss how we can bring your vision to life with our comprehensive services.</p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;