import React from 'react';
import { PhoneCall, Sparkles, MessageCircle } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

export default function FloatingEnquiryBtn() {
  const { openEnquiryModal } = useEnquiry();

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    window.open(
      'https://wa.me/918810351182?text=Hello%20IVIPL,%20I%20would%20like%20to%20know%20more%20about%20your%20properties.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-2.5">
      {/* WhatsApp Quick Chat Icon */}
      <button
        onClick={handleWhatsApp}
        className="group relative w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 border border-white/30"
        aria-label="Direct WhatsApp Chat"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        {/* Tooltip on Hover */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-white/10 shadow-md">
          Chat on WhatsApp
        </span>
      </button>

      {/* Main Enquire Now Pill Button */}
      <button
        onClick={() =>
          openEnquiryModal({
            title: 'Schedule a Site Visit / Fast Callback',
            subtitle: 'Share your contact details to receive full brochure & price breakdown instantly.',
            source: 'Floating CTA'
          })
        }
        className="group relative inline-flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-gradient-to-r from-[#DFC07B] via-[#C59A45] to-[#B8860B] text-[#071711] font-bold text-xs uppercase tracking-wider shadow-[0_8px_25px_rgba(197,154,69,0.4)] hover:shadow-[0_8px_30px_rgba(197,154,69,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-[#F4E3B2]/50"
      >
        {/* Pulsing indicator */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#071711]"></span>
        </span>

        <Sparkles className="w-4 h-4 text-[#071711] animate-pulse" />
        <span className="font-extrabold font-sans">Enquire Now</span>

        {/* Floating Tooltip */}
        <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900/95 text-amber-200 text-[11px] font-medium px-3 py-1.5 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-amber-500/30 shadow-xl">
          Get Instant Pricing & Brochure ✨
        </span>
      </button>
    </div>
  );
}
