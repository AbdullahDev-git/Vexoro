"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex md:hidden flex-col items-center justify-center gap-1.5 h-9 w-9"
        aria-label="Open menu"
      >
        <span className="block h-px w-5 bg-white" />
        <span className="block h-px w-5 bg-white" />
        <span className="block h-px w-5 bg-white" />
      </button>

      <div
        className={`fixed inset-0 z-50 flex flex-col bg-black transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/20 px-8 py-5">
          <span className="font-display text-base font-black uppercase tracking-[0.35em] text-white">VEXORO</span>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center h-9 w-9"
            aria-label="Close menu"
          >
            <span className="block h-px w-5 bg-white rotate-45 translate-y-0.5" />
            <span className="block h-px w-5 bg-white -rotate-45 -translate-y-0.5" />
          </button>
        </div>

        <nav className="flex flex-col gap-0 px-8 pt-10">
          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white/80 transition hover:text-[#ff5448]"
          >
            Capabilities
          </a>
          <a
            href="#work"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white/80 transition hover:text-[#ff5448]"
          >
            Portfolio
          </a>
          <a
            href="#process"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white/80 transition hover:text-[#ff5448]"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-5 font-mono text-sm uppercase tracking-[0.3em] text-white/80 transition hover:text-[#ff5448]"
          >
            Contact
          </a>
        </nav>

        <div className="mt-auto px-8 pb-12">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-13 w-full items-center justify-center rounded-md bg-[#ff5448] text-sm font-mono font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-white hover:text-[#ff5448]"
          >
            Get an Audit
          </a>
        </div>
      </div>
    </>
  );
}
