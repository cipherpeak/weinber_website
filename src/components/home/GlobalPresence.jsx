import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, CheckCircle } from "lucide-react";

function GlobalPresence() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const flagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 }
  };

  // Only the four countries mentioned by the client
  const exportDestinations = [
    { name: "USA", flag: 'https://flagcdn.com/w160/us.png' },
    { name: "UAE", flag: 'https://flagcdn.com/w160/ae.png' },
    { name: "UK", flag: "https://flagcdn.com/w160/gb.png" },
    { name: "India", flag: "https://flagcdn.com/w160/in.png" },
    { name: "Qatar", flag: 'https://flagcdn.com/w160/qa.png' },
    { name: "KSA", flag: 'https://flagcdn.com/w160/sa.png' },
    { name: "And More", icon: Globe },
  ];

  // Benefits data
  const benefits = [
    "Trusted by elite detailing studios worldwide",
    "Made in USA quality in every bottle"
  ];

  // Corrected dot positions for the map (responsive)
  // Positions calibrated to match the dotted world map image
  const mapDots = [
    { left: "18%", top: "38%", country: "USA" },        // Central USA
    { left: "60%", top: "45%", country: "UAE" },        // UAE (eastern Arabian Peninsula)
    { left: "46%", top: "28%", country: "UK" },         // United Kingdom
    { left: "70%", top: "42%", country: "India" },      // India (central)
    { left: "58%", top: "43%", country: "Qatar" },      // Qatar (Persian Gulf)
    { left: "56%", top: "42%", country: "KSA" },        // Saudi Arabia (western Arabian Peninsula)
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full bg-white flex items-center justify-center py-10 md:py-16 px-4"
      initial="hidden"
      animate={isVisible ? "visible" : "exit"}
      variants={containerVariants}
    >
      <div className="w-full max-w-full mx-auto">
        {/* Headline Section */}
        <motion.div
          className="text-center mb-6 md:mb-10"
          variants={itemVariants}
        >
          <div className="flex flex-col items-center justify-center mb-3">
            <div className="flex items-center justify-center">
              {/* <Globe className="h-5 w-5 md:h-6 md:w-6 text-[#0047AB] mr-2" /> */}
              <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                American Engineering, Global Reach
              </h2>
            </div>
          </div>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            Delivering premium automotive protection to professionals worldwide
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center justify-between mb-8 md:mb-12">
          {/* World Map Visualization */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative w-full">
              <img
                src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1770380207/global_reach_map_zqc3j8.jpg"
                alt="World map showing Avees export destinations"
                className="w-full h-auto object-contain opacity-90 rounded-lg cursor-crosshair"
                onClick={(e) => {
                  const rect = e.target.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const left = Math.round((x / rect.width) * 100) + "%";
                  const top = Math.round((y / rect.height) * 100) + "%";
                  console.log(`Clicked at: left: "${left}", top: "${top}"`);
                }}
              />

              {/* Animated dots on map */}
              {/* {mapDots.map((dot, index) => (
                <motion.div
                  key={index}
                  className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-[#0047AB] rounded-full border border-white"
                  style={{
                    left: dot.left,
                    top: dot.top,
                  }}
                  variants={dotVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "exit"}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#0047AB] animate-ping opacity-40"></div>
                </motion.div>
              ))} */}
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            {/* Export Destinations */}
            <motion.div
              className="mb-6 md:mb-8"
              variants={itemVariants}
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center">
                <span className="bg-[#0047AB] p-4 text-white rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center mr-2 text-xs">
                  10+
                </span>
                Countries Served
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {exportDestinations.map((country, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-100 shadow-xs"
                    variants={flagVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "exit"}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    {country.flag ? (
                      <img
                        src={country.flag}
                        alt={`${country.name} flag`}
                        className="w-10 h-6 md:w-12 md:h-8 object-cover mb-1 rounded-sm shadow-sm"
                        loading="lazy"
                      />
                    ) : (
                      <country.icon className="w-6 h-6 md:w-8 md:h-8 text-[#0047AB] mb-1" />
                    )}
                    <span className="text-xs font-medium text-center text-gray-700">
                      {country.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={itemVariants}>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3">Global Trust & Quality</h3>
              <ul className="space-y-1 md:space-y-2">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "exit"}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-[#0047AB] mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-md text-black">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Closing Line */}
        {/* <motion.div 
          className="text-center rounded-lg p-4 md:p-5"
          variants={itemVariants}
        >
          <p className=" max-w-2xl mx-auto">
            "Avees taking Kerala's delicacy from Kuttanad to kitchens worldwide."
          </p>
        </motion.div> */}
      </div>
    </motion.div>
  );
}

export default GlobalPresence;