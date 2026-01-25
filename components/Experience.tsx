import React from "react";

const experiences = [
  {
    role: "Software Developer",
    company: "UsableNet – Rhea Software",
    period: "Sep 2023 – Present",
    location: "Remote",
    description: [
      "Developing and testing accessibility solutions across multiple enterprise projects.",
      "Implementing WCAG and ARIA-compliant components using JavaScript, jQuery, HTML, and SCSS.",
      "Collaborating closely with QA and product teams to ensure inclusive UX standards.",
    ],
    tech: ["JavaScript", "jQuery", "HTML", "SCSS", "WCAG", "ARIA"],
  },
  {
    role: "JavaScript Developer",
    company: "Code&Care",
    period: "May 2023 – Sep 2023",
    location: "Remote",
    description: [
      "Worked on multiple frontend-heavy projects with a strong focus on UI logic and performance.",
      "Built and maintained components using React and TypeScript.",
      "Collaborated with designers using Figma and worked in Docker-based environments.",
    ],
    tech: ["JavaScript", "React", "TypeScript", "Backbone.js", "PHP", "Docker", "Figma"],
  },
  {
    role: "JavaScript Developer",
    company: "Codefacto",
    period: "May 2022 – May 2023",
    location: "Remote",
    description: [
      "Developed a welfare-focused platform using Next.js and TypeScript.",
      "Integrated AWS services including Lambda and Cognito.",
      "Implemented form logic with Formik and maintained scalable Node.js APIs.",
    ],
    tech: ["Next.js", "TypeScript", "AWS", "Node.js", "Formik", "Figma"],
  },
  {
    role: "Software Developer (Freelance)",
    company: "Self-Employed",
    period: "Sep 2020 – Jun 2022",
    location: "Remote",
    description: [
      "Delivered full-stack solutions for various clients.",
      "Designed and developed REST APIs and client-server architectures.",
      "Worked across multiple frameworks and cloud services.",
    ],
    tech: [
      "JavaScript",
      "Node.js",
      "React",
      "Next.js",
      "AWS (Lambda, Cognito, S3)",
      "MySQL",
      "Cypress",
      "Jenkins",
      "GitHub",
    ],
  },
];

const languages = [
  "English",
  "Serbian",
  "Spanish",
  "French",
  "German",
  "Persian",
  "Czech",
  "Russian",
];

export default function ExperiencePage() {
  return (
    <main
      className="
        relative w-full min-h-screen
        px-6 md:px-10 lg:px-16 py-24
        bg-[#0B1F1D] text-gray-100
        border-2 border-[rgba(150,222,209,0.45)]
        outline outline-1 outline-[rgba(150,222,209,0.30)]
        shadow-[0_0_16px_rgba(150,222,209,0.35),0_0_40px_rgba(150,222,209,0.18)]
      "
    >
      {/* Header */}
      <section className="mb-20">
        <h1
          className="
            text-4xl md:text-5xl font-bold tracking-tight
            text-[#96DED1]
            drop-shadow-[0_0_14px_rgba(150,222,209,0.55)]
          "
        >
          Experience
        </h1>

        <p className="mt-4 max-w-4xl text-gray-300">
          This is a timeline of my work with focus on frontend engineering, scalable
          architectures, and modern JavaScript ecosystems.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-12">
        {experiences.map((exp, index) => (
          <article
            key={index}
            className="
              relative rounded-2xl p-6 md:p-8
              bg-[rgba(11,31,29,0.55)]
              border border-[rgba(150,222,209,0.28)]
              shadow-[0_0_20px_rgba(150,222,209,0.14)]
            "
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h2 className="text-xl font-semibold text-gray-100">
                  {exp.role}
                </h2>
                <p className="text-sm text-gray-300">
                  {exp.company} · {exp.location}
                </p>
              </div>

              <span className="text-sm text-gray-300">{exp.period}</span>
            </header>

            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1 text-xs rounded-full
                    border border-[rgba(150,222,209,0.40)]
                    text-[#96DED1]
                    bg-[rgba(150,222,209,0.08)]
                    shadow-[0_0_10px_rgba(150,222,209,0.10)]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* Languages */}
      <section className="mt-28">
        <h2
          className="
            text-2xl font-semibold mb-3
            text-[#96DED1]
            drop-shadow-[0_0_12px_rgba(150,222,209,0.45)]
          "
        >
          Languages
        </h2>

        <p className="text-gray-300 mb-6">
          You can contact me in any of the following languages (yes, I speak all of them).
        </p>

        <div className="flex flex-wrap gap-3">
          {languages.map((lang, i) => (
            <span
              key={i}
              className="
                px-4 py-2 rounded-lg
                bg-[rgba(11,31,29,0.55)]
                border border-[rgba(150,222,209,0.35)]
                text-[#96DED1]
                shadow-[0_0_12px_rgba(150,222,209,0.10)]
              "
            >
              {lang}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
