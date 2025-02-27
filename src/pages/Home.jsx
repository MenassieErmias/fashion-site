import { motion } from 'framer-motion';
import Button from '../components/Button'; // Ensure you import your Button component

const Home = () => {
  return (
    <motion.div
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 w-full h-screen"
        style={{ backgroundImage: 'url(https://picsum.photos/1920/1080)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="flex flex-col items-center justify-center h-full text-white z-10">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your Fashion Awaits
        </motion.h1>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button>Shop Now</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;