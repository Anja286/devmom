"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [showText, setShowText] = useState(false);

  return (
    <section
      id="hero"
      className="
        relative w-full
        bg-[#0B1F1D] text-gray-100
        border-2 border-[rgba(150,222,209,0.45)]
        outline outline-1 outline-[rgba(150,222,209,0.30)]
        shadow-[0_0_16px_rgba(150,222,209,0.35),0_0_40px_rgba(150,222,209,0.18)]
        overflow-hidden
      "
    >
      <div className="px-6 md:px-12 lg:px-20 py-24">
        {/* CENTERED COLUMN LAYOUT */}
        <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-10">
          {/* Center: Your photo */}
          <div
            className="
              relative w-[240px] h-[240px] md:w-[300px] md:h-[300px]
              rounded-2xl overflow-hidden
              border border-[rgba(150,222,209,0.30)]
              shadow-[0_0_22px_rgba(150,222,209,0.18)]
            "
          >
            <Image
              src="/me.jpg"
              alt="A picture of me"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
          </div>

          {/* Button: My bio */}
          <button
            type="button"
            onClick={() => setShowText((v) => !v)}
            className="
              px-6 py-3 rounded-md font-bold uppercase tracking-widest
              bg-[#96DED1] text-[#0B1F1D]
              shadow-[0_0_18px_rgba(150,222,209,0.35)]
              hover:bg-[rgba(150,222,209,0.85)]
              transition-colors duration-300
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(150,222,209,0.65)]
              focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F1D]
            "
            aria-expanded={showText}
            aria-controls="hero-bio"
          >
            My bio
          </button>

          {/* TEXT + COMPUTER IMAGE (REVEALED AFTER CLICK) */}
          <div
            id="hero-bio"
            className={`
              w-full
              transition-all duration-700 ease-out
              ${showText ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none h-0 overflow-hidden"}
            `}
          >
            <div className="mx-auto max-w-3xl flex flex-col gap-6 text-left text-gray-300 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold text-[#96DED1] drop-shadow-[0_0_14px_rgba(150,222,209,0.45)]">
                Hello world!
              </h2>

              <p>
                I know, it&apos;s a lame joke. Anyways, hello and welcome to my humble e-space.
                Figured I should add a bit of me touch instead of just showing off with my IT
                experience.
              </p>

              <p>
                I wanted this page to be a place where you can meet me — both professionally and
                privately. We all have jobs and that&apos;s the not-so-cool part of being a grown-up,
                but we all have lives outside of our jobs, so this little section is dedicated to
                getting to know me as a person, even just a tiny bit (this section is not big, you
                know).
              </p>

              <p>
                So, as you may have read, my name is Anja (pronounced the same as Anya), and I&apos;m
                a coffeephilic. Seriously though, I really love my coffee. (I grow horns the second
                someone spills my coffee, if you catch my drift.)
              </p>

              <p>
                I love reading books, listening to music, traveling, but above all, I love spending
                as much time as I can with my children. Proud mom of two here.
              </p>

              <p>
                If you&apos;re wondering about my character, I&apos;m a hopeless romantic, pretty
                objective in general but I rather choose to see the good in everything, I laugh as
                much as I can, love my family to the bone, sometimes forget where my glasses are
                (yeah, you know the situation), tend to overthink sometimes, focus on details,
                reeeeeally good at handling stress (juggling work and two children sometimes seems
                like a superpower), like to think outside of the box (even though I like structure,
                there always comes a time when it&apos;s beneficial to see a different perspective),
                one of those who never consider feedback or positive criticism as something bad, but
                an opportunity to improve myself, and I have an enormous drive for learning new
                things and improving every single day.
              </p>

              <p>
                Now, since you managed to read all of my PhD thesis, feel free to roam around and
                ask questions if there&apos;s anything you think I could be of assistance to.
              </p>

              <p className="text-[#96DED1] font-semibold">
                Enjoy ☕
              </p>

              {/* Computer image UNDER the text */}
              <div
                className="
                  relative w-full h-[220px] md:h-[280px]
                  rounded-2xl overflow-hidden
                  border border-[rgba(150,222,209,0.30)]
                  shadow-[0_0_22px_rgba(150,222,209,0.18)]
                  mt-4
                "
              >
                <Image
                  src="/hero.png"
                  alt="Computer illustration"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ambient glow */}
      <div className="absolute inset-x-0 bottom-0 h-32 neon-mint-ambient pointer-events-none" />
    </section>
  );
}
