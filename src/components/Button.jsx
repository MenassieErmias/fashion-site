import { motion } from 'framer-motion';

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-accent transition duration-300"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;