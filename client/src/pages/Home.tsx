import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Award, Users, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const communities = [
    { name: "RAMO COMMUNITY", members: "4K+", role: "Discord Admin", date: "FEB 2026 - PRESENT", link: "https://discord.gg/sgFhvNEXpt" },
    { name: "HXSAIN COMMUNITY", members: "30K+", role: "Discord Community Mod", date: "MAR 2026 - PRESENT", link: "https://discord.gg/hxsain" },
    { name: "SHANE COMMUNITY", members: "20K+", role: "Discord Mod", date: "MAR 2026 - PRESENT", link: "https://discord.gg/shane" },
  ];

  const skills = [
    {
      category: "Administrative Responsibilities",
      items: ["Server Architecture", "Permissions Management", "Channel Management", "Automation"],
    },
    {
      category: "Event Planning & Member Retention",
      items: ["Event Planning", "Member Retention", "Community Culture", "Engagement"],
    },
    {
      category: "Moderation & Community Safety",
      items: ["Moderation", "Conflict Resolution", "Safety Policy", "Member Assistance"],
    },
    {
      category: "Onboarding & Member Growth",
      items: ["Onboarding Design", "Growth Plan", "Retention Systems", "Member Progression"],
    },
  ];

  const caseStudies = [
    {
      title: "Server Administration Evidence (Ramo)",
      description: "The image below shows me in my role in server administration for the Ramo Akh official discord server",
      image: "/manus-storage/server-adminstration-proof-ramo_5d288716.png",
      label: "Server Administration Experience",
    },
    {
      title: "Moderation Statistics (Hxsain)",
      description: "The following images shows 20 cases I had throughout my time at hxsains discord server, these are just a few cases of many.",
      image: "/manus-storage/mod-statisctics-hxsain_f36e12fb.png",
      label: "Moderation Statistics",
    },
    {
      title: "Great Ticket Handling Evidence",
      description: "The following image is going to show a person giving a ticket rating for how I handled his ticket and if I supported him properly",
      image: "/manus-storage/great-ticket-handling-proof_df3f33c1.png",
      label: "Evidence Of Member Satisfaction",
    },
    {
      title: "All-Time Cases (Ramo)",
      description: "In the image here you can see the exact amount of moderation cases done in Ramos server which is 112",
      image: "/manus-storage/all-time-cases-ramo(112)_3f725da2.png",
      label: "Evidence of High Volume of Cases",
    },
  ];

  const evidenceGallery = [
    { title: "Shane Fan Statistics", image: "/manus-storage/Moderation-statistics-shanefanxserver_9a59616c.png", label: "MOD WEEKLY/MOD MONTHLY CASES" },
    { title: "Hxsain Mod Role", image: "/manus-storage/mod-role-proof-hxsain_e7984291.png", label: "VERIFIED MOD STATUS IN HXSAIN SERVER" },
    { title: "Shane Fan Mod Role", image: "/manus-storage/proof-of-mod-role-in-shane-fanx_ecbbb0a1.png", label: "VERIFIED MOD STATUS IN SHANE FAN" },
    { title: "Ticket Support Evidence", image: "/manus-storage/satisfied-user-and-fast-ticket-support_73811350.png", label: "TICKET RESPONSE RATING" },
  ];

  const testimonials = [
    {
      name: "Ramo",
      role: "Community Owner",
      message: "Phantom has been a mod in my discord community for a while. He's friendly and responsive and gets any requests I need done very quickly. He's also always giving suggestions on how to make the server better.",
      image: "/assets/ramo-testimonial.png",
      timestamp: "Yesterday at 22:52",
      isMessage: true,
    },
    {
      name: "Issa",
      role: "Staff of the Week - Shane Fan Official",
      image: "/manus-storage/shane-staff-of-the-week_d0ebded2.png",
      label: "Click to view full screenshot",
      isMessage: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.98_0.002_80)] via-[oklch(0.97_0.003_75)] to-[oklch(0.96_0.004_70)]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/50 border-b border-white/30"
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/brand-logo-i7GbP4fAHKY5ANzU5PAxqu.webp"
              alt="Ali Abdul Logo"
              className="w-10 h-10"
            />
            <span className="font-playfair text-xl font-bold text-foreground">Ali Abdul</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm text-foreground/70 hover:text-accent transition">Experience</a>
            <a href="#case-studies" className="text-sm text-foreground/70 hover:text-accent transition">Case Studies</a>
            <a href="#evidence" className="text-sm text-foreground/70 hover:text-accent transition">Evidence</a>
            <a href="#testimonials" className="text-sm text-foreground/70 hover:text-accent transition">Testimonials</a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-accent transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/ali-managing/" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-lg transition">
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a href="https://github.com/bbbhr823-sys" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/50 rounded-lg transition">
              <Github className="w-5 h-5 text-accent" />
            </a>
            <a href="mailto:bbbhr823@gmail.com" className="p-2 hover:bg-white/50 rounded-lg transition">
              <Mail className="w-5 h-5 text-accent" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/hero-background-ZJ7b65Jgn7JQEtkTJCtPsT.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
              Elite Discord Moderator
            </span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-6">
            Ali Abdul
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-foreground/70 mb-8">
            Experienced in building and managing active Discord communities with proven expertise in moderation, server administration, and member engagement.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 btn-smooth"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-accent/30 hover:bg-accent/10 btn-smooth"
              onClick={() => window.open("https://discord.gg/sgFhvNEXpt")}
            >
              Join Community
            </Button>
          </motion.div>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {communities.map((community, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 text-center"
            >
              <div className="text-3xl font-playfair font-bold text-accent mb-2">{community.members}</div>
              <div className="text-sm text-foreground/60 font-medium">{community.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-foreground mb-12"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {communities.map((community, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-foreground">{community.role}</h3>
                    <p className="text-accent font-medium">{community.name}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{community.members}</div>
                    <p className="text-sm text-foreground/60">{community.date}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-foreground/70 mb-6">
                  {idx === 0 && (
                    <>
                      <li>▸ Created the overall server setup, structure, and permission scaling process</li>
                      <li>▸ Mapped out the automation workflows necessary to create a vibrant community culture and filter</li>
                      <li>▸ Worked as the key connector between the core admin team and the community mod team</li>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <li>▸ Kept an eye on the active communication channels and enforced stringent retention policies in the server</li>
                      <li>▸ Handled the conflict resolution process to keep the community free from toxicity</li>
                      <li>▸ Carried out engagement tactics to foster healthy community culture and member happiness</li>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <li>▸ Mapped out the onboarding process to speed up active member retention</li>
                      <li>▸ Handled member requests directly and provided tech support for community members</li>
                      <li>▸ Developed member engagement strategies and community culture policies</li>
                    </>
                  )}
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/30 hover:bg-accent/10 rounded-full"
                  onClick={() => window.open(community.link)}
                >
                  Join Community <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-foreground mb-12"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-8">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-foreground mb-12"
          >
            Featured Case Studies
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card overflow-hidden">
                <div className="h-64 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-3">
                    {study.label}
                  </span>
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">{study.title}</h3>
                  <p className="text-foreground/70 mb-6">{study.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-accent/30 hover:bg-accent/10 rounded-full"
                    onClick={() => window.open(study.image)}
                  >
                    View Full Evidence <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Evidence Gallery */}
      <section id="evidence" className="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-foreground mb-12"
          >
            Moderation Evidence
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {evidenceGallery.map((evidence, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
                onClick={() => window.open(evidence.image)}
              >
                <div className="h-80 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                  <img src={evidence.image} alt={evidence.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair font-bold text-foreground mb-1">{evidence.title}</h4>
                  <p className="text-sm text-foreground/60">{evidence.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-playfair font-bold text-foreground mb-12"
          >
            Endorsed by Community Leaders
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card overflow-hidden"
              >
                {testimonial.isMessage ? (
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-playfair font-bold text-foreground">{testimonial.name}</h4>
                          <span className="text-xs text-foreground/50">{testimonial.timestamp}</span>
                        </div>
                        <p className="text-accent text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed mb-6">{testimonial.message}</p>
                    <button
                      onClick={() => window.open(testimonial.image)}
                      className="text-accent text-sm font-medium hover:underline"
                    >
                      View original message →
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="h-96 overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 cursor-pointer"
                      onClick={() => window.open(testimonial.image)}
                    >
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 text-center">
                      <h4 className="font-playfair font-bold text-foreground text-lg mb-1">{testimonial.name}</h4>
                      <p className="text-accent text-sm font-medium mb-4">{testimonial.role}</p>
                      <p className="text-foreground/60 text-sm">{testimonial.label}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container max-w-2xl mx-auto text-center"
        >
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
            Ready to Build Your Community?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let us talk about creating a great community that is passionate and committed. Be it an established community or a newly formed one, the correct approach can change everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 btn-smooth"
              onClick={() => window.location.href = "mailto:bbbhr823@gmail.com"}
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 border-accent/30 hover:bg-accent/10 btn-smooth"
              onClick={() => window.open("https://discord.gg/sgFhvNEXpt")}
            >
              Join Community
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-white/50 backdrop-blur-md border-t border-white/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/brand-logo-i7GbP4fAHKY5ANzU5PAxqu.webp"
                alt="Ali Abdul Logo"
                className="w-8 h-8"
              />
              <span className="font-playfair font-bold text-foreground">Ali Abdul</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ali-managing/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition">
                LinkedIn
              </a>
              <a href="https://github.com/bbbhr823-sys" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition">
                GitHub
              </a>
              <a href="mailto:bbbhr823@gmail.com" className="text-foreground/60 hover:text-accent transition">
                Email
              </a>
              <a href="https://discord.gg/sgFhvNEXpt" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition">
                Discord
              </a>
            </div>
            <p className="text-sm text-foreground/60">© 2026 Ali Abdul. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
