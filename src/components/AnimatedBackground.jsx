import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(244,247,251,0.68)_40%,rgba(231,238,247,0.42)_60%,transparent_85%)] dark:bg-[radial-gradient(circle_at_top,rgba(12,18,32,0.9),rgba(6,8,22,0.96)_50%,rgba(6,8,22,1)_80%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-25 dark:opacity-[0.09]" />
      <motion.div
        className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-500/20"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-40 h-80 w-80 rounded-full bg-cyan-450/20 blur-3xl dark:bg-cyan-450/15"
        animate={{ y: [0, 35, 0], x: [0, -28, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default AnimatedBackground;
