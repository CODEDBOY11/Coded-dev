import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, stagger } from "../../lib/motion";

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <Container>
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* role */}
          <motion.p
            variants={item}
            className="text-xs font-semibold tracking-[0.3em] uppercase text-accent"
          >
            Full-Stack Developer
          </motion.p>

          {/* headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl lg:text-7xl font-extrabold tracking-tight"
          >
            Building digital products
            <br />
            that are <span className="text-accent">engineered to scale</span>.
          </motion.h1>

          {/* description */}
          <motion.p variants={item} className="max-w-2xl text-lg text-white/60">
            I design and develop production-grade web systems with clean
            architecture, performance discipline, and long-term maintainability.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={item} className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 font-semibold text-black"
            >
              Selected Work
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold text-white"
            >
              Let’s Talk
            </a>
          </motion.div>

          {/* TECH STACK STRIP — THIS IS THE PART YOU ASKED ABOUT */}
          <motion.div
            variants={item}
            className="mt-14 flex flex-wrap gap-6 text-sm text-white/50"
          >
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>AWS</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
