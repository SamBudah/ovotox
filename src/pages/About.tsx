import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

  return (
    <section id="about" aria-label="About Ovotox" className="page-section">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Ovotox</h1>
          <p className="page-subtitle">Pioneering the future of creative technology and digital innovation</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-grid"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-text">
              <h2>Who We Are</h2>
              <p>
                Ovotox is a multidisciplinary parent company that brings together innovation, 
                storytelling, digital infrastructure, and education under one unified vision.
              </p>
              <p>
                From our beginnings in media and creative education to our current presence 
                across digital ventures, we've never lost sight of what drives us: the power 
                of ideas, and the people behind them.
              </p>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                  <h3>6+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item">
                  <h3>15+</h3>
                  <p>Industry Partners</p>
                </div>
                <div className="stat-item">
                  <h3>5</h3>
                  <p>Awards & Nominations</p>
                </div>
              </div>
            </div>

            <motion.div
              className="about-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/assets/Ovotoxteam.jpeg"
                alt="Ovotox Team"
                className="team-image"
              />
              <div className="image-overlay">
                <div className="overlay-content">
                  <h4>Our Team</h4>
                  <p>Dedicated professionals driving innovation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="founder-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="accordion">
              <motion.div
                className="accordion-header"
                whileHover={{ backgroundColor: 'rgba(0, 198, 255, 0.05)' }}
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                role="button"
                aria-expanded={isAccordionOpen}
                aria-controls="founder-note"
              >
                <div className="accordion-title">
                  <h3>A Note From the Founder</h3>
                  <p>Insights from Tonnie Kamau, Founder & CEO</p>
                </div>
                <motion.span
                  className="accordion-icon"
                  animate={{ rotate: isAccordionOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </motion.div>

              <AnimatePresence>
  {isAccordionOpen && (
    <motion.div
      id="founder-note"
      className="accordion-content open"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <div className="founder-content">
        <div className="founder-quote">
          <blockquote>
            <p>
              We are all, in some way, defined by our obligations. To our families, our dreams, our creditors, and to the silent promises we make to ourselves in the dark of night.
            </p>
            <p>
              Ovotox was not born in a boardroom. It was forged in the quiet, relentless tension between vision and reality—a tension every entrepreneur knows intimately. It is the child of misunderstood intentions and the unwavering belief that creativity is not a risk, but our most profound form of capital.
            </p>
            <p>
              I have known the weight of ambition when it becomes debt. I have felt the cold gaze of judgment when a dream stalls and a promise is delayed. But I have also learned that in the breaking, we find our true shape. That resilience is not just the ability to withstand pressure, but the courage to reshape meaning from the pieces.
            </p>
            <p>
              This company is my answer to that breaking. It is a covenant to all who have ever been misunderstood for daring to build something new. We do not create because it is easy. We create because it is necessary. We build platforms not as mere tools, but as bridges—between artist and audience, between entrepreneur and opportunity, between the Africa we inhabit and the one we imagine.
            </p>
            <p>
              Ovotox is more than a company. It is a declaration that our stories matter. That our struggles are not failures, but the very soil from which new worlds grow.
            </p>
            <p>
              This is for the builders, the believers, and the broken-hearted who still choose to dream. You are not alone. Your obligation is not your burden—it is your proof that you have something the world truly needs.
            </p>
          </blockquote>
          <div className="founder-signature">
            <strong>— Tonnie Kamau</strong>
            <span>Founder & CEO, Ovotox</span>
          </div>
        </div>
        
        <div className="founder-image">
          <img
            src="/assets/Founder.jpg"
            alt="Tonnie Kamau, Founder of Ovotox"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;