import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, stagger } from "../../lib/motion";

const services = [
  {
    id: "01",
    title: "Full-Stack Product Development",
    description:
      "End-to-end development of production-ready web applications — from system design and frontend architecture to backend APIs and databases.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "02",
    title: "API Design & Integration",
    description:
      "Designing, integrating, and maintaining reliable APIs that scale — including third-party integrations, authentication, and data pipelines.",
    stack: ["REST", "GraphQL", "OAuth", "Webhooks"],
  },
  {
    id: "03",
    title: "Frontend Architecture & UX Engineering",
    description:
      "Building clean, scalable frontend systems with a strong focus on performance, maintainability, and user experience.",
    stack: ["React", "Tailwind", "Framer Motion"],
  },
  {
    id: "04",
    title: "Technical Consulting & System Review",
    description:
      "Helping teams improve existing systems through architecture reviews, refactors, performance audits, and technical direction.",
    stack: ["Code Review", "Architecture", "Optimization"],
  },
];

const Services = () => {
  return (
    <section className="py-48 border-t border-white/10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
        >
          {/* HEADER */}
          <motion.div variants={fadeUp} className="max-w-2xl mb-24">
            <p className="text-xs uppercase tracking-widest text-accent mb-6">
              Services
            </p>

            <h2 className="text-6xl font-extrabold leading-tight">
              How I help teams
              <br />
              ship real products.
            </h2>

            <p className="mt-8 text-lg text-white/60 leading-relaxed">
              I work with companies and founders to design, build, and scale
              software systems that are meant to last — technically and
              commercially.
            </p>
          </motion.div>

          {/* SERVICES GRID */}
          <motion.div variants={stagger} className="grid md:grid-cols-2 gap-16">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                className="group relative p-10 border border-white/10 rounded-3xl hover:border-white/30 transition"
              >
                {/* Index */}
                <span className="absolute top-6 right-6 text-sm font-mono text-white/20">
                  {service.id}
                </span>

                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

                <p className="text-white/60 leading-relaxed max-w-md">
                  {service.description}
                </p>

                {/* Stack */}
                <div className="mt-8 flex flex-wrap gap-3 text-xs text-white/50">
                  {service.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 border border-white/10 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Subtle hover accent */}
                <div className="absolute inset-0 rounded-3xl bg-accent/0 group-hover:bg-accent/5 transition -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;
