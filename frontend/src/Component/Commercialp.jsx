import React from 'react';
import {
    MapPin,
    TrendingUp,
    Building2,
    ShieldCheck,
    ArrowRight,
    Sparkles,
    Expand,
    Eye,
    Layers,
    Store
} from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';

const Commercialp = () => {
    const { openEnquiryModal } = useEnquiry();
    const propertyCards = [
        {
            id: 1,
            badge: 'Retail & Office',
            badgeBg: 'bg-blue-600/60',
            title: 'Iris Trehan',
            description: 'A premium commercial destination for modern businesses.',
            image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=800',
            gradient: 'from-[#0b2246] via-[#091b38] to-[#040e1e]',
            highlights: [
                { icon: MapPin, text: 'Prime Location' },
                { icon: Building2, text: 'Modern Design' },
                { icon: TrendingUp, text: 'High Footfall' },
            ],
        },
        {
            id: 2,
            badge: 'Business Hub',
            badgeBg: 'bg-blue-600/60',
            title: 'U:Fairia',
            description: 'Where business meets lifestyle in a vibrant environment.',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
            gradient: 'from-[#02315d] via-[#012344] to-[#001328]',
            highlights: [
                { icon: MapPin, text: 'Strategic Location' },
                { icon: Sparkles, text: 'World-Class Amenities' },
                { icon: TrendingUp, text: 'Great Connectivity' },
            ],
        },
        {
            id: 3,
            badge: 'Premium Spaces',
            badgeBg: 'bg-amber-800/60',
            title: 'NX One',
            description: 'Contemporary commercial spaces for forward-thinking businesses.',
            image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800',
            gradient: 'from-[#3a2818] via-[#24190e] to-[#120c07]',
            highlights: [
                { icon: Building2, text: 'Iconic Architecture' },
                { icon: Expand, text: 'Flexible Spaces' },
                { icon: TrendingUp, text: 'Strong Investment Value' },
            ],
        },
        {
            id: 4,
            badge: 'Mixed Use',
            badgeBg: 'bg-purple-900/60',
            title: 'Golden I',
            description: 'A thriving commercial landmark with endless opportunities.',
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
            gradient: 'from-[#2e0e42] via-[#1d082b] to-[#0d0314]',
            highlights: [
                { icon: Eye, text: 'High Visibility' },
                { icon: Layers, text: 'Excellent Connectivity' },
                { icon: Store, text: 'Ideal for Retail & Office' },
            ],
        },
    ];

    return (
        <div className="bg-slate-900 text-white min-h-screen font-sans pb-16">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-20">
                {/* Background Overlay / Glows */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left Column Text */}
                    <div>
                        <span className="text-amber-300 text-xs tracking-widest font-bold uppercase mb-2 block">
                            Premium Spaces for a Brighter Tomorrow
                        </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                            Commercial <br />
                            Properties
                        </h1>
                        <p className="text-gray-300 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
                            Discover premium commercial spaces designed for business growth, strategic locations, and long-term value.
                        </p>

                        {/* Feature Pills */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                            <div className="flex items-center space-x-2">
                                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                                <span className="text-xs font-semibold leading-tight text-gray-200">
                                    Prime Locations
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <TrendingUp className="w-5 h-5 text-amber-400 shrink-0" />
                                <span className="text-xs font-semibold leading-tight text-gray-200">
                                    High Investment Value
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
                                <span className="text-xs font-semibold leading-tight text-gray-200">
                                    Modern Infrastructure
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                                <span className="text-xs font-semibold leading-tight text-gray-200">
                                    Trusted Developer
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Banner Graphic */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                            <img
                                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                                alt="Commercial Building Skyline"
                                className="w-full h-[320px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Properties Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <span className="text-amber-400/80 text-xs font-bold tracking-widest uppercase block mb-1">
                            Explore Our
                        </span>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Featured Commercial Properties
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <p className="hidden md:block text-xs text-gray-400 max-w-xs border-l border-amber-500/30 pl-4 leading-relaxed">
                            Strategic locations, modern infrastructure and excellent connectivity — explore our top commercial projects.
                        </p>
                        <button
                            type="button"
                            onClick={() =>
                                openEnquiryModal({
                                    title: 'Commercial Portfolio Inquiry',
                                    subtitle: 'Receive complete brochure, floor layouts & available commercial inventory.',
                                    projectType: 'Commercial',
                                    source: 'Commercial Properties Header'
                                })
                            }
                            className="inline-flex items-center gap-2 border border-amber-400/50 hover:border-amber-400 text-amber-300 hover:text-white px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer active:scale-95"
                        >
                            View All Projects <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Property Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {propertyCards.map((property) => (
                        <div
                            key={property.id}
                            className={`group relative rounded-2xl overflow-hidden bg-gradient-to-b ${property.gradient} border border-slate-800/80 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                        >
                            <div>
                                {/* Image & Badge Header */}
                                <div className="relative h-48 overflow-hidden">
                                    <span className={`absolute top-3 left-3 z-10 text-[10px] font-semibold text-white px-3 py-1 rounded-full backdrop-blur-md ${property.badgeBg}`}>
                                        {property.badge}
                                    </span>
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Card Body */}
                                <div className="p-5">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {property.title}
                                    </h3>
                                    <p className="text-xs text-gray-300 mb-6 leading-relaxed min-h-[36px]">
                                        {property.description}
                                    </p>

                                    {/* Highlights List */}
                                    <div className="space-y-2.5 mb-6">
                                        {property.highlights.map((item, idx) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200">
                                                    <Icon className="w-4 h-4 text-amber-300/80 shrink-0" />
                                                    <span>{item.text}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Action */}
                            <div className="p-5 pt-0">
                                <button
                                    type="button"
                                    onClick={() =>
                                        openEnquiryModal({
                                            title: `${property.title} - Space & Price Inquiry`,
                                            subtitle: `${property.badge} • ${property.description}`,
                                            projectName: property.title,
                                            projectType: 'Commercial',
                                            source: 'Commercial Properties Page'
                                        })
                                    }
                                    className="w-fit inline-flex items-center gap-2 bg-amber-200 hover:bg-amber-300 text-slate-900 font-bold text-xs px-4 py-2 rounded-full transition-all duration-200 shadow-md cursor-pointer hover:scale-105 active:scale-95"
                                >
                                    Enquire & Details <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Commercialp;