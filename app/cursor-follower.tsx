"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current!;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    document.addEventListener("mousemove", onMouseMove);

    function animate() {
      posX += (mouseX - posX) * 0.1;
      posY += (mouseY - posY) * 0.1;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-[9999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff5448] md:block"
      style={{ transition: "width 0.2s, height 0.2s" }}
    />
  );
}
