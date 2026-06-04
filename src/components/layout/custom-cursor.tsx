"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const narrow = window.matchMedia("(max-width: 768px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ok = !coarse && !narrow && !reduced;
    setEnabled(ok);
    if (ok) {
      document.documentElement.classList.add("has-custom-cursor");
    }
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold mix-blend-screen transition-transform duration-150"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden
      />
      <div
        className="pointer-events-none fixed z-[9998] size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-gold/50 transition-all duration-250"
        style={{ left: pos.x, top: pos.y }}
        aria-hidden
      />
    </>
  );
}
