import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-4xl mx-auto mt-32 mb-13 px-6 py-10 bg-card backdrop-blur-md 
                 rounded-2xl border border-theme shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-primary mb-6"
      >
        Mes projets
      </motion.h1>

      <p className="text-secondary mb-8">
        Je travaille sur des projets modernes et orientés design. Vous pourrez
        bientôt retrouver ici une sélection illustrée de mes réalisations !
      </p>

      {/* Bannière "En cours de développement" */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative overflow-hidden rounded-2xl border-2 border-dashed border-theme 
                   bg-gradient-to-br from-blue-600/5 to-purple-600/5 p-8 md:p-12 text-center mb-8"
      >
        {/* Animation de fond */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10">
          <motion.div
            className="inline-block text-6xl mb-4"
          >
            🚧
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
            En cours de développement
          </h2>

          <p className="text-secondary text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Cette section est actuellement en construction. Mes projets seront
            bientôt disponibles avec des descriptions détaillées, captures d'écran
            et liens vers les démonstrations.
          </p>

          
        </div>
      </motion.div>

      {/* Aperçu des projets à venir */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3 className="text-xl font-semibold text-primary mb-4">
          Projets à venir
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="relative h-48 rounded-xl border border-theme bg-card/30 
                         backdrop-blur-sm overflow-hidden group hover:border-white/20 
                         transition-all duration-300"
            >
              {/* Effet de skeleton loading */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent 
                           via-white/5 to-transparent"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-secondary text-sm">Projet #{index}</p>
                  <p className="text-secondary text-xs opacity-70">En préparation</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}