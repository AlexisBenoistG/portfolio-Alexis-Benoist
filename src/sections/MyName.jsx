import { motion } from "framer-motion";

export default function MyName() {
  return (
    <section
      id="myName"
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 py-20 mb-20"
    >
      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold backdrop-blur-md px-6 py-4 mt-10 rounded-xl mb-8"
      >
        <span className="text-title">Alexis Benoist</span>
      </motion.h1>

      {/* Photo et description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto mb-12"
      >
        <img
          src="./Moi.jpg"
          alt="Photo de Alexis Benoist"
          className="w-48 h-48 md:w-60 md:h-60 shadow-2xl rounded-full border-2 border-theme flex-shrink-0 object-cover"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg bg-card backdrop-blur-md px-6 py-4 
                     rounded-2xl border border-theme shadow-lg text-secondary max-w-md"
        >
          Développeur front-end passionné par la création d'expériences fluides
          et élégantes. Spécialisé en React, Angular et développement full-stack
          avec une approche centrée sur l'utilisateur.
        </motion.p>
      </motion.div>

      {/* Points forts en grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-12 w-full"
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="gradient-hover border border-theme rounded-xl p-6 
                       hover:border-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-primary font-semibold mb-2 text-sm md:text-base">
              {item.title}
            </h3>
            <p className="text-secondary text-xs md:text-sm">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistiques */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-3xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-link mb-1">
              {stat.value}
            </div>
            <div className="text-secondary text-xs md:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}