import React from 'react';
import {
    Building,
    Users,
    ShieldCheck,
    Gem,
    Award,
    Handshake,
    TrendingUp,
    ArrowRight,
    Lightbulb,
    Target
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function AHomeS1() {
    const { openEnquiryModal } = useEnquiry();
    return (
        <div className="bg-[#FAF8F5] min-h-screen pt-28 pb-0 px-0 font-sans text-slate-800 flex flex-col items-center gap-10 overflow-hidden">
            {/* Custom Animations & Styles */}
            <style>{`
                @keyframes emerge3d {
                    0% {
                        opacity: 0;
                        transform: scale(0.92) translateY(15px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                .animate-emerge {
                    animation: emerge3d 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            {/* SECTION 1: ABOUT US */}
            <section className="max-w-7xl w-full mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-emerge">

                {/* ================= LEFT SIDE: IMAGE CONTAINER WITH WAVE BADGE ================= */}
                <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl border border-amber-200/50 bg-[#081f38] h-[320px] md:h-[350px] group">

                    {/* Background High-rise Apartment Image */}
                    <img
                        src="/images/aboutimg.png"
                        alt="Investyedya Real Estate Building"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Left Curved Dark Navy Overlay Badge with Golden Wave Border */}
                    <div className="absolute top-0 left-0 bottom-0 w-[42%] bg-gradient-to-br from-[#03172e] via-[#082240] to-[#010e1e] p-5 flex flex-col justify-between z-10 rounded-r-[50px] border-r-4 border-amber-400 shadow-[5px_0_25px_rgba(0,0,0,0.5)]">
                        <div>
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
                                Building <br />
                                <span className="text-[#c5a059]">Better</span> <br />
                                Tomorrows
                            </h3>
                            <div className="w-8 h-[2px] bg-amber-400 my-3"></div>
                        </div>

                        <p className="text-[11px] md:text-xs text-slate-300 font-light leading-relaxed">
                            Premium Spaces <br />
                            for a Brighter <br />
                            Future
                        </p>
                    </div>

                    {/* Bottom Dark Status Bar Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-[#020e1c]/90 backdrop-blur-md border-t border-amber-500/30 py-2.5 px-4 pl-[45%] z-0 flex items-center justify-between text-white">

                        <div className="flex items-center gap-1.5 text-center sm:text-left">
                            <Building className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="text-[9px] md:text-[10px] leading-tight font-medium text-slate-200">
                                Years of <br />Experience
                            </div>
                        </div>

                        <div className="w-[1px] h-6 bg-white/10"></div>

                        <div className="flex items-center gap-1.5 text-center sm:text-left">
                            <Users className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="text-[9px] md:text-[10px] leading-tight font-medium text-slate-200">
                                Happy <br />Clients
                            </div>
                        </div>

                        <div className="w-[1px] h-6 bg-white/10"></div>

                        <div className="flex items-center gap-1.5 text-center sm:text-left">
                            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="text-[9px] md:text-[10px] leading-tight font-medium text-slate-200">
                                Trusted <br />Advisory
                            </div>
                        </div>

                        <div className="w-[1px] h-6 bg-white/10"></div>

                        <div className="flex items-center gap-1.5 text-center sm:text-left">
                            <Gem className="w-4 h-4 text-amber-400 shrink-0" />
                            <div className="text-[9px] md:text-[10px] leading-tight font-medium text-slate-200">
                                Quality <br />Developments
                            </div>
                        </div>

                    </div>
                </div>

                {/* ================= RIGHT SIDE: CONTENT & BADGES ================= */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">

                    {/* Text Block & Action Button (Span 8) */}
                    <div className="sm:col-span-8 space-y-3">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                                    KNOW MORE
                                </span>
                                <div className="w-8 h-[1px] bg-amber-500"></div>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#0c2340] mt-0.5">
                                About <span className="text-[#c5a059] font-serif font-semibold">Us</span>
                            </h2>
                        </div>

                        <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-light">
                            Investyedya is an esteemed real estate consulting firm located at Greater Noida (West). With decades of experience, our strong vision and ethical services that we provide to every customer has made us the most preferred real estate agency in North India. We are a technology-driven and solution based real estate consultancy that vows to provide you the most efficient roadmap to your dream project in India.
                        </p>

                        <p className="text-slate-600 text-xs md:text-[13px] leading-relaxed font-light">
                            Our strategists have extensive years of expertise in assisting clients right from the start till the possession of the house and beyond. We believe in building trust and meeting our customer&apos;s expectations by putting our best foot forward always!
                        </p>

                        <div className="pt-1">
                            <button
                                type="button"
                                onClick={() =>
                                    openEnquiryModal({
                                        title: 'Partner with IVIPL Advisors',
                                        subtitle: 'Schedule a discovery session with our senior real estate consultants.',
                                        source: 'About Us Overview'
                                    })
                                }
                                className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 text-[#0c2340] font-semibold text-xs shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 group cursor-pointer active:scale-95"
                            >
                                Enquire Now
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* 3 Vertical Circle Badges (Span 4) */}
                    <div className="sm:col-span-4 space-y-2.5 flex flex-col justify-center">

                        {/* Badge 1 */}
                        <div className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-amber-50/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300/80 shadow-sm flex items-center justify-center shrink-0">
                                <Award className="w-4 h-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="text-xs font-serif font-bold text-[#0c2340] leading-tight">
                                    Client First
                                </h4>
                                <span className="text-[10px] text-amber-600 font-medium">Approach</span>
                            </div>
                        </div>

                        {/* Badge 2 */}
                        <div className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-amber-50/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300/80 shadow-sm flex items-center justify-center shrink-0">
                                <Handshake className="w-4 h-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="text-xs font-serif font-bold text-[#0c2340] leading-tight">
                                    Transparent
                                </h4>
                                <span className="text-[10px] text-amber-600 font-medium">Process</span>
                            </div>
                        </div>

                        {/* Badge 3 */}
                        <div className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-amber-50/50 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300/80 shadow-sm flex items-center justify-center shrink-0">
                                <TrendingUp className="w-4 h-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="text-xs font-serif font-bold text-[#0c2340] leading-tight">
                                    Long-Term
                                </h4>
                                <span className="text-[10px] text-amber-600 font-medium">Value</span>
                            </div>
                        </div>

                    </div>

                </div>

            </section>


            {/* SECTION 2: OUR COMMITMENT & OUR WORK (EXACT REFERENCE MATCH FULL WIDTH) */}
            <section className="relative w-full border-y border-amber-500/30 bg-[#0a1128] shadow-2xl overflow-hidden py-16 px-4 md:px-12">

                {/* Background Night Skyline & Resort Image */}
                <div className="absolute inset-0 bg-[url('/images/bgcardimg.png')] bg-cover bg-center opacity-40"></div>

                {/* Deep Navy Gradient Overlays for Luxury Contrast */}

                {/* Decorative Glowing Golden Curled Border Accent */}
                <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent rounded-br-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-amber-400/20 via-transparent to-transparent rounded-tl-full pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">

                    {/* Section Header */}
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-center space-x-3">
                            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-400"></div>
                            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold">OUR COMMITMENT</span>
                            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-400"></div>
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-wider text-white">
                            OUR <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-[#dfbf7f] bg-clip-text text-transparent">WORK</span>
                        </h2>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-5xl mx-auto">
                        In an ever-changing industry, we take our pride in providing smart house solutions using latest technology with quick features. Our measurement of success lies in the principles of a strong commitment to work, honesty, and integrity. Our experts will have detailed discussions with you so we understand your needs better and formulate better solutions. Based on your requirements, we present plentiful options so you can have a wider perspective of the beneficial properties.
                    </p>

                    {/* Four Horizontal Features (Matching Exact Image Reference Layout) */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 max-w-6xl mx-auto items-center">

                        {/* Item 1 */}
                        <div className="flex items-center gap-3 text-left bg-[#070d1d]/60 p-3 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <Lightbulb size={22} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
                                Innovative <br />Solutions
                            </h4>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center gap-3 text-left bg-[#070d1d]/60 p-3 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <Target size={22} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
                                Client-Centric <br />Approach
                            </h4>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center gap-3 text-left bg-[#070d1d]/60 p-3 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <ShieldCheck size={22} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
                                100% Satisfaction <br />Commitment
                            </h4>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-center gap-3 text-left bg-[#070d1d]/60 p-3 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                <Users size={22} />
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-tight">
                                End-to-End <br />Support
                            </h4>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}