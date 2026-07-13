import { motion } from "framer-motion"
import { Button } from "../ui/button"
import { FileText, Download, Briefcase, GraduationCap, MapPin, Mail, Phone, Globe } from "lucide-react"

export const Resume = () => {
  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, label: "deepasree1504@gmail.com", href: "mailto:deepasree1504@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, label: "Contact via Email", href: "mailto:deepasree1504@gmail.com" },
    { icon: <MapPin className="w-4 h-4" />, label: "India", href: "#" },
    { icon: <Globe className="w-4 h-4" />, label: "github.com/deepasree04", href: "https://github.com/deepasree04" }
  ]

  const skillsGroup = [
    { title: "Languages", techs: "Python, Java, JavaScript, SQL, HTML, CSS" },
    { title: "Backend", techs: "Django, Django REST Framework, REST APIs, JWT Auth" },
    { title: "AI/ML", techs: "LangChain, Gemini API, ChromaDB, RAG Pipelines, Prompt Engineering" },
    { title: "Databases & DevOps", techs: "PostgreSQL, MySQL, SQLite, MongoDB, AWS, Render, Git" }
  ]

  return (
    <section id="resume" className="py-24 px-4 md:px-8 max-w-4xl mx-auto select-none">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-light">
            &lt;credentials&gt;
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Curriculum Vitae
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Download Button Row */}
        <div className="w-full flex justify-end">
          <a href="/resume.pdf" download="Deepasree_Resume.pdf">
            <Button variant="glow" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF Resume
            </Button>
          </a>
        </div>

        {/* Paper Sheet Preview Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-[#0b0f19] border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden font-sans"
        >
          {/* Accent top banner */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-purple-400 to-secondary" />

          {/* CV Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-1">
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
                Deepasree Somasundharam
              </h3>
              <p className="text-sm font-mono text-primary-light uppercase font-bold tracking-widest">
                Software Engineer | AI & Backend Developer
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-muted-light">
              {contactInfo.map((info, idx) => (
                <a 
                  key={idx} 
                  href={info.href} 
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <span className="text-secondary">{info.icon}</span>
                  <span>{info.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CV Body */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm">
            {/* Left Column - Profile & Skills */}
            <div className="md:col-span-1 space-y-6 md:border-r md:border-white/5 md:pr-6">
              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Professional Profile
                </h4>
                <p className="text-xs text-muted-light leading-relaxed">
                  Recent BCA graduate with production-ready project experience specializing in Python, Django REST, LangChain agent flows, ChromaDB vector searches, and Google Gemini API integration. Passions lie in architecting efficient APIs, secure authentications, and containerized deployments.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b border-white/5 pb-2">
                  Technical Expertise
                </h4>
                <div className="space-y-3">
                  {skillsGroup.map((group) => (
                    <div key={group.title} className="space-y-1">
                      <span className="text-xs font-bold text-foreground font-display">{group.title}</span>
                      <p className="text-[11px] text-muted-light leading-relaxed font-mono">{group.techs}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience & Education */}
            <div className="md:col-span-2 space-y-6">
              {/* Experience */}
              <div className="space-y-4">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <Briefcase className="w-4 h-4 text-primary" />
                  Engineering Accomplishments
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-start text-xs font-mono mb-1">
                      <span className="font-bold text-foreground">Software Developer (Personal Projects)</span>
                      <span className="text-muted">2025 - Present</span>
                    </div>
                    <ul className="text-xs text-muted-light space-y-1.5 list-disc list-inside leading-relaxed font-sans">
                      <li>Authored modular Python APIs using Django REST Framework for secure backend logic.</li>
                      <li>Designed Retrieval-Augmented Generation (RAG) vector database lookup algorithms via ChromaDB.</li>
                      <li>Orchestrated state-based AI agent chains with LangChain and Google Gemini APIs.</li>
                      <li>Designed secure, structured backend communications using session JWTs and data validation blocks.</li>
                      <li>Configured automated deployment models onto Render and AWS.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-4">
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5 border-b border-white/5 pb-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Education
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-start text-xs font-mono">
                    <span className="font-bold text-foreground">Bachelor of Computer Applications (BCA)</span>
                    <span className="text-muted">Graduate</span>
                  </div>
                  <p className="text-xs text-muted-light">
                    Specialized in software development, relational database schemas, object-oriented concepts, and systems architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
