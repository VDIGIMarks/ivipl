import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Phone, ArrowRight, Send } from 'lucide-react';
import { useEnquiry } from '../../context/EnquiryContext';

/* =========================================================
   VIDEO PATH
   ========================================================= */
const backgroundVid = "/videos/backgroundvid1.mp4";

/* =========================================================
   3D INTERACTIVE MESH COMPONENT
   ========================================================= */
function Interactive3DLogo() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.pointer.y * 0.25;
            meshRef.current.rotation.y =
                state.pointer.x * 0.25 + state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float
            speed={1.8}
            rotationIntensity={0.4}
            floatIntensity={0.6}
        >
            <mesh ref={meshRef} scale={1.3}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#4f46e5"
                    emissive="#0284c7"
                    emissiveIntensity={0.15}
                    roughness={0.1}
                    metalness={0.2}
                    distort={0.3}
                    speed={1.5}
                    wireframe
                />
            </mesh>
        </Float>
    );
}

/* =========================================================
   HERO COMPONENT
   ========================================================= */
export default function Hero() {
    const { openEnquiryModal } = useEnquiry();

    return (
        <div className="relative min-h-screen font-sans selection:bg-indigo-500 selection:text-white flex flex-col justify-between overflow-hidden bg-transparent">

            {/* =================================================
                BACKGROUND VIDEO & OVERLAY
               ================================================= */}
            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center p-0">
                <div className="w-full h-full overflow-hidden relative">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={backgroundVid} type="video/mp4" />
                    </video>
                    {/* Soft Transparent Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50" />
                </div>
            </div>

            {/* =================================================
                HERO MAIN SECTION
               ================================================= */}
            <section className="relative z-10 pt-24 sm:pt-32 md:pt-36 pb-12 sm:pb-16 md:pb-20 flex-grow flex items-center">
                <div className="max-w-7xl mx-auto flex justify-center px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-12 gap-8 lg:gap-12 w-full">

                        {/* LEFT COLUMN - Centered Content */}
                        <div className="lg:col-span-12 flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">

                            {/* HEADING */}
                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.15] max-w-4xl mx-auto drop-shadow-md px-2 sm:px-0">
                                Your Preferred Partner in{" "}
                                <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-200 bg-clip-text text-transparent">
                                    Real Estate
                                </span>{" "}
                                Solutions
                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-normal drop-shadow-sm mx-auto px-2 sm:px-0">
                                Investvedya Infratech (IVIPL) is a technology-driven, solution-based consulting firm located at Greater Noida (West). We provide the most efficient roadmap to your dream residential or commercial property in India.
                            </p>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-4 pt-2 w-full max-w-xs sm:max-w-none mx-auto">
                                <button
                                    type="button"
                                    onClick={() =>
                                        openEnquiryModal({
                                            title: 'Book Advisory Consultation',
                                            subtitle: 'Connect with our luxury investment advisors for verified property options.',
                                            source: 'Hero Section'
                                        })
                                    }
                                    className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-105 active:scale-95 cursor-pointer"
                                >
                                    <Phone className="w-4 h-4 shrink-0" />
                                    <span>Book Advisory Consultation</span>
                                    <ArrowRight className="w-4 h-4 shrink-0" />
                                </button>

                                <a
                                    href="#overview"
                                    className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 hover:bg-white/30 text-white font-semibold text-xs sm:text-sm transition-all text-center shadow-sm hover:scale-105 active:scale-95"
                                >
                                    Learn About IVIPL
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}