import { motion } from "framer-motion";
import { useEffect } from "react";
import { Award, Users, Globe, Target } from "lucide-react";

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
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
            alt="Weinber Lab"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Redefining <span className="text-[#0047AB]">Perfection</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
          >
            Since 1992, Weinber Inc. has been at the forefront of automotive surface protection, blending American innovation with global manufacturing excellence.
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">Our Legacy of <span className="text-[#0047AB]">Innovation</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in Detroit, the heart of the American automotive industry, Weinber Inc. started with a simple mission: to create detailing products that deliver showroom results without compromise.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the decades, we have expanded our reach to over 40 countries, earning the trust of professional detailers and enthusiasts alike. Our commitment to R&D ensures that every bottle of Weinber product represents the pinnacle of surface science.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="border-l-4 border-[#0047AB] pl-4">
                  <div className="text-3xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1620803930818-68c13f9f4bd0?q=80&w=800&auto=format&fit=crop"
              alt="Innovation"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#0047AB]">
              <Target className="w-12 h-12 text-[#0047AB] mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To empower car owners and professionals with world-class detailing solutions that protect, enhance, and preserve the beauty of every vehicle.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-black">
              <Globe className="w-12 h-12 text-black mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the global benchmark in automotive surface protection, driving innovation and setting new standards for quality and sustainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Leadership */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${item + 20}.jpg`}
                    alt="Team Member"
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white">"Driven by passion for perfection."</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold">Executive Name</h3>
                <p className="text-[#0047AB] font-medium">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-[#0047AB] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the Revolution</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Experience the difference of professional-grade chemistry. Locate a dealer near you or shop online today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-[#0047AB] font-bold rounded-xl hover:bg-gray-100 transition-colors">
                Find a Dealer
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>

    </div>
  );
}