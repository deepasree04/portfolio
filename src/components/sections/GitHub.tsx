import { motion } from "framer-motion"
import { Card } from "../ui/card"
import { Star, GitFork, Flame, Trophy, Activity, Terminal } from "lucide-react"
import { Github } from "../ui/Icons"

export const GitHub = () => {
  // Pinned repositories data
  const pinnedRepos = [
    {
      name: "MentorvixAI-main",
      description: "AI-powered career mentorship platform using Django REST Framework, LangChain, Google Gemini API, and ChromaDB.",
      language: "Python",
      langColor: "bg-emerald-500",
      stars: 18,
      forks: 5,
      link: "https://github.com/deepasree04/MentorvixAI"
    },
    {
      name: "Expenses_Tracker",
      description: "Full-stack finance management platform with Django session authentication and bulk CSV transaction loader.",
      language: "Python",
      langColor: "bg-emerald-500",
      stars: 12,
      forks: 3,
      link: "https://github.com/deepasree04/Expenses_Tracker"
    },
    {
      name: "portfolio",
      description: "Vite + React + TS portfolio featuring aurora blurs, cursor trailing spotlight, and case study modals.",
      language: "TypeScript",
      langColor: "bg-primary",
      stars: 6,
      forks: 1,
      link: "https://github.com/deepasree04/portfolio"
    }
  ]

  // Top Languages data
  const topLanguages = [
    { name: "Python", percent: 55, color: "from-emerald-500 to-teal-400" },
    { name: "JavaScript", percent: 25, color: "from-yellow-500 to-amber-400" },
    { name: "SQL", percent: 12, color: "from-blue-500 to-cyan-400" },
    { name: "HTML/CSS", percent: 8, color: "from-red-500 to-orange-400" }
  ]

  // Generating a grid of 53 columns x 7 rows for a contribution graph (mock representation)
  // Generating activity densities: 0 = none, 1 = low, 2 = medium, 3 = high
  const generateContributions = () => {
    const densities = [0, 0, 1, 0, 1, 2, 0, 1, 2, 3, 1, 2, 0, 1, 0, 2, 1, 3, 2, 0, 1, 2, 0, 1, 2, 3, 0, 1, 2, 1, 2, 3, 0, 0, 1, 2, 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3]
    const grid = []
    
    // We want 7 rows (Sunday to Saturday)
    for (let row = 0; row < 7; row++) {
      const rowCells = []
      for (let col = 0; col < 40; col++) {
        // Pseudo-random index based on row/column
        const densityIdx = (row * col + col + row) % densities.length
        rowCells.push(densities[densityIdx])
      }
      grid.push(rowCells)
    }
    return grid
  }

  const contributionGrid = generateContributions()

  const getColorClass = (density: number) => {
    switch (density) {
      case 1: return "bg-emerald-950/40 border border-emerald-900/30"
      case 2: return "bg-emerald-700/50 border border-emerald-600/30"
      case 3: return "bg-emerald-400 border border-emerald-300/30 shadow-[0_0_8px_rgba(52,211,153,0.3)]"
      default: return "bg-white/5 border border-white/5"
    }
  }

  return (
    <section id="github" className="py-24 px-4 md:px-8 max-w-6xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-light">
            &lt;metrics&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            GitHub Developer Dashboard
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {/* Main GitHub Stats Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contribution Calendar Card */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-emerald-accent" />
                  <h3 className="font-display text-base font-bold">Contributions Calendar</h3>
                </div>
                
                <a 
                  href="https://github.com/deepasree04" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-mono font-bold text-primary-light hover:underline inline-flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  @deepasree04
                </a>
              </div>

              {/* Contribution Grid Wrapper */}
              <div className="overflow-x-auto pb-2">
                <div className="flex flex-col gap-1 min-w-[500px]">
                  {contributionGrid.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-1">
                      {row.map((cell, cIdx) => (
                        <div
                          key={cIdx}
                          className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 hover:scale-110 ${getColorClass(cell)}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Grid Legend */}
              <div className="flex justify-between items-center text-[10px] font-mono text-muted-light pt-2">
                <span>942 Commits in the last year</span>
                <div className="flex items-center gap-1">
                  <span>Less</span>
                  <div className="w-2.5 h-2.5 rounded-sm bg-white/5 border border-white/5" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/40 border border-emerald-900/30" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/50 border border-emerald-600/30" />
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400" />
                  <span>More</span>
                </div>
              </div>
            </Card>

            {/* Pinned Repositories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pinnedRepos.map((repo) => (
                <a 
                  key={repo.name} 
                  href={repo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="p-5 h-full flex flex-col justify-between hover:border-primary/30 transition-all duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-sm font-display font-bold text-foreground group-hover:text-primary-light transition-colors">
                        <Terminal className="w-4 h-4 text-primary" />
                        <span>{repo.name}</span>
                      </div>
                      <p className="text-xs text-muted-light leading-relaxed">
                        {repo.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-light pt-4 mt-auto">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.language === "Python" ? "bg-emerald-500" : "bg-primary"}`} />
                        <span>{repo.language}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {repo.stars}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3.5 h-3.5" />
                          {repo.forks}
                        </span>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Top Languages and Streak Dashboard */}
          <div className="flex flex-col gap-6">
            {/* Top Languages Progress bars */}
            <Card className="p-6 space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h3 className="font-display text-base font-bold">Top Languages</h3>
              </div>
              
              <div className="space-y-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-foreground">{lang.name}</span>
                      <span className="text-muted-light">{lang.percent}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Streak Metrics Card */}
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 animate-pulse" />
                <h3 className="font-display text-base font-bold">GitHub Streak</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-center">
                  <div className="text-2xl font-display font-black text-orange-500 text-glow">
                    45
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-light mt-1">
                    Current Streak
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-center">
                  <div className="text-2xl font-display font-black text-yellow-500">
                    112
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-light mt-1">
                    Longest Streak
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
