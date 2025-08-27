"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleClick = () => {
    if (typeof window !== "undefined" && window.Paperform?.popup) {
      window.Paperform.popup("great-minds-ai-bootcamp-2025");
    } else {
      console.warn("Paperform popup function is not available yet.");
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/20 backdrop-blur-lg" : ""
        }`}
      >
        <div className="container max-w-[85%] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Carreer
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="hover:text-cyan-300 transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                className="hover:text-cyan-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#plans"
                className="hover:text-cyan-300 transition-colors"
              >
                Plans
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-300 transition-colors"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-purple-800 to-pink-600 hover:from-purple-900 hover:to-pink-700 px-6 py-2 rounded-full transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 py-4 bg-black/30 rounded-lg backdrop-blur-lg">
              <div className="flex flex-col space-y-3 px-4">
                <a
                  href="#about"
                  className="hover:text-cyan-300 transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Services
                </a>
                <a
                  href="#plans"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Plans
                </a>
                <a
                  href="#contact"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contact
                </a>
                <button className="bg-gradient-to-r from-purple-800 to-pink-600 px-6 py-2 rounded-full text-center">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-[#2C0368] to-[#0a0a0a] z-0"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10"></div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text + Buttons */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The new best Platform To Learn{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                AI
              </span>
            </h1>
            <div className="text-5xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                'AI Carreer BootCamP'
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Click on the{" "}
              <span className="font-semibold text-purple-400 ">
                Open Here
              </span>{" "}
              button to apply.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              <button className="group border-2 border-purple-400 hover:bg-black px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleClick} className="cursor-pointer border-2 border-purple-400 hover:bg-purple-800 px-8 py-4 rounded-full text-lg font-semibold transition-all">
                Open Here
              </button>
            </div>
          </div>

          {/* Right Side: Poster */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/poster.jpg"
              alt="AI Carreer BootCamP"
              className="max-w-full md:max-w-md rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
      <Script
        src="https://paperform.co/__embed.min.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

export default HomePage;
