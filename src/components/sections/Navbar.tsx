import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Code2 } from "lucide-react"
import { cn } from "../../utils/cn"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "GitHub", href: "#github" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // Simple active section scroll spy
      const sections = ["hero", "about", "skills", "experience", "projects", "github", "achievements", "contact"]
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      setIsMobileMenuOpen(false)
      const offsetTop = targetElement.offsetTop - 80 // Navbar offset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <nav 
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-40 rounded-2xl border transition-all duration-500",
          isScrolled 
            ? "bg-background/60 border-white/10 backdrop-blur-md shadow-2xl py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleLinkClick(e, "#hero")}
            className="flex items-center gap-2 group font-display font-bold text-lg select-none"
          >
            <Code2 className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-glow">
              <span className="text-primary">&lt;</span>
              <span className="text-foreground">DeepasreeS</span>
              <span className="text-secondary"> /&gt;</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 font-display",
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-light hover:text-foreground"
                  )}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-white/5 border border-white/5 rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-white/10 bg-white/5 text-foreground hover:bg-white/10 transition-colors"
            aria-label="Toggle mobile navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-30 p-6 rounded-2xl glass-card md:hidden flex flex-col gap-4 shadow-2xl border border-white/10"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={cn(
                      "block w-full px-4 py-3 text-base font-semibold font-display rounded-xl transition-all duration-300",
                      activeSection === link.href.replace("#", "")
                        ? "bg-gradient-to-r from-primary/20 to-secondary/20 border-l-2 border-primary text-foreground"
                        : "text-muted-light hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
