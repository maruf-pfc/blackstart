import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto border-t border-[#1F1F23] bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold tracking-tighter text-[#E4E4E7]">
              BLACKSTART_LABS
            </h3>
            <p className="text-xs text-[#71717A] max-w-xs font-mono">
              Great systems begin in silence and awaken with purpose.
            </p>
          </div>

          <div className="flex space-x-12">
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#52525B]">STUDIO</h4>
              <ul className="space-y-2 text-xs font-mono">
                <li><Link href="/services" className="hover:text-[#00E5FF] transition-colors">Services</Link></li>
                <li><Link href="/courses" className="hover:text-[#00E5FF] transition-colors">Courses</Link></li>
                <li><Link href="/open-source" className="hover:text-[#00E5FF] transition-colors">Open Source</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#52525B]">LABS</h4>
              <ul className="space-y-2 text-xs font-mono">
                <li><Link href="/about" className="hover:text-[#00E5FF] transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-[#00E5FF] transition-colors">Contact</Link></li>
                <li><Link href="https://github.com/blackstart-labs" className="hover:text-[#00E5FF] transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1F1F23]/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] font-mono text-[#52525B]">
            © {currentYear} BLACKSTART LABS. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] font-mono text-[#52525B]">
            00_00_00_00_00_00_00_01
          </p>
        </div>
      </div>
    </footer>
  );
}
