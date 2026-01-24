import { motion } from "framer-motion";
import { PiShoppingCart, PiStorefront, PiPhone, PiCar } from "react-icons/pi";
import { Wrench } from "lucide-react";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();

  // Animation variants with horizontal slide
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#0047AB",
      boxShadow: "0 10px 25px -5px rgba(227, 30, 36, 0.3)",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
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

  const handleFindStoreClick = () => {
    // If we're already on the home page, scroll to the section
    if (window.location.pathname === '/') {
      const element = document.getElementById('where-to-buy');
      if (element) {
        // Update URL with hash
        window.history.pushState(null, null, '#where-to-buy');

        // Add a small timeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Align to the top of the viewport
          });
        }, 100);
      }
    } else {
      // If not on home page, navigate to home page with hash
      navigate('/#where-to-buy');

      // Add an event listener to scroll after the page loads
      const handleNavigation = () => {
        setTimeout(() => {
          const element = document.getElementById('where-to-buy');
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 500); // Longer timeout to ensure page is fully loaded
      };

      // Listen for navigation completion
      window.addEventListener('load', handleNavigation, { once: true });
    }
  };

  return (
    <motion.section
      className="relative bg-white py-10 md:py-16 px-4 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.05 }}
      variants={containerVariants}
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-10 lg:p-16 border border-gray-100 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.05 }}
        >
          {/* Modern decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#ffff] rounded-full opacity-20 blur-xl"></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#ffff] rounded-full opacity-30 blur-xl"></div>

          {/* Diagonal accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0047AB] to-transparent opacity-50"></div>

          <motion.div
            className="text-center mb-8 md:mb-12"
            variants={itemVariants}
          >
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Experience <span className="text-[#0047AB]">Superior Shine.</span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto">
              Professional grade detailing products for the ultimate finish.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 lg:gap-6"
            variants={itemVariants}
          >
            <motion.a
              className="w-full sm:w-auto bg-[#0047AB] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              href="https://www.amazon.com"
              variants={buttonVariants}
            >
              <PiShoppingCart className="h-5 w-5" />
              <span className="whitespace-nowrap">Shop Now</span>
            </motion.a>

            <motion.button
              onClick={handleFindStoreClick}
              className="w-full sm:w-auto cursor-pointer bg-[#0047AB] text-white font-semibold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              variants={buttonVariants}

            >
              <PiStorefront className="h-5 w-5" />
              <span className="whitespace-nowrap">Find a Dealer</span>
            </motion.button>

            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                className="w-full bg-[#0047AB] cursor-pointer text-white font-semibold py-3 px-6 rounded-lg text-center transition-all transform hover:scale-105 duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                variants={buttonVariants}

              >
                <PiPhone className="h-5 w-5" />
                <span className="whitespace-nowrap">Contact Us</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Additional decorative elements */}
          <div className="md:block hidden absolute top-4 right-4 text-[#0047AB] opacity-70">
            <IoSpeedometerOutline size={18} className="md:size-5" />
          </div>
          <div className="md:block hidden absolute bottom-4  left-4 text-[#0047AB] opacity-70">
            <LuShieldCheck size={18} className="md:size-5" />
          </div>

          {/* Subtle floating elements */}
          <motion.div
            className="md:block hidden absolute bottom-8 left-8 text-[#0047AB] opacity-60"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Wrench size={18} className="md:size-5" />
          </motion.div>
          <motion.div
            className="md:block hidden absolute top-8 right-8 text-[#0047AB] opacity-60"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <PiCar size={18} className="md:size-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}