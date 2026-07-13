import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Loader } from "./components/Loader"
import { Aurora } from "./components/Aurora"
import { Spotlight } from "./components/Spotlight"
import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { About } from "./components/sections/About"
import { Skills } from "./components/sections/Skills"
import { Experience } from "./components/sections/Experience"
import { Projects } from "./components/sections/Projects"
import { GitHub } from "./components/sections/GitHub"
import { Achievements } from "./components/sections/Achievements"
import { Resume } from "./components/sections/Resume"
import { Contact } from "./components/sections/Contact"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <div key="main-content" className="relative min-h-screen text-foreground font-sans">
            {/* Visual Foundations */}
            <Aurora />
            <Spotlight />
            <Navbar />

            {/* Main Sections */}
            <main className="relative z-10 w-full overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <GitHub />
              <Achievements />
              <Resume />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/5 bg-background/30 backdrop-blur-md py-12 px-4 md:px-8 mt-12 select-none">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-1.5">
                  <p className="text-sm font-semibold font-display">
                    Designed & Built by <span className="text-primary-light font-bold">Deepasree Somasundharam</span>
                  </p>
                  <p className="text-xs text-muted-light">
                    © {new Date().getFullYear()} All rights reserved. Optimized for recruiter impressions.
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-mono text-muted-light bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <span>React 19</span>
                  <span>•</span>
                  <span>Vite 8</span>
                  <span>•</span>
                  <span>TS</span>
                  <span>•</span>
                  <span>Tailwind v4</span>
                  <span>•</span>
                  <span>Framer Motion</span>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
