'use client';
import { motion } from 'framer-motion';

export default function SkillCarousel() {
  const skills = ['React App Router', 'Rust Basics', 'UI/UX Design', 'PostgreSQL', 'Framer Motion', 'Golang Microservices'];

  return (
    <section className="mb-12 relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 tracking-tight">
          Top Skills to Learn
        </h2>
        <button className="text-sm text-white/50 hover:text-white transition-colors">See all →</button>
      </div>

      {/* Native horizontal scroll with snapping for high performance */}
      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-8 px-8 xl:mx-0 xl:px-0">
        {skills.map((skill, i) => (
          <motion.div 
            key={skill}
            whileHover={{ scale: 1.02 }}
            className="snap-start shrink-0 w-64 h-36 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md flex items-center p-6 relative cursor-pointer group shadow-xl"
          >
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors rounded-3xl" />
            <div className="z-10">
              <span className="block text-xl font-bold text-white/90 drop-shadow-md leading-tight">{skill}</span>
              <span className="block mt-2 text-xs font-medium text-white/40 uppercase tracking-widest">+50 Teachers</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
