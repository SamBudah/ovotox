import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const partners = [
    { name: 'MultiChoice', logo: '/assets/partners/multichoice.webp' },
    { name: 'M-Net', logo: '/assets/partners/mnet.webp' },
    { name: 'Canon', logo: '/assets/partners/canon.webp' },
    { name: 'Kenya Film Commission', logo: '/assets/partners/KFC.webp' },
    { name: 'Showmax', logo: '/assets/partners/showmax.webp' },
    { name: 'DStv', logo: '/assets/partners/dstv.webp' }
  ];

  // Auto-play functionality for infinite carousel
  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    
    if (isAutoPlaying) {
      carousel.style.animationPlayState = 'running';
    } else {
      carousel.style.animationPlayState = 'paused';
    }
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <>
      {/* Hero Section */}
      <section id="top" aria-label="Welcome to Ovotox" className="hero-section">
        <div className="container">
          <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    Welcome to <span className="gradient-text">Ovotox</span>
  </motion.h1>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    Ovotox is a future-focused company creating meaningful solutions across the intersections of creativity, technology, and human experience.
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    We exist to build, empower, and connect — through platforms, content, and systems designed to meet the evolving needs of individuals, communities, and industries.
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
  >
    We don't follow trends. We help shape what comes next.
  </motion.p>
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.7 }}
    className="hero-tagline"
  >
    Ovotox — Creating for the world we want to live in.
  </motion.p>
  <motion.div
    className="cta-buttons"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
  >
    <Link to="/why-ovotox">
      <motion.button 
        className="primary-cta" 
        aria-label="Explore Our Vision"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Vision
      </motion.button>
    </Link>
    <Link to="/about">
      <motion.button 
        className="secondary-cta" 
        aria-label="Learn More"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.button>
    </Link>
  </motion.div>
</motion.div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Featured On Section */}
      <section id="featured-on" aria-label="As Featured On" className="featured-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            As Featured On
          </motion.h2>
          <div className="media-grid">
            {[
              { name: 'Business Daily Africa', logo: '/assets/featured/business-daily.png', url: 'https://www.businessdailyafrica.com/bd/corporate/enterprise/what-my-failures-me-about-running-a-business-2729050' },
              { name: 'Standard Media', logo: '/assets/featured/standard-media.png', url: 'https://www.standardmedia.co.ke/counties/article/2001399113/ovotox-in-partnership-talks-with-international-film-academy' },
              { name: 'Who Owns Kenya', logo: '/assets/featured/who-owns-kenya.png', url: 'https://whownskenya.com/tonnie-kamau-entrepreneur-behind-ovotox-one-of-nairobis-biggest-multimedia-training-and-production-firms/' },
              { name: 'The Star', logo: '/assets/featured/the-star.png', url: 'https://www.the-star.co.ke/news/2022-10-13-current-market-trend-is-opaque-frustrating-filmmaker' },
              { name: 'Tuko', logo: '/assets/featured/tuko.png', url: 'https://www.tuko.co.ke/entertainment/celebrities/479023-film-producer-launches-multimillion-project-youtube-laments-industry-opaque-frustrates-youth/' },
              { name: 'Mpasho', logo: '/assets/featured/mpasho.png', url: 'https://www.mpasho.co.ke/entertainment/2024-11-22-how-kenyan-film-producer-tonnie-kamau-lost-millions-in-the-industry' }
            ].map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="media-item"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <a href={media.url} target="_blank" rel="noopener noreferrer" aria-label={`Read about Ovotox on ${media.name}`}>
                  <img src={media.logo} alt={`${media.name} Logo`} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects Section */}
      <section id="major-projects" aria-label="Our Major Projects" className="projects-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <div className="projects-grid">
            {[
              {
                title: 'Ann & Dan',
                description: 'Relationship drama 12 episode Web Series Season 1',
                year: '2024',
                status: 'Completed'
              },
              {
                title: 'Holiday Fiancée',
                description: 'Available on Maisha Magic Movies Multichoice (DStv) & Showmax',
                year: '2023',
                status: 'Distributed'
              },
              {
                title: 'Sleep',
                description: 'Feature Film - Kalasha Awards Nominee',
                year: '2022',
                status: 'Award Nominated'
              },
              {
                title: 'What if',
                description: 'Short Film - Runners Up MachaWood Film Festival',
                year: '2021',
                status: 'Festival Winner'
              },
              {
                title: 'Teke',
                description: 'Pilot Trailer',
                year: '2020',
                status: 'In Development'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <p>{project.description}</p>
                <div className="project-status">
                  <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Carousel Section - Mercedes-Benz Inspired */}
      <section id="partners" aria-label="Our Partners" className="partners-section">
        <div className="container">
          <motion.div
            className="partners-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Trusted By Industry Leaders</h2>
            <p className="partners-subtitle">Collaborating with the best in the industry to deliver exceptional results</p>
          </motion.div>

          <div className="carousel-container">
            <div className="carousel-wrapper">
              {/* Infinite Scroll Carousel */}
              <div 
                ref={carouselRef}
                className="carousel-scroll"
                style={{ 
                  animation: 'scroll 40s linear infinite',
                  animationPlayState: isAutoPlaying ? 'running' : 'paused'
                }}
              >
                {duplicatedPartners.map((partner, index) => (
                  <motion.div
                    key={`${partner.name}-${index}`}
                    className="partner-item"
                    whileHover={{ 
                      y: -8, 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="partner-logo-container">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`}
                        className="partner-logo"
                        loading="lazy"
                      />
                    </div>
                    <div className="partner-name">{partner.name}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" aria-label="Start Your Journey" className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>Ready to Create Something Extraordinary?</h2>
            <p>Join us in building the future of creative technology and digital experiences.</p>
            <Link to="/contact">
              <motion.button 
                className="cta-button" 
                aria-label="Start Your Journey with Ovotox"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;