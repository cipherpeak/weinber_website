import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MoveHorizontal } from "lucide-react";

// Slide Data
const SLIDES = [
  {
    before: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294715/image4_hkhrwo.png",
    after: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754294715/image4_hkhrwo.png",
    title: "Revitalizing <br/> <span class='text-[#0047AB]'>Every Texture</span>",
    description: "Experience the magic of deep cleaning and restoration. Our premium polishing techniques bring back the showroom shine, protecting your surfaces and enhancing their longevity. See the difference for yourself."
  },
  {
    before: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail3_gdeiqi.webp",
    after: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail3_gdeiqi.webp",
    title: "Restoring <br/> <span class='text-[#0047AB]'>Original Glory</span>",
    description: "From dull to dazzling. Our restoration process meticulously removes imperfections, revealing the true beauty of your vehicle's finish."
  },
  {
    before: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail1_qqtlr4.webp",
    after: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail1_qqtlr4.webp",
    title: "Protecting <br/> <span class='text-[#0047AB]'>Your Investment</span>",
    description: "Long-lasting protection against elements. We ensure your car stays cleaner for longer, making maintenance a breeze."
  }
];

const BeforeAfterSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (event) => {
      if (!isDragging || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
      
      const position = ((clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(100, Math.max(0, position)));
    },
    [isDragging]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    setSliderPosition(50); // Reset slider
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setSliderPosition(50); // Reset slider
  };

  const currentData = SLIDES[currentSlide];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-8 lg:col-span-5"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-0.5 w-12 bg-[#b30000]"></div>
                <span className="text-[#b30000] font-bold tracking-wider text-sm uppercase">Transformation</span>
              </div>
              <h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                dangerouslySetInnerHTML={{ __html: currentData.title }}
              />
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {currentData.description}
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 bg-[#0047AB] text-white px-10 py-5 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Slider Controls */}
            <div className="flex items-center gap-4 pt-8">
                <button 
                    onClick={prevSlide}
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 text-gray-600 shadow-sm hover:bg-gray-50 hover:border-[#0047AB] hover:text-[#0047AB] transition-all"
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-200 text-gray-600 shadow-sm hover:bg-gray-50 hover:border-[#0047AB] hover:text-[#0047AB] transition-all"
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>
          </motion.div>

          {/* Slider Side */}
          <div className="relative lg:col-span-7">
            <motion.div 
               key={`img-${currentSlide}`}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               ref={containerRef}
               className="relative z-10 w-full h-[500px] md:h-[650px] lg:h-[750px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-gray-100 bg-gray-100 group"
               onMouseDown={handleMouseDown}
               onTouchStart={handleMouseDown}
               onClick={(e) => {
                 if (containerRef.current) {
                    const rect = containerRef.current.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    setSliderPosition((x / rect.width) * 100);
                 }
               }}
            >
              {/* After Image (Background) */}
              <img 
                src={currentData.after} 
                alt="After" 
                className="absolute inset-0 w-full h-full object-cover"
                draggable="false"
              />
              
              <div className="absolute top-6 right-6 z-20 pointer-events-none">
                 <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-bold tracking-widest text-sm shadow-lg border border-white/50">
                    AFTER
                 </span>
              </div>

              {/* Before Image (Foreground - Clipped) */}
              <div 
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={currentData.before} 
                  alt="Before" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale sepia-[0.3]"
                  draggable="false" 
                />
                
                <div className="absolute top-6 left-6 z-20 pointer-events-none">
                   <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-2 rounded-full font-bold tracking-widest text-sm shadow-lg border border-white/50">
                      BEFORE
                   </span>
                </div>
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                style={{ left: `${sliderPosition}%` }}
              >
                <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl text-[#0047AB] border border-gray-100 hover:scale-110 transition-transform">
                  <MoveHorizontal className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
            
            {/* Background decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#0047AB]/5 blur-[100px] rounded-full"></div>
          </div>
        
        </div>
      </div>
    </section>
  );
};

const ChevronLeftIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>
)

const ChevronRightIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
)

export default BeforeAfterSection;
