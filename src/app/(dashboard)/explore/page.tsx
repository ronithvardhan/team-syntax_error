'use client';
import { useState } from 'react';
import GlassUserCard from '@/components/ui/GlassUserCard';
import { motion } from 'framer-motion';

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState('All');

  // Mock data representing algorithmic sorting by average rating
  const mockUsers = [
    { username: 'alex_dev', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200', rating: 4.9, teaching: ['React', 'Next.js'], learning: ['Rust', 'Golang'] },
    { username: 'sarah_ui', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200', rating: 4.8, teaching: ['Figma', 'CSS'], learning: ['React', 'Backend'] },
    { username: 'david_rs', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200', rating: 4.7, teaching: ['Rust', 'C++'], learning: ['Design', 'Next.js'] },
    { username: 'julia_db', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200', rating: 4.5, teaching: ['PostgreSQL', 'Redis'], learning: ['Frontend', 'Framer'] },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 pb-12 w-full animate-in fade-in duration-500">
      
      {/* Main Grid Area */}
      <div className="flex-1 order-2 lg:order-1">
        <header className="mb-8">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for skills, users, or categories..." 
              className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-5 text-lg text-white placeholder-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500 transition-all font-light"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-indigo-600 px-6 py-2.5 font-bold text-white hover:bg-indigo-500 transition-colors shadow-lg">
              Search
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full place-items-stretch">
          {mockUsers.map((u, i) => (
             <GlassUserCard 
                key={i} 
                user={u} 
                onConnect={() => alert(`Connection request sent to ${u.username}!`)} 
              />
          ))}
        </div>
      </div>

      {/* Right Sidebar Filters */}
      <aside className="w-full lg:w-80 order-1 lg:order-2 shrink-0">
        <div className="sticky top-32 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
          <h2 className="text-xl font-bold mb-6 text-white tracking-wide">Filters</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Categories</p>
              <div className="flex flex-col gap-2">
                {['All', 'Frontend', 'Backend', 'Design', 'Systems'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab 
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.2)]' 
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-white/10" />

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Minimum Rating</p>
              <input type="range" min="1" max="5" step="0.5" className="w-full accent-indigo-500" />
              <div className="flex justify-between text-xs text-white/60 font-medium mt-1">
                <span>1.0</span>
                <span>5.0</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

    </div>
  );
}
