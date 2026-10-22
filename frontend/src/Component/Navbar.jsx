import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logoIVIPL.png';
import { useEnquiry } from '../context/EnquiryContext';
/* --- 3D Animated Logo Core --- */
function Interactive3DLogo() {
  const meshRef = useRef();

  // Subtle rotation animation on every frame + mouse parallax tracking
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.pointer.y * 0.4;
      meshRef.current.rotation.y = state.pointer.x * 0.4 + state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.3}>
        {/* Icosahedron mesh for high-tech geometric aesthetic */}
        <icosahedronGeometry args={[1, 0]} />
        {/* Dynamic distorted material with gradient light reflection */}
        <MeshDistortMaterial
          color="#6366f1"
          emissive="#38bdf8"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

/* --- Main Navbar Component --- */
export default function Navbar() {
  const { openEnquiryModal } = useEnquiry();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleProjectNavigation = (sectionId) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdown(false);
    setIsMobileMenuOpen(false);

    if (location.pathname === '/' || location.pathname === '/home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `/#${sectionId}`);
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setServicesDropdown(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdown(false);
    }, 250);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/aboutus' },
    {
      name: 'Project',
      href: '#project',
      hasDropdown: true,
      subItems: [
        {
          title: 'Commercial',
          sectionId: 'commercial',
          desc: 'Premium commercial spaces & modern hubs'
        },
        {
          title: 'Residential',
          sectionId: 'residential',
          desc: 'Luxury homes & modern living spaces'
        },
      ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isItemActive = (item) => {
    if (item.href === '/' && (location.pathname === '/' || location.pathname === '/home')) return true;
    if (item.href !== '/' && !item.href.startsWith('#') && location.pathname === item.href) return true;
    if (item.hasDropdown && item.subItems?.some((sub) => sub.href && location.pathname === sub.href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pt-2 sm:pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${isScrolled
          ? 'bg-slate-900/90 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-indigo-500/10 py-2.5 px-4 sm:px-6'
          : 'bg-slate-900/50 backdrop-blur-md border border-white/10 py-3 px-4 sm:px-6'
          }`}
      >
        <div className="flex items-center justify-between">

          {/* Logo Section - Scaled Up and Proportional */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <img
              src={logo}
              alt="IVIPL Logo"
              className="h-8 xs:h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (dropdownTimeoutRef.current) {
                          clearTimeout(dropdownTimeoutRef.current);
                          dropdownTimeoutRef.current = null;
                        }
                        setServicesDropdown((prev) => !prev);
                      }}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isItemActive(item)
                        ? 'text-white bg-white/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''
                          }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdown && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 z-50 transition-all duration-200"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-3 shadow-2xl shadow-black/50">
                          {item.subItems?.map((sub, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleProjectNavigation(sub.sectionId)}
                              className="w-full text-left block p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                            >
                              <div className="text-sm font-semibold text-slate-200 group-hover:text-indigo-400 transition-colors">
                                {sub.title}
                              </div>
                              {sub.desc && (
                                <div className="text-xs text-slate-400 mt-0.5 group-hover:text-slate-300 transition-colors">
                                  {sub.desc}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isItemActive(item)
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                    {isItemActive(item) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></span>
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isItemActive(item)
                      ? 'text-white bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                    {isItemActive(item) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"></span>
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Call To Action */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                openEnquiryModal({
                  title: 'Get Started with IVIPL',
                  subtitle: 'Connect with our real estate specialists for verified property guidance.',
                  source: 'Navbar Desktop CTA'
                })
              }
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-full group bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="relative px-5 py-2 transition-all ease-in duration-75 rounded-full flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors active:scale-95"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-2 pb-2 max-h-[75vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 pr-2 py-1 flex flex-col gap-1.5 border-l-2 border-indigo-500/30 ml-4 my-1">
                        {item.subItems?.map((sub, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleProjectNavigation(sub.sectionId)}
                            className="w-full text-left block p-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            <div className="font-medium text-indigo-300">{sub.title}</div>
                            {sub.desc && <div className="text-xs text-slate-400">{sub.desc}</div>}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isItemActive(item)
                      ? 'text-white bg-indigo-600/20 border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isItemActive(item)
                      ? 'text-white bg-indigo-600/20 border border-indigo-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openEnquiryModal({
                  title: 'Get Started with IVIPL',
                  subtitle: 'Connect with our real estate specialists for verified property guidance.',
                  source: 'Navbar Mobile CTA'
                });
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-indigo-500/25 active:scale-95 transition-all cursor-pointer"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}