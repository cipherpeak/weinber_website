import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import hero from "../../assets/banner/hero_car_detail.png"

export default function Banner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  }

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: "easeIn" } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: isMobile ? 0.01 : 0.05 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative w-full "
        variants={videoVariants}
      >
        <motion.img
          src={hero}
          alt="Luxury Car Detailing"
          className="w-full lg:h-[50rem] h-[28rem] object-cover rounded-3xl"
        />

        <motion.div
          className="absolute lg:mt-0 mt-28 inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8 bg-black/40 rounded-3xl"
          variants={textVariants}
        >
          <div className="max-w-4xl">
            <motion.h1
              className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Superior Protection.
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent">
                Showroom Shine.
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Premium American-made nano-ceramic coatings and detailing supplies. Trusted by professionals since 1999.
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <div className="gap-3 flex">
                <Link to="/products">

                  <button className="px-6 sm:px-8 py-3 sm:py-4 cursor-pointer bg-[#0047AB] border border-[#0047AB] rounded-full text-white font-medium text-sm sm:text-base hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Shop Products
                  </button>
                </Link>

                <a className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl" href="https://www.amazon.com">
                  Order on Amazon
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
    </motion.section>
  )
}
