"use client";

export default function Footer() {
  return (
    <footer
      className="
        relative w-full
        bg-[#0B1F1D] text-gray-100
        border-2 border-[rgba(150,222,209,0.45)]
        outline outline-1 outline-[rgba(150,222,209,0.30)]
        shadow-[0_0_16px_rgba(150,222,209,0.35),0_0_40px_rgba(150,222,209,0.18)]
        overflow-hidden
      "
    >
      {/* Neon top wire */}
      <div className="absolute top-0 left-0 w-full h-px neon-mint-wire" />

      <div className="relative px-6 md:px-12 lg:px-24 py-10 flex flex-col gap-4">
        <span className="text-sm text-gray-300">© 2026 All rights reserved.</span>

        <div className="h-px w-full bg-[rgba(150,222,209,0.20)]" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 neon-mint-ambient pointer-events-none" />
    </footer>
  );
}
