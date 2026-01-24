import { motion } from "framer-motion";
import { useEffect } from "react";
import { Award, Users, Globe, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Years Experience", value: "30+" },
    { label: "Products", value: "50+" },
    { label: "Countries", value: "40+" },
    { label: "Partners", value: "1000+" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section - Matching Homepage Design */}
      <section className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[28rem] lg:h-[50rem] rounded-3xl overflow-hidden group">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
              alt="Weinber Lab"
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-12 mt-16 md:mt-0">
              <div className="max-w-4xl">
                <motion.h1
                  className="text-white font-bold tracking-tight text-balance leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent block">
                    Redefining
                  </span>
                  <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                    Perfection
                  </span>
                </motion.h1>

                <motion.p
                  className="mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Since 1992, Weinber Inc. has been at the forefront of automotive surface protection, blending American innovation with global manufacturing excellence.
                </motion.p>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* Intro Section - Redesigned to match OurStory */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Our Legacy of <br />
              <span className="text-[#0047AB]">Innovation</span>
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Founded in Detroit, the heart of the American automotive industry, Weinber Inc. started with a simple mission: to create detailing products that deliver showroom results without compromise.
              </p>
              <p>
                Over the decades, we have expanded our reach to over 40 countries, earning the trust of professional detailers and enthusiasts alike. Our commitment to R&D ensures that every bottle of Weinber product represents the pinnacle of surface science.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <button className="flex items-center gap-3 px-8 py-3 rounded-full border border-[#0047AB] text-[#0047AB] font-semibold hover:bg-[#0047AB] hover:text-white transition-all duration-300 group bg-white shadow-sm hover:shadow-md">
                  <div className="w-2 h-2 rounded-full bg-[#0047AB] group-hover:bg-white transition-colors"></div>
                  Explore Our Products
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-gray-100 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 md:order-2"
          >
            {/* Offset Border */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] border-2 border-[#0047AB] rounded-3xl -z-10 -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1620803930818-68c13f9f4bd0?q=80&w=800&auto=format&fit=crop"
                alt="Weinber Innovation"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision - Redesigned Cards */}
      <section className="py-16 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0047AB]">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">To empower car owners and professionals with world-class detailing solutions that protect, enhance, and preserve the beauty of every vehicle, ensuring a finish that lasts a lifetime.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#0047AB]">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">To be the global benchmark in automotive surface protection, driving innovation through sustainable chemistry and setting new standards for quality in the car care industry.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Pill Buttons */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-[#0047AB] rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">Experience the difference of professional-grade chemistry. Locate a dealer near you or shop online today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-[#0047AB] font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg min-w-[180px]">
                  Find a Dealer
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors min-w-[180px]">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        </div>
      </section>

    </div>
  );
}