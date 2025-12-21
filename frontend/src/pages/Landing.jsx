import { motion } from 'framer-motion';
import './Landing.css';

const Landing = () => {
  const features = [
    {
      title: "Visual Search",
      description: "Upload an image and find visually similar images from our vast database using advanced computer vision algorithms.",
      icon: "🔍"
    },
    {
      title: "Fast Results",
      description: "Get instant results with our optimized retrieval system that processes thousands of images in milliseconds.",
      icon: "⚡"
    },
    {
      title: "High Accuracy",
      description: "Our deep learning models ensure precise matching based on color, texture, shape, and semantic features.",
      icon: "🎯"
    },
    {
      title: "Intuitive Interface",
      description: "Simple drag-and-drop functionality with a clean, modern interface designed for the best user experience.",
      icon: "✨"
    },
    {
      title: "Multiple Formats",
      description: "Support for various image formats including JPG, PNG, WebP, and more for maximum compatibility.",
      icon: "📁"
    },
    {
      title: "Secure & Private",
      description: "Your uploaded images are processed securely and not stored permanently, ensuring your privacy.",
      icon: "🔒"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">Image Seek</h1>
          <p className="hero-description">
            Discover the power of visual search with our advanced Content-Based Image Retrieval system. 
            Upload any image and find similar ones instantly using state-of-the-art computer vision technology.
          </p>
          <p className="hero-subtitle">
            Transform the way you search and explore images with AI-powered similarity matching.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <motion.h2
          className="features-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h2>
        
        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`bento-item bento-item-${index + 1}`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="bento-icon">{feature.icon}</div>
              <h3 className="bento-title">{feature.title}</h3>
              <p className="bento-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">Get In Touch</h2>
          <div className="contact-links">
            <a
              href="https://github.com/y4sh-codes/CBIR.git"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub Repository
            </a>
            <a
              href="mailto:yashrajsingh231105@gmail.com"
              className="contact-link"
            >
              <svg className="contact-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              yashrajsingh231105@gmail.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Landing;
