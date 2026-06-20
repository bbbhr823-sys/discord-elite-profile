import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ExternalLink, Award, Users, Shield, Zap, Copy, Check, MessageSquare, BarChart3, Settings, Eye } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const copyDiscordID = () => {
    navigator.clipboard.writeText("phantom_kiddo");
    setCopied(true);
    toast.success("Discord ID copied!");
    setTimeout(() => setCopied(false), 2000);
  };

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

  const communities = [
    { name: "RAMO COMMUNITY", members: "4K+", role: "Admin", link: "https://discord.gg/sgFhvNEXpt" },
    { name: "HXSAIN COMMUNITY", members: "30K+", role: "Mod", link: "https://discord.gg/hxsain" },
    { name: "SHANE COMMUNITY", members: "20K+", role: "Mod", link: "https://discord.gg/shane" },
  ];

  const evidence = {
    admin: [
      { title: "Server Structure (Ramo)", desc: "Overall server setup & permission scaling", image: "/assets/server-adminstration-proof-ramo.png" },
      { title: "All-Time Cases (Ramo)", desc: "112 total moderation cases verified", image: "/assets/all-time-cases-ramo(112).png" },
    ],
    moderation: [
      { title: "Mod Stats (Hxsain)", desc: "High-volume case management proof", image: "/assets/mod-statisctics-hxsain.png" },
      { title: "Weekly Stats (Shane)", desc: "Consistent moderation activity", image: "/assets/Moderation-statistics-shanefanxserver.png" },
      { title: "Verified Mod Role", desc: "Official Hxsain Staff Status", image: "/assets/mod-role-proof-hxsain.png" },
      { title: "Verified Mod Role", desc: "Official Shane Fan Status", image: "/assets/proof-of-mod-role-in-shane-fanx.png" },
    ],
    support: [
      { title: "Ticket Rating", desc: "Evidence of high member satisfaction", image: "/assets/great-ticket-handling-proof.png" },
      { title: "Response Speed", desc: "Fast & effective ticket support", image: "/assets/satisfied-user-and-fast-ticket-support.png" },
    ]
  };

  const testimonials = [
    {
      name: "Ramo",
      role: "Owner @ Ramo Community",
      pfp: "/assets/ramo-pfp.png",
      image: "/assets/ramo-testimonial.png",
    },
    {
      name: "Issa",
      role: "Staff @ Shane Fan",
      pfp: "/assets/issa-pfp.png",
      image: "/assets/shane-staff-of-the-week.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-foreground selection:bg-accent selection:text-black">
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Simplified Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-black font-black text-sm">A</div>
            <span className="font-playfair font-bold text-accent hidden sm:block">Ali Abdul</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={copyDiscordID} className="text-xs font-bold uppercase tracking-tighter text-foreground/50 hover:text-accent transition flex items-center gap-2">
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              Discord
            </button>
            <div className="h-4 w-px bg-white/10" />
            <a href="mailto:bbbhr823@gmail.com" className="text-xs font-bold uppercase tracking-tighter text-foreground/50 hover:text-accent transition">Email</a>
          </div>
        </div>
      </nav>

      {/* Hero: Ultra-Scannable */}
      <section className="pt-32 pb-16 px-4">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="text-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Elite Discord Operations</span>
                <h1 className="text-5xl md:text-7xl font-playfair font-black mb-6 leading-tight">Ali Abdul</h1>
                <p className="text-lg text-foreground/50 mb-8 max-w-xl">
                  Specializing in server architecture, automation, and high-scale moderation for Discord's largest communities.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })} className="bg-accent hover:bg-accent/90 text-black font-black rounded-lg px-8 py-6 btn-smooth">
                    VIEW EVIDENCE
                  </Button>
                  <Button variant="outline" onClick={copyDiscordID} className="border-white/10 hover:bg-white/5 text-white font-bold rounded-lg px-8 py-6">
                    GET DISCORD ID
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Quick Stats Bar */}
            <div className="w-full md:w-auto grid grid-cols-1 gap-4">
              {communities.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="glass-card p-6 flex items-center gap-6 border-l-4 border-l-accent">
                  <div className="text-2xl font-black text-white">{c.members}</div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-accent">{c.role}</div>
                    <div className="text-xs font-bold text-foreground/40">{c.name}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard: Scannable Evidence */}
      <section id="dashboard" className="py-20 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="container max-w-5xl">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-playfair font-black">Evidence Dashboard</h2>
            <div className="text-[10px] font-black uppercase tracking-widest text-foreground/30">Click images to expand</div>
          </div>

          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="bg-white/5 border border-white/10 p-1 mb-8 w-full justify-start overflow-x-auto">
              <TabsTrigger value="admin" className="data-[state=active]:bg-accent data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest px-6 py-3">
                <Settings className="w-3 h-3 mr-2" /> Admin
              </TabsTrigger>
              <TabsTrigger value="moderation" className="data-[state=active]:bg-accent data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest px-6 py-3">
                <Shield className="w-3 h-3 mr-2" /> Moderation
              </TabsTrigger>
              <TabsTrigger value="support" className="data-[state=active]:bg-accent data-[state=active]:text-black font-bold uppercase text-[10px] tracking-widest px-6 py-3">
                <MessageSquare className="w-3 h-3 mr-2" /> Support
              </TabsTrigger>
            </TabsList>

            {Object.entries(evidence).map(([key, items]) => (
              <TabsContent key={key} value={key} className="mt-0 outline-none">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.95 }} 
                      animate={{ opacity: 1, scale: 1 }} 
                      transition={{ duration: 0.3 }}
                      className="glass-card group cursor-pointer"
                      onClick={() => setSelectedImage(item.image)}
                    >
                      <div className="aspect-video relative overflow-hidden rounded-t-xl">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black">
                            <Eye className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-sm mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                        <p className="text-xs text-foreground/40">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Testimonials: Visual & Direct */}
      <section className="py-24 px-4">
        <div className="container max-w-5xl">
          <div className="mb-12">
            <h2 className="text-3xl font-playfair font-black mb-2">Community Endorsements</h2>
            <p className="text-sm text-foreground/40">Verified feedback from server owners and staff.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="glass-card p-8 group hover:border-accent/40 transition-all">
                <div className="flex items-center gap-4 mb-8">
                  <img src={t.pfp} alt={t.name} className="w-12 h-12 rounded-lg border border-white/10" />
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-accent">{t.role}</div>
                  </div>
                </div>
                <div 
                  className="aspect-[16/6] relative rounded-xl overflow-hidden border border-white/5 cursor-pointer"
                  onClick={() => setSelectedImage(t.image)}
                >
                  <img src={t.image} alt="Proof" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer: Final Action */}
      <footer className="py-20 px-4 border-t border-white/5 text-center">
        <div className="container max-w-xl">
          <h2 className="text-4xl font-playfair font-black mb-8">Ready to grow?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:bbbhr823@gmail.com" className="bg-accent text-black font-black px-10 py-4 rounded-lg hover:scale-105 transition btn-smooth">
              EMAIL ME
            </a>
            <button onClick={copyDiscordID} className="bg-white/5 border border-white/10 text-white font-black px-10 py-4 rounded-lg hover:bg-white/10 transition">
              DISCORD
            </button>
          </div>
          <div className="mt-16 text-[10px] font-black uppercase tracking-[0.4em] text-foreground/20">
            Ali Abdul • © 2026
          </div>
        </div>
      </footer>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition">
              <Check className="w-8 h-8 rotate-45" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
