import Image from "next/image";
import Header from "@/components/Header";
import Value from "@/components/ValueProp";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full min-h-screen flex-col items-start justify-between bg-black px-6 md:px-14 lg:px-20
space-y-28">
          <Header />
          <Value />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
      </main>
    </div>
  );
}
