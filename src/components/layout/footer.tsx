import { motion } from "framer-motion";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10">
      {/* Animated Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent origin-left"
      />

      <Container>
        <div className="py-24 grid lg:grid-cols-3 gap-16">
          {/* BRAND */}
          <div>
            <p className="text-xl font-semibold tracking-wide">
              CODED<span className="text-accent">_DEV</span>
            </p>

            <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
              Building scalable, production-grade digital systems for companies,
              startups, and founders who value quality and clarity.
            </p>

            {/* Availability */}
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-white/70">
                Available for select projects
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-white font-medium mb-6">Explore</p>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#principles" className="hover:text-white transition">
                  Principles
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT & META */}
          <div>
            <p className="text-white font-medium mb-6">Contact</p>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <a
                  href="mailto:hello@codeddev.dev"
                  className="hover:text-white transition"
                >
                  hello@codeddev.dev
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>

            {/* Region / Timezone */}
            <p className="mt-8 text-xs text-white/40">
              Based in Nigeria · GMT+1
            </p>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} CODED_DEV. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
