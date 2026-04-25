import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,250,243,0.98),rgba(255,236,214,0.72)_34%,rgba(255,214,184,0.38)_58%,transparent_84%)] dark:bg-[radial-gradient(circle_at_top,rgba(15,20,37,0.9),rgba(8,12,26,0.96)_52%,rgba(10,10,22,1)_82%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(53,111,255,0.18),transparent_28%),radial-gradient(circle_at_80%_12%,rgba(244,114,182,0.16),transparent_20%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.14),transparent_24%)] dark:bg-[radial-gradient(circle_at_18%_24%,rgba(53,111,255,0.18),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(244,114,182,0.12),transparent_18%),radial-gradient(circle_at_52%_86%,rgba(34,211,238,0.14),transparent_22%)]" />
      <div className="absolute inset-0 bg-grid bg-[size:52px_52px] opacity-[0.34] dark:opacity-[0.09]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.32),transparent_32%,transparent_68%,rgba(255,255,255,0.2))] opacity-70 dark:opacity-20" />
      <motion.div
        className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-brand-400/30 blur-3xl dark:bg-brand-500/20"
        animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[6%] top-40 h-80 w-80 rounded-full bg-cyan-450/28 blur-3xl dark:bg-cyan-450/15"
        animate={{ y: [0, 35, 0], x: [0, -28, 0], scale: [1.02, 1, 1.08, 1.02] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/20 blur-3xl dark:bg-fuchsia-500/10"
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-[18%] h-40 w-[38rem] -translate-x-1/2 rounded-full bg-white/45 blur-3xl dark:bg-brand-400/10"
        animate={{ opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default AnimatedBackground;
