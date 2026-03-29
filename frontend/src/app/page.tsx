import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />

      {/* Featured Sections (Short versions for Home) */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">01 SERVICES</h2>
            <p className="text-sm leading-relaxed">
              We engineer full-stack web applications, sophisticated backend systems, and AI-integrated automation solutions. No fluff, just production-ready code.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">02 ACADEMY</h2>
            <p className="text-sm leading-relaxed">
              Courses designed by engineers for engineers. Deep dives into competitive programming, backend architecture, and AI tool integration.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-widest text-[#00E5FF]">03 OPEN SOURCE</h2>
            <p className="text-sm leading-relaxed">
              We believe in public building. Our core tools and research are shared openly on GitHub for the community to inspect, use, and improve.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
