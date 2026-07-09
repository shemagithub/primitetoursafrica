import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import aboutImg from "@/assets/rwanda-hills.jpg";
import teamImg from "@/assets/trekkers-forest.jpg";

export default function About() {
  return (
    <PageTransition>
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-32 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.03) 40px, rgba(255,255,255,0.03) 80px)'
        }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-none">Beyond The Safari</h1>
              <p className="text-display text-2xl md:text-3xl text-accent mb-8">Crafting legends in the mist.</p>
              <p className="text-xl text-white/80 font-sans leading-relaxed text-balance max-w-2xl mx-auto">
                Primates Quest Safaris was born from a deep love for Rwanda's wilderness and a commitment to protecting its future. We don't just guide tours; we share our home.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <ScrollReveal direction="right">
              <div className="relative pl-12 md:pl-20">
                {/* Vertical Timeline */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/30">
                  <div className="absolute top-[10%] -left-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                  <div className="absolute top-[40%] -left-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                  <div className="absolute top-[70%] -left-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                  <div className="absolute bottom-[10%] -left-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
                </div>
                
                {/* Decorative Quote */}
                <div className="absolute -top-16 -left-4 text-display text-accent opacity-20 text-[10rem] leading-none select-none">"</div>

                <div className="space-y-8 relative z-10">
                  <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em]">Our Roots</h2>
                  <h3 className="text-5xl md:text-6xl text-display text-primary leading-tight">Born in the land of a thousand hills.</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                    Founded by native Rwandans who grew up in the shadows of the Virunga volcanoes, our company is built on an intimate knowledge of the land. We've spent decades walking these forests, studying animal behavior, and building relationships with local communities.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed font-sans">
                    To us, luxury isn't just about fine lodges—it's about exclusive access, seamless logistics, and the peace of mind that comes from traveling with true local experts.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <div className="relative h-[700px] w-full group">
                <img src={aboutImg} alt="Rwanda Hills" className="w-full h-full object-cover shadow-2xl transition-transform duration-[2s] group-hover:scale-[1.02]" />
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary hidden md:block -z-10"></div>
                <div className="absolute inset-0 outline outline-[1px] outline-accent -outline-offset-12 z-10 pointer-events-none mix-blend-difference" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Conservation */}
      <section className="py-32 bg-[#143a18] text-white relative leaf-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative h-[600px] w-full">
                <img src={teamImg} alt="Trekkers in Forest" className="w-full h-full object-cover opacity-80 saturate-50" />
                <div className="absolute inset-0 border border-accent m-6 pointer-events-none"></div>
                
                {/* Circular Text Badge */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent rounded-full text-primary flex items-center justify-center font-bold text-sm tracking-widest text-center shadow-2xl animate-[spin_10s_linear_infinite]">
                   <span className="absolute transform -rotate-45">LEAVE</span>
                   <span className="absolute">NO</span>
                   <span className="absolute transform rotate-45">TRACE</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <div className="space-y-12">
                <div>
                  <h2 className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4">Conservation First</h2>
                  <h3 className="text-5xl text-display leading-tight">Protecting what we love.</h3>
                  <p className="text-white/80 text-lg leading-relaxed font-sans mt-6">
                    The survival of the mountain gorilla is one of the world's greatest conservation success stories. We are proud partners of the Rwanda Development Board and dedicate a percentage of our profits to grassroots conservation efforts.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="flex gap-6 items-center border-b border-white/10 pb-6">
                    <div className="text-display text-5xl text-accent w-24 shrink-0">$1.5k</div>
                    <p className="text-white/80 font-sans text-sm">Every gorilla permit directly funds park protection and community projects.</p>
                  </div>
                  <div className="flex gap-6 items-center border-b border-white/10 pb-6">
                    <div className="text-display text-5xl text-accent w-24 shrink-0">100%</div>
                    <p className="text-white/80 font-sans text-sm">We employ local guides, porters, and drivers, ensuring tourism benefits our immediate communities.</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <div className="text-display text-5xl text-accent w-24 shrink-0">0</div>
                    <p className="text-white/80 font-sans text-sm">We practice strict 'Leave No Trace' policies on all our expeditions, leaving the forest as we found it.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team / RDB Partner */}
      <section className="py-32 bg-background text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <ScrollReveal>
            {/* SVG Seal */}
            <div className="mx-auto w-40 h-40 mb-10 relative">
              <svg viewBox="0 0 100 100" className="w-full h-full text-primary fill-current">
                <path id="curve" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                <text className="text-[10px] font-bold tracking-widest uppercase">
                  <textPath href="#curve" startOffset="0%">★ OFFICIAL RDB PARTNER ★ PRIMATES QUEST ★</textPath>
                </text>
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="1" />
                <path d="M40,60 L50,35 L60,60 Z" fill="currentColor" />
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-6xl text-display text-primary mb-8">Official RDB Partner</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-sans">
              As a licensed operator with the Rwanda Development Board, we guarantee official permits, certified guides, and compliance with all national park regulations. You are in safe, experienced hands.
            </p>
            <Link href="/contact">
              <div className="inline-block px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-accent hover:text-primary transition-colors cursor-pointer text-sm">
                Contact Our Team
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <WhatsAppCTA />
      <Footer />
    </PageTransition>
  );
}