import React from 'react';
import {
    ArrowRight,
    Home,
    Building2,
    Gem,
    Leaf
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function AboutS7() {
    const { openEnquiryModal } = useEnquiry();
    return (
        <div className="bg-[#f9f8f3] min-h-screen py-8 px-4 md:px-6 font-sans text-slate-800 flex items-center justify-center overflow-x-hidden">
            {/* Custom Animations Inline Styles */}
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

                @keyframes emergeLeft {
                    0% {
                        opacity: 0;
                        transform: scale(0.9) translateX(-40px) translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateX(0) translateY(0);
                    }
                }

                @keyframes emergeRight {
                    0% {
                        opacity: 0;
                        transform: scale(0.9) translateX(40px) translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1) translateX(0) translateY(0);
                    }
                }

                .animate-emerge {
                    animation: emerge3d 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-emerge-left {
                    animation: emergeLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                .animate-emerge-right {
                    animation: emergeRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>

            <div className="max-w-5xl mx-auto space-y-8">

                {/* ================= HERO / MISSION BANNER ================= */}
                <div
                    className="relative rounded-[24px] overflow-hidden shadow-xl bg-[#031d38] flex flex-col lg:flex-row min-h-[320px] border border-amber-500/20 group transition-all duration-500 hover:shadow-2xl hover:border-amber-500/40 animate-emerge"
                    style={{ animationDelay: '100ms' }}
                >
                    {/* Left Side: Image with Zoom Effect */}
                    <div className="relative lg:w-[50%] min-h-[220px] lg:min-h-[320px] overflow-hidden">
                        <img
                            src="/images/missionsbg.png"
                            alt="Luxury Modern Villa"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#031d38]/80 lg:block hidden"></div>
                    </div>

                    {/* Right Side: Mission Text Banner */}
                    <div className="lg:w-[50%] p-6 lg:p-8 flex flex-col justify-center text-white relative z-10 bg-[#031d38]">
                        <div className="w-8 h-[3px] bg-gradient-to-r from-amber-400 to-amber-600 mb-3 transform origin-left group-hover:scale-x-125 transition-transform duration-300"></div>

                        <h1 className="text-2xl lg:text-3xl font-serif leading-tight font-medium tracking-tight mb-3">
                            Our mission is to provide <br className="hidden sm:inline" />
                            <span className="text-amber-400">the best possible.</span>
                        </h1>

                        <p className="text-slate-300 text-xs leading-relaxed mb-5 font-light">
                            Investyedya Infratech Pvt.Ltd. is one of the most valuable, recognized
                            and recommended names in the Real Estate Industry in North India.
                            To perceive this vision, our workforce and associates aim to achieve
                            excellence in every aspect of development to intensify quality of living.
                        </p>

                        <div>
                            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:scale-105 active:scale-95">
                                Explore Projects
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* ================= ABOUT US SECTION ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

                    {/* Left Column: Text & Features (Popping from Left) */}
                    <div
                        className="lg:col-span-5 space-y-4 animate-emerge-left"
                        style={{ animationDelay: '300ms' }}
                    >
                        {/* Section Subtitle */}
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.25em] text-amber-600 uppercase">
                                ABOUT US
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-serif text-[#0c2340] font-normal">
                                About <span className="text-amber-600">us</span>
                            </h2>
                            <div className="w-10 h-[2px] bg-amber-500 mt-1.5"></div>
                        </div>

                        {/* Paragraph Text */}
                        <p className="text-slate-600 text-xs leading-relaxed">
                            We are one of the prominent names in the development of residential
                            & commercial projects of various sizes and best prices ensuring that
                            we have everything as per our consumer's requirements and
                            convenience with due diligence and accuracy.
                        </p>

                        {/* Read More / Enquire Button */}
                        <div className="pt-1">
                            <button
                                type="button"
                                onClick={() =>
                                    openEnquiryModal({
                                        title: 'About IVIPL Services',
                                        subtitle: 'Connect with our luxury property strategists for comprehensive real estate guidance.',
                                        source: 'Home About Us Section'
                                    })
                                }
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:scale-105 active:scale-95 cursor-pointer"
                            >
                                Enquire Now
                                <ArrowRight className="w-3.5 h-3.5 transition-transform" />
                            </button>
                        </div>

                        {/* 4 Feature Badges Grid with Staggered 3D Pop-out */}
                        <div className="grid grid-cols-2 gap-2.5 pt-2">

                            {/* Item 1 */}
                            <div
                                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-emerge"
                                style={{ animationDelay: '400ms' }}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                                    <Home className="w-3.5 h-3.5 text-amber-600" />
                                </div>
                                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                                    Residential <br />Projects
                                </span>
                            </div>

                            {/* Item 2 */}
                            <div
                                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-emerge"
                                style={{ animationDelay: '500ms' }}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                                </div>
                                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                                    Commercial <br />Developments
                                </span>
                            </div>

                            {/* Item 3 */}
                            <div
                                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-emerge"
                                style={{ animationDelay: '600ms' }}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                                    <Gem className="w-3.5 h-3.5 text-amber-600" />
                                </div>
                                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                                    Premium <br />Locations
                                </span>
                            </div>

                            {/* Item 4 */}
                            <div
                                className="flex items-center gap-2.5 p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 animate-emerge"
                                style={{ animationDelay: '700ms' }}
                            >
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 flex items-center justify-center shrink-0">
                                    <Leaf className="w-3.5 h-3.5 text-amber-600" />
                                </div>
                                <span className="text-[11px] font-semibold text-slate-700 leading-tight">
                                    Eco-friendly <br />& Sustainable
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Commercial Image (Popping from Right with Bounce) */}
                    <div
                        className="lg:col-span-7 animate-emerge-right"
                        style={{ animationDelay: '350ms' }}
                    >
                        <div className="relative rounded-[22px] overflow-hidden p-1 bg-gradient-to-tr from-amber-400/40 via-blue-500/10 to-amber-400/40 shadow-xl group hover:shadow-2xl transition-all duration-500">
                            <div className="rounded-[20px] overflow-hidden bg-white relative">
                                <img
                                    src="/images/aboutimg.png"
                                    alt="Modern Commercial Township & Mall"
                                    className="w-full h-[300px] lg:h-[340px] object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}