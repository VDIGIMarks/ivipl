import React from 'react';
import {
    Building2,
    MapPin,
    Gem,
    Leaf,
    TrendingUp,
    Award,
    Users
} from 'lucide-react';

export default function AboutExcellenceS2() {
    return (
        <section className="relative bg-[#FAF8F5] py-10 md:py-14 px-4 md:px-8 font-sans overflow-hidden text-slate-800">

            {/* Background Decorative Metallic Waves & Dots Texture */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">

                {/* ================= LEFT SIDE: MAIN IMAGE WITH FLOATING BADGES ================= */}
                <div className="lg:col-span-6 relative rounded-3xl p-1.5 bg-gradient-to-br from-amber-400 via-amber-200 to-amber-600 shadow-2xl">
                    <div className="relative rounded-[22px] overflow-hidden bg-[#07172b] h-[360px] md:h-[420px] group">

                        {/* Commercial High-rise Mall Building Photo */}
                        <img
                            src="https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&q=80&w=1200"
                            alt="Investyedya Commercial Development"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Top-Left Floating Tag: Premium Developments */}
                        <div className="absolute top-4 left-4 z-20">
                            <div className="flex items-center gap-2 bg-[#041122]/85 backdrop-blur-md border border-amber-400/50 rounded-full py-1.5 px-3.5 shadow-lg">
                                <div className="w-6 h-6 rounded-md bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[11px] font-semibold text-white tracking-wide">
                                    Premium Developments
                                </span>
                            </div>
                        </div>

                        {/* Top-Right Golden Ribbon Bookmark Badge */}
                        <div className="absolute top-0 right-6 z-20">
                            <div className="relative bg-gradient-to-b from-[#e5be6f] via-[#d4a84b] to-[#b3832c] text-[#07172b] px-3.5 pt-3 pb-5 shadow-xl font-semibold text-[10px] md:text-[11px] leading-tight text-center max-w-[110px] clip-ribbon">
                                Delivering <br />
                                Spaces for a <br />
                                <span className="font-bold">Better <br />Tomorrow</span>
                                {/* Bottom Bookmark Notch Design */}
                                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-b from-[#b3832c] to-transparent [clip-path:polygon(0_0,50%_100%,100%_0)]"></div>
                            </div>
                        </div>

                        {/* Bottom Dark Glass Bar (4 Features) */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 bg-[#030e1c]/90 backdrop-blur-md border-t border-amber-500/30 py-3 px-3 md:px-5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-white">

                            {/* Feature 1 */}
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] md:text-[11px] font-medium leading-tight text-slate-200">
                                    Prime <br />Locations
                                </span>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex items-center gap-2 border-l border-white/10 sm:pl-2">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <Gem className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] md:text-[11px] font-medium leading-tight text-slate-200">
                                    Modern <br />Infrastructure
                                </span>
                            </div>

                            {/* Feature 3 */}
                            <div className="flex items-center gap-2 border-l border-white/10 sm:pl-2">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <Leaf className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] md:text-[11px] font-medium leading-tight text-slate-200">
                                    Sustainable <br />Developments
                                </span>
                            </div>

                            {/* Feature 4 */}
                            <div className="flex items-center gap-2 border-l border-white/10 sm:pl-2">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] md:text-[11px] font-medium leading-tight text-slate-200">
                                    High <br />Investment Value
                                </span>
                            </div>

                        </div>

                    </div>
                </div>

                {/* ================= RIGHT SIDE: BEST SERVICE & GREAT STAFF ================= */}
                <div className="lg:col-span-6 space-y-6 lg:pl-4">

                    {/* BLOCK 01: BEST SERVICE */}
                    <div className="relative flex items-start gap-4 p-2 group">

                        {/* Golden 3D Award Badge */}
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#1a2d42] via-[#081728] to-[#020b14] border-2 border-amber-400 p-0.5 shadow-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full rounded-full bg-[#031120] border border-amber-300/40 flex items-center justify-center shadow-inner">
                                <Award className="w-7 h-7 text-amber-400 drop-shadow-[0_2px_4px_rgba(234,179,8,0.4)]" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-1.5 flex-1 border-b border-amber-200/60 pb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-[1px] bg-amber-500"></div>
                                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-amber-600 uppercase">
                                        OUR EXCELLENCE
                                    </span>
                                    <div className="w-5 h-[1px] bg-amber-500"></div>
                                </div>
                                <span className="text-xl md:text-2xl font-serif font-semibold text-amber-300/80">
                                    01
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#081e36]">
                                Best <span className="text-[#c29849] font-serif">Service</span>
                            </h3>

                            <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-light">
                                Our core value lies in providing the best real estate solutions to customers in both the residential and commercial sectors. We work rigorously to get you the best location, top-notch services, and unbeatable prices. For us, no project is too big or too small.
                            </p>
                        </div>
                    </div>

                    {/* BLOCK 02: GREAT STAFF */}
                    <div className="relative flex items-start gap-4 p-2 group">

                        {/* Dark Metallic 3D Staff Badge */}
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#1a2d42] via-[#081728] to-[#020b14] border-2 border-amber-400 p-0.5 shadow-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full rounded-full bg-[#031120] border border-amber-300/40 flex items-center justify-center shadow-inner">
                                <Users className="w-7 h-7 text-amber-400 drop-shadow-[0_2px_4px_rgba(234,179,8,0.4)]" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-1.5 flex-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-[1px] bg-amber-500"></div>
                                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-amber-600 uppercase">
                                        OUR STRENGTH
                                    </span>
                                    <div className="w-5 h-[1px] bg-amber-500"></div>
                                </div>
                                <span className="text-xl md:text-2xl font-serif font-semibold text-amber-300/80">
                                    02
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#081e36]">
                                Great <span className="text-[#c29849] font-serif">Staff</span>
                            </h3>

                            <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-light">
                                Our experienced and dedicated staff provides prompt solutions for any query. Enjoy a hassle-free process with the IVIPL team, committed to guiding you at every step and ensuring a smooth and transparent real estate experience.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}