import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@heroui/button";

function OpportunityCta({ formref }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const scrollToBranchCards = () => {
    if (formref.current) {
      formref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const buttonRef = useRef(null);

  return (
    <section
      className="py-10 md:py-16 px-4"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`relative bg-gradient-to-r from-[#0047AB] to-blue-800 rounded-3xl p-10 md:p-16 overflow-hidden hover:shadow-2xl transition-all duration-700 transform border border-gray-100 ${isVisible
              ? "opacity-100 translate-y-0 hover:-translate-y-2"
              : "opacity-0 translate-y-10"
            }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <h3
              className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-1000 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              Let's Grow Together
            </h3>
            <p
              className={`text-xl text-blue-100 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              Be part of the Weinber family and take unparalleled shine to the world.
            </p>

            <div
              ref={buttonRef}
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 transition-all duration-1000 delay-400 ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
            >
              <Button
                size="lg"
                className="px-8 py-4 bg-white text-blue-700 rounded-md font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 duration-300 text-lg"
                onClick={scrollToBranchCards}
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        </div>
      </div>
    </section>
  );
}

export default OpportunityCta;