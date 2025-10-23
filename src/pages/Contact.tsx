import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, type SubmitHandler } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string>('');

  React.useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setSubmitError('');
      
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        {
          from_name: data.name,
          from_email: data.email,
          company: data.company,
          subject: data.subject,
          message: data.message,
          to_email: 'info@ovotox.com',
        },
        'YOUR_PUBLIC_KEY' // Replace with your public key
      );

      if (result.text === 'OK') {
        console.log('Email sent successfully!', result.text);
        setIsSubmitted(true);
        reset();
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Failed to send email', error);
      setSubmitError('Failed to send message. Please try again or contact us directly at info@ovotox.com');
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      content: 'Nairobi, Kenya',
      description: 'Based in the heart of East Africa\'s innovation hub'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+254 791 433 455',
      description: 'Mon-Fri from 8am to 6pm EAT'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@ovotox.com',
      description: 'Send us your queries anytime'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      content: 'Mon - Fri: 8:00 - 18:00',
      description: 'Weekend projects available by appointment'
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/company/ovotoxhq',
      color: '#0077B5'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/ovotoxhq',
      color: '#1DA1F2'
    },
    {
      platform: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://instagram.com/ovotoxhq',
      color: '#E4405F'
    },
    {
      platform: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://facebook.com/ovotoxhq',
      color: '#1877F2'
    },
    {
      platform: 'YouTube',
      icon: <FaYoutube />,
      url: 'https://youtube.com/ovotoxhq',
      color: '#FF0000'
    }
  ];

  return (
    <section id="contact" aria-label="Contact Ovotox" className="page-section">
      <div className="container">
        <motion.div
          className="page-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Get In Touch</h1>
          <p className="page-subtitle">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="contact-content-wrapper">
          {/* Contact Information */}
          <motion.div
            className="contact-info-sidebar"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Let's Start a Conversation</h2>
            <p className="info-description">
              We're always building, listening, and collaborating. Reach out to discuss 
              your project, ask questions, or explore partnership opportunities.
            </p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="contact-detail-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <div className="contact-detail-icon">{item.icon}</div>
                  <div className="contact-detail-text">
                    <h3>{item.title}</h3>
                    <p className="contact-detail-content">{item.content}</p>
                    <p className="contact-detail-description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h3>Follow Our Journey</h3>
              <p className="social-description">
                Stay updated with our latest projects and insights
              </p>
              <div className="social-icons-container">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-item"
                    whileHover={{ 
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Follow us on ${social.platform}`}
                    style={{ '--social-color': social.color } as React.CSSProperties}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span>{social.platform}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {isSubmitted ? (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="success-icon">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <motion.button
                  className="secondary-cta"
                  onClick={() => setIsSubmitted(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
                <div className="form-header">
                  <h3>Send us a Message</h3>
                  <p>Fill out the form below and we'll respond promptly</p>
                </div>

                {submitError && (
                  <motion.div
                    className="error-banner"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <span className="error-icon">⚠️</span>
                    {submitError}
                  </motion.div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      Full Name *
                      {errors.name && <span className="required-dot">•</span>}
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                      placeholder="Your full name"
                      className={errors.name ? 'error' : ''}
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address *
                      {errors.email && <span className="required-dot">•</span>}
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' }
                      })}
                      placeholder="your.email@example.com"
                      className={errors.email ? 'error' : ''}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      placeholder="Your company name (optional)"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject *
                      {errors.subject && <span className="required-dot">•</span>}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register('subject', { 
                        required: 'Subject is required',
                        minLength: { value: 5, message: 'Subject must be at least 5 characters' }
                      })}
                      placeholder="What is this regarding?"
                      className={errors.subject ? 'error' : ''}
                      aria-invalid={errors.subject ? 'true' : 'false'}
                    />
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    Message *
                    {errors.message && <span className="required-dot">•</span>}
                  </label>
                  <textarea
                    id="message"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' },
                      maxLength: { value: 1000, message: 'Message must be less than 1000 characters' }
                    })}
                    placeholder="Tell us about your project, questions, or how we can help..."
                    rows={6}
                    className={errors.message ? 'error' : ''}
                    aria-invalid={errors.message ? 'true' : 'false'}
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="loading">
                      <span className="loading-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>

                <div className="form-footer">
                  <p className="privacy-note">
                    🔒 Your information is secure. We respect your privacy and will never share your details.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;