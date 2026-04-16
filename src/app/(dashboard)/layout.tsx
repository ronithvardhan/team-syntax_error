import TopNavPill from '@/components/dashboard/TopNavPill';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white selection:bg-indigo-500/30">
      {/* Ambient Animated Gradient Mesh Background */}
      <div 
        className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(79,70,229,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.1),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(0,0,0,1)_0%,#020617_100%)] pointer-events-none" 
      />
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      {/* Global Top Navigation for logged-in users */}
      <TopNavPill />

      {/* Main Content Area */}
      <main className="relative z-10 pt-28 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col min-h-screen">
        {children}
      </main>
    </div>
  );
}
