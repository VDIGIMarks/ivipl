import React from 'react';
import { Users, Heart, Home, Flower2 } from 'lucide-react';

const valuesimg = '/images/valuesHero.png';

export default function ValuesS2() {
    const features = [
        {
            title: "One Community",
            subtitle: "Stronger Together",
            icon: Users,
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "One Family",
            subtitle: "More Cherished Moments",
            icon: Heart,
            image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "One Home",
            subtitle: "A Brighter Tomorrow",
            icon: Home,
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Everyday Joys",
            subtitle: "A Healthier, Happier You",
            icon: Flower2,
            image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <section className="relative w-full min-h-screen bg-amber-50 text-slate-800 font-serif flex items-center justify-center py-10 sm:py-16 lg:py-20 pb-16 sm:pb-28 lg:pb-36 overflow-hidden shadow-[0_-12px_30px_rgba(0,0,0,0.15)]">
            {/* HERO BACKGROUND IMAGE WITH OVERLAY FOR ENTIRE SECTION */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src={valuesimg}
                    alt="Luxury Township Background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-amber-50/70 via-amber-50/40 to-amber-50/80" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between px-4 sm:px-8 lg:px-12 py-6 sm:py-10">

                {/* CONTENT CONTAINER */}
                <div className="relative z-10 flex flex-col justify-between h-full min-h-full space-y-6 sm:space-y-8 flex-1">

                    {/* TOP SECTION: BRANDING & HEADLINE */}
                    <div className="w-full flex flex-col items-center pt-2">
                        <div className="flex flex-col items-center justify-center text-center mb-2 sm:mb-4">
                            <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-slate-800 uppercase font-bold">
                                Values we preserve
                            </p>
                        </div>

                        <div className="text-center max-w-4xl mx-auto px-2">
                            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
                                We create spaces that enable{" "}
                                <span className="block italic text-amber-800 font-serif text-3xl sm:text-5xl lg:text-6xl mt-1">
                                    Everyday Joys;
                                </span>
                            </h2>
                            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-700 font-medium tracking-wide mt-2">
                                one community, one family, and one home at a time.
                            </p>
                            <div className="w-12 h-0.5 bg-amber-600/60 mx-auto mt-3 rounded-full" />
                        </div>
                    </div>

                    {/* FEATURE CARDS - Responsive Grid with translation scaled properly per breakpoint */}
                    <div className="relative z-20 mt-6 sm:mt-8 lg:mt-auto translate-y-0 lg:translate-y-1/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-sm sm:max-w-none mx-auto w-full">
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center group transition-all bg-white/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 sm:p-0 rounded-2xl border border-white/60 sm:border-none shadow-sm sm:shadow-none"
                                >
                                    {/* ARCHED IMAGE FRAME WITH OVERLAPPING ICON */}
                                    <div className="relative w-full max-w-[240px] sm:max-w-none mx-auto">
                                        <div className="w-full h-36 sm:h-44 lg:h-48 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-white shadow-md bg-amber-100 relative">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                        </div>

                                        {/* CENTER CIRCULAR ICON BADGE */}
                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                                            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-amber-600 text-amber-50 border-2 border-white flex items-center justify-center shadow-lg group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300">
                                                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* CARD TEXT CONTENT */}
                                    <div className="pt-6 sm:pt-7 text-center font-sans pb-2">
                                        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-[11px] sm:text-xs text-slate-600 font-medium mt-0.5">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}