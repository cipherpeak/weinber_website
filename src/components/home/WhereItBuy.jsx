import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import siriusLogo from "../../assets/logo/sirius_logo.png";
import daxDetailingLogo from "../../assets/logo/dax-detailing.png";
import daxSolutionsLogo from "../../assets/logo/dax-solutions.png";
import advantageLogo from "../../assets/logo/advantage-logo.png";

// Placeholder for Advantage since no logo exists yet
const advantagePlaceholder = "https://images.unsplash.com/photo-1504222490245-4f67dd74ae48?q=80&w=600&auto=format&fit=crop";

function WhereItBuy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const storeLocations = [
    {
      id: 1,
      name: "SIRIUS PRO",
      description: "Premium nano ceramic coating engineered with 3D hybrid molecular structure for ultimate surface protection and gloss.",
      image: siriusLogo,
      color: "bg-blue-50"
    },
    {
      id: 2,
      name: "DAX DETAILING",
      description: "Professional detailing formulas including compounds, waxes, and cleaners for that showroom-quality finish.",
      image: daxDetailingLogo,
      color: "bg-gray-50"
    },
    {
      id: 3,
      name: "DAX SOLUTIONS",
      description: "Advanced chemical compounds for internal engine health, preventing leaks and ensuring efficient performance.",
      image: daxSolutionsLogo,
      color: "bg-blue-50"
    },
    {
      id: 4,
      name: "ADVANTAGE",
      description: "High-performance engine oils and automotive fluids formulated for superior protection and extended engine life.",
      image: advantageLogo,
      color: "bg-gray-50",
    },
  ];

  return (
    <section
      id="where-to-buy"
      className="w-full bg-white py-16 md:py-24 px-0 bg-white relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none" />

      <div className="w-full px-12 md:px-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Our <span className="text-[#0047AB]">Brands</span>
            </h3>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our family of premium automotive care brands, each engineered for excellence.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {storeLocations.map((store) => (
              <motion.div
                key={store.id}
                variants={itemVariants}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className={`h-40 flex items-center justify-center p-8 ${store.color} transition-colors duration-500 group-hover:bg-white`}>
                  <img
                    src={store.image}
                    alt={store.name}
                    className={`w-full h-full ${store.isImage ? "object-cover rounded-lg" : "object-contain"} transition-transform duration-500 group-hover:scale-110`}
                  />

                  {/* Overlay for "View" */}
                  <div className="absolute inset-0 bg-[#0047AB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0047AB] transition-colors duration-300">
                    {store.name}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {store.description}
                  </p>

                  <div className="mt-auto">
                    <button className="w-full bg-[#0047AB] text-white font-bold py-3 px-6 rounded-full hover:bg-[#003380] transition-all duration-300 shadow-sm hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                      Explore Brand
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#0047AB] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhereItBuy;