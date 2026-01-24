import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { fadeInUp, fadeIn, scaleUp } from "../../utils/animations"

const BANNER_SLIDES = [
  {
    id: 1,
    image: "https://res.cloudinary.com/dtutjoxdz/image/upload/v1769078031/lb_to_lane_xkudvt.jpg",
    title1: "PPF Coating",
    title2: "Color, Clear, Print",
    description: "Ultimate protection for your vehicle's paint with our advanced Paint Protection Films."
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/dtutjoxdz/image/upload/v1769079872/bluecloth_hero_dgwesq.jpg",
    title1: "Coatings",
    title2: "Ceramic, Graphene, Borophine",
    description: "Next-level surface protection technology for unmatched durability and shine."
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/dtutjoxdz/image/upload/v1769079872/tinit_hero_vaoitm.jpg",
    title1: "Interior Detailing",
    title2: "Revitalize Your Cabin",
    description: "Deep cleaning and conditioning to keep your car's interior looking and feeling brand new."
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/dtutjoxdz/image/upload/v1769079872/polish_hero_cch2yo.jpg",
    title1: "Exterior Detailing",
    title2: "Restore the Glow",
    description: "Professional exterior treatments to enhance gloss and remove imperfections."
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/dtutjoxdz/image/upload/v1769079871/coating_hero_toew08.jpg",
    title1: "Solutions",
    title2: "Lubricants",
    description: "High-performance lubricants and solutions for optimal automotive maintenance."
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
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeIn}
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
                             text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl
                             drop-shadow-2xl"
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
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
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  {BANNER_SLIDES[currentSlide].description}
                </motion.p>

                <motion.div
                  className="mt-6 sm:mt-8 flex gap-3"
                  variants={scaleUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/products">
                    <motion.button
                      className="px-8 py-3 bg-[#0047AB] text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Shop Products
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>

                  <motion.a
                    className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-xl"
                    href="https://www.amazon.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Order on Amazon
                  </motion.a>
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
          <motion.button
            onClick={prevSlide}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#0047AB] shadow-lg border border-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white text-[#0047AB] shadow-lg border border-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-3 z-30 hidden md:flex">
          {BANNER_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/40 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
