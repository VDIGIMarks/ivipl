import React from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Building2,
    Car,
    Users,
    ExternalLink,
    ArrowRight
} from 'lucide-react';

export default function CHomeMapS2() {
    return (
        <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">

            {/* BACKGROUND IMAGE CONTAINER */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/bgcardimg.png" // Apne local image path se replace karein (e.g. "/images/map-bg.jpg")
                    alt="Section Background"
                    className="w-full h-full object-cover object-center filter brightness-90 scale-105"
                />
                {/* Dark Overlay Gradient for Smooth Look */}

            </div>

            {/* MAIN CONTAINER CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto  backdrop-blur-md rounded-[32px] p-6 sm:p-8 lg:p-10 border border-white/80 shadow-2xl overflow-hidden">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT COLUMN: Map & Heading */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        {/* Section Header */}
                        <div>
                            <div className="flex items-center space-x-2 text-gray-500 text-xs tracking-[0.2em] font-semibold uppercase mb-1">
                                <span className="w-6 h-[1px] bg-gray-400"></span>
                                <span>Our Location</span>
                                <span className="w-6 h-[1px] bg-gray-400"></span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#111e38] tracking-tight">
                                Find Us on <span className="text-[#c59b27]">Map</span>
                            </h2>

                            <p className="text-gray-600 text-xs sm:text-sm mt-2 max-w-xl">
                                Visit our office for project details, site visits or any queries. Our team will be happy to assist you.
                            </p>
                        </div>

                        {/* Map Box */}
                        <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-white/80 shadow-inner group">
                            {/* Map Canvas Background */}
                            <iframe
                                title="Google Map Noida Sector 63"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11472322304!2d77.3735!3d28.6280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5456e355555%3A0x2a1e67272719262e!2sSector%2063%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="w-full h-full border-0 filter contrast-[0.95] saturate-[0.85]"
                                loading="lazy"
                            ></iframe>

                            {/* View on Google Maps Button Overlay */}
                            <div className="absolute bottom-4 left-4 z-10">
                                <a
                                    href="https://maps.google.com/?q=Office+C-70+SECTOR+63+NOIDA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl text-xs font-semibold text-gray-800 shadow-md hover:bg-white hover:shadow-lg transition-all border border-gray-100"
                                >
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <MapPin className="w-3 h-3 fill-current" />
                                    </div>
                                    <span>View on Google Maps</span>
                                    <ExternalLink className="w-3 h-3 text-gray-400 ml-1" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visit Our Office Card */}
                    <div className="lg:col-span-5 flex">
                        <div className="w-full bg-white/90 backdrop-blur-md rounded-[28px] p-6 sm:p-7 border border-white shadow-lg flex flex-col justify-between relative overflow-hidden">

                            {/* Building Image Overlay (Top Right) */}
                            <div className="absolute top-0 right-0 w-36 sm:w-44 h-36 sm:h-44 opacity-15 pointer-events-none overflow-hidden rounded-bl-full">
                                <img
                                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                                    alt="Modern Building"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                {/* Card Subtitle & Title */}
                                <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] font-bold text-gray-400 uppercase mb-0.5">
                                    <span>Visit Our Office</span>
                                    <span className="w-4 h-[1px] bg-gray-300"></span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111e38] mb-2">
                                    Get In <span className="text-[#c59b27]">Touch</span>
                                </h3>

                                <p className="text-xs text-gray-500 mb-6 max-w-xs leading-relaxed">
                                    We're here to help you with project details, site visits or any queries. Reach out to us anytime.
                                </p>

                                {/* Contact Information Pills */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                                    {/* Phone */}
                                    <div className="bg-[#f5f8fc] p-3 rounded-2xl border border-blue-50/80 flex items-center space-x-3 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Phone className="w-4 h-4 fill-current" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-semibold text-gray-400 uppercase">Phone number</span>
                                            <span className="block text-xs font-bold text-gray-800 tracking-tight">+91-8810351182</span>
                                        </div>
                                    </div>

                                    {/* Mail */}
                                    <div className="bg-[#faf6ee] p-3 rounded-2xl border border-amber-50/80 flex items-center space-x-3 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-[#d6a836] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <Mail className="w-4 h-4 fill-current" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-semibold text-gray-400 uppercase">Mail us</span>
                                            <span className="block text-xs font-bold text-gray-800 tracking-tight truncate max-w-[120px]">info@ivipl.co.in</span>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="bg-[#f5f8fc] p-3 rounded-2xl border border-blue-50/80 flex items-center space-x-3 sm:flex-col sm:items-start sm:space-x-0 sm:space-y-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                                            <MapPin className="w-4 h-4 fill-current" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] font-semibold text-gray-400 uppercase">Address</span>
                                            <span className="block text-[10px] font-bold text-gray-800 leading-snug">Office C-70, SEC-63, NOIDA</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Features Row */}
                                <div className="grid grid-cols-3 gap-2 py-3 border-t border-gray-100 text-center mb-6">
                                    <div className="flex flex-col items-center">
                                        <Building2 className="w-4 h-4 text-[#111e38] mb-1" />
                                        <span className="text-[11px] font-bold text-gray-800 block">Easy to Locate</span>
                                        <span className="text-[9px] text-gray-400 block">Prime Sector 63, Noida</span>
                                    </div>

                                    <div className="flex flex-col items-center border-x border-gray-100 px-1">
                                        <Car className="w-4 h-4 text-[#111e38] mb-1" />
                                        <span className="text-[11px] font-bold text-gray-800 block">Ample Parking</span>
                                        <span className="text-[9px] text-gray-400 block">Hassle-free parking</span>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <Users className="w-4 h-4 text-[#111e38] mb-1" />
                                        <span className="text-[11px] font-bold text-gray-800 block">Visit Our Team</span>
                                        <span className="text-[9px] text-gray-400 block">Always ready to assist</span>
                                    </div>
                                </div>
                            </div>

                            {/* Get Directions Button */}
                            <a
                                href="https://maps.google.com/?q=Office+C-70+SECTOR+63+NOIDA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3.5 px-6 rounded-2xl bg-[#0f2851] hover:bg-[#0b1e3f] text-white font-semibold text-xs tracking-wider transition-all duration-300 flex items-center justify-center space-x-2 group shadow-md"
                            >
                                <span>Get Directions</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}