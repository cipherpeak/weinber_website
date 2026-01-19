import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function OurStory() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: "easeIn" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100, scale: 1.1 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  if (!isLoaded) {
    return (
      <section className="relative w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-3">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-3xl"></div>
      </section>
    );
  }

  return (
    <motion.section
      className="relative w-full md:py-16 px-4 min-h-[50vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden group"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.05 }}
      variants={containerVariants}
    >
      {/* Background Image */}
      <motion.div
        className="absolute md:py-16 px-4 inset-0 w-full h-full"
        variants={imageVariants}
      >
        <img
          src="https://images.unsplash.com/photo-1550505393-2c3586cd176c?q=80&w=1740&auto=format&fit=crop"
          alt="Our Story Banner"
          className="object-cover w-full h-full rounded-3xl"
          loading="lazy"
        />
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col p-4 sm:p-6 md:p-8 lg:p-10 text-white w-full "
        variants={contentVariants}
      >
        <motion.div variants={itemVariants} className="mb-4 md:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold inline-block relative">
            Our Story
            <motion.span
              className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 bg-[#0047AB]"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ amount: 0.05 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </h1>
        </motion.div>

        <motion.div
          className={`flex flex-col items-start w-full ${isMobile
              ? "max-w-full"
              : "max-w-[90%] md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"
            } p-4 sm:p-6 md:p-6 rounded-xl md:rounded-2xl bg-black/60 backdrop-blur-sm border border-white/20 shadow-2xl`}
          variants={itemVariants}
          whileHover={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxShadow: "0 0 20px rgba(227, 30, 36, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 text-left leading-relaxed sm:leading-loose">
            Founded in 1992 in Detroit, Michagan, Weinber Inc. began as a passion project
            to create the perfect car wax. Over three decades, we have evolved into a global
            leader in automotive surface protection, pioneering nano-ceramic technology and
            sustainable detailing solutions. From our lab to your garage, every bottle represents
            our unyielding commitment to excellence and the pursuit of the perfect shine.
          </p>
          <Link to="/about">
            <motion.button
              className="px-5 py-2 cursor-pointer sm:px-6 sm:py-2.5 bg-[#0047AB] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default OurStory;
