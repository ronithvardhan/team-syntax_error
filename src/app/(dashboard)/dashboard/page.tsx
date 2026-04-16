import SkillCarousel from '@/components/dashboard/SkillCarousel';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
      {/* Header Profile Summary */}
      <section className="flex items-center justify-between mt-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            Welcome back, Alex.
          </h1>
          <p className="text-white/60 mt-2 font-medium">Ready to exchange knowledge today?</p>
        </div>
        <Link 
          href="/explore" 
          className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-bold shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-indigo-500 hover:scale-105 transition-all text-white"
        >
          Explore Peers
        </Link>
      </section>

      {/* The Requested Skill Carousel Component */}
      <SkillCarousel />

      {/* Summary Stats & Upcoming Sessions */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Upcoming Mastery Sessions
          </h2>
          
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center font-bold text-lg">S</div>
              <div>
                <p className="font-semibold">React Architecture</p>
                <p className="text-xs text-white/50">with Sarah • in 2 hours</p>
              </div>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest text-indigo-300 hover:text-indigo-200">Join Meet →</button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
          <h2 className="text-xl font-bold mb-2">Your Impact</h2>
          <div className="flex-1 flex flex-col justify-center gap-6">
            <div>
              <p className="text-5xl font-black text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">4.9</p>
              <p className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-black">12</p>
              <p className="text-sm font-medium text-white/50 uppercase tracking-widest mt-1">Skills Exchanged</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
