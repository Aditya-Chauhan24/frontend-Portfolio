import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 400, damping: 35, mass: 0.2 });
  const springY = useSpring(cursorY, { stiffness: 400, damping: 35, mass: 0.2 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");

    if (!mediaQuery.matches) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      cursorX.set(event.clientX - 10);
      cursorY.set(event.clientY - 10);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-5 w-5 rounded-full border border-brand-400/70 bg-white/45 mix-blend-screen backdrop-blur-sm md:block dark:border-cyan-300/50 dark:bg-cyan-300/10"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[119] hidden h-12 w-12 rounded-full bg-gradient-to-r from-brand-500/20 via-cyan-400/18 to-fuchsia-500/20 blur-xl md:block"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}

export default CustomCursor;
