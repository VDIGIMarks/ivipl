import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home, Leaf, Building2, Sparkles } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

const projects = [
  {
    id: 1,
    title: "A modern residential destination designed for a better and smarter tomorrow.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "A premium villa community surrounded by nature, designed for peaceful and luxurious living.",
    icon: Leaf,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "A landmark commercial and lifestyle destination for business, leisure and modern experiences.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
  }
];

const bgHeroImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=2000";

export default function FuturePS3() {
  const { openEnquiryModal } = useEnquiry();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isSpinning, setIsSpinning] = useState(true);
  const touchStartX = useRef(null);

  // Initial intro automatic spin effect on page load
  useEffect(() => {
    let step = 0;
    const spinSequence = [0, 1, 2, 1];

    const interval = setInterval(() => {
      step++;
      if (step < spinSequence.length) {
        setCurrentIndex(spinSequence[step]);
      } else {
        setIsSpinning(false);
        clearInterval(interval);
      }
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    if (isSpinning) return;
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (isSpinning) return;
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    if (isSpinning) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (isSpinning || touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const getCardStyle = (index) => {
    const diff = index - currentIndex;

    if (diff === 0) {
      // Center active card: facing straight, pops forward
      return "z-20 scale-100 opacity-100 translate-x-0 [transform:rotateY(0deg)_translateZ(40px)] shadow-[0_0_35px_rgba(251,191,36,0.4)] border-amber-300/80";
    } else if (diff === -1 || (currentIndex === 0 && index === projects.length - 1)) {
      // Left card: strongly bent inwards towards the center (circular arc curve)
      return "z-10 scale-90 sm:scale-85 opacity-70 -translate-x-[50%] sm:-translate-x-[80%] lg:-translate-x-[85%] [transform:rotateY(-60deg)_translateZ(-100px)] sm:[transform:rotateY(-65deg)_translateZ(-140px)] border-white/30";
    } else if (diff === 1 || (currentIndex === projects.length - 1 && index === 0)) {
      // Right card: strongly bent inwards towards the center (circular arc curve)
      return "z-10 scale-90 sm:scale-85 opacity-70 translate-x-[50%] sm:translate-x-[80%] lg:translate-x-[85%] [transform:rotateY(60deg)_translateZ(-100px)] sm:[transform:rotateY(65deg)_translateZ(-140px)] border-white/30";
    } else {
      // Hidden cards pushed back into the 3D space
      return "z-0 scale-60 opacity-0 pointer-events-none [transform:rotateY(0deg)_translateZ(-250px)]";
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-slate-950 text-white font-serif flex flex-col items-center justify-between py-8 sm:py-12 px-2 sm:px-8 overflow-hidden">

      {/* BACKGROUND IMAGE WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgHeroImage}
          alt="Scenic Nature Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-950/90" />
        <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay" />
      </div>

      {/* TOP HEADER SECTION */}
      <div className="relative z-10 w-full max-w-4xl text-center pt-4 sm:pt-2 flex flex-col items-center px-4">
        {/* BRAND TAGLINE */}
        <div className="flex items-center space-x-3 mb-2">
          <span className="w-6 sm:w-8 h-[1px] bg-amber-200/60" />
          <span className="text-[10px] sm:text-sm font-sans tracking-[0.3em] uppercase text-amber-100/90 font-light">
            IVIPL
          </span>
          <span className="w-6 sm:w-8 h-[1px] bg-amber-200/60" />
        </div>

        {/* MAIN HEADING */}
        <h1 className="text-2xl sm:text-5xl lg:text-6xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-500 drop-shadow-md">
          FUTURE <span className="font-serif italic font-normal text-amber-300">PROJECTS</span>
        </h1>

        {/* SUBTITLE */}
        <div className="mt-2 flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-[9px] sm:text-xs font-sans tracking-[0.2em] sm:tracking-[0.25em] text-amber-200/80 uppercase">
              THE NEXT CHAPTER OF LUXURY
            </span>
          </div>
          <p className="font-sans text-xs sm:text-sm text-slate-200/80 max-w-lg font-light tracking-wide mt-0.5 px-2">
            Upcoming destinations crafted with vision, sustainability and world-class living experiences.
          </p>
        </div>
      </div>

      {/* CIRCULAR PERSPECTIVE CAROUSEL */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative z-10 w-full max-w-6xl my-auto py-8 flex items-center justify-center [perspective:800px] sm:[perspective:1000px]"
      >

        {/* LEFT NAV BUTTON */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-4 lg:left-8 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-amber-300/40 text-amber-200 flex items-center justify-center hover:bg-black/80 hover:border-amber-300 hover:scale-110 active:scale-95 transition-all backdrop-blur-md"
          aria-label="Previous Project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* BENT/CURVED CARDS CONTAINER */}
        <div className="relative w-[230px] xs:w-[270px] sm:w-[400px] lg:w-[460px] h-[310px] sm:h-[340px] lg:h-[370px] flex items-center justify-center [transform-style:preserve-3d]">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const isCenter = index === currentIndex;

            return (
              <div
                key={project.id}
                onClick={() => {
                  if (!isSpinning) setCurrentIndex(index);
                }}
                className={`absolute w-full h-full rounded-2xl overflow-hidden border cursor-pointer transition-all duration-700 ease-out flex flex-col justify-end p-4 sm:p-6 ${getCardStyle(
                  index
                )}`}
              >
                {/* CARD BACKGROUND IMAGE */}
                <img
                  src={project.image}
                  alt="Project Preview"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

                {/* ACTIVE GLOW INNER BORDER */}
                {isCenter && (
                  <div className="absolute inset-0 rounded-2xl border border-amber-300/50 pointer-events-none" />
                )}

                {/* CARD CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  {/* ICON BADGE */}
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 border border-amber-400/60 flex items-center justify-center text-amber-300 backdrop-blur-md shadow-lg">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>

                  {/* DESCRIPTION */}
                  <p className="font-serif text-xs sm:text-sm lg:text-base text-slate-100 leading-relaxed max-w-sm font-light">
                    {project.title}
                  </p>

                  {/* BOTTOM GOLD LINE & ACTION */}
                  {isCenter && (
                    <div className="flex flex-col items-center space-y-2 pt-1">
                      <div className="w-10 sm:w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openEnquiryModal({
                            title: 'Pre-Launch Future Project Inquiry',
                            subtitle: project.title,
                            projectType: 'Upcoming Launch',
                            source: 'Future Projects Carousel'
                          });
                        }}
                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center space-x-1"
                      >
                        <Sparkles className="w-3 h-3 text-slate-950" />
                        <span>Pre-Launch Inquiry</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT NAV BUTTON */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-4 lg:right-8 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/50 border border-amber-300/40 text-amber-200 flex items-center justify-center hover:bg-black/80 hover:border-amber-300 hover:scale-110 active:scale-95 transition-all backdrop-blur-md"
          aria-label="Next Project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* FOOTER / PAGINATION INDICATORS */}
      <div className="relative z-10 flex items-center space-x-2.5 mb-2">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isSpinning) setCurrentIndex(idx);
            }}
            className={`transition-all duration-300 rounded-full ${currentIndex === idx
                ? "w-3 h-3 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] border border-amber-200"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* FLOOR REFLECTION PODIUM */}
      <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none" />
    </section>
  );
}