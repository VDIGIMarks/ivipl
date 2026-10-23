import React from 'react';
import {
    Home,
    Building2,
    Handshake,
    TrendingUp,
    Phone,
    Mail,
    MapPin,
    ChevronRight,
    ChevronUp
} from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../src/assets/logoIVIPL.png';
import { useEnquiry } from '../context/EnquiryContext';

export default function Footer() {
    const { openEnquiryModal } = useEnquiry();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavSection = (sectionId) => {
        if (location.pathname === '/' || location.pathname === '/home') {
            const elem = document.getElementById(sectionId);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', `/#${sectionId}`);
            }
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#031930] text-white font-sans relative overflow-hidden py-8 px-4 md:px-8 border-t border-amber-500/20">
            {/* Custom 3D Emerge Animations */}
            <style>{`
                @keyframes emerge3d {
                    0% {
                        opacity: 0;
                        transform: scale(0.85) translateZ(-100px) translateY(20px);
                    }
                    70% {
                        transform: scale(1.02) translateZ(10px) translateY(-2px);
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

            {/* Background city skyline opacity overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200')` }}
            ></div>

            <div className="max-w-7xl mx-auto space-y-6 relative z-10 animate-emerge">

                {/* ================= MAIN FOOTER CONTENT ================= */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Column 1: Company Info & Badges (Golden Pill Container) */}
                    <div className="lg:col-span-5 space-y-4">

                        {/* Golden Glowing Container for Logo */}
                        <div className="relative rounded-[18px] bg-[#021326] border border-amber-500/40 p-3 md:p-4 shadow-[0_0_25px_rgba(234,179,8,0.3)] flex items-center justify-center min-h-[70px] w-fit">
                            <img
                                src={logo}
                                alt="Investyedya Infratech Logo"
                                className="h-10 md:h-12 w-auto object-contain"
                            />
                        </div>
                        {/* Description */}
                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light max-w-lg pt-0.5">
                            Our Company is the Growing Investment Advisor in India. We work with Top Real Estate Companies to Provide the Best Advices to find their Perfect Home.
                        </p>

                        {/* 4 Feature Badges (Glassmorphism Style) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">

                            <button
                                type="button"
                                onClick={() => handleNavSection('residential')}
                                className="flex flex-col items-center justify-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all cursor-pointer group"
                            >
                                <div className="w-7 h-7 rounded-full bg-transparent border border-amber-400/50 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                    <Home className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] font-semibold text-slate-200 leading-tight">
                                    Residential Projects
                                </span>
                            </button>

                            <button
                                type="button"
                                onClick={() => handleNavSection('commercial')}
                                className="flex flex-col items-center justify-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all cursor-pointer group"
                            >
                                <div className="w-7 h-7 rounded-full bg-transparent border border-amber-400/50 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] font-semibold text-slate-200 leading-tight">
                                    Commercial Projects
                                </span>
                            </button>

                            <div className="flex flex-col items-center justify-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all">
                                <div className="w-7 h-7 rounded-full bg-transparent border border-amber-400/50 flex items-center justify-center mb-1">
                                    <Handshake className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] font-semibold text-slate-200 leading-tight">
                                    Trusted Partnerships
                                </span>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center p-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-amber-400/40 hover:bg-white/[0.08] transition-all">
                                <div className="w-7 h-7 rounded-full bg-transparent border border-amber-400/50 flex items-center justify-center mb-1">
                                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[10px] font-semibold text-slate-200 leading-tight">
                                    Long-term Value
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Column 2: Important Links */}
                    <div className="lg:col-span-2 space-y-3 pt-1">
                        <div>
                            <h4 className="font-serif text-base md:text-lg font-semibold text-white tracking-wide">
                                Important <span className="text-amber-400">Links</span>
                            </h4>
                            <div className="w-10 h-[2px] bg-amber-400 mt-1"></div>
                        </div>

                        <ul className="space-y-2 text-xs md:text-sm">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About', path: '/aboutus' },
                                { name: 'Contact', path: '/contact' },
                                { name: 'Blog', path: '/blog' }
                            ].map((item, idx) => (
                                <li key={idx}>
                                    {item.path.startsWith('/') ? (
                                        <Link
                                            to={item.path}
                                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                            className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors group py-0.5 border-b border-white/5"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronRight className="w-3.5 h-3.5 text-amber-400/70 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.path}
                                            className="flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors group py-0.5 border-b border-white/5"
                                        >
                                            <span>{item.name}</span>
                                            <ChevronRight className="w-3.5 h-3.5 text-amber-400/70 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="lg:col-span-2 space-y-3 pt-1">
                        <div>
                            <h4 className="font-serif text-base md:text-lg font-semibold text-white tracking-wide">
                                Quick <span className="text-amber-400">Links</span>
                            </h4>
                            <div className="w-10 h-[2px] bg-amber-400 mt-1"></div>
                        </div>

                        <ul className="space-y-2 text-xs md:text-sm">
                            {[
                                { name: 'Residential', sectionId: 'residential' },
                                { name: 'Commercial', sectionId: 'commercial' },
                                { name: 'Projects', sectionId: 'residential' },
                                { name: 'Gallery', sectionId: 'commercial' },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <button
                                        type="button"
                                        onClick={() => handleNavSection(item.sectionId)}
                                        className="w-full flex items-center justify-between text-slate-300 hover:text-amber-400 transition-colors group py-0.5 border-b border-white/5 cursor-pointer text-left"
                                    >
                                        <span>{item.name}</span>
                                        <ChevronRight className="w-3.5 h-3.5 text-amber-400/70 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Connect With Us */}
                    <div className="lg:col-span-3 space-y-3 pt-1">
                        <div>
                            <h4 className="font-serif text-base md:text-lg font-semibold text-white tracking-wide">
                                Connect <span className="text-amber-400">With Us</span>
                            </h4>
                            <div className="w-10 h-[2px] bg-amber-400 mt-1"></div>
                        </div>

                        <div className="space-y-2.5 text-xs md:text-sm text-slate-300">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="font-medium">+918810351182</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="font-medium">info@ivipl.co.in</span>
                            </div>

                            <div className="flex items-start gap-2.5">
                                <div className="w-7 h-7 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="font-medium leading-relaxed">
                                    Office C-70, SECTOR - 63, NOIDA-201301 U.P.
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    openEnquiryModal({
                                        title: 'Request a Callback & Brochure',
                                        subtitle: 'Leave your contact info and our team will call you within 15 minutes.',
                                        source: 'Footer Contact Column'
                                    })
                                }
                                className="w-full mt-2 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
                            >
                                <span>Request a Callback</span>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-2 pt-1">
                            <a href="https://www.facebook.com/InvestInfratech" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-[#031930] transition-all" aria-label="Facebook">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                            </a>
                            <a href="https://www.instagram.com/investvedya?mdxt=anRzN2p5bmc2dHkz" className="w-8 h-8 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-amber-400 hover:text-[#031930] transition-all" aria-label="Instagram">
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="none" stroke="currentColor" strokeWidth="2"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line></svg>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-white/10 my-2"></div>

                {/* ================= BOTTOM BAR ================= */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-slate-400">
                    <p>© 2026 Investyedya Infratech Pvt.Ltd. All Rights Reserved.</p>

                    <div className="flex items-center gap-3">
                        <a href="#privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a>
                        <span>|</span>
                        <a href="#sitemap" className="hover:text-amber-400 transition-colors">Sitemap</a>
                    </div>
                </div>

            </div>

            {/* Scroll To Top Button */}
            <button
                onClick={scrollToTop}
                className="absolute right-4 bottom-4 w-9 h-9 rounded-full bg-amber-400 text-[#031930] shadow-lg flex items-center justify-center hover:bg-amber-300 hover:scale-110 transition-all z-30 focus:outline-none"
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-5 h-5 font-bold" />
            </button>
        </footer>
    );
}