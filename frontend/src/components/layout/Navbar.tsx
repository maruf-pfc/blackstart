"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "/home", href: "/" },
  { name: "/services", href: "/services" },
  { name: "/courses", href: "/courses" },
  { name: "/open-source", href: "/open-source" },
  { name: "/about", href: "/about" },
  { name: "/contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1F1F23] bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-mono text-lg font-bold tracking-tighter text-[#E4E4E7] hover:text-[#00E5FF] transition-colors"
        >
          BLACKSTART_LABS
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-mono text-xs uppercase tracking-widest transition-colors hover:text-[#00E5FF]",
                pathname === link.href ? "text-[#00E5FF]" : "text-[#71717A]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle would go here if needed, but keeping it minimal for now */}
      </div>
    </nav>
  );
}
