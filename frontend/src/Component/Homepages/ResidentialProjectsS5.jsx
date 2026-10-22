import React, { useState } from "react";
import { useEnquiry } from "../../context/EnquiryContext";

const projectsData = [
  {
    id: 1,
    title: "Golden Grande",
    subtitle: "LUXURY LIVING REDEFINED",
    location: "Noida",
    image: "/images/r1.png",
    features: [
      {
        text: "Premium Apartments",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
          </svg>
        ),
      },
      {
        text: "Modern Amenities",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.425.878-.852.622l-4.71-2.822a.563.563 0 00-.58 0l-4.71 2.822c-.427.256-.968-.136-.852-.622l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ),
      },
      {
        text: "Prime Location",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "Godrej Majesty",
    subtitle: "A ROYAL WAY OF LIVING",
    location: "Delhi",
    image: "/images/r2.png",
    features: [
      {
        text: "Spacious Homes",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        ),
      },
      {
        text: "Green Surroundings",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 009 9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c-2 0-4 1.5-4 4s2 3 4 3 4-.5 4-3-2-4-4-4z" />
          </svg>
        ),
      },
      {
        text: "World-Class Amenities",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 3,
    title: "Diligent Builders",
    subtitle: "HOMES FOR A BRIGHTER TOMORROW",
    location: "Uttar Pradesh",
    image: "/images/r3.png",
    features: [
      {
        text: "Quality Construction",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17L4.25 8a2.652 2.652 0 010-3.75l.172-.172a2.652 2.652 0 013.75 0l7.17 7.172" />
          </svg>
        ),
      },
      {
        text: "Trusted Developer",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
          </svg>
        ),
      },
      {
        text: "Family Friendly",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6 0 3.375 3.375 0 016 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 4,
    title: "Brook & Rivulet",
    subtitle: "MODERN WATERFRONT LIVING",
    location: "Noida Extension",
    image: "/images/r4.png",
    features: [
      {
        text: "High-Rise Living",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4 0h4" />
          </svg>
        ),
      },
      {
        text: "Luxury Amenities",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.425.878-.852.622l-4.71-2.822a.563.563 0 00-.58 0l-4.71 2.822c-.427.256-.968-.136-.852-.622l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ),
      },
      {
        text: "Scenic Views",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 5,
    title: "RN Construction",
    subtitle: "CRAFTED WITH PRECISION",
    location: "Greater Noida",
    image: "/images/r5.png",
    features: [
      {
        text: "Modern Elevation",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5v3" />
          </svg>
        ),
      },
      {
        text: "Premium Quality",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
          </svg>
        ),
      },
      {
        text: "Independent Homes",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 6,
    title: "La Royale",
    subtitle: "ROYAL LIFESTYLE & ELEGANCE",
    location: "Noida",
    image: "/images/r6.png",
    features: [
      {
        text: "Grand Entry",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.5A2.25 2.25 0 0018.25 8.25H5.75A2.25 2.25 0 003.5 10.5V21" />
          </svg>
        ),
      },
      {
        text: "Prime Connectivity",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        ),
      },
      {
        text: "Secure Gated Community",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 7,
    title: "KVD Wind Park",
    subtitle: "SERENE LANDSCAPES",
    location: "Greater Noida",
    image: "/images/r7.png",
    features: [
      {
        text: "Windward Design",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
      },
      {
        text: "Open Terraces",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
        ),
      },
      {
        text: "Vastu Compliant",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 8,
    title: "Oasis Venetia Heights",
    subtitle: "ITALIAN-INSPIRED LIVING",
    location: "Greater Noida West",
    image: "/images/r8.png",
    features: [
      {
        text: "Central Courtyard",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
      {
        text: "Club Facilities",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2h0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
      },
      {
        text: "Ample Parking",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8m4-8v8m-4-4h8m-9 8h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 9,
    title: "Oasis GrandStand",
    subtitle: "PREMIUM SPORTS ADDRESS",
    location: "Greater Noida",
    image: "/images/r9.png",
    features: [
      {
        text: "Stadium Views",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        ),
      },
      {
        text: "Multi-Sport Arena",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>
        ),
      },
      {
        text: "High Return",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a1.125 1.125 0 011.59 0L21.75 9M19.5 9h2.25V6.75" />
          </svg>
        ),
      },
    ],
  },
];

export default function ResidentialProjects() {
  const { openEnquiryModal } = useEnquiry();
  const [activeIndex, setActiveIndex] = useState(0);

  // Determine items to display in the grid (showing 3 items per view)
  const itemsPerPage = 3;
  const maxIndex = projectsData.length - itemsPerPage;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const displayedProjects = projectsData.slice(activeIndex, activeIndex + itemsPerPage);

  return (
    <section id="residential" className="relative min-h-screen bg-[#FAF7F2] flex flex-col justify-center items-center py-8 px-4 md:px-8 font-serif overflow-hidden">

      {/* Top Decorative Roof Icon + Title */}
      <div className="text-center mb-6 z-10">
        <h2 className="text-2xl md:text-3xl text-[#1a1a1a] font-serif font-bold tracking-tight mb-1">
          Residential <span className="text-[#B8860B]">Projects</span>
        </h2>

        {/* House / Roof divider accent */}
        <div className="flex items-center justify-center space-x-2 my-1.5">
          <div className="h-[1px] w-10 bg-[#C49A45]/50"></div>
          <svg className="w-3.5 h-3.5 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <div className="h-[1px] w-10 bg-[#C49A45]/50"></div>
        </div>

        <p className="text-gray-500 text-xs font-sans tracking-wide">
          Thoughtfully designed homes for a better tomorrow
        </p>
      </div>

      {/* Main Carousel Wrapper */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-3 md:-left-4 z-20 w-8 h-8 rounded-full bg-[#122A20] text-white flex items-center justify-center shadow-md border border-[#C49A45]/40 hover:bg-[#1a3d2e] transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-3">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-gray-900 via-gray-900 to-[#0d1813] border border-[#C49A45]/30 flex flex-col justify-between h-[380px] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image with Dark Overlay Gradient */}
              <div className="absolute inset-0 z-0 bg-[#091712]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1510] via-[#0B1510]/60 to-transparent"></div>
              </div>

              {/* Location Badge (Top-Left) */}
              <div className="relative z-10 p-3.5">
                <div className="inline-flex items-center space-x-1 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                  <svg className="w-3 h-3 text-[#C49A45]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white text-[11px] font-sans font-medium">{project.location}</span>
                </div>
              </div>

              {/* Content Section (Bottom) */}
              <div className="relative z-10 p-4 flex flex-col justify-end space-y-2.5">

                {/* Titles */}
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#F4E3B2] tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-[9px] font-sans font-semibold tracking-widest text-gray-300 uppercase mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                {/* Features Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C49A45]/40 to-transparent"></div>

                {/* Features Grid */}
                <div className="grid grid-cols-3 gap-1.5 text-center py-0.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center space-y-1">
                      <div className="p-1 bg-black/40 rounded-md backdrop-blur-sm border border-white/10">
                        {feature.icon}
                      </div>
                      <span className="text-[9px] font-sans text-gray-300 font-medium leading-tight">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Read More / Enquire Button */}
                <div className="pt-1 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiryModal({
                        title: `${project.title} - Site Visit & Details`,
                        subtitle: `${project.subtitle} • Location: ${project.location}`,
                        projectName: project.title,
                        projectType: 'Residential',
                        location: project.location,
                        source: 'Residential Showcase'
                      })
                    }
                    className="bg-gradient-to-r from-[#DFC07B] to-[#B8860B] hover:from-[#EBD08D] hover:to-[#A37407] text-[#122A20] font-sans text-[11px] font-bold py-1.5 px-4 rounded-full flex items-center space-x-1.5 transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>Enquire & Details</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-3 md:-right-4 z-20 w-8 h-8 rounded-full bg-[#122A20] text-white flex items-center justify-center shadow-md border border-[#C49A45]/40 hover:bg-[#1a3d2e] transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center space-x-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                ? "w-5 bg-[#B8860B]"
                : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
          />
        ))}
      </div>

    </section>
  );
}