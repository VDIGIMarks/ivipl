import React from 'react';
import {
  BuildingOffice2Icon,
  BuildingLibraryIcon,
  SunIcon,
  GlobeAsiaAustraliaIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useEnquiry } from '../../context/EnquiryContext';

const locations = [
  {
    id: 1,
    name: 'Noida',
    image: '/images/noidapimg.png',
    icon: BuildingOffice2Icon,
  },
  {
    id: 2,
    name: 'Delhi',
    image: '/images/delhigatep.png',
    icon: BuildingLibraryIcon,
  },
  {
    id: 3,
    name: 'Uttar Pradesh',
    image: '/images/ukpimg.png',
    icon: SunIcon,
  },
  {
    id: 4,
    name: 'Uttarakhand',
    image: '/images/hillpimg.png',
    icon: GlobeAsiaAustraliaIcon,
  },
];

export default function ExploreLocations() {
  const { openEnquiryModal } = useEnquiry();

  return (
    <section className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 font-serif">
      <div className="max-w-6xl w-full text-center py-10 px-4">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#C49A45] font-normal mb-2">
          Explore <span className="text-gray-900 font-bold">projects in your desired locations</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm font-sans mb-10">
          Discover premium residential and investment opportunities in India's most promising locations.
        </p>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {locations.map((loc) => {
            const IconComponent = loc.icon;
            return (
              <div
                key={loc.id}
                onClick={() =>
                  openEnquiryModal({
                    title: `Properties in ${loc.name}`,
                    subtitle: `Discover verified residential & commercial properties located in ${loc.name}.`,
                    location: loc.name,
                    source: 'Explore Locations Card'
                  })
                }
                className="group relative h-56 rounded-2xl overflow-hidden shadow-md cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                {/* Background Image */}
                <img
                  src={loc.image}
                  alt={loc.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Card Pill Banner */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-full flex items-center justify-between border border-white/80 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-[#C49A45]" />
                    <span className="font-sans font-semibold text-gray-800 text-sm">
                      {loc.name}
                    </span>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#C49A45] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ChevronRightIcon className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button with decorative lines */}
        <div className="flex items-center justify-center space-x-4">
          <div className="h-[1px] w-16 bg-gray-300"></div>
          <button
            type="button"
            onClick={() =>
              openEnquiryModal({
                title: 'Explore All Regional Properties',
                subtitle: 'Get complete portfolio lists across Noida, Delhi, UP & Uttarakhand.',
                source: 'Explore Locations CTA'
              })
            }
            className="bg-[#123326] hover:bg-[#1b4d39] text-white font-sans text-xs tracking-wider uppercase font-semibold py-3 px-6 rounded-full flex items-center space-x-2 transition-all duration-200 cursor-pointer shadow-md hover:scale-105 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <div className="h-[1px] w-16 bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}