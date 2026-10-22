import React, { createContext, useContext, useState, useCallback } from 'react';

const EnquiryContext = createContext(null);

export function EnquiryProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    title: 'Book a Consultation & Site Visit',
    subtitle: 'Get verified pricing, floor plans, and exclusive developer offers.',
    projectName: '',
    projectType: 'General',
    location: '',
    source: 'Direct'
  });

  const openEnquiryModal = useCallback((data = {}) => {
    setModalData({
      title: data.title || 'Book a Consultation & Site Visit',
      subtitle: data.subtitle || 'Get verified pricing, floor plans, and exclusive developer offers.',
      projectName: data.projectName || '',
      projectType: data.projectType || 'General',
      location: data.location || '',
      source: data.source || 'Website'
    });
    setIsOpen(true);
  }, []);

  const closeEnquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <EnquiryContext.Provider value={{ isOpen, modalData, openEnquiryModal, closeEnquiryModal }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}
