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
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={itemFade}>
            <h3>{p.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
