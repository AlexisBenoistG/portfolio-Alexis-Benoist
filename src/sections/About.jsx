import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

export default function About() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="about"
    >
      <h2>À propos</h2>
      <p>Je suis un développeur passionné...</p>
      <motion.div
        initial="hidden"
        whileInView="show"
      >
      </motion.div>
    </motion.section>
  );
}
