import { motion } from "framer-motion";

export default function MyName() {
  return (
    <section
      id="myName"
      className="flex flex-col items-center justify-center h-screen text-center px-4 mb-2"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center space-x-6 mx-auto mt-10"
      >
        <img
          src="./Moi.jpg"
          alt="Photo de moi"
          className="w-60 h-60 shadow-lg rounded-full border border-theme flex-shrink-0"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg bg-card backdrop-blur-md px-4 py-3 
               rounded-2xl w-100 border border-theme shadow-md text-secondary"
        >
          Développeur front-end passionné par la création d'expériences fluides
          et élégantes.
        </motion.p>
      </motion.div>
    </section>
  );
}
