"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, X, Check, MessageCircle } from "lucide-react"

export default function InboxDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const [tab, setTab] = useState<'pending' | 'accepted'>('pending')
  
  // Dummy State for UI Demo
  const [requests] = useState([
    { id: 1, name: "Alice UX", skill: "Figma", status: "pending" },
    { id: 2, name: "Bob Node", skill: "Express", status: "accepted" }
  ])

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="relative p-3 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20 shadow-sm"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border border-white dark:border-slate-900 rounded-full animate-pulse"></span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl border-l border-white/20 shadow-2xl z-[70] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/10">
                <h2 className="text-2xl font-black text-black dark:text-white tracking-tight">Inbox</h2>
                <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-black/50 dark:text-white/50" />
                </motion.button>
              </div>

              <div className="flex p-4 gap-2">
                <button 
                  onClick={() => setTab('pending')}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'pending' ? 'bg-indigo-500 text-white shadow-lg' : 'bg-black/5 dark:bg-white/5 text-black dark:text-white'}`}
                >
                  Pending
                </button>
                <button 
                  onClick={() => setTab('accepted')}
                  className={`flex-1 py-2 rounded-xl text-sm font-bold transition-all ${tab === 'accepted' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-black/5 dark:bg-white/5 text-black dark:text-white'}`}
                >
                  Accepted
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                {requests.filter(r => r.status === tab).length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center h-full opacity-50"
                  >
                    <Bell className="w-12 h-12 mb-4 text-black dark:text-white" />
                    <p className="text-black dark:text-white">No messages yet</p>
                  </motion.div>
                ) : (
                  requests.filter(r => r.status === tab).map(req => (
                    <motion.div 
                      key={req.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/20 shadow-sm"
                    >
                      <h4 className="font-bold text-black dark:text-white">{req.name}</h4>
                      <p className="text-sm text-black/60 dark:text-white/60 mb-4">Wants to learn: <span className="text-indigo-500 dark:text-indigo-400 font-bold">{req.skill}</span></p>
                      
                      {tab === 'pending' ? (
                        <div className="flex gap-2">
                          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 bg-emerald-500 text-white rounded-lg py-2 flex items-center justify-center gap-2 text-sm font-bold shadow-md"><Check className="w-4 h-4"/> Accept</motion.button>
                          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1 bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 rounded-lg py-2 flex items-center justify-center gap-2 text-sm font-bold"><X className="w-4 h-4"/> Decline</motion.button>
                        </div>
                      ) : (
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-indigo-500 text-white rounded-lg py-2 flex items-center justify-center gap-2 text-sm font-bold shadow-md"><MessageCircle className="w-4 h-4"/> Message</motion.button>
                      )}
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
