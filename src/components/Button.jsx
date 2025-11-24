import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Button({ to = "#", children }) {
  return (
    <motion.button
      whileHover={{ y: -5, scale: 1.05 }} 
      whileTap={{ y: 0, scale: 0.95 }} 
      className="inline-flex items-center justify-center rounded-xl border border-zinc-600 bg-zinc-950 px-5 py-3 font-medium text-slate-200 shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <Link to={to} className="w-full text-center">
        {children}
      </Link>
    </motion.button>
  );
}
