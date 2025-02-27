import { motion } from 'framer-motion';

const Products = () => {
  return (
    <motion.div
      className="text-center min-h-screen bg-background text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold font-sans">Products</h1>
      <p className="mt-4 font-serif">Check out our latest fashion products!</p>
    </motion.div>
  );
};

export default Products;