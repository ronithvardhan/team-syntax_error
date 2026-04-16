'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const scrollVariant = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="relative bg-black text-white selection:bg-indigo-500/30">
      
      {/* Ambient Static Mesh Background */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-50 bg-[radial-gradient(circle_at_50%_20%,rgba(79,70,229,0.3)_0%,rgba(0,0,0,1)_50%)]"
      />
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] pointer-events-none mix-blend-overlay" />

      {/* Main Document Scroll */}
      {/* Changed: spacing from space-y-64 to robust gap-16 md:gap-24 and normalized paddings */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-16 md:gap-24 py-16 md:py-24">
        
        {/* Phase 1: Problem (Hero stays min-h-screen) */}
        <motion.section 
          {...scrollVariant}
          className="min-h-screen w-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 drop-shadow-2xl">
            Learning in isolation<br/>is broken.
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
            Tutorial rot, motivation loss, and unanswered questions kill growth.
          </p>
        </motion.section>

        {/* Phase 2: Solution (Natural height) */}
        <motion.section 
          {...scrollVariant}
          className="w-full flex flex-col items-center justify-center text-center px-4 max-w-3xl mx-auto py-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-emerald-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
            Peer-to-Peer is the fix.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
            Trade a skill you know for a skill you want.<br/>Face-to-face. Meaningful human connection.
          </p>
        </motion.section>

        {/* Climax: Call to action */}
        <motion.section 
          {...scrollVariant}
          className="w-full flex flex-col items-center justify-center px-4 max-w-xl mx-auto py-16 pb-32"
        >
          <div className="rounded-[3rem] border border-white/20 bg-white/5 p-12 md:p-16 backdrop-blur-2xl shadow-[0_20px_100px_rgba(245,158,11,0.2)] text-center w-full relative overflow-hidden group">
            
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <h3 className="text-4xl md:text-5xl font-black mb-10 relative z-10 tracking-tight">Skill-XO</h3>
            
            <Link 
              href="/onboarding"
              className="relative z-10 w-full inline-flex items-center justify-center gap-4 rounded-full bg-white/10 border border-white/30 px-8 py-5 text-lg font-bold text-white transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] focus:outline-none"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 24c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 21.53 7.7 24 12 24z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 4.62c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.18 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Sign up with Google
            </Link>
          </div>
        </motion.section>
      </div>
      
    </div>
  );
}
