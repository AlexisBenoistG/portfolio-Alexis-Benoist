import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Retrouvez mes coordonneés : 
      </motion.h1>
    </section>
  );
}
