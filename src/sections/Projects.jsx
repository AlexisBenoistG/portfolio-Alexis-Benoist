import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects max-w-4xl mx-auto mt-32 px-6 py-10 
                        bg-zinc-900/40 backdrop-blur-md rounded-2xl 
                        border border-zinc-700 shadow-xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold text-slate-100 mb-6"
      >
        Retrouvez mes projets :
      </motion.h1>

      <p className="text-slate-300">
        Je travaille sur des projets modernes et orientés design. Vous pourrez
        bientôt retrouver ici une sélection illustrée de mes réalisations !
      </p>

      {/* Placeholder pour cards projet futures */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="h-32 rounded-xl border border-zinc-700 bg-zinc-900/30 backdrop-blur-sm" />
        <div className="h-32 rounded-xl border border-zinc-700 bg-zinc-900/30 backdrop-blur-sm" />
      </div>
    </section>
  );
}
