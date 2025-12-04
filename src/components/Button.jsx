import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Button({ to = "#", children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <Link
        to={to}
        onClick={onClick}
        className={`inline-flex items-center justify-center px-5 py-2.5 font-medium 
                   rounded-2xl transition-all duration-300 relative overflow-hidden
                   w-full md:w-auto
                   ${isActive 
                     ? 'text-secondary hover:text-primary' 
                     : 'text-primary hover:text-secondary'}`}
      >
        <span className="relative z-10">{children}</span>
        
        {/* Indicateur actif en dessous */}
        {isActive && (
          <motion.span
            layoutId="activeTab"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-slate-500 rounded-full"
            initial={false}
          />
        )}
      </Link>
    </motion.div>
  );
}