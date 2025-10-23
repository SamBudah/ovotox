import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer>
    <div className="container">
      <motion.div
        className="footer-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          src="/assets/logos/logo2.png" 
          alt="Ovotox Logo" 
          style={{ height: '40px', marginBottom: '1rem' }}
        />
        <p>Creating innovative platforms and experiences that shape the future of digital creativity.</p>
      </motion.div>
      
      <motion.div
        className="footer-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3>Contact</h3>
        <p><a href="mailto:info@ovotox.com">info@ovotox.com</a></p>
        <p>Nairobi, Kenya</p>
        <p>+254 791433455</p>
      </motion.div>
      
      <motion.div
        className="footer-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Connect</h3>
        <div className="social-icons">
          <a href="https://facebook.com/OvotoxHQ" aria-label="Ovotox on Facebook">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/OvotoxHQ" aria-label="Ovotox on Instagram">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/company/OvotoxHQ" aria-label="Ovotox on LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/OvotoxHQ" aria-label="Ovotox on Twitter">
            <FaTwitter />
          </a>
          <a href="https://youtube.com/OvotoxHQ" aria-label="Ovotox on YouTube">
            <FaYoutube />
          </a>
        </div>
      </motion.div>
    </div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{ 
        textAlign: 'center', 
        marginTop: '3rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
      }}
    >
      <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
        &copy; 2025 Ovotox. All rights reserved. | Building the future of creativity and technology.
      </p>
    </motion.div>
  </footer>
);

export default Footer;