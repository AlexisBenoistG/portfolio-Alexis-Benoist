import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Button from "./Button.jsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { to: "/portfolio-Alexis-Benoist/", label: "Accueil" },
    { to: "/portfolio-Alexis-Benoist/about", label: "À propos" },
    { to: "/portfolio-Alexis-Benoist/projects", label: "Projets" },
    { to: "/portfolio-Alexis-Benoist/competences", label: "Compétences" },
    { to: "/portfolio-Alexis-Benoist/contact", label: "Contact" },
    { to: "/portfolio-Alexis-Benoist/cv", label: "CV" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center gap-1">
        <Button to="/portfolio-Alexis-Benoist/">Accueil</Button>
        <div className="w-px h-8 bg-slate-700 mx-2"></div>
        <Button to="/portfolio-Alexis-Benoist/about">À propos</Button>
        <Button to="/portfolio-Alexis-Benoist/projects">Projets</Button>
        <Button to="/portfolio-Alexis-Benoist/competences">Compétences</Button>
        <div className="w-px h-8 bg-slate-700 mx-2"></div>
        <Button to="/portfolio-Alexis-Benoist/contact">Contact</Button>
        <Button to="/portfolio-Alexis-Benoist/cv">CV</Button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden left-0">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative z-50 p-2 text-primary hover:text-link transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-5 flex flex-col justify-between"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 8 }
              }}
              className="w-full h-0.5 bg-current transform origin-center transition-all"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              className="w-full h-0.5 bg-current transition-all"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -8 }
              }}
              className="w-full h-0.5 bg-current transform origin-center transition-all"
            />
          </motion.div>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-64 bg-card border-l border-theme 
                           shadow-2xl z-50 overflow-y-auto rounded-l-2xl"
              >
                <div className="flex flex-col gap-2 p-6 mt-16">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button to={item.to} onClick={closeMenu}>
                        {item.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}