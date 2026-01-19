import { motion } from "framer-motion";

function ProductBanner() {
  // Image URLs for different devices - Placeholders for Car Detailing
  const desktopImage = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1920&auto=format&fit=crop";
  const mobileImage = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop";

  // Animation variants
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
  };

  return (
    <section className="relative h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] flex items-center justify-center overflow-hidden md:m-5 m-2">
      {/* Desktop Image */}
      <img
        src={desktopImage}
        alt="Product Banner"
        className="hidden md:block w-full h-full lg:object-cover md:object-contain rounded-3xl"
      />

      {/* Mobile Image */}
      <img
        src={mobileImage}
        alt="Product Banner"
        className="md:hidden w-full h-full object-cover rounded-3xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>

      {/* Text Content */}
      <motion.div
        className="absolute lg:mt-0 mt-28 inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl">
          <motion.div
            className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
            variants={floatingVariants}
            animate="animate"
          >
            <h1 className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent">
              Engineered for <span className="bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent">
                <br />Perfection
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-4 sm:mt-6 hidden md:block text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Discover our premium range of ceramic coatings, waxes, and detailers designed for the ultimate showroom shine.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="gap-3 flex">
              <a className="px-6 sm:px-8 py-3 sm:py-4 bg-[#0047AB] border border-[#0047AB] rounded-full text-white font-medium text-sm sm:text-base hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl" href="https://www.amazon.com">
                Shop All Products
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProductBanner;