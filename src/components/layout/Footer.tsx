import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-10" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% 100%, 0 100%)' }}>
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Newsletter Row */}
        <div className="border-b border-primary-foreground/10 pb-16 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-display text-4xl md:text-5xl text-accent mb-2">Join Our Wild Circle</h3>
            <p className="text-primary-foreground/70 font-sans text-sm">Insider stories, conservation updates, and exclusive safari offers.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-primary-foreground/5 border border-primary-foreground/20 px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-accent font-sans w-full md:w-64"
            />
            <button className="bg-accent text-primary px-6 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/">
              <img src={logoUrl} alt="Primates Quest Logo" className="h-16 w-auto cursor-pointer" />
            </Link>
            <p className="text-primary-foreground/80 font-sans leading-relaxed text-sm">
              Premium gorilla and chimpanzee trekking experiences in Rwanda's most spectacular national parks. Where wilderness becomes unforgettable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-125 hover:bg-accent/10 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-125 hover:bg-accent/10 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent hover:scale-125 hover:bg-accent/10 transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl text-display text-accent mb-6">Experiences</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80 font-sans">
              <li><Link href="/tours/gorilla-trekking"><span className="hover:text-accent transition-colors cursor-pointer">Gorilla Trekking</span></Link></li>
              <li><Link href="/tours/chimp-trekking"><span className="hover:text-accent transition-colors cursor-pointer">Chimpanzee Tracking</span></Link></li>
              <li><Link href="/tours/golden-monkey"><span className="hover:text-accent transition-colors cursor-pointer">Golden Monkey Safaris</span></Link></li>
              <li><Link href="/tours/rwanda-grand"><span className="hover:text-accent transition-colors cursor-pointer">Rwanda Grand Safari</span></Link></li>
              <li><Link href="/tours/east-africa-combo"><span className="hover:text-accent transition-colors cursor-pointer">East Africa Combo</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl text-display text-accent mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80 font-sans">
              <li><Link href="/about"><span className="hover:text-accent transition-colors cursor-pointer">Our Story</span></Link></li>
              <li><Link href="/gallery"><span className="hover:text-accent transition-colors cursor-pointer">Gallery</span></Link></li>
              <li><Link href="/about"><span className="hover:text-accent transition-colors cursor-pointer">Conservation</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-accent transition-colors cursor-pointer">Contact Us</span></Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl text-display text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80 font-sans">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span>Kigali Heights, KN 7 Rd<br />Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a href="tel:+250788000000" className="hover:text-accent transition-colors">+250 788 000 000</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a href="mailto:info@primatesquest.com" className="hover:text-accent transition-colors">info@primatesquest.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Primates Quest Safaris. All rights reserved.</p>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"></span> Certified Eco-Tourism Operator</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"></span> RDB Licensed</span>
          </div>
        </div>
      </div>
    </footer>
  );
}