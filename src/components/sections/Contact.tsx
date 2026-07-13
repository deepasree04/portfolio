import { Card } from "../ui/card"
import { Mail } from "lucide-react"
import { Github, Linkedin } from "../ui/Icons"

export const Contact = () => {
  const contacts = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "deepasree1504@gmail.com",
      href: "mailto:deepasree1504@gmail.com",
      color: "hover:border-red-500/20",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "deepasree-somasundharam",
      href: "https://www.linkedin.com/in/deepasree-somasundharam/",
      color: "hover:border-blue-500/20",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/deepasree04",
      href: "https://github.com/deepasree04",
      color: "hover:border-primary/20",
    },
  ]

  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 max-w-4xl mx-auto select-none"
    >
      <div className="flex flex-col items-center gap-12">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-primary-light">
            &lt;connect&gt;
          </span>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get In Touch
          </h2>

          <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-2" />
        </div>

        {/* Intro */}
        <div className="text-center max-w-2xl">
          <p className="text-sm md:text-base text-muted-light leading-relaxed">
            I'm always open to discussing Software Engineering, AI Developer,
            Backend Development, internships, full-time opportunities, or
            interesting projects. Feel free to reach out through any of the
            platforms below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 gap-5 w-full">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label !== "Email" ? "_blank" : undefined}
              rel={contact.label !== "Email" ? "noopener noreferrer" : undefined}
              className="block group"
            >
              <Card
                className={`p-5 flex items-center gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${contact.color}`}
              >
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>

                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-light block">
                    {contact.label}
                  </span>

                  <span className="text-base font-semibold text-foreground group-hover:text-primary-light transition-colors break-all">
                    {contact.value}
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}