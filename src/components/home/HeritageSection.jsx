import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Leaf, Recycle, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import { GiFruitTree } from "react-icons/gi";

const HERITAGE_SLIDES = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294715/image4_hkhrwo.png",
    badge: "Since 1985",
    label: "Sustainable Legacy",
    title: "Roots in Kuttanad's <span class='text-[#b30000]'>Rich Heritage</span>",
    description: "Kuttanad, the rice bowl of Kerala, is one of the few places in the world where farming happens below sea level. At Avees, we honor this unique legacy while pioneering sustainable practices for future generations.",
    stats: [
      { value: "10+", label: "Countries Reached" },
      { value: "100,000+", label: "Families Served" },
      { value: "100%", label: "Sustainable" }
    ],
    features: [
      { icon: Droplets, text: "Below Sea Level Farming" },
      { icon: Shield, text: "Traditional Wisdom" },
      { icon: Recycle, text: "Modern Innovation" },
      { icon: GiFruitTree, text: "Sustainable Future" }
    ]
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756362912/kuttanad-landscape-CTDZeafT_hiawjw.jpg",
    badge: "Chemical Free",
    label: "Pure & Natural",
    title: "Nature's Gift <span class='text-[#b30000]'>Preserved Purely</span>",
    description: "Our commitment to purity starts from the soil. We embrace traditional farming wisdom that rejects harmful chemicals, ensuring that every grain and spice retains its natural potency and flavor.",
    stats: [
      { value: "0%", label: "Preservatives" },
      { value: "100%", label: "Natural Ingredients" },
      { value: "24/7", label: "Quality Checks" }
    ],
    features: [
      { icon: Leaf, text: "100% Organic" },
      { icon: Shield, text: "Lab Tested" },
      { icon: Recycle, text: "Eco-Friendly Pack" },
      { icon: GiFruitTree, text: "Farm Fresh" }
    ]
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail3_gdeiqi.webp",
    badge: "Global Reach",
    label: "World Class",
    title: "From Kerala to <span class='text-[#b30000]'>The World</span>",
    description: "What started in the humble paddy fields of Kerala now reaches dining tables across the globe. We bridge the gap between traditional authentic flavors and modern culinary needs.",
    stats: [
      { value: "40+", label: "Global Partners" },
      { value: "Premium", label: "Quality Standards" },
      { value: "35+", label: "Years of Trust" }
    ],
    features: [
      { icon: Droplets, text: "Authentic Taste" },
      { icon: Shield, text: "ISO Certified" },
      { icon: Recycle, text: "Global Standards" },
      { icon: GiFruitTree, text: "Community Growth" }
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#b30000]/10 to-transparent z-10"></div>
                
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6 }}
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute z-50 top-6 left-6 border bg-white border-[#b30000] text-white rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-[#b30000]" />
                    <span className="text-sm font-semibold text-black">{slide.badge}</span>
                  </div>
                </motion.div>

                {/* Navigation Buttons (Over Image on Desktop) */}
                <div className="absolute bottom-6 left-6 z-50 flex gap-4">
                     <button 
                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#b30000] shadow-lg hover:bg-gray-100 hover:scale-110 transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button 
                         onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                         className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#b30000] shadow-lg hover:bg-gray-100 hover:scale-110 transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {/* Section Label */}
                  <div className="inline-flex items-center gap-2 border border-[#b30000] text-[#b30000] px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Recycle className="w-4 h-4" />
                    {slide.label}
                  </div>

                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {slide.description}
                  </p>

                  {/* Heritage Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-[#b30000] flex items-center justify-center shrink-0">
                          <feature.icon className="w-5 h-5 text-[#b30000]" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between sm:justify-start sm:gap-12 pt-8 border-t border-gray-200">
                    {slide.stats.map((stat, idx) => (
                      <div key={idx} className="text-center sm:text-left">
                        <div className="text-2xl lg:text-3xl font-bold text-[#b30000]">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</div>
                      </div>
                    ))}
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
