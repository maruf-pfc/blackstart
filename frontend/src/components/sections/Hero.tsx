"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Subtle background noise/grid could go here, but keeping it pure black as requested */}
      
      <div className="max-w-4xl max-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-3 py-1 border border-[#1F1F23] bg-[#0A0A0B] text-[#00E5FF] font-mono text-[10px] uppercase tracking-widest"
        >
          v1.0.0_INITIALIZED
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-[#E4E4E7] font-sans leading-[0.9]"
        >
          BLACKSTART<br />
          <span className="text-[#00E5FF]">LABS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-[#71717A] font-mono max-w-2xl mx-auto leading-relaxed"
        >
          Great systems begin in silence and awaken with purpose. 
          Building minimal, resilient engineering systems for the next web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center px-8 py-4 bg-[#00E5FF] text-[#050505] font-mono text-sm font-bold uppercase tracking-widest transition-all hover:bg-[#00B8CC]"
          >
            EXECUTE_SERVICES
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link
            href="/about"
            className="font-mono text-sm uppercase tracking-widest text-[#71717A] hover:text-[#E4E4E7] transition-colors"
          >
            LEARN_MORE
          </Link>
        </motion.div>
      </div>

      {/* Subtle indicator of more content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#27272A]">SCROLL_FOR_DATA</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1F1F23] to-transparent"></div>
      </motion.div>
    </section>
  );
}
