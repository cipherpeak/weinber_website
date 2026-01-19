import { motion } from "framer-motion";

export const HeroSection = ({ onExploreClick }) => {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
  };

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
    <section className="relative  h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] m-2 md:m-5 rounded-3xl flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1920&auto=format&fit=crop"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20 " />

      <motion.div
        className="absolute lg:mt-0 mt-28 inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8"
        variants={textVariants}
      >
        <div className="max-w-5xl">
          <motion.h1
            className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
            variants={floatingVariants}
            animate="animate"
          >
            <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
              Grow with Weinber
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent">
              Build the Future Together
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Join our network of successful partners and be part of a global automotive protection brand.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              Explore Opportunities
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
