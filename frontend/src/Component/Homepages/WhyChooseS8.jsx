import React from 'react';
import {
    Users,
    Coins,
    BookOpenText,
    GraduationCap,
    Laptop,
    Headset
} from 'lucide-react';

export default function WhyChooseUs() {
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
                <div className="text-center space-y-3 animate-emerge" style={{ animationDelay: '100ms' }}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#0c2340]">
                        Why Should You <span className="text-[#c5a059]">Choose Us?</span>
                    </h2>
                    {/* Decorative gold diamond center line */}
                    <div className="flex items-center justify-center gap-3 pt-1">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#c5a059]"></div>
                        <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]"></div>
                    </div>
                </div>

                {/* ================= 6 CARDS GRID ================= */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">

                    {/* Card 1: Seasoned Team */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '200ms' }}
                    >
                        {/* Subtle background wave accent at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none"></div>

                        {/* Icon Container */}
                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#f3e6c8] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Users className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1">
                            Seasoned Team
                        </h3>
                    </div>

                    {/* Card 2: Cost-Efficient Solutions (Highlighted with Golden Border) */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-xl border-2 border-[#c5a059] flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '300ms' }}
                    >
                        {/* Subtle background wave accent at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-amber-50/80 to-transparent pointer-events-none"></div>

                        {/* Icon Container */}
                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#c5a059] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-md">
                            <Coins className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1">
                            Cost-Efficient Solutions
                        </h3>
                    </div>

                    {/* Card 3: Comprehensive & Multilingual Courses */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '400ms' }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none"></div>

                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#f3e6c8] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <BookOpenText className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1 max-w-[240px]">
                            Comprehensive & Multilingual Courses
                        </h3>
                    </div>

                    {/* Card 4: Expert Instructors */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '500ms' }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none"></div>

                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#f3e6c8] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <GraduationCap className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1">
                            Expert Instructors
                        </h3>
                    </div>

                    {/* Card 5: User-friendly E-Learning Platform */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '600ms' }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none"></div>

                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#f3e6c8] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Laptop className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1 max-w-[220px]">
                            User-friendly E-Learning Platform
                        </h3>
                    </div>

                    {/* Card 6: 24x7 Support */}
                    <div
                        className="bg-white rounded-[24px] p-6 shadow-md border border-slate-100 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 animate-emerge"
                        style={{ animationDelay: '700ms' }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-blue-50/60 to-transparent pointer-events-none"></div>

                        <div className="w-16 h-16 rounded-full bg-[#fdf8ee] border border-[#f3e6c8] flex items-center justify-center mb-5 relative group-hover:scale-110 transition-transform duration-300 shadow-sm">
                            <Headset className="w-7 h-7 text-[#c5a059]" />
                        </div>
                        <h3 className="text-lg font-serif font-semibold text-[#0c2340] mb-1">
                            24x7 Support
                        </h3>
                    </div>

                </div>

            </div>
        </div>
    );
}