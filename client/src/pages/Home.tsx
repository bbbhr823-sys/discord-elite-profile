import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Award, Users, Shield, Zap, Copy, Check } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const copyDiscordID = () => {
    navigator.clipboard.writeText("phantom_kiddo");
    setCopied(true);
    toast.success("Discord ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Mouse follow effect for cards
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}%`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      pfp: "/assets/ramo-pfp.png",
      image: "/assets/ramo-testimonial.png",
      timestamp: "Yesterday at 22:52",
      isMessage: true,
    },
    {
      name: "Issa",
      role: "Staff of the Week - Shane Fan Official",
      pfp: "/assets/issa-pfp.png",
      image: "/assets/shane-staff-of-the-week.png",
      label: "Click to view full screenshot",
      isMessage: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-foreground">
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10"
      >
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/brand-logo-i7GbP4fAHKY5ANzU5PAxqu.webp"
              alt="Ali Abdul Logo"
              className="w-10 h-10 brightness-110"
            />
            <span className="font-playfair text-xl font-bold text-accent">Ali Abdul</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#experience" className="text-sm font-medium text-foreground/70 hover:text-accent transition">Experience</a>
            <a href="#case-studies" className="text-sm font-medium text-foreground/70 hover:text-accent transition">Case Studies</a>
            <a href="#evidence" className="text-sm font-medium text-foreground/70 hover:text-accent transition">Evidence</a>
            <a href="#testimonials" className="text-sm font-medium text-foreground/70 hover:text-accent transition">Testimonials</a>
            <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-accent transition">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={copyDiscordID}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent hover:bg-accent/20 transition group"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4 group-hover:scale-110 transition" />}
              <span className="text-xs font-bold uppercase tracking-wider">Discord</span>
            </button>
            <a href="https://github.com/bbbhr823-sys" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-lg transition text-accent">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:bbbhr823@gmail.com" className="p-2 hover:bg-white/10 rounded-lg transition text-accent">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/hero-background-ZJ7b65Jgn7JQEtkTJCtPsT.webp"
            alt="Background"
            className="w-full h-full object-cover opacity-20 grayscale"
          />
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-8">
              Elite Discord Moderator & Administrator
            </span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-playfair font-bold mb-8 bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent">
            Ali Abdul
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building high-engagement communities and managing complex server architectures for some of Discord's most active creators.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-bold rounded-full px-10 h-14 text-lg shadow-[0_0_20px_rgba(255,215,0,0.3)] btn-smooth"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Collaborate
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-10 h-14 text-lg border-white/20 hover:bg-white/10 text-white btn-smooth"
              onClick={() => window.open("https://discord.gg/sgFhvNEXpt")}
            >
              View My Work
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700" />
      </section>

      {/* Performance Metrics */}
      <section className="py-20 relative z-10">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {communities.map((community, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="glass-card p-10 text-center group"
              >
                <div className="text-5xl font-playfair font-bold text-accent mb-4 group-hover:scale-110 transition-transform duration-500">{community.members}</div>
                <div className="text-sm text-foreground/40 font-bold uppercase tracking-widest">{community.name}</div>
                <div className="mt-4 h-1 w-12 bg-accent/30 mx-auto rounded-full group-hover:w-20 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Proven Track Record</span>
              <h2 className="text-5xl md:text-6xl font-playfair font-bold">Professional Experience</h2>
            </div>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {communities.map((community, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-10 group">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
                  <div>
                    <h3 className="text-3xl font-playfair font-bold mb-2 group-hover:text-accent transition-colors">{community.role}</h3>
                    <p className="text-accent/80 font-bold text-lg">{community.name}</p>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-3xl font-bold text-white mb-1">{community.members} Members</div>
                    <p className="text-sm text-foreground/40 font-medium uppercase tracking-widest">{community.date}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-10 mb-10">
                  <ul className="space-y-4 text-foreground/60 text-lg">
                    {idx === 0 && (
                      <>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Created the overall server setup, structure, and permission scaling process</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Mapped out the automation workflows necessary to create a vibrant community culture</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Worked as the key connector between core admin and mod teams</li>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Enforced stringent retention policies in the server</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Handled the conflict resolution process to keep the community toxic-free</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Carried out engagement tactics to foster healthy community culture</li>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Mapped out the onboarding process to speed up active member retention</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Handled member requests directly and provided tech support</li>
                        <li className="flex gap-3"><span className="text-accent">▸</span> Developed member engagement strategies and culture policies</li>
                      </>
                    )}
                  </ul>
                  <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex items-center justify-center italic text-foreground/40 text-center">
                    "Driving growth and stability through expert administration and community-first policies."
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent/30 hover:bg-accent/10 text-accent rounded-full font-bold px-8"
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
      <section className="py-32 px-4 bg-white/5 relative">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Core Competencies</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">Skills & Expertise</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card p-10 group hover:border-accent/50 transition-all">
                <h3 className="text-2xl font-playfair font-bold mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    {idx === 0 && <Shield className="w-6 h-6" />}
                    {idx === 1 && <Zap className="w-6 h-6" />}
                    {idx === 2 && <Users className="w-6 h-6" />}
                    {idx === 3 && <Award className="w-6 h-6" />}
                  </div>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sidx) => (
                    <span key={sidx} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-foreground/70 text-sm font-bold hover:bg-accent/20 hover:text-accent hover:border-accent/30 transition-all cursor-default">
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
      <section id="case-studies" className="py-32 px-4">
        <div className="container">
          <div className="mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">In-Depth Analysis</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">Featured Case Studies</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {caseStudies.map((study, idx) => (
              <motion.div key={idx} variants={itemVariants} className="glass-card group overflow-hidden flex flex-col">
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-full bg-accent text-black text-[10px] font-black uppercase tracking-[0.2em]">
                      {study.label}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-playfair font-bold mb-6 group-hover:text-accent transition-colors">{study.title}</h3>
                  <p className="text-foreground/50 mb-10 leading-relaxed text-lg flex-1">
                    {study.description}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-accent font-black text-sm uppercase tracking-widest hover:text-white transition-colors group/btn w-fit"
                    onClick={() => window.open(study.image)}
                  >
                    EXPLORE FULL EVIDENCE
                    <ExternalLink className="w-4 h-4 ml-3 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Evidence Gallery */}
      <section id="evidence" className="py-32 px-4 bg-white/5">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Visual Proof</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">Moderation Evidence</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                  <h4 className="text-black font-black text-xl mb-3">{item.title}</h4>
                  <div className="w-10 h-1 bg-black/30 mb-4 rounded-full" />
                  <p className="text-black/70 text-[10px] font-black uppercase tracking-[0.2em]">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-4">
        <div className="container">
          <div className="text-center mb-20">
            <span className="text-accent font-bold uppercase tracking-widest text-sm mb-4 block">Social Proof</span>
            <h2 className="text-5xl md:text-6xl font-playfair font-bold">Endorsed by Leaders</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-10 flex flex-col group hover:border-accent/40"
              >
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-accent/10 border-2 border-accent/20 group-hover:border-accent transition-all duration-500">
                    <img
                      src={testimonial.pfp}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-accent text-sm font-bold uppercase tracking-wider">{testimonial.role}</p>
                  </div>
                </div>
                {testimonial.isMessage ? (
                  <div className="flex-1 bg-white/5 rounded-3xl p-8 border border-white/10 shadow-inner group-hover:bg-white/[0.08] transition-all">
                    <div className="flex items-center gap-3 mb-6 text-xs font-bold uppercase tracking-widest">
                      <span className="text-accent">{testimonial.name}</span>
                      <span className="text-foreground/30">{testimonial.timestamp}</span>
                    </div>
                    <div className="relative aspect-[1068/258] rounded-2xl overflow-hidden mb-8 shadow-2xl group/img cursor-pointer" onClick={() => window.open(testimonial.image)}>
                      <img
                        src={testimonial.image}
                        alt="Testimonial Proof"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/0 transition-all" />
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-accent text-xs font-black uppercase tracking-widest group/btn"
                        onClick={() => window.open(testimonial.image)}
                      >
                        VIEW ORIGINAL VERIFICATION
                        <ExternalLink className="w-3 h-3 ml-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col">
                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 group/img cursor-pointer shadow-2xl" onClick={() => window.open(testimonial.image)}>
                      <img
                        src={testimonial.image}
                        alt={testimonial.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/10 transition-all" />
                    </div>
                    <p className="text-sm text-foreground/40 text-center font-bold uppercase tracking-widest">
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
      <section id="contact" className="py-32 px-4 relative">
        <div className="container max-w-5xl">
          <div className="glass-card p-16 md:p-24 text-center bg-gradient-to-br from-accent to-orange-600 text-black border-none relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-5xl md:text-7xl font-playfair font-black mb-8">Ready to Level Up?</h2>
              <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-80">
                Let's build a community that doesn't just grow, but thrives. I'm currently accepting new projects and long-term roles.
              </p>
              <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <a
                  href="mailto:bbbhr823@gmail.com"
                  className="flex items-center gap-4 bg-black text-accent px-10 py-5 rounded-full font-black text-xl hover:scale-105 transition shadow-2xl btn-smooth"
                >
                  <Mail className="w-7 h-7" />
                  bbbhr823@gmail.com
                </a>
                <div className="flex items-center gap-6">
                  <a href="https://www.linkedin.com/in/ali-managing/" target="_blank" rel="noopener noreferrer" className="p-5 bg-black/10 hover:bg-black/20 rounded-full transition-all hover:scale-110">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="https://github.com/bbbhr823-sys" target="_blank" rel="noopener noreferrer" className="p-5 bg-black/10 hover:bg-black/20 rounded-full transition-all hover:scale-110">
                    <Github className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/50">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-4">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663425963915/HfUkXuMrcGW2RPLDqpi2zf/brand-logo-i7GbP4fAHKY5ANzU5PAxqu.webp"
              alt="Ali Abdul Logo"
              className="w-10 h-10 grayscale opacity-50"
            />
            <span className="font-playfair font-black text-2xl text-foreground/20">Ali Abdul</span>
          </div>
          <p className="text-sm font-bold text-foreground/20 uppercase tracking-[0.3em]">
            © 2026 Ali Abdul. Built for Excellence.
          </p>
          <div className="flex items-center gap-10">
            <a href="#experience" className="text-[10px] text-foreground/30 hover:text-accent transition uppercase tracking-[0.2em] font-black">Experience</a>
            <a href="#case-studies" className="text-[10px] text-foreground/30 hover:text-accent transition uppercase tracking-[0.2em] font-black">Case Studies</a>
            <a href="#contact" className="text-[10px] text-foreground/30 hover:text-accent transition uppercase tracking-[0.2em] font-black">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
