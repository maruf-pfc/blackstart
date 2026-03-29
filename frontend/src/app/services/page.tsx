import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Code, Cpu, Database, Layout } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "End-to-end web applications built with Next.js, React, and ASP.NET Core. Performant, accessible, and scalable architecture as standard.",
    tech: ["Next.js", "React", "ASP.NET Core", "PostgreSQL"],
    icon: Layout
  },
  {
    title: "Backend Engineering",
    description: "Robust, high-performance distributed systems engineering in C#. Focus on efficiency, resilience, and maintainability.",
    tech: ["C#", ".NET 10", "Redis", "Kafka", "Docker"],
    icon: Database
  },
  {
    title: "AI Integration & Automation",
    description: "Empowering existing workflows with integrated LLMs and intelligent agentic automation. Custom solutions for the specific needs of developers.",
    tech: ["OpenAI", "LangChain", "Python", "Local LLMs"],
    icon: Cpu
  },
  {
    title: "API Design & Development",
    description: "Clean, documented, and secure API surfaces following industry-standard patterns like RESTful or gRPC.",
    tech: ["REST", "gRPC", "GraphQL", "Swagger / OpenAPI"],
    icon: Code
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-6 mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E4E4E7]">
            ENGINEERING_SERVICES
          </h1>
          <p className="text-[#71717A] font-mono text-lg leading-relaxed">
            Every line of code we write is a decision made with purpose. 
            We do not produce templates; we build systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F1F23] border border-[#1F1F23]">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="bg-[#050505] p-12 space-y-6 hover:bg-[#0A0A0B] transition-colors group"
            >
              <service.icon className="w-8 h-8 text-[#00E5FF] mb-8" />
              <h2 className="text-2xl font-bold tracking-tight text-[#E4E4E7]">
                {service.title}
              </h2>
              <p className="text-sm leading-relaxed text-[#71717A] max-w-md">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4">
                {service.tech.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 border border-[#1F1F23] text-[10px] font-mono uppercase tracking-widest text-[#52525B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#00E5FF]/5 border border-[#00E5FF]/10 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-[#E4E4E7]">READY TO EXECUTE?</h3>
            <p className="text-sm font-mono text-[#71717A]">Request_proposal_response_time: &lt; 24h</p>
          </div>
          <Button variant="default" className="w-full md:w-auto">
            INIT_CONTACT
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
