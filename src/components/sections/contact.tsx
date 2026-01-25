import { motion } from "framer-motion";
import Container from "../layout/Container";
import { fadeUp, stagger } from "../../lib/motion";
import { MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-48 border-t border-white/10 relative">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-accent mb-6"
          >
            Contact
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="text-6xl font-extrabold leading-tight"
          >
            Let’s talk about
            <br />
            your next system.
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            className="mt-8 text-lg text-white/60 max-w-2xl"
          >
            I work with companies and founders who care about quality,
            scalability, and long-term value. If you’re building something
            serious, I’m interested.
          </motion.p>

          {/* Info Grid */}
          <motion.div
            variants={fadeUp}
            className="mt-20 grid md:grid-cols-3 gap-10"
          >
            {/* Availability */}
            <div className="border border-white/10 rounded-2xl p-8">
              <p className="text-sm text-white/40 mb-2">Availability</p>
              <p className="text-lg font-medium">
                Open to full-time & contract work
              </p>
            </div>

            {/* Timezone */}
            <div className="border border-white/10 rounded-2xl p-8">
              <p className="text-sm text-white/40 mb-2">Timezone</p>
              <p className="text-lg font-medium">GMT / WAT (UTC +1)</p>
              <p className="text-sm text-white/50 mt-1">
                Typical response: within 24 hours
              </p>
            </div>

            {/* Contact */}
            <div className="border border-white/10 rounded-2xl p-8">
              <p className="text-sm text-white/40 mb-2">Email</p>
              <a
                href="mailto:youremail@example.com"
                className="text-lg font-medium hover:text-accent"
              >
                akoredef2008@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Project Scope */}
          <motion.div
            variants={fadeUp}
            className="mt-20 border border-white/10 rounded-2xl p-12"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Typical project scope
            </h3>

            <p className="text-white/60 max-w-3xl">
              I’m best suited for projects involving full-stack web
              applications, SaaS platforms, internal tools, API integrations,
              and system refactors. Short-term fixes and low-quality work are
              not a good fit.
            </p>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={fadeUp}
            className="mt-24 grid md:grid-cols-2 gap-12"
          >
            <blockquote className="border-l border-white/10 pl-8">
              <p className="text-lg text-white/70">
                “CODED_DEV approaches problems like an engineer, not just a
                developer. Clean architecture and clear communication
                throughout.”
              </p>
              <footer className="mt-4 text-sm text-white/40">
                — Product Lead, SaaS Startup
              </footer>
            </blockquote>

            <blockquote className="border-l border-white/10 pl-8">
              <p className="text-lg text-white/70">
                “Reliable, thoughtful, and very strong technically. Delivered
                exactly what we needed with room to scale.”
              </p>
              <footer className="mt-4 text-sm text-white/40">
                — Founder, Digital Platform
              </footer>
            </blockquote>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-28 flex flex-wrap gap-6">
            <a
              href="mailto:akoredef2008@gmail.com"
              className="bg-accent text-black px-10 py-4 rounded-lg font-semibold"
            >
              Start a conversation
            </a>

            <a
              href="https://calendly.com/akoredef2008/30min"
              target="_blank"
              className="px-10 py-4 rounded-lg border border-white/20 text-white/80 hover:text-white"
            >
              Book a call
            </a>
            <a
              href="https://wa.me/2349121408611"
              target="_blank"
              className="px-10 py-4 rounded-lg border border-white/20 text-white/80 hover:text-white"
            >
              <MessageCircle className="inline-block mr-2 mb-1" size={25} />
              Drop a message on WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;
