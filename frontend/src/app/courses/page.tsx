import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronRight, GraduationCap } from "lucide-react";

const courses = [
  {
    title: "Mastering Full-Stack with Next.js & .NET",
    description: "Deep dive into production-grade full-stack architecture. State management, API integration, and deployment automation.",
    tech: ["Next.js 14", "Tailwind", "ASP.NET Core", "Entity Framework"],
    difficulty: "Advanced",
    duration: "12 Weeks"
  },
  {
    title: "Competitive Programming Fundamentals",
    description: "Algorithmic thinking and data structures for high-performance problem solving. From O(n^2) to optimal solutions.",
    tech: ["C++", "Python", "Data Structures", "Algorithms"],
    difficulty: "Intermediate",
    duration: "8 Weeks"
  },
  {
    title: "Backend Engineering & System Design",
    description: "Building scalable, distributed systems from scratch. Design patterns, concurrency, and performance tuning.",
    tech: ["C#", "System Design", "Microservices", "Redis"],
    difficulty: "Advanced",
    duration: "10 Weeks"
  },
  {
    title: "AI Tools for Developers",
    description: "Integrating LLMs into your workflow. Custom RAG pipelines, fine-tuning for code assistants, and automation.",
    tech: ["OpenAI", "LangChain", "Vector DBs", "Python"],
    difficulty: "Mixed",
    duration: "6 Weeks"
  }
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen flex flex-col pt-24">
      <Navbar />
      
      <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto w-full">
        <div className="space-y-6 mb-20 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#E4E4E7]">
            BLACKSTART_ACADEMY
          </h1>
          <p className="text-[#71717A] font-mono text-lg leading-relaxed">
            Engineered learning for developers who want to skip the high-level fluff and get to systems-level mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div 
              key={course.title} 
              className="bg-[#050505] border border-[#1F1F23] p-10 flex flex-col justify-between hover:border-[#00E5FF]/40 transition-colors group"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[#52525B]">
                    <GraduationCap className="w-3 h-3" />
                    <span>{course.difficulty} // {course.duration}</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#E4E4E7] leading-snug">
                  {course.title}
                </h2>
                <p className="text-sm text-[#71717A] leading-relaxed max-w-sm">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {course.tech.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF]/60"
                    >
                      #_{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-[#1F1F23] flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#27272A]">STATUS</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#00E5FF]">ENROLLMENT_OPEN</span>
                </div>
                <Button variant="secondary" size="sm" className="group">
                  VIEW_CURRICULUM
                  <ChevronRight className="ml-1 w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-[#1F1F23] pt-12 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
          <div className="space-y-2">
            <h3 className="text-sm font-bold text-[#E4E4E7] tracking-tight uppercase">NOT_FINDING_A_TOPIC?</h3>
            <p className="text-xs text-[#71717A] font-mono max-w-sm">
              We offer custom corporate training and system-specific bootcamps for engineering teams.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="text-xs font-mono uppercase tracking-widest text-[#00E5FF] hover:underline"
          >
            REQUEST_CUSTOM_TRAINING_
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Helper to keep Link component usage in check without import
function Link({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} className={className}>{children}</a>;
}
