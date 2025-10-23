import React from 'react';
import { motion } from 'framer-motion';

const WhyOvotox: React.FC = () => {
  const values = [
    {
      icon: '⚡',
      title: 'Innovation First',
      description: 'We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: '🎯',
      title: 'Excellence in Execution',
      description: 'Every project receives our full commitment to quality, attention to detail, and professional delivery.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Partnership',
      description: 'We work closely with our clients and partners, building relationships that drive mutual success.'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Local expertise with international standards, ensuring world-class quality in every project.'
    }
  ];

  const differentiators = [
    {
      title: 'End-to-End Solutions',
      description: 'From concept to delivery, we provide comprehensive services that cover every aspect of your project.'
    },
    {
      title: 'Industry Expertise',
      description: 'Years of experience in media, technology, and creative industries ensure we understand your needs.'
    },
    {
      title: 'Proven Track Record',
      description: 'Successful projects with major partners demonstrate our capability and reliability.'
    },
    {
      title: 'Future-Forward Thinking',
      description: 'We anticipate trends and adapt quickly, keeping you ahead in a rapidly evolving digital landscape.'
    }
  ];

  return (
    <section id="why-ovotox" aria-label="Why Choose Ovotox" className="page-section">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Why Ovotox</h1>
          <p className="page-subtitle">
            Because the world is changing — and we're designing what comes next
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          className="mission-vision-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="mission-card"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              <div className="card-icon">🎯</div>
              <h2>Our Mission</h2>
            </div>
            <div className="card-content">
              <p>
                To build platforms, experiences, and ecosystems that empower creativity, 
                drive meaningful connection, and offer real solutions for a better world.
              </p>
              <div className="mission-highlights">
                <div className="highlight-item">
                  <span className="highlight-dot"></span>
                  <span>Empower creativity and innovation</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot"></span>
                  <span>Drive meaningful connections</span>
                </div>
                <div className="highlight-item">
                  <span className="highlight-dot"></span>
                  <span>Deliver real-world solutions</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="vision-card"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="card-header">
              <div className="card-icon">🚀</div>
              <h2>Our Vision</h2>
            </div>
            <div className="card-content">
              <p>
                To be a globally recognized force for progress—where technology, creativity, 
                and purpose converge to transform how people live, learn, work, and connect.
              </p>
              <div className="vision-goals">
                <div className="goal-item">
                  <strong>Global Recognition</strong>
                  <span>Industry leader in creative technology</span>
                </div>
                <div className="goal-item">
                  <strong>Transformative Impact</strong>
                  <span>Changing how people interact with technology</span>
                </div>
                <div className="goal-item">
                  <strong>Convergence</strong>
                  <span>Where creativity meets purpose</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="values-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Our Core Values</h2>
          <p className="section-description">
            These principles guide everything we do and define who we are
          </p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Differentiators */}
        <motion.div
          className="differentiators-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>What Sets Us Apart</h2>
          <div className="differentiators-grid">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                className="differentiator-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="differentiator-number">0{index + 1}</div>
                <div className="differentiator-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="why-cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to Experience the Ovotox Difference?</h3>
            <p>
              Join countless satisfied clients and partners who have chosen Ovotox 
              for their most important projects.
            </p>
            <div className="cta-buttons">
              <motion.button
                className="primary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="secondary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOvotox;