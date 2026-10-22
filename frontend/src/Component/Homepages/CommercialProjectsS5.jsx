import React, { useState } from "react";
import { useEnquiry } from "../../context/EnquiryContext";

const commercialProjectsData = [
  {
    id: 1,
    title: "Iris Trehan",
    subtitle: "A NEW ERA OF BUSINESS SPACES",
    location: "Noida",
    image: "/images/iris.png",
    features: [
      {
        text: "Retail Spaces",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25M13.5 21h8.25M2.25 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0h4.5M2.25 9l9.75-6 9.75 6M4.5 10.5v7.5m15-7.5v7.5" />
          </svg>
        ),
      },
      {
        text: "Food & Entertainment",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        ),
      },
      {
        text: "High Footfall",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        ),
      },
    ],
  },
  {
    id: 2,
    title: "U:Fairia",
    subtitle: "WHERE BUSINESS MEETS OPPORTUNITY",
    location: "Delhi",
    image: "/images/ukpimg.png",
    features: [
      {
        text: "Premium Offices",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25M13.5 21h8.25M2.25 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0h4.5M2.25 9l9.75-6 9.75 6M4.5 10.5v7.5m15-7.5v7.5" />
          </svg>
        ),
      },
      {
        text: "Business Ecosystem",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197M6 18.719a5.971 5.971 0 01.941-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        ),
      },
      {
        text: "Strategic Location",
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
    id: 3,
    title: "NX One",
    subtitle: "A DESTINATION FOR MODERN BUSINESSES",
    location: "Uttar Pradesh",
    image: "/images/r9.png",
    features: [
      {
        text: "Office Spaces",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 18.75h1.5m3-3h1.5" />
          </svg>
        ),
      },
      {
        text: "Retail & F&B",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
          </svg>
        ),
      },
      {
        text: "Modern Infrastructure",
        icon: (
          <svg className="w-4 h-4 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385c.116.486-.425.878-.852.622l-4.71-2.822a.563.563 0 00-.58 0l-4.71 2.822c-.427.256-.968-.136-.852-.622l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602c-.38-.325-.178-.948.32-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
          </svg>
        ),
      },
    ],
  },
];

export default function CommercialProjectsS5() {
  const { openEnquiryModal } = useEnquiry();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="commercial" className="relative min-h-screen bg-[#FAF7F2] flex flex-col justify-center items-center py-8 px-4 md:px-8 font-serif overflow-hidden">

      {/* Title Header */}
      <div className="text-center mb-6 z-10">
        <h2 className="text-2xl md:text-3xl text-[#1a1a1a] font-serif font-bold tracking-tight mb-1">
          Commercial <span className="text-[#B8860B]">Projects</span>
        </h2>

        {/* Building Icon / Accent Divider */}
        <div className="flex items-center justify-center space-x-2 my-1.5">
          <div className="h-[1px] w-10 bg-[#C49A45]/50"></div>
          <svg className="w-3.5 h-3.5 text-[#C49A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6h1.5m-1.5 3h1.5m-1.5 3h1.5M9 18.75h1.5m3-3h1.5" />
          </svg>
          <div className="h-[1px] w-10 bg-[#C49A45]/50"></div>
        </div>

        <p className="text-gray-500 text-xs font-sans tracking-wide">
          Premium commercial spaces designed for businesses to grow, connect and succeed.
        </p>
      </div>

      {/* Main Carousel Wrapper */}
      <div className="relative w-full max-w-5xl flex items-center justify-center">

        {/* Left Arrow Button */}
        <button
          onClick={() => setActiveIndex((prev) => (prev === 0 ? commercialProjectsData.length - 1 : prev - 1))}
          className="absolute -left-3 md:-left-4 z-20 w-8 h-8 rounded-full bg-gradient-to-r from-[#D8B365] to-[#B8860B] text-gray-900 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Project Cards Grid - Reduced height to h-[380px] */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-3">
          {commercialProjectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-[#091712] border border-[#C49A45]/30 flex flex-col justify-between h-[380px] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 bg-[#091712]">
                <img
                  src={project.image}
                  alt={project.title}
                  /* Added object-cover, w-full, h-full, object-center */
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                {/* Dark Overlay gradient (Fixed color for better contrast) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091712] via-[#091712]/60 to-transparent"></div>
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

              {/* Card Details (Bottom Section) */}
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

                {/* Divider Line */}
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C49A45]/40 to-transparent"></div>

                {/* Features Row */}
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

                {/* CTA Read More / Enquire Button */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiryModal({
                        title: `${project.title} - Commercial Spaces`,
                        subtitle: `${project.subtitle} • Location: ${project.location}`,
                        projectName: project.title,
                        projectType: 'Commercial',
                        location: project.location,
                        source: 'Commercial Projects Showcase'
                      })
                    }
                    className="bg-gradient-to-r from-[#DFC07B] to-[#B8860B] hover:from-[#EBD08D] hover:to-[#A37407] text-[#091712] font-sans text-[11px] font-bold py-1.5 px-4 rounded-full flex items-center space-x-1.5 transition shadow-sm cursor-pointer hover:scale-105 active:scale-95"
                  >
                    <span>Enquire & Details</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>

              </div>

              {/* Decorative Subtle Wave Lines at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#C49A45] via-transparent to-transparent"></div>
            </div>
          ))}
        </div>
        {/* Right Arrow Button */}
        <button
          onClick={() => setActiveIndex((prev) => (prev === commercialProjectsData.length - 1 ? 0 : prev + 1))}
          className="absolute -right-3 md:-right-4 z-20 w-8 h-8 rounded-full bg-gradient-to-r from-[#D8B365] to-[#B8860B] text-gray-900 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex items-center justify-center space-x-1.5 mt-6">
        {[0, 1, 2, 3, 4, 5, 6].map((dot, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx % commercialProjectsData.length)}
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