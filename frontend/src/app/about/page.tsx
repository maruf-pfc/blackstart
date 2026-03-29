import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { User, Shield, Terminal } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-6 mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E4E4E7]">
            THE_MISSION.EXE
          </h1>
          <p className="text-[#71717A] font-mono text-lg leading-relaxed">
            Blackstart Labs was founded on a simple principle: software should be built by engineers, not marketing departments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#00E5FF]">
                <Shield className="w-4 h-4" />
                <h3 className="font-mono text-xs uppercase tracking-widest">RESILIENCE_AND_PURPOSE</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#D1D1D6]">
                Modern software is bloated. We stripping it back. Our focus is on building resilient systems that solve core problems without unnecessary complexity. We prioritize performance, security, and developer experience.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[#00E5FF]">
                <Terminal className="w-4 h-4" />
                <h3 className="font-mono text-xs uppercase tracking-widest">ENGINEERING_FIRST</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#D1D1D6]">
                We don't use stock photos. We don't use hype. Our "pitch" is our code. We build with C#, Next.js, and Python, focusing on deep technical integration rather than surface-level aesthetics.
              </p>
            </div>
          </div>

          <div className="bg-[#050505] border border-[#1F1F23] p-12 space-y-8">
            <h3 className="text-xl font-bold text-[#E4E4E7] tracking-tight">OPERATING_PRINCIPLES</h3>
            <ul className="space-y-8">
              <li className="flex items-start space-x-4">
                <span className="text-[10px] font-mono text-[#00E5FF] mt-1">01</span>
                <div>
                  <h4 className="text-sm font-bold text-[#D1D1D6]">Silence precedes strength.</h4>
                  <p className="text-xs text-[#71717A] mt-2 font-mono">Deep work is the only type of work that matters.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-[10px] font-mono text-[#00E5FF] mt-1">02</span>
                <div>
                  <h4 className="text-sm font-bold text-[#D1D1D6]">Minimalism is a metric.</h4>
                  <p className="text-xs text-[#71717A] mt-2 font-mono">Every dependency must earn its place.</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-[10px] font-mono text-[#00E5FF] mt-1">03</span>
                <div>
                  <h4 className="text-sm font-bold text-[#D1D1D6]">Documentation is code.</h4>
                  <p className="text-xs text-[#71717A] mt-2 font-mono">If it isn't documented clearly, it doesn't exist.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-32 max-w-4xl border-l-[1px] border-[#1F1F23] pl-12 py-8">
          <p className="text-xs font-mono text-[#52525B] leading-[2] uppercase tracking-[0.05em]">
            SYSTEM_LOG: Founded_2026 // Located_Distrubuted // Status_Operational // Mission_Ongoing //
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
