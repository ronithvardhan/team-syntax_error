"use client"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Link from "next/link"
import InboxDrawer from "./InboxDrawer"
import { Sun, Moon, Home } from "lucide-react"

export default function TopNav() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => setMounted(true), [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-2xl bg-white/5 dark:bg-black/20 border-b border-black/5 dark:border-white/10"
    >
      <Link href="/">
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500"
        >
          <Home className="w-6 h-6 text-indigo-500" />
          Skill-XO
        </motion.div>
      </Link>

      <div className="flex items-center gap-4">
        <InboxDrawer />
        
        {mounted && (
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-3 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/10 dark:border-white/20 shadow-sm transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        )}
      </div>
    </motion.nav>
  )
}
