import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

export default function About() {
  return (
    <motion.section
      id="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="about max-w-3xl mx-auto mt-32 px-6 py-10 
                 bg-zinc-900/40 backdrop-blur-md rounded-2xl 
                 border border-zinc-700 shadow-xl"
    >
      <h2 className="text-3xl font-semibold text-slate-100 mb-4">
        À propos de moi
      </h2>

      <p className="text-slate-300 leading-relaxed">
        Je suis un développeur passionné spécialisé dans la création
        d’interfaces modernes, performantes et élégantes. J’adore concevoir des
        expériences qui allient fluidité, esthétique et lisibilité.
      </p>

      <motion.div variants={fadeUp} className="mt-6 text-slate-400">
        Avec une approche orientée design et un goût pour les animations
        subtiles, j’aime donner vie aux interfaces pour les rendre plus
        engageantes.
      </motion.div>
    </motion.section>
  );
}
