import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialS9() {
    const testimonials = [
        {
            initial: "S",
            name: "Shruti",
            text: "I am very much happy with my experience with S&D. The mentor's guidance and course curriculum are so useful. Highly recommend them to anyone who wants to upskill professionally.",
            rating: 5
        },
        {
            initial: "S",
            name: "Seema",
            text: "I am very much happy with my experience with S&D. The mentor's guidance and course curriculum are so useful. Highly recommend them to anyone who wants to upskill professionally.",
            rating: 5
        },
        {
            initial: "M",
            name: "monika",
            text: "I am very much happy with my experience with S&D. The mentor's guidance and course curriculum are so useful. Highly recommend them to anyone who wants to upskill professionally.",
            rating: 5
        },
        {
            initial: "R",
            name: "Rahul",
            text: "The practical approach and live sessions helped me grasp complex concepts easily. Excellent platform for career growth and skill development.",
            rating: 5
        },
        {
            initial: "A",
            name: "Anjali",
            text: "Amazing support team and thorough course material. It gave me the confidence to transition into a new tech domain smoothly.",
            rating: 5
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Automatic Slide Interval (changes every 4 seconds unless hovered)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % (testimonials.length - 2));
        }, 4000);
        return () => clearInterval(interval);
    }, [isPaused, testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
    };

    return (
        <div className="bg-[#fcfbf7] min-h-screen py-12 px-4 md:px-8 font-sans text-slate-800 flex items-center justify-center overflow-x-hidden">
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

            <div className="max-w-6xl mx-auto space-y-10 w-full">

                {/* ================= SECTION HEADER ================= */}
                <div className="text-center space-y-2 animate-emerge" style={{ animationDelay: '100ms' }}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0c2340]">
                        Testimonials
                    </h2>
                    {/* Decorative gold divider with center diamond */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#c5a059]"></div>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]"></div>
                    </div>
                </div>

                {/* ================= CAROUSEL CONTAINER ================= */}
                <div
                    className="relative overflow-hidden py-4 px-2"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Cards Sliding Track */}
                    <div
                        className="flex transition-transform duration-700 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                    >
                        {testimonials.map((item, index) => {
                            // Responsive card width calculation for 3 items on desktop, 1 on mobile
                            return (
                                <div
                                    key={index}
                                    className="w-full md:w-[calc(33.333%-16px)] shrink-0"
                                >
                                    <div className="relative rounded-[24px] p-7 shadow-xl bg-gradient-to-br from-[#0c2340] via-[#102a4c] to-[#031d38] text-white border border-amber-500/40 flex flex-col justify-between h-[360px] group hover:shadow-2xl hover:border-amber-400 transition-all duration-500 hover:-translate-y-2">

                                        {/* Subtle background glow effect */}
                                        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-amber-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                        <div>
                                            {/* Stars Rating */}
                                            <div className="flex gap-1 mb-4">
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
                                                ))}
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-slate-200 text-xs md:text-sm leading-relaxed font-light relative z-10">
                                                "{item.text}"
                                            </p>
                                        </div>

                                        {/* Card Footer: Avatar Initials, Name & Quote Icon */}
                                        <div className="flex items-end justify-between pt-6 relative z-10 border-t border-white/10 mt-6">
                                            <div className="flex items-center gap-3">
                                                {/* Initial Circle Avatar */}
                                                <div className="w-10 h-10 rounded-full bg-[#fdf8ee] border border-amber-400 flex items-center justify-center shadow-md">
                                                    <span className="font-serif font-bold text-[#0c2340] text-sm">
                                                        {item.initial}
                                                    </span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="font-serif font-semibold text-sm md:text-base text-amber-300 tracking-wide capitalize">
                                                        {item.name}
                                                    </span>
                                                    <div className="w-8 h-[1.5px] bg-amber-400 mt-0.5"></div>
                                                </div>
                                            </div>

                                            {/* Quote Icon */}
                                            <div className="text-white/20 group-hover:text-amber-400/40 transition-colors duration-300">
                                                <Quote className="w-9 h-9 rotate-180" />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 md:-ml-5 w-10 h-10 rounded-full bg-white shadow-lg border border-amber-200 flex items-center justify-center text-[#0c2340] hover:bg-amber-50 transition-all z-20 focus:outline-none"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 md:-mr-5 w-10 h-10 rounded-full bg-white shadow-lg border border-amber-200 flex items-center justify-center text-[#0c2340] hover:bg-amber-50 transition-all z-20 focus:outline-none"
                        aria-label="Next Slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>

                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 pt-2">
                    {Array.from({ length: testimonials.length - 2 }).map((_, idx) => (
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