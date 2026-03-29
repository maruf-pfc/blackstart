import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, Terminal, MessageSquare, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-6 mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E4E4E7]">
            OPEN_CONNECTION_
          </h1>
          <p className="text-[#71717A] font-mono text-lg leading-relaxed">
            We respond to inquiries that have clear intent and purpose. 
            No marketing decks. No sales pitches. Just engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col space-y-4 p-8 border border-[#1F1F23] bg-[#050505] hover:border-[#00E5FF]/40 transition-all">
            <Mail className="w-5 h-5 text-[#00E5FF]" />
            <h2 className="text-lg font-bold text-[#E4E4E7] tracking-tight">EMAIL</h2>
            <p className="text-xs font-mono text-[#71717A]">Inquiries & Proposals</p>
            <a 
              href="mailto:marufmms@blackstart.labs" 
              className="group flex items-center space-x-2 text-sm font-mono text-[#E4E4E7] hover:text-[#00E5FF] transition-colors pt-4"
            >
              <span>EXEC_EMAIL_CONNECT</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col space-y-4 p-8 border border-[#1F1F23] bg-[#050505] hover:border-[#00E5FF]/40 transition-all">
            <Terminal className="w-5 h-5 text-[#00E5FF]" />
            <h2 className="text-lg font-bold text-[#E4E4E7] tracking-tight">GITHUB</h2>
            <p className="text-xs font-mono text-[#71717A]">Open Issues & Discussions</p>
            <a 
              href="https://github.com/blackstart-labs" 
              className="group flex items-center space-x-2 text-sm font-mono text-[#E4E4E7] hover:text-[#00E5FF] transition-colors pt-4"
            >
              <span>ACCESS_REPOSITORIES</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex flex-col space-y-4 p-8 border border-[#1F1F23] bg-[#050505] hover:border-[#00E5FF]/40 transition-all">
            <MessageSquare className="w-5 h-5 text-[#00E5FF]" />
            <h2 className="text-lg font-bold text-[#E4E4E7] tracking-tight">COMMUNITY</h2>
            <p className="text-xs font-mono text-[#71717A]">Labs Discussion Board</p>
            <a 
              href="https://discord.gg/blackstart-labs" 
              className="group flex items-center space-x-2 text-sm font-mono text-[#E4E4E7] hover:text-[#00E5FF] transition-colors pt-4"
            >
              <span>JOIN_PROTOCOL_HUB</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-20 p-12 bg-[#050505] border border-[#1F1F23] max-w-4xl mx-auto space-y-12">
          <p className="text-xs text-[#52525B] font-mono leading-relaxed uppercase tracking-[0.05em]">
            SYSTEM_PROTOCOL: All incoming requests are parsed within standard operational hours. Response times fluctuate based on current compute cycles. Use structured formats for all technical inquiries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#1F1F23]">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#27272A] uppercase">LOCATION_DATA</span>
                <p className="text-xs font-mono text-[#71717A]">Distributed // Sync_Time_UTC+6</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#27272A] uppercase">ESTABLISHED</span>
                <p className="text-xs font-mono text-[#71717A]">2026.03.29_16:33</p>
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
