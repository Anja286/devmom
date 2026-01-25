"use client";

export default function ValueProp() {
  return (
    <section
      id="value-prop"
      className="
        w-full py-24
        bg-[#0B1F1D]
        border-t border-[rgba(150,222,209,0.25)]
      "
    >
      <div className="px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-10">

          {/* Headline */}
          <h2
            className="
              text-3xl md:text-4xl font-semibold tracking-tight
              text-[#96DED1]
              drop-shadow-[0_0_12px_rgba(150,222,209,0.6)]
            "
          >
            Software Engineer focused on modern frontend and immersive interfaces.
          </h2>

          {/* Subheadline */}
          <p className="text-gray-200 max-w-3xl leading-relaxed">
            I build scalable, accessibility-first web applications using modern
            JavaScript ecosystems. My work combines clean engineering practices
            with expressive, high-performance user interfaces.
          </p>

          {/* Core pillars */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Engineering-first frontend",
                text: "React, Next.js, TypeScript, scalable architectures, and maintainable codebases.",
              },
              {
                title: "Accessibility & quality",
                text: "WCAG & ARIA compliance, inclusive UX, testing, and enterprise-grade reliability.",
              },
              {
                title: "Expressive interfaces",
                text: "Motion, interaction, and cinematic UI systems that enhance usability without sacrificing performance.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="
                  border border-[rgba(150,222,209,0.35)]
                  p-6 rounded-lg
                  bg-[rgba(11,31,29,0.6)]
                  shadow-[0_0_14px_rgba(150,222,209,0.25)]
                "
              >
                <h3 className="text-lg font-semibold text-[#96DED1] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Proof */}
          <p className="text-sm text-gray-400 max-w-3xl">
            Experience across enterprise platforms, cloud services, and international
            remote teams, delivering production-ready solutions at scale.
          </p>

          {/* Soft CTA */}
          <span className="text-sm tracking-widest text-[#6FCFC0]">
            SCROLL TO EXPLORE SKILLS & PROJECTS
          </span>

        </div>
      </div>
    </section>
  );
}
