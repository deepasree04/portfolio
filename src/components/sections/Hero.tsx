import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Download, Send, ChevronDown } from "lucide-react"
import { Button } from "../ui/button"

export const Hero = () => {
  const roles = [
    "Software Engineer",
    "AI Developer",
    "Backend Developer",
    "Python Developer",
    "LLM Engineer"
  ]

  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: any
    const fullText = roles[roleIndex]
    const typeSpeed = isDeleting ? 30 : 80

    if (!isDeleting && currentText === fullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => 
          isDeleting 
            ? fullText.substring(0, prev.length - 1) 
            : fullText.substring(0, prev.length + 1)
        )
      }, typeSpeed)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offsetTop = el.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 select-none"
    >
      <div className="max-w-4xl text-center flex flex-col items-center gap-6">
        {/* Welcome Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-light font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-400 to-secondary-light text-glow">Deepasree Somasundharam</span>
        </motion.h1>

        {/* Typewriter role switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 text-xl sm:text-2xl md:text-3xl font-mono text-secondary-light font-medium flex items-center"
        >
          <span>A&nbsp;</span>
          <span>{currentText}</span>
          <span className="w-[3px] h-6 bg-secondary-light ml-1 animate-pulse" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-muted-light text-sm sm:text-base md:text-lg leading-relaxed text-center"
        >
          Recent BCA graduate passionate about building AI-powered software and scalable backend systems using Python, Django, LangChain, Google Gemini API, ChromaDB, REST APIs, AWS, and cloud deployment.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6"
        >
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => scrollToSection("resume")}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </Button>

          <Button 
            variant="glow" 
            size="lg" 
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Contact Me
          </Button>
        </motion.div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 cursor-pointer text-muted-light hover:text-foreground transition-colors duration-300 flex flex-col items-center gap-1"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
