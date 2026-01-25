import { motion, AnimatePresence } from "framer-motion";

interface Props {
  image: string | null;
  onClose: () => void;
}

export default function ImageLightbox({ image, onClose }: Props) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={image}
            alt="Project preview"
            className="max-h-[85vh] w-[90%] max-w-5xl rounded-xl object-contain"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // IMPORTANT
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
