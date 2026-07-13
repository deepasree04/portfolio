import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Card } from "../ui/card"
import { Terminal, Cpu } from "lucide-react"

// Animate numbers hook/sub-component
const AnimatedCounter = ({ value, duration = 1.5 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        setCount(Math.floor(progress * value))
        if (progress < 1) {
          requestAnimationFrame(step)
        }
      }
      requestAnimationFrame(step)
    }
  }, [isInView, value, duration])

  return <span ref={ref}>{count}</span>
}

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-light">
            &lt;profile&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Main Info Card */}
          <Card className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary-light">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">Software Engineering & AI Developer</h3>
              </div>
              <div className="text-muted-light text-sm sm:text-base leading-relaxed space-y-4 font-sans">
                <p>
                  I am a software engineer and AI developer focused on building production-ready applications, scalable backend architectures, and intelligent LLM pipelines. I specialize in designing and deploying systems that bridge complex artificial intelligence capabilities with robust, secure backend services.
                </p>
                <p>
                  My engineering expertise includes developing applications with <strong>Django REST Framework</strong>, orchestrating RAG pipelines with <strong>LangChain</strong>, integrating advanced vector search databases using <strong>ChromaDB</strong>, and engineering robust API services utilizing advanced AI technologies like the <strong>Google Gemini API</strong>.
                </p>
                <p>
                  I write clean, modular, and optimized code, adhering to strict clean code principles, REST API standards, and containerized deployment practices. I aim to build high-performance products that solve complex computational challenges.
                </p>
              </div>
            </div>
          </Card>

          {/* Stats & Quick Cards */}
          <div className="flex flex-col gap-6">
            {/* Quick Tech Focus Card */}
            <Card className="flex-1 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary/10 border border-secondary/20 text-secondary-light">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold">Engineering Focus</h4>
              </div>
              <ul className="text-xs text-muted-light space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  RAG Systems & Embeddings
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Scalable Web API Backend
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent" />
                  Token Optimization & Agentic Workflows
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Cloud Infrastructure Deploys
                </li>
              </ul>
            </Card>

            {/* Numbers Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-black text-primary-light">
                  <AnimatedCounter value={3} />+
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted-light mt-1">
                  Projects Built
                </div>
              </Card>

              <Card className="flex flex-col items-center justify-center p-4 text-center">
                <div className="text-2xl sm:text-3xl font-display font-black text-secondary-light">
                  <AnimatedCounter value={15} />+
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-muted-light mt-1">
                  Core Techs
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
