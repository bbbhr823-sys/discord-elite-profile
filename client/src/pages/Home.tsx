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
      image: "/assets/server-adminstration-proof-ramo.png",
      label: "Server Administration Experience",
    },
    {
      title: "Moderation Statistics (Hxsain)",
      description: "The following images shows 20 cases I had throughout my time at hxsains discord server, these are just a few cases of many.",
      image: "/assets/mod-statisctics-hxsain.png",
      label: "Moderation Statistics",
    },
    {
      title: "Great Ticket Handling Evidence",
      description: "The following image is going to show a person giving a ticket rating for how I handled his ticket and if I supported him properly",
      image: "/assets/great-ticket-handling-proof.png",
      label: "Evidence Of Member Satisfaction",
    },
    {
      title: "All-Time Cases (Ramo)",
      description: "In the image here you can see the exact amount of moderation cases done in Ramos server which is 112",
      image: "/assets/all-time-cases-ramo(112).png",
      label: "Evidence of High Volume of Cases",
    },
  ];

  const evidenceGallery = [
    { title: "Shane Fan Statistics", image: "/assets/Moderation-statistics-shanefanxserver.png", label: "MOD WEEKLY/MOD MONTHLY CASES" },
    { title: "Hxsain Mod Role", image: "/assets/mod-role-proof-hxsain.png", label: "VERIFIED MOD STATUS IN HXSAIN SERVER" },
    { title: "Shane Fan Mod Role", image: "/assets/proof-of-mod-role-in-shane-fanx.png", label: "VERIFIED MOD STATUS IN SHANE FAN" },
    { title: "Ticket Support Evidence", image: "/assets/satisfied-user-and-fast-ticket-support.png", label: "TICKET RESPONSE RATING" },
  ];

  const testimonials = [
    {
      name: "Ramo",
      role: "Community Owner",
      message: "Phantom has been a mod in my discord community for a while. He's friendly and responsive and gets any requests I need done very quickly. He's also always giving suggestions on how to make the server better.",
      image: "/assets/ramo-server-owner-recomending-me-apprecatiing me .png",
      timestamp: "Yesterday at 22:52",
      isMessage: true,
    },
    {
      name: "Issa",
      role: "Staff of the Week - Shane Fan Official",
      image: "/assets/shane-staff-of-the-week.png",
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
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-accent tracking-widest uppercase mb-3 block">
                    {study.label}
                  </span>
                  <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">{study.title}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {study.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-accent font-bold hover:text-accent/80 transition-colors group"
                    onClick={() => window.open(study.image)}
                  >
                    VIEW FULL EVIDENCE
                    <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {evidenceGallery.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative glass-card overflow-hidden aspect-square cursor-pointer"
                onClick={() => window.open(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-white/80 text-xs uppercase tracking-widest">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
            className="text-4xl font-playfair font-bold text-foreground mb-12 text-center"
          >
            Endorsed by Community Leaders
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-accent/10 border-2 border-accent/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-playfair font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-accent text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.isMessage ? (
                  <div className="flex-1 bg-white/40 rounded-2xl p-6 border border-white/50 shadow-inner">
                    <div className="flex items-center gap-2 mb-3 text-xs text-foreground/40 font-medium">
                      <span className="text-foreground/80 font-bold">{testimonial.name}</span>
                      <span>{testimonial.timestamp}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed italic">
                      "{testimonial.message}"
                    </p>
                    <div className="mt-6 flex justify-end">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-accent text-xs font-bold uppercase tracking-widest group"
                        onClick={() => window.open(testimonial.image)}
                      >
                        View original message
                        <ExternalLink className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group cursor-pointer" onClick={() => window.open(testimonial.image)}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <p className="text-sm text-foreground/60 text-center font-medium">
                      {testimonial.label}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-4xl">
          <div className="glass-card p-12 text-center bg-accent text-white border-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready to Build Your Community?</h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Let's talk about creating a great community that is passionate and committed. Be it an established community or a newly formed one, the correct approach can change everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:bbbhr823@gmail.com"
                  className="flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition shadow-lg"
                >
                  <Mail className="w-6 h-6" />
                  bbbhr823@gmail.com
                </a>
                <div className="flex items-center gap-4">
                  <a href="https://www.linkedin.com/in/ali-managing/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/30 rounded-full transition">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/bbbhr823-sys" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/20 hover:bg-white/30 rounded-full transition">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/brand-logo-i7GbP4fAHKY5ANzU5PAxqu.webp"
              alt="Ali Abdul Logo"
              className="w-8 h-8 opacity-50"
            />
            <span className="font-playfair font-bold text-foreground/50">Ali Abdul</span>
          </div>
          <p className="text-sm text-foreground/40">
            © 2026 Ali Abdul. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#experience" className="text-xs text-foreground/40 hover:text-accent transition uppercase tracking-widest font-bold">Experience</a>
            <a href="#case-studies" className="text-xs text-foreground/40 hover:text-accent transition uppercase tracking-widest font-bold">Case Studies</a>
            <a href="#contact" className="text-xs text-foreground/40 hover:text-accent transition uppercase tracking-widest font-bold">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
