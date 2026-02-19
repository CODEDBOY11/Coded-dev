import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, stagger } from "../../lib/motion";
import { mobileFadeUp } from "../../lib/MobileMotion";

const isMobile = window.innerWidth < 768;

const About = () => {
  return (
    <section className="py-48 border-t border-white/10">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-24 items-center"
        >
          {/* LEFT — CONTENT */}
          <motion.div variants={fadeUp}>
            <p className="text-xs uppercase tracking-widest text-accent mb-6">
              About
            </p>

            <h2 className="text-6xl font-extrabold leading-tight">
              Building systems, not just software.
            </h2>

            <p className="mt-10 text-lg text-white/60 max-w-xl leading-relaxed">
              I’m a full-stack engineer focused on designing and building
              production-grade systems that scale, perform, and remain
              maintainable over time.
            </p>

            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              My work sits at the intersection of clean architecture, thoughtful
              UX, and business clarity — whether I’m shipping a SaaS product,
              integrating complex APIs, or collaborating with teams to bring
              ideas to market.
            </p>

            {/* Credentials */}
            <div className="mt-14 grid grid-cols-2 gap-8 text-sm text-white/70">
              <div>
                <p className="text-white font-medium">Role</p>
                <p className="mt-1">Full-Stack Engineer</p>
              </div>
              <div>
                <p className="text-white font-medium">Focus</p>
                <p className="mt-1">Web Platforms & APIs</p>
              </div>
              <div>
                <p className="text-white font-medium">Experience</p>
                <p className="mt-1">Production-level systems</p>
              </div>
              <div>
                <p className="text-white font-medium">Availability</p>
                <p className="mt-1">Freelance & Full-time</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — IMAGES */}
          <motion.div variants={fadeUp} className="relative">
            <motion.div
              initial={isMobile ? "hidden" : undefined}
              whileInView={isMobile ? "visible" : undefined}
              viewport={{ once: true }}
              variants={isMobile ? mobileFadeUp : undefined}
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Main image */}
                <div className="col-span-2 overflow-hidden rounded-2xl">
                  <img
                    src="/about-img.png"
                    alt="CODED_DEV portrait"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                  />
                </div>

                {/* Secondary images */}
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/working-setup.jpg"
                    alt="Working setup"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/detail-shot.png"
                    alt="Detail shot"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Subtle background accent */}
            <div className="absolute -z-10 -top-12 -right-12 w-72 h-72 bg-accent/10 blur-3xl rounded-full" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
