import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, stagger } from "../../lib/motion";

const principles = [
  {
    id: "01",
    title: "Architecture before implementation",
    description:
      "I invest time upfront designing the system structure so features don’t become liabilities later. Clean boundaries, predictable data flow, and scalability are non-negotiable.",
  },
  {
    id: "02",
    title: "Production is the baseline",
    description:
      "Error handling, performance, security, and maintainability are treated as first-class concerns — not post-launch fixes.",
  },
  {
    id: "03",
    title: "Clarity over cleverness",
    description:
      "Readable, explicit code scales better than smart abstractions. I optimize for teams, not ego.",
  },
  {
    id: "04",
    title: "Systems outlive features",
    description:
      "Features change. Systems remain. I design software that can evolve without constant rewrites.",
  },
];

const Principles = () => {
  return (
    <section className="py-48 border-t border-white/10 relative">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-24"
        >
          {/* LEFT — STATEMENT */}
          <motion.div
            variants={fadeUp}
            className="lg:sticky lg:top-32 self-start"
          >
            <p className="text-xs uppercase tracking-widest text-accent mb-6">
              Principles
            </p>

            <h2 className="text-6xl font-extrabold leading-tight">
              Engineering
              <br />
              standards.
            </h2>

            <p className="mt-8 text-lg text-white/60 max-w-md">
              These principles guide every system I design and every production
              decision I make.
            </p>
          </motion.div>

          {/* RIGHT — PRINCIPLES LIST */}
          <motion.div variants={stagger} className="space-y-24">
            {principles.map((principle) => (
              <motion.div
                key={principle.id}
                variants={fadeUp}
                className="relative pl-16"
              >
                {/* Index */}
                <span className="absolute left-0 top-1 text-white/20 text-sm font-mono">
                  {principle.id}
                </span>

                <h3 className="text-3xl font-semibold mb-4">
                  {principle.title}
                </h3>

                <p className="text-white/60 max-w-xl leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Principles;
