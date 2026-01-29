// components/Contact.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type Status = "success" | "error";
type ContactForm = { name: string; email: string; message: string };

type ContactApiResponse = {
  message?: string;
  error?: string;
};

function isContactApiResponse(v: unknown): v is ContactApiResponse {
  if (typeof v !== "object" || v === null) return false;
  return "message" in v || "error" in v;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const trimmed = useMemo(
    () => ({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    }),
    [form]
  );

  const isValid = useMemo(() => {
    return (
      trimmed.name.length > 0 &&
      trimmed.email.length > 0 &&
      isValidEmail(trimmed.email) &&
      trimmed.message.length > 0
    );
  }, [trimmed]);

  useEffect(() => {
    if (!status) return;

    const t = setTimeout(() => {
      setStatus(null);
      setStatusMessage("");
    }, 4500);

    return () => clearTimeout(t);
  }, [status]);

  const setError = (msg: string) => {
    setStatus("error");
    setStatusMessage(msg);
  };

  const setSuccess = (msg: string) => {
    setStatus("success");
    setStatusMessage(msg);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (status) {
      setStatus(null);
      setStatusMessage("");
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      setError("Please fill all fields.");
      return;
    }

    if (!isValidEmail(trimmed.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus(null);
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(trimmed),
      });

      let data: ContactApiResponse | null = null;
      const contentType = res.headers.get("content-type") || "";

      if (contentType.includes("application/json")) {
        const parsed: unknown = await res.json();
        data = isContactApiResponse(parsed) ? parsed : null;
      }

      if (!res.ok) {
        setError(
          data?.error ||
            data?.message ||
            "Something went wrong. Please try again."
        );
        return;
      }

      setSuccess(data?.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setError("Network error. Please try again.");
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
          aria-busy={loading}
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
            autoComplete="name"
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
            autoComplete="email"
            inputMode="email"
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
            disabled={loading || !isValid}
            className="
              bg-[#96DED1]
              hover:bg-[rgba(150,222,209,0.85)]
              text-[#0B1F1D]
              font-bold py-4 rounded-md uppercase tracking-wider
              transition-all duration-300
              shadow-[0_0_18px_rgba(150,222,209,0.35)]
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={`mt-4 ${
                status === "success" ? "text-emerald-300" : "text-red-300"
              }`}
              role="status"
              aria-live="polite"
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 neon-mint-ambient" />
    </section>
  );
}
