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

}

export default CustomCursor;
