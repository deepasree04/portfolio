import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardFooter } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, BookOpen, X, Sparkles, Server, Check } from "lucide-react"
import { Github } from "../ui/Icons"

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  architecture: string[];
  outcome: string[];
}

interface Project {
  id: number;
  title: string;
  description: string;
  isFeatured: boolean;
  tech: { name: string; variant: 'primary' | 'secondary' | 'emerald' | 'default' }[];
  github: string;
  demo: string;
  category: string;
  caseStudy: CaseStudy;
}

export const Projects = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null)

  const projectsData: Project[] = [
    {
      id: 1,
      title: "MentorVix AI",
      description: "AI-powered career guidance platform featuring Retrieval-Augmented Generation (RAG), LangChain orchestration, Google Gemini integration, JWT authentication, scalable REST APIs, and cloud deployment.",
      isFeatured: true,
      category: "AI & Backend",
      tech: [
        { name: "Python", variant: "primary" },
        { name: "Django", variant: "primary" },
        { name: "DRF", variant: "primary" },
        { name: "LangChain", variant: "secondary" },
        { name: "Gemini API", variant: "secondary" },
        { name: "ChromaDB", variant: "secondary" },
        { name: "JWT Auth", variant: "default" },
        { name: "RAG Pipeline", variant: "emerald" },
        { name: "REST API", variant: "default" },
       
      ],
      github: "https://github.com/deepasree04/MentorvixAI",
      demo: "https://mentorvixai.onrender.com",
      caseStudy: {
        title: "MentorVix AI — RAG-Powered Mentor Platform",
        challenge: "Traditional career guidance systems rely on fixed, outdated decision trees, leading to generic advice. Building a dynamic AI advisor requires grounding suggestions in up-to-date career resources while avoiding LLM hallucinations.",
        solution: "Created an intelligent Retrieval-Augmented Generation (RAG) platform using a LangChain agent. Document embeddings are stored in ChromaDB. When a user queries, Google Gemini API processes context-matched profiles to return highly accurate career pathways. Django REST Framework serves as the robust API gateway.",
        architecture: [
          "Document Ingestion: PDF guides parsed, split into text chunks, and indexed.",
          "Embedding: ChromaDB indexes text segments using Gemini vector models.",
          "Query Processing: LangChain orchestrates user inputs, retrieves matching context, and feeds Gemini.",
          "Django REST API: Provides secure JWT-validated endpoints for frontend interactions.",
          "Deployment: Hosted on Render ."
        ],
        outcome: [
          "Response time reduced to sub-2.5 seconds with context caching.",
          "100% accurate pathway linking based on ChromaDB vector matches.",
          "Secure user session tracking and history logging via JWT authentication."
        ]
      }
    },
    {
      id: 2,
      title: "Expense Tracker",
      description: "Secure full-stack expense management system with session/JWT authentication, REST APIs, interactive analytics dashboard, and CSV bulk transaction uploader.",
      isFeatured: false,
      category: "Full Stack",
      tech: [
        { name: "Python", variant: "primary" },
        { name: "Django", variant: "primary" },
        { name: "JavaScript", variant: "secondary" },
        { name: "HTML/CSS", variant: "default" },
        { name: "MYSQL", variant: "default" },
        { name: "CSV Bulk Import", variant: "emerald" }
      ],
      github: "https://github.com/deepasree04/Expenses_Tracker",
      demo: "https://deepasree04.github.io/Expenses_Tracker/",
      caseStudy: {
        title: "Expense Tracker — Secure Asset Management",
        challenge: "Users need to upload large quantities of transaction items without bottlenecking thread loops, requiring database isolation and quick csv validation.",
        solution: "Built a robust Django transaction logger with a custom file processor that parses, maps, and writes CSV values to SQLite within a single transactional atomic block. Created an interactive front-end analytics dashboard with native JS to display trends.",
        architecture: [
          "Authentication: Strict session checks prevent cross-user data leakage.",
          "Atomic Transactions: Bulk uploader rolls back on any corrupted CSV line entry.",
          "Analytics Module: Aggregate SQL queries generate monthly reports instantly.",
          "Responsive Interface: Clean CSS layout scalable down to mobile viewports."
        ],
        outcome: [
          "Parsed and inserted 100+ transaction lines under 800ms.",
          "User financial sheets completely isolated behind robust validation filters.",
          "Intuitive visual dashboard mapping monthly expenditure trends dynamically."
        ]
      }
    },
    {
      id: 3,
      title: "Portfolio",
      description: "Recruiter-optimized portfolio website featuring interactive dashboards, glowing aurora backgrounds, modal case studies, and responsive styling.",
      isFeatured: false,
      category: "Web Frontend",
      tech: [
        { name: "React 19", variant: "secondary" },
        { name: "Vite 8", variant: "secondary" },
        { name: "TypeScript", variant: "secondary" },
        { name: "Tailwind CSS v4", variant: "primary" },
        { name: "Framer Motion", variant: "primary" },
        { name: "Lucide Icons", variant: "default" },
        { name: "GitHub Actions", variant: "emerald" }
      ],
      github: "https://github.com/deepasree04/portfolio",
      demo: "#hero",
      caseStudy: {
        title: "Developer Portfolio — Premium UX Case Study",
        challenge: "Websites for entry-level developers are often static and fail to capture attention. Recruiters scan profiles in seconds, necessitating an immediate visual and performance impact.",
        solution: "Engineered a React + TypeScript single-page app utilizing Vite and Tailwind CSS v4. Features an aurora floating background, typewriter transitions, dynamic GitHub panels, and custom case study modals.",
        architecture: [
          "React 19 Framework: Virtual DOM renders fast visual state transitions.",
          "Tailwind CSS v4: Extends compiled stylesheet performance without purge bloating.",
          "Framer Motion: Drives spring-physics spotlight cursor trails and reveal delays.",
          "CI/CD Pipeline: GitHub Actions triggers build compilation on pushes to deploy automatically."
        ],
        outcome: [
          "Lighthouse scoring targets met (100 SEO, 100 Accessibility).",
          "Seamless responsive sizing from 320px mobile up to wide monitors.",
          "Clean structure preserving git commits and hosting configurations."
        ]
      }
    }
  ]

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-accent">
            &lt;work&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-primary mx-auto rounded-full mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={project.isFeatured ? "md:col-span-2 lg:col-span-3" : ""}
            >
              <Card className="flex flex-col h-full hover:border-primary/20 transition-all duration-300">
                <div className="flex flex-col flex-1 gap-4">
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary-light font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.isFeatured && (
                      <Badge variant="emerald" className="gap-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-light text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tag) => (
                      <Badge key={tag.name} variant={tag.variant}>
                        {tag.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <CardFooter className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/5">
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setActiveCaseStudy(project)}
                      className="flex items-center gap-1.5"
                    >
                      <BookOpen className="w-4 h-4 text-primary-light" />
                      Case Study
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-foreground transition-all duration-300"
                      aria-label="GitHub Repository Link"
                    >
                      <Github className="w-4.5 h-4.5" />
                    </a>
                    
                    {project.demo !== "#hero" && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 h-9 gap-1.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-xs font-semibold hover:brightness-110 transition-all duration-300 shadow-md"
                        aria-label="Live Demo Link"
                      >
                        Live Demo
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Drawer */}
      <AnimatePresence>
        {activeCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCaseStudy(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-2xl glass-card rounded-2xl p-6 md:p-8 max-h-[85vh] overflow-y-auto border border-white/15 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-4 right-4 p-1.5 rounded-xl border border-white/10 bg-white/5 text-foreground hover:bg-white/10 transition-all cursor-pointer"
                aria-label="Close Case Study Modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary-light uppercase">
                    Developer Case Study
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-foreground mt-1">
                    {activeCaseStudy.caseStudy.title}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-secondary-light uppercase font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-light leading-relaxed font-sans">
                    {activeCaseStudy.caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary-light uppercase font-bold">
                    <Server className="w-3.5 h-3.5" />
                    <span>The Solution</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-light leading-relaxed font-sans">
                    {activeCaseStudy.caseStudy.solution}
                  </p>
                </div>

                {/* Architecture workflow */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-accent uppercase font-bold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Architecture Workflow</span>
                  </div>
                  <ul className="space-y-1.5">
                    {activeCaseStudy.caseStudy.architecture.map((step, sIdx) => (
                      <li key={sIdx} className="flex gap-2 text-xs sm:text-sm text-muted-light leading-relaxed font-mono">
                        <span className="text-primary-light shrink-0">[{sIdx + 1}]</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-yellow-400 uppercase font-bold">
                    <Check className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Engineering Outcomes</span>
                  </div>
                  <ul className="space-y-1.5">
                    {activeCaseStudy.caseStudy.outcome.map((res, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-light leading-relaxed font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent shrink-0 mt-2" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
