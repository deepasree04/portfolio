import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Personal Projects & Open Source",
      period: "2025 - Present",
      points: [
        "Developed AI-enabled web applications with Django REST Framework, implementing production-ready backend codebases.",
        "Integrated Google Gemini API and LangChain to build intelligent, context-aware user agents and chat orchestration systems.",
        "Built high-performance Retrieval-Augmented Generation (RAG) pipelines using ChromaDB vector database for structured doc lookup.",
        "Designed and implemented secure JWT authentication protocols for protected routing and user profile isolation.",
        "Developed modular, reusable, and self-documenting REST APIs with comprehensive serializing and validation filters.",
        "Configured continuous deployment pipelines and hosted live applications on cloud providers like AWS and Render."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 px-4 md:px-8 max-w-4xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-light">
            &lt;timeline&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Development Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 w-full pl-6 md:pl-10 space-y-12 ml-2">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* Pulsing Node */}
              <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-background border border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              </span>

              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="space-y-6">
                  {/* Header Details */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-primary-light font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-light">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Accomplishment Bullet Points */}
                  <ul className="space-y-3">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-light leading-relaxed font-sans">
                        <CheckCircle2 className="w-5 h-5 text-emerald-accent shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
