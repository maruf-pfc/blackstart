import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Code, Star, GitFork, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "blackstart-cli",
    description: "A high-performance terminal toolkit for system maintenance and automation. Built with Go and Bubble Tea.",
    stars: 128,
    forks: 12,
    tech: ["Go", "Bubble Tea", "TUI"],
    url: "https://github.com/blackstart-labs/blackstart-cli"
  },
  {
    name: "dotnet-rbac-starter",
    description: "Production-ready ASP.NET Core starter template with advanced RBAC, JWT, and Refresh Token implementations.",
    stars: 84,
    forks: 32,
    tech: ["C#", ".NET 10", "PostgreSQL", "xUnit"],
    url: "https://github.com/blackstart-labs/dotnet-rbac-starter"
  },
  {
    name: "next-minimal-labs",
    description: "A collection of reusable Next.js components and layout patterns focused on high performance and minimal design.",
    stars: 215,
    forks: 45,
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    url: "https://github.com/blackstart-labs/next-minimal-labs"
  },
  {
    name: "ai-agent-orchestrator",
    description: "Minimal framework for managing complex AI agent workflows with localized state and memory persistence.",
    stars: 42,
    forks: 8,
    tech: ["Python", "LangChain", "Redis"],
    url: "https://github.com/blackstart-labs/ai-agent-orchestrator"
  }
];

export default function OpenSourcePage() {
  return (
    <main className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-6 mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E4E4E7]">
            OPEN_SOURCE_PROTOCOL
          </h1>
          <p className="text-[#71717A] font-mono text-lg leading-relaxed">
            We build in the open. Our core research and utility libraries are licensed to empower developers.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="group p-8 border border-[#1F1F23] bg-[#050505] hover:border-[#00E5FF]/40 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center space-x-3">
                  <Code className="w-5 h-5 text-[#00E5FF]" />
                  <h2 className="text-xl font-bold tracking-tight text-[#E4E4E7] group-hover:text-[#00E5FF] transition-colors">
                    {project.name}
                  </h2>
                </div>
                <p className="text-sm text-[#71717A] max-w-2xl leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 border border-[#1F1F23] text-[9px] font-mono uppercase tracking-widest text-[#52525B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-8 md:space-x-12 shrink-0">
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1 text-[#E4E4E7]">
                    <Star className="w-3.5 h-3.5 fill-[#00E5FF] text-[#00E5FF]" />
                    <span className="text-xs font-mono">{project.stars}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#27272A] uppercase tracking-widest mt-1">STARS</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center space-x-1 text-[#E4E4E7]">
                    <GitFork className="w-3.5 h-3.5 text-[#52525B]" />
                    <span className="text-xs font-mono">{project.forks}</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#27272A] uppercase tracking-widest mt-1">FORKS</span>
                </div>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border border-[#1F1F23] bg-[#0A0A0B] hover:bg-[#1F1F23] transition-colors rounded-none"
                >
                  <ExternalLink className="w-4 h-4 text-[#00E5FF]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-[#1F1F23] pt-12 text-center max-w-2xl mx-auto space-y-6">
          <p className="text-xs font-mono text-[#52525B] leading-relaxed">
            SYSTEM_MESSAGE: We are constantly refactoring internal tools for public release. Check back frequently for new repositories.
          </p>
          <a 
            href="https://github.com/blackstart-labs" 
            className="inline-block font-mono text-xs uppercase tracking-[0.2em] text-[#00E5FF] hover:underline"
          >
            EXPLORE_FULL_ROSTER_
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
