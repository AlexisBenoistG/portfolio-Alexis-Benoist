import { competencesData } from "../data/competences";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function CategorySection({ title, skills, isOpen, onToggle }) {
  return (
    <div className="border border-theme rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left 
                   hover:bg-white/5 transition-all duration-300 group"
      >
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 ">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl
           border border-theme hover:border-none gradient-hover
                         transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    {skill.icon.startsWith("http") ? (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-3xl">{skill.icon}</span>
                    )}
                  </div>
                  <span className="text-xs text-center text-secondary group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Competences() {
  const [openCategories, setOpenCategories] = useState({
    Langages: true,
    "Frameworks/Bibliothèques": false,
    "Bases de données": false,
    Outils: false,
    Méthodes: false,
  });

  const toggleCategory = (category) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <section
      id="competences"
      className="max-w-5xl mx-auto mt-32 px-6 py-10 
                 bg-card backdrop-blur-md rounded-2xl
                 border border-theme shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-primary mb-6"
      >
        Mes compétences techniques
      </motion.h1>

      <p className="text-secondary mb-8">
        Voici un aperçu de mes compétences organisées par catégorie. Cliquez sur
        chaque section pour découvrir les détails.
      </p>

      <div className="space-y-4">
        {Object.entries(competencesData).map(([category, skills]) => (
          <CategorySection
            key={category}
            title={category}
            skills={skills}
            isOpen={openCategories[category]}
            onToggle={() => toggleCategory(category)}
          />
        ))}
      </div>
    </section>
  );
}
