import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function OurAssociateS10() {
    const projects = [
        {
            title: "LA GALAXIA",
            logoImg: "/logo/1.png",
        },
        {
            title: "UFAIRIA",
            logoImg: "/logo/2.png",
        },
        {
            title: "SSB GROUP",
            logoImg: "/logo/3.png",
        },
        {
            title: "Nasdarka",
            logoImg: "/logo/4.png",
        },
        {
            title: "VDM",
            logoImg: "/logo/5.png",
        },
        {
            title: "Apex Buildwell",
            logoImg: "/logo/6.png",
        },
        {
            title: "LA GALAXIA",
            logoImg: "/logo/7.png",
        },
        {
            title: "UFAIRIA",
            logoImg: "/logo/8.png",
        },
        {
            title: "SSB GROUP",
            logoImg: "/logo/9.png",
        },
        {
            title: "Nasdarka",
            logoImg: "/logo/10.png",
        },
        {
            title: "VDM",
            logoImg: "/logo/11.png",
        },
        {
            title: "Apex Buildwell",
            logoImg: "/logo/12.png",
        },
        {
            title: "VDM",
            logoImg: "/logo/13.png",
        },
        {
            title: "Apex Buildwell",
            logoImg: "/logo/14.png",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Automatic slide interval (changes every 4 seconds)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (projects.length - 3));
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused, projects.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (projects.length - 3));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (projects.length - 3)) % (projects.length - 3));
    };

    return (
        <div className="bg-[#fcfbf7] pt-2 pb-6 px-4 md:px-8 font-sans text-slate-800 flex items-start justify-center overflow-x-hidden relative m-0">
            {/* Custom 3D Emerge Animations */}
            <style>{`
                @keyframes emerge3d {
                    0% {
                        opacity: 0;
                        transform: scale(0.85) translateZ(-100px) translateY(30px);
                    }
                    70% {
                        transform: scale(1.02) translateZ(10px) translateY(-4px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateZ(0) translateY(0);
                    }
                }
                .animate-emerge {
                    animation: emerge3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            <div className="max-w-6xl mx-auto space-y-6 w-full relative z-10 pt-0">

                {/* ================= SECTION HEADER ================= */}
                <div className="text-center space-y-2 animate-emerge" style={{ animationDelay: '100ms' }}>
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[#c5a059] uppercase">
                        OUR ASSOCIATIONS
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0c2340]">
                        Valued <span className="text-[#c5a059]">Projects</span>
                    </h2>
                    {/* Decorative gold diamond center line */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#c5a059]"></div>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]"></div>
                    </div>
                    <p className="text-slate-600 text-xs md:text-sm max-w-xl mx-auto pt-1 font-light">
                        We are proud to have collaborated with leading brands and developers,
                        building long-term partnerships based on trust, quality and excellence.
                    </p>
                </div>

                {/* ================= CAROUSEL CONTAINER ================= */}
                <div
                    className="relative py-2 px-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Sliding Track for Cards */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out gap-6"
                            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
                        >
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] shrink-0"
                                >
                                    {/* Card with Golden Corner Accents & ONLY IMAGE */}
                                    <div className="relative bg-white rounded-[20px] p-3 shadow-md border border-amber-200/60 flex items-center justify-center text-center h-[140px] group hover:shadow-xl hover:border-amber-400 transition-all duration-500 hover:-translate-y-2">

                                        {/* Top-Left Golden Corner Accent */}
                                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-500 rounded-tl-sm pointer-events-none"></div>

                                        {/* Bottom-Right Golden Corner Accent */}
                                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-500 rounded-br-sm pointer-events-none"></div>

                                        {/* Brand Logo Image Only */}
                                        <img
                                            src={item.logoImg}
                                            alt={item.title}
                                            className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300 filter drop-shadow-sm"
                                        />

                                        {/* Subtle background warm gradient glow */}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Left Navigation Arrow */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 md:-ml-5 w-10 h-10 rounded-full bg-white shadow-lg border border-amber-300 flex items-center justify-center text-[#0c2340] hover:bg-amber-50 hover:scale-110 transition-all z-20 focus:outline-none"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#c5a059]" />
                    </button>

                    {/* Right Navigation Arrow */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 md:-mr-5 w-10 h-10 rounded-full bg-white shadow-lg border border-amber-300 flex items-center justify-center text-[#0c2340] hover:bg-amber-50 hover:scale-110 transition-all z-20 focus:outline-none"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5 text-[#c5a059]" />
                    </button>

                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 pt-1">
                    {Array.from({ length: projects.length - 3 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#c5a059]' : 'w-2 bg-slate-300'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}