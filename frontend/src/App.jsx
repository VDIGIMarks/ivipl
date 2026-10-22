import React, { useEffect } from 'react';
import './App.css';
import About from './Component/About';
import Blogs from './Component/Blogs';
import Commercialp from './Component/Commercialp';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import EnquiryModal from './Component/Common/EnquiryModal';
import FloatingEnquiryBtn from './Component/Common/FloatingEnquiryBtn';
import { EnquiryProvider } from './context/EnquiryContext';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If navigating to /residential, scroll to residential section on Home page
    if (pathname === '/residential') {
      const scrollToResidential = () => {
        const resElem = document.getElementById('residential');
        if (resElem) {
          resElem.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToResidential()) {
        const timer = setTimeout(scrollToResidential, 150);
        return () => clearTimeout(timer);
      }
      return;
    }

    // If navigating to /commercial, scroll to commercial section on Home page
    if (pathname === '/commercial') {
      const scrollToCommercial = () => {
        const comElem = document.getElementById('commercial');
        if (comElem) {
          comElem.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToCommercial()) {
        const timer = setTimeout(scrollToCommercial, 150);
        return () => clearTimeout(timer);
      }
      return;
    }

    // If a hash is provided (e.g. #commercial or #residential), scroll to that element
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToHash = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        const timer = setTimeout(scrollToHash, 150);
        return () => clearTimeout(timer);
      }
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <EnquiryProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/residential" element={<Home />} />
        <Route path="/commercial" element={<Home />} />
        <Route path="/commercialp" element={<Commercialp />} />
        <Route path="/commercialpog" element={<Commercialp />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <EnquiryModal />
      <FloatingEnquiryBtn />
    </EnquiryProvider>
  );
}

export default App;
