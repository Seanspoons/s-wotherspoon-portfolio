import { motion, type Transition } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  reveal?: "scroll" | "mount";
};

const baseTransition: Transition = {
  duration: 0.6,
  ease: "easeOut", // typed correctly via Transition
};

export default function Section({ children, reveal = "scroll" }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={reveal === "mount" ? { opacity: 1, y: 0 } : undefined}
      whileInView={reveal === "scroll" ? { opacity: 1, y: 0 } : undefined}
      viewport={reveal === "scroll" ? { once: true } : undefined}
      transition={baseTransition}
      className="space-y-4"
    >
      {children}
    </motion.section>
  );
}