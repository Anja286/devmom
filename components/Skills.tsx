// components/Skills.tsx
"use client";

import { FaReact, FaJsSquare, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiThreedotjs,
  SiTailwindcss,
  SiSap,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-100" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "Three.js / R3F", icon: <SiThreedotjs className="text-[#FFB700]" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
  { name: "GSAP", icon: <SiSap className="text-[#88ce02]" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
  { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative w-full py-24
        bg-[#0B1F1D] text-gray-100
        border-2 border-[rgba(150,222,209,0.45)]
        outline outline-1 outline-[rgba(150,222,209,0.30)]
        shadow-[0_0_16px_rgba(150,222,209,0.35),0_0_40px_rgba(150,222,209,0.18)]
        overflow-hidden
      "
    >
      <div className="px-6 md:px-12 lg:px-24 text-center">
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-12 tracking-widest
            text-[#96DED1]
            drop-shadow-[0_0_14px_rgba(150,222,209,0.55)]
          "
        >
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="
                group flex flex-col items-center gap-3
                transition-transform duration-300 hover:scale-110
              "
            >
              <div
                className="
                  text-5xl
                  drop-shadow-[0_0_10px_rgba(150,222,209,0.15)]
                  group-hover:drop-shadow-[0_0_16px_rgba(150,222,209,0.35)]
                  transition-[filter] duration-300
                "
              >
                {skill.icon}
              </div>

              <span
                className="
                  text-lg font-semibold
                  text-gray-100
                  group-hover:text-[#96DED1]
                  transition-colors duration-300
                "
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* subtle ambient mint glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 neon-mint-ambient" />
    </section>
  );
}
