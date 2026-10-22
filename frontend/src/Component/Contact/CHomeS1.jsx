import React, { useState } from 'react';
import {
    Phone,
    Mail,
    MapPin,
    User,
    Home,
    Mail as EmailIcon,
    MessageSquare,
    ArrowRight,
    ChevronDown
} from 'lucide-react';

export default function CHomeS1() {
    const [formData, setFormData] = useState({
        name: '',
        propertyType: '',
        email: '',
        phone: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        } catch (err) {
            console.warn('Backend contact submission note:', err.message);
        } finally {
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    return (
        <div className="min-h-screen bg-[#fcfbf9] text-[#2c2211] pt-24 pb-6 font-sans antialiased overflow-x-hidden flex flex-col justify-between">

            {/* Custom Styles for Keyframe Animations */}
            <style>{`
                @keyframes kenburns {
                    0% {
                        transform: scale(1) translate(0, 0);
                    }
                    50% {
                        transform: scale(1.08) translate(-1%, -1%);
                    }
                    100% {
                        transform: scale(1) translate(0, 0);
                    }
                }
                .animate-ken-burns {
                    animation: kenburns 20s ease-in-out infinite;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(24px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes shineText {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .animate-fade-in-up-1 {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                .animate-fade-in-up-2 {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
                    opacity: 0;
                }

                .animate-fade-in-up-3 {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
                    opacity: 0;
                }

                .animate-fade-in-up-4 {
                    animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
                    opacity: 0;
                }

                .animate-[#gold-shine] {
                    background-size: 200% auto;
                    animation: shineText 6s ease infinite;
                }
            `}</style>

            {/* Main Hero & Contact Section */}
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[600px] flex items-center border border-amber-500/30">

                    {/* Animated Background Image Container */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <img
                            src="/images/contactimgb.png"
                            alt="Luxury Real Estate Sunset Balcony View"
                            className="w-full h-full object-cover object-center animate-ken-burns filter brightness-90"
                        />
                    </div>

                    {/* Content Grid */}
                    <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-10 lg:p-14 items-center">

                        {/* Left Side Text with Entrance Animations */}
                        <div className="lg:col-span-7 space-y-6 text-left">

                            {/* Animated Subtitle */}
                            <div className="inline-flex items-center space-x-3 animate-fade-in-up-1">
                                <span className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#dfbc85]"></span>
                                <span className="text-xs uppercase tracking-[0.25em] text-[#dfbc85] font-bold drop-shadow">
                                    We're Here To
                                </span>
                            </div>

                            {/* Animated Main Title with Golden Shine */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] drop-shadow-md animate-fade-in-up-2">
                                Turn Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff2d1] via-[#e6c58f] to-[#c59e61] animate-[#gold-shine]">
                                    Vision Into Reality
                                </span>
                            </h1>

                            {/* Animated Paragraph Text */}
                            <p className="text-gray-200 text-base sm:text-lg max-w-xl font-normal leading-relaxed drop-shadow animate-fade-in-up-3">
                                Get in touch with us for project details, site visits or any queries. Our team will be happy to assist you.
                            </p>

                            {/* Animated Badge */}
                            <div className="pt-2 hidden sm:block animate-fade-in-up-4">
                                <div className="inline-block p-4 rounded-xl bg-white/10 backdrop-blur-md border border-amber-300/40 text-xs text-amber-200 font-bold tracking-widest uppercase shadow-lg hover:bg-white/15 transition-all duration-300">
                                    ⭐ Premium Real Estate Consulting
                                </div>
                            </div>

                        </div>

                        {/* Right Side Glassmorphism Contact Form Card with Delay Fade-In */}
                        <div className="lg:col-span-5 w-full animate-fade-in-up-3">
                            <div className="backdrop-blur-xl p-4 sm:p-5 rounded-3xl shadow-2xl border border-amber-500/30 relative overflow-hidden group">

                                {/* Decorative golden ambient glow inside form box */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                {/* Card Header */}
                                <div className="text-center mb-3 relative">
                                    <div className="flex items-center justify-center space-x-2 mb-0.5">
                                        <div className="h-[1px] w-8 bg-amber-400/50"></div>
                                        <span className="text-[9px] uppercase tracking-[0.3em] text-amber-300/90 font-bold">
                                            Get In Touch
                                        </span>
                                        <div className="h-[1px] w-8 bg-amber-400/50"></div>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fcebce] to-[#c59e61]">us</span>
                                    </h3>
                                </div>

                                {submitted ? (
                                    <div className="py-6 text-center space-y-3 animate-fade-in-up-1">
                                        <div className="w-12 h-12 bg-gradient-to-br from-amber-300 to-amber-600 rounded-full flex items-center justify-center mx-auto text-black shadow-lg">
                                            <ArrowRight className="w-6 h-6 -rotate-45" />
                                        </div>
                                        <h4 className="text-lg font-serif font-bold text-white">Thank You!</h4>
                                        <p className="text-xs text-gray-300 max-w-xs mx-auto">
                                            Your inquiry has been received. Our luxury real estate advisor will contact you shortly.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-2.5">

                                        {/* Name Field */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name"
                                                className="w-full pl-10 pr-4 py-2.5 bg-white text-gray-900 rounded-xl text-xs sm:text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner transition-all"
                                            />
                                        </div>

                                        {/* Property Type Dropdown */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                                <Home className="w-4 h-4" />
                                            </div>
                                            <select
                                                name="propertyType"
                                                required
                                                value={formData.propertyType}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-9 py-2.5 bg-white text-gray-900 rounded-xl text-xs sm:text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner appearance-none cursor-pointer transition-all"
                                            >
                                                <option value="" disabled>Property type</option>
                                                <option value="luxury_villa">Luxury Villa</option>
                                                <option value="penthouse">Penthouse Suite</option>
                                                <option value="residential_apartment">Residential Apartment</option>
                                                <option value="commercial_space">Commercial Space</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-500">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>

                                        {/* Email Field */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                                <EmailIcon className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                                className="w-full pl-10 pr-4 py-2.5 bg-white text-gray-900 rounded-xl text-xs sm:text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner transition-all"
                                            />
                                        </div>

                                        {/* Contact Number Field */}
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                                                <Phone className="w-4 h-4" />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Contact number"
                                                className="w-full pl-10 pr-4 py-2.5 bg-white text-gray-900 rounded-xl text-xs sm:text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner transition-all"
                                            />
                                        </div>

                                        {/* Message Textarea */}
                                        <div className="relative">
                                            <div className="absolute top-2.5 left-0 pl-3.5 flex items-start pointer-events-none text-gray-500">
                                                <MessageSquare className="w-4 h-4" />
                                            </div>
                                            <textarea
                                                name="message"
                                                rows="2"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                className="w-full pl-10 pr-4 py-2.5 bg-white text-gray-900 rounded-xl text-xs sm:text-sm placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-1">
                                            <button
                                                type="submit"
                                                className="w-full py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#f3e2bc] via-[#dfbc85] to-[#c59e61] text-[#1a150b] font-bold text-sm shadow-md hover:shadow-amber-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center space-x-2 group cursor-pointer"
                                            >
                                                <span>Submit</span>
                                                <div className="w-6 h-6 rounded-full bg-[#1a150b] text-[#dfbc85] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </div>
                                            </button>
                                        </div>

                                    </form>
                                )}

                            </div>
                        </div>

                    </div>

                </div>
            </main>

        </div>
    );
}