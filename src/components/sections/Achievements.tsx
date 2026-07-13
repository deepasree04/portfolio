import { motion } from "framer-motion"
import confetti from "canvas-confetti"
import { Card } from "../ui/card"
import { GraduationCap, Users, Cpu, Server, Cloud } from "lucide-react"

export const Achievements = () => {
  const achievementsList = [
    {
      title: "BCA Graduate",
      description: "Completed Bachelor of Computer Applications with a focus on core programming concepts, data structures, and databases.",
      icon: <GraduationCap className="w-6 h-6 text-yellow-500" />,
      tag: "Academic"
    },
    {
      title: "Team Lead — MentorVix AI",
      description: "Led the development cycle, software architecture design, and integration pipelines for the MentorVix AI platform.",
      icon: <Users className="w-6 h-6 text-primary-light" />,
      tag: "Leadership"
    },
    {
      title: "Built AI-Powered RAG App",
      description: "Successfully built and optimized vector indexing and context extraction retrieval loops using ChromaDB and LangChain.",
      icon: <Cpu className="w-6 h-6 text-secondary-light" />,
      tag: "Artificial Intelligence"
    },
    {
      title: "Developed Scalable REST APIs",
      description: "Authored robust backend REST endpoints with secure serialization, JWT protections, and atomic database locks.",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      tag: "Backend Development"
    },
    {
      title: "Cloud Deployment Experience",
      description: "Configured live instances, reverse proxy configs, and hosted apps on AWS EC2 and Render cloud setups.",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      tag: "DevOps & Cloud"
    }
  ]

  const triggerConfetti = (e: React.MouseEvent) => {
    // Canvas-confetti explosion centered at cursor
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { x, y },
      colors: ["#8b5cf6", "#06b6d4", "#10b981", "#fbbf24"],
      disableForReducedMotion: true
    })
  }

  return (
    <section id="achievements" className="py-24 px-4 md:px-8 max-w-6xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-yellow-500">
            &lt;milestones&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Key Achievements
          </h2>
          <p className="text-xs text-muted-light max-w-sm mx-auto tracking-wide mt-1">
            Click any achievement card below to celebrate! 🎉
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={triggerConfetti}
              className="cursor-pointer group active:scale-95 transition-transform duration-100"
            >
              <Card className="p-6 h-full flex flex-col items-start gap-4 hover:border-yellow-500/30 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] transition-all duration-300">
                <div className="flex items-center justify-between w-full">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {ach.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-muted-light">
                    {ach.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-lg font-bold text-foreground group-hover:text-yellow-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-light leading-relaxed font-sans">
                    {ach.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
