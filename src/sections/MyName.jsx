import { motion } from "framer-motion";

export default function MyName() {
  return (
    <section className="myName">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Salut, moi c’est Alexis Benoist !
      </motion.h1>
    </section>
  );
}
