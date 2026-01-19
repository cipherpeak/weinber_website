import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import hero from "../../assets/banner/hero_car_detail.png"

const BANNER_SLIDES = [
  {
    id: 1,
    image: hero,
    title1: "Superior Protection.",
    title2: "Showroom Shine.",
    description: "Premium American-made nano-ceramic coatings and detailing supplies. Trusted by professionals since 1999."
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail3_gdeiqi.webp",
    title1: "Advanced Technology.",
    title2: "Lasting Beauty.",
    description: "Experience the next generation of car care with our scientifically formulated products details."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail1_qqtlr4.webp",
    title1: "Professional Grade.",
    title2: "Easy Application.",
    description: "Achieve professional results right in your own garage with our easy-to-use solutions."
  }
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-[28rem] lg:h-[50rem] rounded-3xl overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
           {/* Image */}
            <img
              src={BANNER_SLIDES[currentSlide].image}
              alt={BANNER_SLIDES[currentSlide].title1}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-12 mt-16 md:mt-0">
              <div className="max-w-4xl">
                <motion.h1
                  className="text-white font-bold tracking-tight text-balance leading-tight
                             text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                             drop-shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent block">
                    {BANNER_SLIDES[currentSlide].title1}
                  </span>
                  <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                    {BANNER_SLIDES[currentSlide].title2}
                  </span>
                </motion.h1>

                <motion.p
                  className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {BANNER_SLIDES[currentSlide].description}
                </motion.p>

                <motion.div
                  className="mt-6 sm:mt-8 flex gap-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <Link to="/products">
                    <button className="px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-[#0047AB] border border-[#0047AB] rounded-full text-white font-medium text-sm sm:text-base hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      Shop Products
                    </button>
                  </Link>

                  <a className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl" href="https://www.amazon.com">
                    Order on Amazon
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Floating Elements (Constant) */}
        <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl z-20 pointer-events-none"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl z-20 pointer-events-none"
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Navigation Arrows */}
        <div className="absolute bottom-10 left-4 sm:left-6 lg:left-12 z-30 flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#0047AB] shadow-lg hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#0047AB] shadow-lg hover:scale-110 transition-all border border-gray-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-3 z-30 hidden md:flex">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
