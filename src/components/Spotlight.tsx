import { useEffect } from "react"
import { useMotionValue, useSpring, motion } from "framer-motion"

export const Spotlight = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring settings for smooth tracking
  const springConfig = { damping: 40, stiffness: 250, mass: 0.5 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of spotlight size (200px) to center it under cursor
      mouseX.set(e.clientX - 200)
      mouseY.set(e.clientY - 200)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
      style={{
        left: glowX,
        top: glowY,
        width: 400,
        height: 400,
      }}
    >
      <div 
        className="w-full h-full rounded-full opacity-40 filter blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
      />
    </motion.div>
  )
}
