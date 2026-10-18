import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.7 });
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      setHovering(!!t?.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* chấm nhỏ đi theo chuột tức thời */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[210] -m-1 h-2 w-2 rounded-full bg-accent"
        style={{ x, y }}
      />
      {/* vòng tròn lớn bám theo nhẹ (spring) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[209] -m-[18px] h-9 w-9 rounded-full border-2 border-accent/60"
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.9 : 1, opacity: hovering ? 0.95 : 0.55 }}
        transition={{ duration: 0.22 }}
      />
    </>
  );
}
