import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      className="text-center min-h-screen bg-background text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold font-sans">About Us</h1>
      <p className="mt-4 font-serif">Learn more about our fashion journey.</p>
    </motion.div>
  );
};

export default About;