import Container from "../layout/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "AI Ad Creatives",
    desc: "Short-form promotional video ads tailored for marketing campaigns, brand awareness and digital conversions.",
  },
  {
    title: "Book Trailers",
    desc: "Cinematic AI-generated trailers for authors looking to visually market their books across digital platforms.",
  },
  {
    title: "Social Media Content",
    desc: "Engaging short-form content for TikTok, Instagram Reels and YouTube Shorts built for high retention.",
  },
  {
    title: "Product Visualisation",
    desc: "AI powered product showcase videos for startups, ecommerce brands and digital launches.",
  },
];

const workflow = [
  "Concept Development",
  "AI Scene Generation",
  "Motion & Effects",
  "Voice / Sound Design",
  "Final Rendering",
];

const stack = [
  "Runway ML",
  "Pika Labs",
  "Stable Diffusion",
  "After Effects",
  "Premiere Pro",
  "ElevenLabs",
];
const previews = [
  {
    thumbnail: "vid1thumbnail.png",
    video: "/0108.mp4",
  },
  {
    thumbnail: "vid2-thumb.png",
    video: "0108(1).mp4",
  },
  {
    thumbnail: "vid3-thumb.png",
    video: "1218.mp4",
  },
];

const AiVideo = () => {
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <section id="ai-video" className="py-40">
      <AnimatePresence>
        {openVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenVideo(null)}
          >
            <motion.video
              src={openVideo}
              controls
              autoPlay
              className="max-h-[85vh] w-[90%] max-w-5xl rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Container>
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-widest text-accent mb-4">
            AI Video Production
          </p>

          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Cinematic AI-Powered Visual Content
          </h2>

          <p className="text-white/60 text-lg">
            High-impact promotional videos, social media ads and product visuals
            generated using advanced AI workflows for modern digital brands.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mb-32">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">
            Preview Work
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {previews.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setOpenVideo(item.video)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg"
              >
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
        w-16 h-16 rounded-full
        bg-white/10 backdrop-blur-md
        border border-white/30
        flex items-center justify-center
        transition duration-300
        group-hover:scale-110
        group-hover:bg-white/20
      "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-7 h-7 ml-1 opacity-90"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* WORKFLOW */}
        <div className="mb-32">
          <p className="text-xs uppercase tracking-widest text-accent mb-6">
            Production Workflow
          </p>

          <div className="flex flex-wrap gap-4">
            {workflow.map((step) => (
              <span
                key={step}
                className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-sm text-white/70"
              >
                {step}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AiVideo;
