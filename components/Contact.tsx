// components/Contact.tsx
"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
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
            text-4xl md:text-5xl font-bold mb-6 tracking-widest
            text-[#96DED1]
            drop-shadow-[0_0_14px_rgba(150,222,209,0.55)]
          "
        >
          Contact Me
        </h2>

        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project, question, or just want to say hi? Send me a message and
          I’ll get back to you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="
              p-4 rounded-md
              bg-[rgba(11,31,29,0.55)]
              border border-[rgba(150,222,209,0.35)]
              focus:border-[rgba(150,222,209,0.70)]
              outline-none text-gray-100
              placeholder-gray-500
              transition-all duration-300
              shadow-[0_0_10px_rgba(150,222,209,0.12)]
            "
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="
              p-4 rounded-md
              bg-[rgba(11,31,29,0.55)]
              border border-[rgba(150,222,209,0.35)]
              focus:border-[rgba(150,222,209,0.70)]
              outline-none text-gray-100
              placeholder-gray-500
              transition-all duration-300
              shadow-[0_0_10px_rgba(150,222,209,0.12)]
            "
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            className="
              p-4 rounded-md
              bg-[rgba(11,31,29,0.55)]
              border border-[rgba(150,222,209,0.35)]
              focus:border-[rgba(150,222,209,0.70)]
              outline-none text-gray-100
              placeholder-gray-500
              transition-all duration-300
              resize-none
              shadow-[0_0_10px_rgba(150,222,209,0.12)]
            "
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="
              bg-[#96DED1]
              hover:bg-[rgba(150,222,209,0.85)]
              text-[#0B1F1D]
              font-bold py-4 rounded-md uppercase tracking-wider
              transition-all duration-300
              shadow-[0_0_18px_rgba(150,222,209,0.35)]
              disabled:opacity-50
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-300 mt-4">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-300 mt-4">Please fill all fields or try again.</p>
          )}
        </form>
      </div>

      {/* subtle ambient mint glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 neon-mint-ambient" />
    </section>
  );
}
