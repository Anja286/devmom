// components/Projects.tsx
"use client";

import Image from "next/image";

type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    name: "Story weaver - library and article sharing",
    description: "Innovative online library along with authenticity system and articles sharing.",
    image: "/openbook.jpg",
    tech: ["Next.js", "JavaScript", "React", "SASS", "React Native"],
    demo: "#",
    github: "https://github.com/Anja286/story-weaver.git",
  },
  {
    name: "MediMate software",
    description: "Patient care companion.",
    image: "/medimate.jpeg",
    tech: ["React", "Node.js", "JavaScript", "TypeScript","Tailwind", "Supabase", "React Native"],
    demo: "#",
    github: "https://github.com/Anja286/patient-care-companion#",
  },
 {
    name: "Learnflix Pro",
    description: "Full-stack learning app for healthcare providers.",
    image: "/medimate2.jpg",
    tech: ["Next.js", "AWS", "Typescript", "React", "React Native", "Node.js", "SASS"],
    demo: "#",
    github: "https://github.com/Anja286/learnflixpro",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.name}
              className="
                rounded-2xl overflow-hidden
                bg-[rgba(11,31,29,0.55)]
                border border-[rgba(150,222,209,0.28)]
                shadow-[0_0_18px_rgba(150,222,209,0.12)]
                hover:shadow-[0_0_26px_rgba(150,222,209,0.22)]
                transition-shadow duration-300
              "
            >
              <div className="relative object-cover w-full h-64">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="medimate"
                />
              </div>

              <div className="p-6 flex flex-col gap-4 text-left">
                <h3 className="text-xl font-bold text-gray-100">
                  {project.name}
                </h3>

                <p className="text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-sm px-2 py-1 rounded
                        font-mono
                        border border-[rgba(150,222,209,0.35)]
                        text-[#96DED1]
                        bg-[rgba(150,222,209,0.08)]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-2 rounded font-bold
                      border border-[rgba(150,222,209,0.60)]
                      text-[#96DED1]
                      hover:bg-[rgba(150,222,209,0.12)]
                      transition-colors duration-300
                      shadow-[0_0_14px_rgba(150,222,209,0.18)]
                    "
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle ambient mint glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 neon-mint-ambient" />
    </section>
  );
}
