import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "../ui/card"
import { cn } from "../../utils/cn"

export const Skills = () => {
  const categories = [
    { id: "all", label: "All Tech" },
    { id: "languages", label: "Languages" },
    { id: "backend", label: "Backend" },
    { id: "ai", label: "Artificial Intelligence" },
    { id: "databases", label: "Databases" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "tools", label: "Tools" }
  ]

  const [activeTab, setActiveTab] = useState("all")

  const skillsData = [
    // Languages
    { name: "Python", category: "languages", icon: "🐍", level: "Expert" },
    { name: "Java", category: "languages", icon: "☕", level: "Intermediate" },
    { name: "JavaScript", category: "languages", icon: "💛", level: "Expert" },
    { name: "SQL", category: "languages", icon: "📊", level: "Expert" },
    { name: "HTML5", category: "languages", icon: "🌐", level: "Expert" },
    { name: "CSS3", category: "languages", icon: "🎨", level: "Expert" },

    // Backend
    { name: "Django", category: "backend", icon: "🦄", level: "Expert" },
    { name: "Django REST Framework", category: "backend", icon: "🔌", level: "Expert" },
    { name: "REST APIs", category: "backend", icon: "🌐", level: "Expert" },
    { name: "JWT Authentication", category: "backend", icon: "🔑", level: "Expert" },

    // AI
    { name: "LangChain", category: "ai", icon: "🦜", level: "Expert" },
    { name: "Google Gemini API", category: "ai", icon: "✨", level: "Expert" },
    { name: "RAG Pipelines", category: "ai", icon: "📚", level: "Expert" },
    { name: "Prompt Engineering", category: "ai", icon: "✍️", level: "Expert" },
    { name: "ChromaDB", category: "ai", icon: "💾", level: "Expert" },
    { name: "Vector Databases", category: "ai", icon: "🧬", level: "Expert" },
    { name: "LLM Integration", category: "ai", icon: "🧠", level: "Expert" },

    // Databases
    { name: "PostgreSQL", category: "databases", icon: "🐘", level: "Intermediate" },
    { name: "MySQL", category: "databases", icon: "🐬", level: "Expert" },
    { name: "SQLite", category: "databases", icon: "🪶", level: "Expert" },
    { name: "MongoDB", category: "databases", icon: "🍃", level: "Intermediate" },

    // Cloud & DevOps
    { name: "AWS", category: "cloud", icon: "☁️", level: "Intermediate" },
    { name: "Render", category: "cloud", icon: "🚀", level: "Expert" },
    { name: "Git", category: "cloud", icon: "🌴", level: "Expert" },
    { name: "GitHub", category: "cloud", icon: "🐙", level: "Expert" },
    { name: "GitHub Actions", category: "cloud", icon: "⚙️", level: "Intermediate" },
    { name: "Docker (Learning)", category: "cloud", icon: "🐳", level: "Basic" },

    // Tools
    { name: "VS Code", category: "tools", icon: "💻", level: "Expert" },
    { name: "Postman", category: "tools", icon: "📬", level: "Expert" }
  ]

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab)

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-6xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-secondary-light">
            &lt;stack&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Technical Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-semibold font-display rounded-xl border transition-all duration-300 cursor-pointer",
                activeTab === cat.id
                  ? "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/50 text-foreground shadow-md"
                  : "bg-white/5 border-white/5 text-muted-light hover:border-white/10 hover:text-foreground"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={skill.name}
              >
                <Card className="flex flex-col items-center justify-center p-5 gap-3 text-center h-full group hover:border-primary/30">
                  <div className="text-3xl select-none group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-foreground">{skill.name}</h4>
                    <span className="text-[10px] font-mono text-muted mt-1 block uppercase tracking-wider">
                      {skill.level}
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
