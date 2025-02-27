import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="bg-primary text-white p-4 mt-10"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <p className="font-sans">© {new Date().getFullYear()} Fashion Site. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li><a href="#" className="hover:text-secondary font-sans">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-secondary font-sans">Terms of Service</a></li>
          <li><a href="#" className="hover:text-secondary font-sans">Contact Us</a></li>
        </ul>
      </div>
    </motion.footer>
  );
};

export default Footer;