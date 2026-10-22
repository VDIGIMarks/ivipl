import React, { useState } from "react";
import { useEnquiry } from "../context/EnquiryContext";

const categories = [
    { name: "All Blogs", count: 12 },
    { name: "Project Update", count: 4 },
    { name: "Investment", count: 3 },
    { name: "Lifestyle", count: 2 },
    { name: "Construction", count: 2 },
    { name: "Community", count: 1 },
];

const blogPosts = [
    {
        id: 1,
        title: "Project 2 – A New Benchmark in Modern Living",
        category: "Project Update",
        date: "15 Sep 2025",
        image: "/images/r1.png",
        description:
            "Discover how Project 2 is redefining urban lifestyles with world-class amenities, sustainable design, and a prime location.",
    },
    {
        id: 2,
        title: "Project 1 – Luxury Living Redefined",
        category: "Project Update",
        date: "10 Sep 2025",
        image: "/images/r2.png",
        description:
            "Explore the elegance and comfort of Project 1, where modern architecture meets a vibrant community lifestyle.",
    },
    {
        id: 3,
        title: "Why Project 1 is the Perfect Choice for Your Family",
        category: "Lifestyle",
        date: "05 Sep 2025",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        description:
            "From premium amenities to serene surroundings, learn why Project 1 offers the ideal balance of luxury and convenience.",
    },
    {
        id: 4,
        title: "Real Estate Investment Opportunities in 2025",
        category: "Investment",
        date: "28 Aug 2025",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        description:
            "Explore the top reasons why real estate continues to be one of the most reliable and rewarding investment options.",
    },
    {
        id: 5,
        title: "Project 1 – Construction Milestone Achieved",
        category: "Project Update",
        date: "20 Aug 2025",
        image: "https://virtualconstructionassistants.com/wp-content/uploads/2025/02/Virtual-Construction-Assistants-Photo-10-1024x683-1.jpg",
        description:
            "We are excited to share the latest construction progress of Project 1. A step closer to delivering your dream home.",
    },
    {
        id: 6,
        title: "Building Communities, Not Just Homes",
        category: "Community",
        date: "12 Aug 2025",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        description:
            "At our core, we believe in creating communities that inspire, connect, and enhance everyday living.",
    },
];

export default function Blogs() {
    const { openEnquiryModal } = useEnquiry();
    const [activeCategory, setActiveCategory] = useState("All Blogs");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory =
            activeCategory === "All Blogs" || post.category === activeCategory;
        const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#FAF7F2] text-[#1a1a1a] font-sans">
            {/* Hero Banner */}
            <div className="relative bg-[#07221A] text-white py-16 px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="/images/blogbg.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r   to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto space-y-3">
                    <div className="flex items-center space-x-2">
                        <div className="h-[2px] w-6 bg-[#C59A45]"></div>
                        <span className="text-[#C59A45] text-xs font-bold tracking-widest uppercase">
                            OUR BLOG
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#F4E3B2]">
                        Insights & <span className="font-normal italic">Updates</span>
                    </h1>

                    <p className="text-gray-300 text-xs md:text-sm max-w-xl leading-relaxed font-light">
                        Stay informed with the latest news, project updates, real estate insights and lifestyle stories from our journey of building better communities.
                    </p>
                </div>
            </div>

            {/* Breadcrumb Bar */}

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-4 grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Section: 3-Column Blog Grid */}
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#07221A]">
                            Our Latest <span className="text-[#C59A45]">Blogs</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {filteredPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
                            >
                                <div>
                                    {/* Post Image with Badges */}
                                    <div className="relative h-44 overflow-hidden bg-gray-100">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        {/* Category Badge */}
                                        <span className="absolute top-3 left-3 bg-[#C59A45] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                        {/* Date Badge */}
                                        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-gray-700 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-sm">
                                            <svg className="w-3 h-3 text-[#C59A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span>{post.date}</span>
                                        </span>
                                    </div>

                                    {/* Post Content */}
                                    <div className="p-4 space-y-2">
                                        <h3 className="text-base font-serif font-bold text-[#07221A] leading-snug line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 text-xs font-sans leading-relaxed line-clamp-3">
                                            {post.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Read More Button */}
                                <div className="p-4 pt-0">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            openEnquiryModal({
                                                title: `Inquiry: ${post.title}`,
                                                subtitle: `${post.category} • Published: ${post.date}`,
                                                source: 'Blog Post Card'
                                            })
                                        }
                                        className="bg-gradient-to-r from-[#DFC07B] to-[#C59A45] hover:from-[#EBD08D] hover:to-[#B38837] text-[#07221A] font-sans text-xs font-bold py-2 px-4 rounded-full flex items-center space-x-1.5 transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                                    >
                                        <span>Read More</span>
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: Sidebar */}
                <div className="space-y-6">

                    {/* Search Box */}
                    <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Search blogs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-3 py-1.5 text-xs text-gray-700 outline-none bg-transparent placeholder-gray-400"
                        />
                        <button className="bg-[#C59A45] text-white p-2.5 rounded-xl hover:bg-[#b38837] transition">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </button>
                    </div>

                    {/* Categories Card */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-3">
                        <h3 className="text-base font-serif font-bold text-[#07221A]">
                            Categories
                        </h3>
                        <div className="space-y-1">
                            {categories.map((cat, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveCategory(cat.name)}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition ${activeCategory === cat.name
                                        ? "bg-[#FAF7F2] text-[#07221A] font-bold border border-[#C59A45]/30"
                                        : "text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="flex items-center space-x-2">
                                        <svg className="w-3.5 h-3.5 text-[#C59A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                        <span>{cat.name}</span>
                                    </span>
                                    <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded-full">
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Recent Posts Card */}
                    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <h3 className="text-base font-serif font-bold text-[#07221A]">
                            Recent Posts
                        </h3>
                        <div className="space-y-3">
                            {blogPosts.slice(0, 3).map((post) => (
                                <div key={post.id} className="flex items-center space-x-3 group cursor-pointer">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                                    />
                                    <div className="space-y-0.5">
                                        <h4 className="text-xs font-serif font-bold text-[#07221A] group-hover:text-[#C59A45] transition-colors leading-snug line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <span className="text-[10px] text-gray-400 font-sans">
                                            {post.date}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact / Brochure CTA Card */}
                    <div className="bg-[#07221A] text-white p-6 rounded-2xl shadow-md border border-[#C59A45]/30 space-y-4 relative overflow-hidden">
                        <div className="relative z-10 space-y-2">
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                                <svg className="w-4 h-4 text-[#C59A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>

                            <h3 className="text-base font-serif font-bold text-[#F4E3B2]">
                                Want to Know More About Our Projects?
                            </h3>

                            <p className="text-gray-300 text-xs font-light leading-relaxed">
                                Get the latest updates, brochures and exclusive offers.
                            </p>
                        </div>

                        <div className="pt-2 relative z-10">
                            <button
                                type="button"
                                onClick={() =>
                                    openEnquiryModal({
                                        title: 'Subscribe & Get Project Brochures',
                                        subtitle: 'Receive early-access investor reports, pricing sheets, and new project launches.',
                                        source: 'Blog Sidebar CTA'
                                    })
                                }
                                className="w-full bg-gradient-to-r from-[#DFC07B] to-[#C59A45] hover:from-[#EBD08D] hover:to-[#B38837] text-[#07221A] font-sans text-xs font-bold py-2.5 px-4 rounded-xl flex items-center justify-center space-x-1.5 transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                            >
                                <span>Get Project Brochure & Updates</span>
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}