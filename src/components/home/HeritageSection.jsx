import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import heroValues1 from '../../assets/banner/hero_ppf.png';
import heroValues2 from '../../assets/banner/hero_interior.png';
import heroValues3 from '../../assets/banner/hero_solutions.png';

const HERITAGE_SLIDES = [
  {
    id: 1,
    image: heroValues1,
    title: "Protect",
    description: "Protect your car with SIRIUS PRO. Our nano ceramic protective coating engineered using advanced nano technology. SIRIUS PRO products are tailor-made to provide you with the best surface protection using latest ceramic coating technology.",
    features: [
      "Nano-Ceramic Coating",
      "Ceramic Boost",
      "Ceramic Prep"
    ]
  },
  {
    id: 2,
    image: heroValues2,
    title: "Revive",
    description: "We offer a variety of car detailing products catering to revive a car's interior and exterior. From cleaning, restoration to polishing and finishing; car detailing goes much beyond than a car wash. Our products also include solutions for damage restoration and thorough cleansing of all parts of the vehicle.",
    features: [
      "Compounds",
      "Polishes",
      "Waxes",
      "Dressing"
    ]
  },
  {
    id: 3,
    image: heroValues3,
    title: "Enhance",
    description: "Enhance your engine and fuel performance using our premium products with curated oil additives and chemical compounds. These additives can be applied to the same base stock for each formulation to create solutions specific to the required application.",
    features: [
      "Engine Oil System Cleaning Detergent",
      "Engine Oil System Treatment",
      "Fuel System Cleaner"
    ]
  }
];

const HeritageSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERITAGE_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERITAGE_SLIDES.length) % HERITAGE_SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERITAGE_SLIDES[currentSlide];

  return (
    <section className="py-10 md:py-16 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Image Section */}
              <div className="relative h-80 lg:h-auto min-h-[400px] lg:min-h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0047AB]/10 to-transparent z-10"></div>

                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6 }}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons (Over Image on Desktop) */}
                <div className="absolute bottom-6 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 z-10 flex gap-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-[#0047AB] transition-all duration-300"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-white/50 bg-black/20 backdrop-blur-md text-white hover:bg-white hover:text-[#0047AB] transition-all duration-300"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Slide Counter */}
                <div className="absolute bottom-[70px] lg:bottom-10 left-1/2 lg:left-40 -translate-x-1/2 lg:translate-x-0 z-10 text-black lg:text-white font-bold tracking-widest text-sm">
                  {slide.id} / {HERITAGE_SLIDES.length}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                    {slide.title}
                  </h2>

                  <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-lg">
                    {slide.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-4 mb-10">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex">
                    <button className="flex items-center gap-2 bg-[#0047AB] text-white px-8 py-3 rounded-full font-bold hover:bg-[#003380] transition-colors">
                      View Products
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
