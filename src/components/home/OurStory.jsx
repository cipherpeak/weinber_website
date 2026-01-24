import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeInLeft, fadeInRight } from "../../utils/animations";

const StorySection = () => {
  return (
    <section
      className="py-10 md:py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 md:order-1"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-2"></div>

            {/* Master tagline */}
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
              Legacy of <br />
              <span className="text-[#0047AB]">Excellence</span>
            </h2>

            {/* Story text */}
            <p className="text-gray-700 leading-relaxed mb-6">
              Weinber Inc. was founded with a singular vision: to revolutionize the
              automotive care industry through advanced chemistry and superior product
              performance. From humble beginnings to a global presence, our journey has
              been defined by an unwavering commitment to quality.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Today, we stand at the forefront of automotive innovation, delivering
              professional-grade coatings, detailing solutions, and performance additives
              that set new industry standards. We don't just protect vehicles; we preserve
              value and enhance beauty.
            </p>

            {/* Action Buttons */}
            <div
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/about">
                <motion.button
                  className="px-8 py-3 bg-[#0047AB] text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Our Story
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/products">
                <motion.button
                  className="px-8 py-3 bg-white text-[#0047AB] border border-[#0047AB] font-medium rounded-full hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 md:order-2"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#0047AB] rounded-xl z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop"
                alt="Weinber Quality Contral"
                className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
