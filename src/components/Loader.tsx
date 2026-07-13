import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LoaderProps {
  onLoadingComplete: () => void;
}

export const Loader = ({ onLoadingComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 1200 // Total load time in ms
    const intervalTime = 15
    const steps = duration / intervalTime
    const stepIncrement = 100 / steps
    
    let current = 0
    const timer = setInterval(() => {
      current += stepIncrement
      if (current >= 100) {
        setProgress(100)
        clearInterval(timer)
        setTimeout(() => {
          onLoadingComplete()
        }, 300)
      } else {
        setProgress(Math.floor(current))
      }
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Mesh glow effects */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] -translate-y-12" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px] translate-y-12" />
      
      <div className="relative flex flex-col items-center select-none">
        {/* Animated brackets logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-2xl mb-8 flex items-center text-glow"
        >
          <span className="text-primary">&lt;</span>
          <span className="mx-1 text-foreground">DeepasreeS</span>
          <span className="text-secondary">/&gt;</span>
        </motion.div>
        
        {/* Running progress percentage */}
        <div className="overflow-hidden h-[72px] flex items-center justify-center font-display font-black text-6xl text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light tracking-tighter">
          {progress}%
        </div>
        
        {/* Dynamic status message */}
        <motion.p
          key={progress < 40 ? "loading" : progress < 80 ? "compiling" : "ready"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.7, y: 0 }}
          className="text-xs text-muted-light mt-4 tracking-widest uppercase font-mono"
        >
          {progress < 40 ? "INITIALIZING ENVIRONMENT..." : progress < 80 ? "COMPILING KERNEL..." : "SYSTEM READY"}
        </motion.p>

        {/* Loading track line */}
        <div className="w-48 h-[2px] bg-white/5 rounded-full mt-6 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  )
}
