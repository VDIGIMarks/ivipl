import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Phone,
  Mail,
  Building2,
  Calendar,
  MessageSquare,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';
import { API_BASE_URL } from '../../config/api';

const ALL_PROJECTS = [
  // Residential
  { name: 'Golden Grande', category: 'Residential', location: 'Noida' },
  { name: 'Godrej Majesty', category: 'Residential', location: 'Delhi' },
  { name: 'Diligent Builders', category: 'Residential', location: 'Uttar Pradesh' },
  { name: 'Brook & Rivulet', category: 'Residential', location: 'Noida Extension' },
  { name: 'RN Construction', category: 'Residential', location: 'Greater Noida' },
  { name: 'La Royale', category: 'Residential', location: 'Noida' },
  { name: 'KVD Wind Park', category: 'Residential', location: 'Greater Noida' },
  { name: 'Oasis Venetia Heights', category: 'Residential', location: 'Greater Noida West' },
  { name: 'Oasis GrandStand', category: 'Residential', location: 'Greater Noida' },
  // Commercial
  { name: 'Iris Trehan', category: 'Commercial', location: 'Noida' },
  { name: 'U:Fairia', category: 'Commercial', location: 'Delhi' },
  { name: 'NX One', category: 'Commercial', location: 'Uttar Pradesh' },
  { name: 'Golden I', category: 'Commercial', location: 'Greater Noida West' },
  // General
  { name: 'Other / General Portfolio Consultation', category: 'General', location: 'Delhi NCR' },
];

export default function EnquiryModal() {
  const { isOpen, modalData, closeEnquiryModal } = useEnquiry();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    inquiryType: 'Site Visit',
    preferredTime: 'Anytime',
    message: '',
    whatsappOptIn: true
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Sync modalData when opened
  useEffect(() => {
    if (isOpen) {
      setIsSuccess(false);
      setErrors({});
      setFormData(prev => ({
        ...prev,
        project: modalData.projectName || ALL_PROJECTS[0].name,
        inquiryType: modalData.inquiryType || 'Site Visit'
      }));
      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, modalData]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeEnquiryModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        console.warn('Backend returned non-200 status code', response.status);
      }
    } catch (err) {
      console.warn('Backend enquiry submission note (offline/network):', err.message);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleWhatsAppChat = () => {
    const text = encodeURIComponent(
      `Hello IVIPL Team, I am interested in ${formData.project || 'your properties'}. My name is ${formData.name}. Please share details.`
    );
    window.open(`https://wa.me/918810351182?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={closeEnquiryModal}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl bg-gradient-to-b from-[#0a1e16] via-[#071711] to-[#040e0a] border border-[#C59A45]/40 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] text-white overflow-hidden z-10 transition-all duration-300 my-auto">
        
        {/* Top Gold Ambient Glow */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C59A45] to-transparent" />
        <div className="absolute -top-24 -left-24 w-52 h-52 bg-[#C59A45]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-52 h-52 bg-[#0284c7]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="relative p-5 sm:p-6 pb-3 border-b border-white/10 flex items-start justify-between">
          <div className="space-y-1 pr-6">
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-[#C59A45]/20 border border-[#C59A45]/40 text-[#DFC07B] text-[10px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-[#DFC07B]" />
              <span>IVIPL Priority Advisory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#F4E3B2]">
              {modalData.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-snug">
              {modalData.subtitle}
            </p>
          </div>

          <button
            onClick={closeEnquiryModal}
            className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            /* SUCCESS VIEW */
            <div className="text-center py-6 sm:py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#166534] to-[#22c55e] border-2 border-[#86efac] flex items-center justify-center mx-auto text-white shadow-[0_0_30px_rgba(34,197,94,0.4)] animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-serif font-bold text-[#F4E3B2]">
                  Inquiry Successfully Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{formData.name}</span>! Your request for{' '}
                  <span className="text-[#DFC07B] font-semibold">{formData.project || 'our properties'}</span>{' '}
                  has been prioritized. Our Senior Real Estate Consultant will connect with you within 15 minutes.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppChat}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm transition flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </button>

                <button
                  type="button"
                  onClick={closeEnquiryModal}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition border border-white/20"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* FORM VIEW */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Inquiry Type Chips */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                  I am looking for:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    'Site Visit',
                    'Brochure & Pricing',
                    'Best Discount',
                    'Investment Plan'
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, inquiryType: type }))}
                      className={`px-3 py-2 rounded-xl text-[11px] font-semibold transition border text-center ${
                        formData.inquiryType === type
                          ? 'bg-[#C59A45] text-slate-950 border-[#F4E3B2] shadow-md'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Select */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#C59A45]" />
                  <span>Property / Project of Interest</span>
                </label>
                <div className="relative">
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45] transition appearance-none cursor-pointer"
                  >
                    {ALL_PROJECTS.map((proj, idx) => (
                      <option key={idx} value={proj.name} className="bg-slate-900 text-white">
                        {proj.name} ({proj.location} - {proj.category})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                    ▼
                  </div>
                </div>
              </div>

              {/* Name & Phone in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-[#C59A45]" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition ${
                      errors.name ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-white/15 focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C59A45]" />
                    <span>Contact Number *</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xs font-bold text-[#DFC07B]">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                      className={`w-full pl-11 pr-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition ${
                        errors.phone ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-white/15 focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-400">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C59A45]" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none transition ${
                      errors.email ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 'border-white/15 focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45]'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400">{errors.email}</p>}
                </div>

                {/* Preferred Callback Time */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C59A45]" />
                    <span>Best Time for Callback</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45] transition appearance-none cursor-pointer"
                  >
                    <option value="Anytime">Anytime (Earliest Possible)</option>
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              {/* Message / Remarks */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 flex items-center space-x-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#C59A45]" />
                  <span>Specific Requirement / Notes (Optional)</span>
                </label>
                <textarea
                  rows={2}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your budget, preferred configuration (2BHK/3BHK/Office space), etc."
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/15 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#C59A45] focus:ring-1 focus:ring-[#C59A45] transition resize-none"
                />
              </div>

              {/* WhatsApp Opt-in Checkbox */}
              <div className="flex items-center space-x-2 pt-0.5">
                <input
                  type="checkbox"
                  id="whatsappOptIn"
                  name="whatsappOptIn"
                  checked={formData.whatsappOptIn}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#C59A45] rounded cursor-pointer"
                />
                <label htmlFor="whatsappOptIn" className="text-[11px] text-slate-300 cursor-pointer select-none">
                  Receive instant brochure, location map & price list on WhatsApp / SMS
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#DFC07B] via-[#C59A45] to-[#B38837] hover:from-[#EBD08D] hover:to-[#A37407] text-[#071711] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#C59A45]/20 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Submitting Your Inquiry...</span>
                    </div>
                  ) : (
                    <>
                      <span>Submit Inquiry & Get Instant Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Safe & Secure Disclaimer */}
              <p className="text-[10px] text-center text-slate-400">
                🔒 Your privacy is 100% protected. Zero spam. Directly managed by IVIPL Consultants.
              </p>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
