import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col max-h-screen px-4 max-w-4xl mx-auto mt-32 px-6 py-10 bg-card backdrop-blur-md rounded-2xl border border-theme shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-primary mb-6"
      >
        Retrouvez mes projets :
      </motion.h1>

      <p className="text-secondary">
        Je travaille sur des projets modernes et orientés design. Vous pourrez
        bientôt retrouver ici une sélection illustrée de mes réalisations !
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="h-32 rounded-xl border border-theme bg-card backdrop-blur-sm" />
        <div className="h-32 rounded-xl border border-theme bg-card backdrop-blur-sm" />
      </div>
    </section>
  );
}
