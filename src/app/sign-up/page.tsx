'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/supabaseClient';
import Link from 'next/link';

export default function SignUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    const { error: signUpError } = await supabase.auth.signUp({ email, password });
    
    if (signUpError) {
      setError(signUpError.message);
    } else {
      router.push('/');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      {/* Ambient background styling */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-md p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl shadow-2xl">
        <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Create Account</h2>
        <p className="text-white/50 text-sm mb-6">Join Skill-XO to start learning</p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="you@example.com"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-white/50 mb-1 uppercase tracking-wider">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm mt-2 font-medium bg-red-400/10 border border-red-400/20 p-2 rounded-lg">
              {error}
            </p>
          )}

          <button 
            type="submit"
            className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] active:scale-95"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">
          Already have an account? <Link href="/sign-in" className="text-emerald-400 hover:text-emerald-300 font-bold">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
