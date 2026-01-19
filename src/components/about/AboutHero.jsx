import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutHero = () => {
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
    <section className="relative h-[28rem] sm:h-[36rem] md:h-[33rem] lg:h-[50rem] flex items-center justify-center overflow-hidden md:m-5 m-2">
      <div className="absolute inset-0 w-full h-full">
        <div
          className="md:hidden absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>

        <div
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-75"></div>
        </div>
      </div>

      <motion.div
        className="absolute lg:mt-0 mt-28 inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8"
        variants={textVariants}
      >
        <div className="max-w-6xl">
          <motion.h1
            className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
            variants={floatingVariants}
            animate="animate"
          >
            <h1 className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent">
              Weinber  <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                The Art of <br /> Perfection
              </span>
            </h1>
          </motion.h1>

          <motion.p
            className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Beyond Shine. Beyond Protection.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="gap-3 flex">
              <Link to="/products">

                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Explore Our Products
                </button>
              </Link>

              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Discover Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
