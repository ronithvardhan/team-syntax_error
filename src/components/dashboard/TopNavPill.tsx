'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TopNavPill() {
  return (
    <header className="absolute top-6 right-6 z-50">
      <motion.div 
         initial={{ opacity: 0, x: 20 }} 
         animate={{ opacity: 1, x: 0 }}
         transition={{ delay: 0.1 }}
         className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 p-1.5 pr-5 backdrop-blur-xl shadow-lg hover:bg-white/10 transition-colors cursor-pointer"
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
          <Image 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" 
            alt="User avatar" 
            fill 
            className="object-cover" 
          />
        </div>
        <span className="text-sm font-semibold tracking-wide text-white/90">@alex_dev</span>
        
        <div className="h-4 w-px bg-white/20 mx-1" />
        
        <span className="text-sm font-bold text-amber-400 drop-shadow-md flex items-center gap-1.5">
          4.9 ⭐
        </span>
      </motion.div>
    </header>
  );
}
