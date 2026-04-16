'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface GlassUserCardProps {
  user: {
    username: string;
    avatar: string;
    rating: number;
    teaching: string[];
    learning: string[];
  };
  onConnect: () => void;
}

export default function GlassUserCard({ user, onConnect }: GlassUserCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col w-full max-w-sm rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all hover:border-white/20 hover:bg-white/10"
    >
      {/* Top Flex Row: Avatar Left, Offers Right */}
      <div className="flex justify-between items-start gap-4">
        <div className="flex flex-col items-center">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]">
            <Image 
              src={user.avatar} 
              alt={user.username} 
              fill 
              sizes="64px"
              className="object-cover" 
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white tracking-wide">{user.username}</h3>
          <p className="text-xs font-semibold flex items-center gap-1 text-amber-400 drop-shadow-md">
            ⭐ {user.rating.toFixed(1)}
          </p>
        </div>

        <div className="flex-1 flex flex-col items-end text-sm">
          <span className="text-white/50 mb-2 uppercase tracking-[0.2em] text-[9px] font-bold">Teaching</span>
          <div className="flex flex-wrap justify-end gap-2">
            {user.teaching.map(skill => (
              <span key={skill} className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] text-xs font-medium tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-6 border-white/5" />

      {/* Bottom Area: Desires and Connect Button */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col text-sm">
          <span className="text-white/50 mb-2 uppercase tracking-[0.2em] text-[9px] font-bold">Wants to Learn</span>
          <div className="flex flex-wrap gap-2">
            {user.learning.map(skill => (
              <span key={skill} className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-indigo-200 text-xs font-medium tracking-wide">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Area */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onConnect}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 hover:bg-white border border-white/20 hover:border-white text-white hover:text-black font-bold transition-all shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_0_rgba(255,255,255,0.3)]"
        >
          Connect
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
