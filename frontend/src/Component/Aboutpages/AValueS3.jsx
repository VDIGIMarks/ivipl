import React from 'react';
import {
    Gem,
    ShieldCheck,
    Users,
    MapPin,
    ArrowRight,
    Briefcase,
    Coins,
    FileText,
    Globe,
    BarChart3,
    Headphones,
    Sparkles
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function AValueS3() {
    const { openEnquiryModal } = useEnquiry();
    return (
        <div className="bg-[#FAF8F5] py-12 px-4 md:px-8 font-sans text-slate-800 space-y-16 overflow-hidden relative">

            {/* Background Decorative Golden Flares & Skyline Watermark */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-5 pointer-events-none"></div>

            {/* ========================================================================= */}
            {/* SECTION 1: OUR VALUES - VALUES WE PRESERVE                                */}
            {/* ========================================================================= */}
            <section className="max-w-7xl mx-auto space-y-8 relative z-10">

                {/* Header */}
                <div className="text-center space-y-2 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="h-[1px] w-12 bg-amber-500"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
                            OUR VALUES
                        </span>
                        <div className="h-[1px] w-12 bg-amber-500"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c2340]">
                        Values we <span className="text-[#c5a059] font-serif">preserve</span>
                    </h2>

                    <div className="w-2.5 h-2.5 bg-amber-400 rotate-45 mx-auto my-1"></div>

                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                        We create spaces that enable Everyday Joys; one community, one family, and one home at a time.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">

                    {/* Card 1: Quality */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#081e36] to-[#030e1a] border border-amber-500/30 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                        <div>
                            {/* Image Part */}
                            <div className="h-44 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600"
                                    alt="Quality Construction"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081e36] via-transparent to-transparent"></div>
                                {/* Golden Badge Icon */}
                                <div className="absolute -bottom-4 left-5 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-[#081e36] flex items-center justify-center shadow-lg text-[#081e36]">
                                    <Gem className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="p-5 pt-7 space-y-2">
                                <h3 className="text-lg font-serif font-bold text-white">
                                    Quality
                                </h3>
                                <div className="w-6 h-[1.5px] bg-amber-400/80"></div>
                                <p className="text-slate-300 text-xs leading-relaxed font-light pt-1">
                                    We maintain the highest standards in construction, design, and customer service.
                                </p>
                            </div>
                        </div>

                        {/* Arrow Action Button */}
                        <div className="p-5 pt-0 flex justify-end">
                            <button className="w-8 h-8 rounded-full bg-amber-400 text-[#081e36] flex items-center justify-center hover:bg-amber-300 transition-colors shadow-md">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Transparency & Trust */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#081e36] to-[#030e1a] border border-amber-500/30 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                        <div>
                            {/* Image Part */}
                            <div className="h-44 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600"
                                    alt="Transparency & Trust"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081e36] via-transparent to-transparent"></div>
                                {/* Golden Badge Icon */}
                                <div className="absolute -bottom-4 left-5 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-[#081e36] flex items-center justify-center shadow-lg text-[#081e36]">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="p-5 pt-7 space-y-2">
                                <h3 className="text-lg font-serif font-bold text-white">
                                    Transparency <br />& Trust
                                </h3>
                                <div className="w-6 h-[1.5px] bg-amber-400/80"></div>
                                <p className="text-slate-300 text-xs leading-relaxed font-light pt-1">
                                    We believe in clear communication, honest dealings, and long-term relationships.
                                </p>
                            </div>
                        </div>

                        {/* Arrow Action Button */}
                        <div className="p-5 pt-0 flex justify-end">
                            <button className="w-8 h-8 rounded-full bg-amber-400 text-[#081e36] flex items-center justify-center hover:bg-amber-300 transition-colors shadow-md">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 3: Customer Commitment */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#081e36] to-[#030e1a] border border-amber-500/30 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                        <div>
                            {/* Image Part */}
                            <div className="h-44 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                                    alt="Customer Commitment"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081e36] via-transparent to-transparent"></div>
                                {/* Golden Badge Icon */}
                                <div className="absolute -bottom-4 left-5 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-[#081e36] flex items-center justify-center shadow-lg text-[#081e36]">
                                    <Users className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="p-5 pt-7 space-y-2">
                                <h3 className="text-lg font-serif font-bold text-white">
                                    Customer <br />Commitment
                                </h3>
                                <div className="w-6 h-[1.5px] bg-amber-400/80"></div>
                                <p className="text-slate-300 text-xs leading-relaxed font-light pt-1">
                                    Your satisfaction is our priority. We are committed to understanding your needs and delivering the right solutions.
                                </p>
                            </div>
                        </div>

                        {/* Arrow Action Button */}
                        <div className="p-5 pt-0 flex justify-end">
                            <button className="w-8 h-8 rounded-full bg-amber-400 text-[#081e36] flex items-center justify-center hover:bg-amber-300 transition-colors shadow-md">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Card 4: Prime Location */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#081e36] to-[#030e1a] border border-amber-500/30 shadow-xl flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                        <div>
                            {/* Image Part */}
                            <div className="h-44 relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600"
                                    alt="Prime Location"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#081e36] via-transparent to-transparent"></div>
                                {/* Golden Badge Icon */}
                                <div className="absolute -bottom-4 left-5 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-[#081e36] flex items-center justify-center shadow-lg text-[#081e36]">
                                    <MapPin className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Part */}
                            <div className="p-5 pt-7 space-y-2">
                                <h3 className="text-lg font-serif font-bold text-white">
                                    Prime <br />Location
                                </h3>
                                <div className="w-6 h-[1.5px] bg-amber-400/80"></div>
                                <p className="text-slate-300 text-xs leading-relaxed font-light pt-1">
                                    We develop properties in high-potential, well-connected locations for a better future.
                                </p>
                            </div>
                        </div>

                        {/* Arrow Action Button */}
                        <div className="p-5 pt-0 flex justify-end">
                            <button className="w-8 h-8 rounded-full bg-amber-400 text-[#081e36] flex items-center justify-center hover:bg-amber-300 transition-colors shadow-md">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </div>

            </section>


            {/* ========================================================================= */}
            {/* SECTION 2: WHY CHOOSE US - WHY SHOULD YOU CHOOSE US?                      */}
            {/* ========================================================================= */}
            <section className="max-w-7xl mx-auto space-y-8 relative z-10 pt-6">

                {/* Header */}
                <div className="text-center space-y-2 max-w-3xl mx-auto">
                    <div className="flex items-center justify-center space-x-3">
                        <div className="h-[1px] w-12 bg-amber-500"></div>
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-amber-600 font-semibold">
                            WHY CHOOSE US
                        </span>
                        <div className="h-[1px] w-12 bg-amber-500"></div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0c2340]">
                        Why Should You <span className="text-[#c5a059] font-serif">Choose Us?</span>
                    </h2>

                    <p className="text-slate-600 text-xs md:text-sm font-light leading-relaxed">
                        We go beyond real estate to create lasting relationships, exceptional value, and spaces you'll be proud to call home.
                    </p>
                </div>

                {/* 6 Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                    {/* Item 01 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <Briefcase className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    Seasoned Team
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    01
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                A team of experienced professionals dedicated to your success.
                            </p>
                        </div>
                    </div>

                    {/* Item 02 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <Coins className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    Cost-Efficient Solutions
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    02
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                Best property options that give you maximum value.
                            </p>
                        </div>
                    </div>

                    {/* Item 03 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <FileText className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    Comprehensive & Personalized Guidance
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    03
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                End-to-end support tailored to your requirements.
                            </p>
                        </div>
                    </div>

                    {/* Item 04 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <Globe className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    Expert Advisors
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    04
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                Industry experts with deep market knowledge.
                            </p>
                        </div>
                    </div>

                    {/* Item 05 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <BarChart3 className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    Client-Centric Approach
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    05
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                Your goals and satisfaction always come first.
                            </p>
                        </div>
                    </div>

                    {/* Item 06 */}
                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-amber-200/60 shadow-md hover:shadow-xl hover:border-amber-400 transition-all flex items-start gap-4 relative group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shrink-0 shadow-sm text-amber-800">
                            <Headphones className="w-5 h-5" />
                        </div>

                        <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="font-serif font-bold text-sm text-[#0c2340]">
                                    24x7 Support
                                </h3>
                                <span className="text-xl font-serif font-light text-amber-300 group-hover:text-amber-500 transition-colors">
                                    06
                                </span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed font-light">
                                Always available to assist you at every step.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Consultation CTA Banner */}
                <div className="rounded-3xl bg-gradient-to-r from-[#0c2340] via-[#091b33] to-[#040e1c] p-8 sm:p-10 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                    <div className="absolute -right-16 -top-16 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="space-y-2 text-center md:text-left z-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            <span>Free Property Advisory</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                            Ready to Find Your Dream Property with Us?
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
                            Connect directly with our luxury consultants for site visits, guaranteed price sheets and custom investment blueprints.
                        </p>
                    </div>

                    <div className="z-10 shrink-0">
                        <button
                            type="button"
                            onClick={() =>
                                openEnquiryModal({
                                    title: 'Schedule Free Property Advisory',
                                    subtitle: 'Speak with our senior investment analysts about top residential & commercial developments.',
                                    source: 'About Us Bottom Banner'
                                })
                            }
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center space-x-2"
                        >
                            <span>Schedule Consultation</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

            </section>

        </div>
    );
}