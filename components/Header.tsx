"use client";

import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/Anja286" },
  { name: "LinkedIn", href: "https://linkedin.com/in/anja-ilic-441661b2/" },
  { name: "Email", href: "mailto:anjailic@gmail.com" },
];

export default function Header() {
  return (
    <header
      className="
        relative w-full overflow-hidden
        bg-[#0B1F1D] text-gray-100
        border-2 border-[rgba(150,222,209,0.45)]
        outline outline-1 outline-[rgba(150,222,209,0.30)]
        shadow-[0_0_16px_rgba(150,222,209,0.35),0_0_40px_rgba(150,222,209,0.18)]
      "
    >
      {/* Neon top wire */}
      <div className="absolute top-0 left-0 w-full h-px neon-mint-wire" />

      <div className="relative px-6 md:px-12 lg:px-24 py-10 flex flex-col gap-4">
        {/* Brand */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-semibold neon-mint-text">
              Anja Ilić
            </h3>
            <p className="text-sm text-gray-300 mt-2 max-w-sm">
              Software Engineer · Frontend & Full Stack Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                className="text-sm text-gray-300 hover:text-[#96DED1] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[rgba(150,222,209,0.20)]" />
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 neon-mint-ambient pointer-events-none" />
    </header>
  );
}
