import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

export default function MyName() {
  return (
    <section
      id="myName"
      className="flex flex-col items-center justify-center h-screen text-center px-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-bold backdrop-blur-md px-6 py-4 
                   rounded-xl"
      >
        <span className="text-title">Alexis Benoist</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg max-w-xl bg-card backdrop-blur-md px-4 py-2
                   rounded-2xl border border-theme shadow-md text-secondary"
      >
        Développeur front-end passionné par la création d'expériences fluides et
        élégantes.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img
          src="./Moi.jpg"
          alt="Photo de moi"
          className="w-70 h-75 mt-8 shadow-lg rounded-2xl border border-theme"
        />
      </motion.div>
    </section>
  );
}
