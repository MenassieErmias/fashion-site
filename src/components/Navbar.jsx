import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-primary p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="flex space-x-4">
        <li>
          <Link className="text-white hover:text-secondary font-sans" to="/">Home</Link>
        </li>
        <li>
          <Link className="text-white hover:text-secondary font-sans" to="/about">About</Link>
        </li>
        <li>
          <Link className="text-white hover:text-secondary font-sans" to="/products">Products</Link>
        </li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;