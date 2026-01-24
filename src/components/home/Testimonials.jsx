import { useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function Testimonials() {
  const [expandedTestimonials, setExpandedTestimonials] = useState({});
  const [showAllText, setShowAllText] = useState({});

  // Refs and controls for animation
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const toggleReadMore = (id) => {
    setExpandedTestimonials((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleShowAllText = (id) => {
    setShowAllText((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "The ceramic coating kit was incredibly easy to apply, and the gloss is insane. My 5-year-old car looks showroom new!",
      author: "Michael R.",
      role: "Enthusiast",
      location: "California",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "We've been using Weinber products in our detailed shop for years. The consistency and durability are unmatched.",
      author: "Sarah J.",
      role: "Pro Detailer",
      location: "Texas",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Finally, a tire shine that doesn't sling and lasts for weeks. Weinber nailed it with their new formula.",
      author: "David K.",
      role: "Car Show Judge",
      location: "Florida",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 5,
    },
  ];

  const impactStats = [
    { number: "30+ Years", label: "Innovation Heritage" },
    { number: "500k+", label: "Vehicles Protected" },
    { number: "40+", label: "Countries Served" },
    { number: "100%", label: "Satisfaction Guarantee" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.4 },
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="bg-white py-10 md:py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16 px-4"
          variants={titleVariants}
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 md:mb-4">
            Trusted by Pros
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            From professional detailers to weekend warriors, see why enthusiasts choose Weinber.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 mb-10 md:mb-14 lg:mb-16"
          variants={containerVariants}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 border border-blue-100 transition-all duration-300 relative overflow-hidden"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full opacity-20"></div>
              <div className="absolute -bottom-5 -left-5 w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full opacity-20"></div>

              <div className="relative z-10">
                <div className="flex items-center mb-3 md:mb-4 lg:mb-5">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-3 md:border-4 border-blue-100 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-[#0047AB] rounded-full p-1">
                      <FaQuoteLeft className="text-white text-xs" />
                    </div>
                  </motion.div>
                  <div className="ml-3 md:ml-4">
                    <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                      {testimonial.author}
                    </h4>
                    <p className="text-[#0047AB] text-xs md:text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-[#0047AB] text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="mb-2 md:mb-3 lg:mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <FaStar className="w-3 h-3 md:w-4 md:h-4" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <blockquote className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {testimonial.quote.length > 100 &&
                      !showAllText[testimonial.id]
                      ? `${testimonial.quote.substring(0, 100)}...`
                      : testimonial.quote}
                  </blockquote>

                  {testimonial.quote.length > 100 && (
                    <motion.button
                      onClick={() => toggleShowAllText(testimonial.id)}
                      className="text-[#0047AB] hover:text-blue-800 text-xs md:text-sm font-medium mt-1 md:mt-2 flex items-center"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {showAllText[testimonial.id] ? (
                        <>
                          Read Less <FaChevronUp className="ml-1" />
                        </>
                      ) : (
                        <>
                          Read More <FaChevronDown className="ml-1" />
                        </>
                      )}
                    </motion.button>
                  )}
                </div>

                {expandedTestimonials[testimonial.id] && (
                  <motion.div
                    className="mt-3 md:mt-4 p-3 md:p-4 bg-blue-50 rounded-xl md:rounded-2xl border border-blue-100"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium text-black text-sm md:text-base">
                        Detailed Review
                      </h5>
                      <motion.button
                        onClick={() => toggleReadMore(testimonial.id)}
                        className="text-[#0047AB] hover:text-blue-800 text-xs md:text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Close
                      </motion.button>
                    </div>
                    <p className="text-xs md:text-sm text-[#0047AB]">
                      {testimonial.quote}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </motion.div>
  );
}