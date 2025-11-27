import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ to = "#", children, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Link
        to={to}
        onClick={onClick}
        className="inline-flex items-center justify-center px-5 py-2.5 font-medium 
                   rounded-2xl transition-all duration-300 relative overflow-hidden
                   text-primary hover:text-link-hover w-full md:w-auto"
      >
        <span className="absolute inset-0 bg-gradient-to-r hover:bg-card bg-card/10 
                         transition-all hover:scale-105 cursor-pointer rounded-2xl"></span>
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}