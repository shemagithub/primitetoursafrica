import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/ui/WhatsAppCTA";
import PageTransition from "@/components/ui/PageTransition";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/hero-gorilla.jpg";
import img2 from "@/assets/hero-volcanoes.jpg";
import img3 from "@/assets/chimp-nyungwe.jpg";
import img4 from "@/assets/golden-monkey.jpg";
import img5 from "@/assets/rwanda-safari.jpg";
import img6 from "@/assets/birding.jpg";
import img7 from "@/assets/gorilla-eyes.jpg";
import img8 from "@/assets/rwanda-hills.jpg";
import img9 from "@/assets/trekkers-forest.jpg";
import img10 from "@/assets/gorilla-family.jpg";
import img11 from "@/assets/kigali-skyline.jpg";
import img12 from "@/assets/safari-lodge.jpg";

type Category = 'All' | 'Gorillas' | 'Primates' | 'Landscapes' | 'Safari';

const photos = [
  { src: img1, alt: "Silverback Gorilla in the Mist", category: "Gorillas" },
  { src: img8, alt: "Rolling Hills of Rwanda", category: "Landscapes" },
  { src: img3, alt: "Chimpanzee in Nyungwe Canopy", category: "Primates" },
  { src: img2, alt: "Virunga Volcanoes Skyline", category: "Landscapes" },
  { src: img7, alt: "The Stare of a Silverback", category: "Gorillas" },
  { src: img4, alt: "Golden Monkey in Bamboo", category: "Primates" },
  { src: img9, alt: "Trekkers Navigating the Forest", category: "Safari" },
  { src: img5, alt: "Safari Vehicle in Akagera", category: "Safari" },
  { src: img10, alt: "Gorilla Family Resting", category: "Gorillas" },
  { src: img12, alt: "Luxury Safari Lodge", category: "Safari" },
  { src: img11, alt: "Kigali Skyline at Dusk", category: "Landscapes" },
  { src: img6, alt: "Endemic Bird Species", category: "Safari" },
];

const categories: Category[] = ['All', 'Gorillas', 'Primates', 'Landscapes', 'Safari'];

export default function Gallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredPhotos = photos.filter(p => activeCategory === 'All' || p.category === activeCategory);

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <PageTransition>
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-48 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl text-display mb-6">Visual Journey</h1>
            <p className="text-xl text-white/80 font-sans">
              Glimpses of the extraordinary moments awaiting you in Rwanda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-primary/95 sticky top-[72px] z-40 border-b border-accent/20 backdrop-blur-md">
        <div className="container mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-center gap-4 py-4 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeCategory === cat 
                    ? "bg-accent text-primary" 
                    : "bg-transparent text-white/60 hover:text-white border border-white/20 hover:border-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => {
                // Determine if this is the first column for parallax effect (rough approx via index in layout)
                const isFirstCol = index % 3 === 0;
                const translateY = isFirstCol ? scrollY * 0.05 : 0;

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    key={photo.src}
                    className="relative group cursor-pointer overflow-hidden bg-card break-inside-avoid shadow-md"
                    onClick={() => setSelectedPhotoIndex(index)}
                    style={{ transform: `translateY(${translateY}px)` }}
                  >
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    
                    {/* Caption Bar */}
                    <div className="absolute bottom-0 left-0 w-full bg-primary/95 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-accent">
                      <p className="text-display text-2xl text-accent">{photo.alt}</p>
                      <p className="text-xs uppercase tracking-widest font-sans mt-2 opacity-70">{photo.category}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-12 backdrop-blur-xl"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedPhotoIndex(null)}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-4 rounded-full"
              onClick={prevPhoto}
            >
              <ChevronLeft size={36} />
            </button>
            
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-50 bg-black/50 p-4 rounded-full"
              onClick={nextPhoto}
            >
              <ChevronRight size={36} />
            </button>

            <motion.div
              key={selectedPhotoIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="relative max-h-full max-w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].alt}
                className="max-h-[85vh] max-w-full object-contain shadow-2xl outline outline-[1px] outline-accent/20"
              />
              <div className="absolute bottom-[-40px] text-center w-full">
                <p className="text-display text-3xl text-accent">{filteredPhotos[selectedPhotoIndex].alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WhatsAppCTA />
      <Footer />
    </PageTransition>
  );
}