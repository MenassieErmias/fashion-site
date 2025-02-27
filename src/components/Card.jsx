import { motion } from 'framer-motion';

const Card = ({ title, description }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="font-bold text-lg">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default Card;