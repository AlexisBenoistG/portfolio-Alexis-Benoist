import { motion } from "framer-motion";

export default function MyName() {
  return (
    <section id="myName" className="myName flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold text-slate-100 
                   bg-zinc-900/40 backdrop-blur-md px-6 py-4 
                   rounded-xl border border-zinc-700 shadow-lg"
      >
        <span className="text-blue-400">Alexis Benoist</span> !
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-slate-300 text-lg max-w-xl
                   bg-zinc-900/30 backdrop-blur-md px-4 py-2
                   rounded-lg border border-zinc-700 shadow-md"
      >
        Développeur front-end passionné par la création d’expériences fluides et élégantes.
      </motion.p>
    </section>
  );
}
