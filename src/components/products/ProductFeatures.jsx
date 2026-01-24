import React from "react";
import { FaShieldAlt, FaFlask, FaCar, FaGlobeAmericas } from "react-icons/fa";

const ProductFeatures = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-[#0047AB] text-2xl" />,
      title: "Advanced Protection",
      description: "Nano-ceramic technology providing long-lasting durability against harsh elements.",
    },
    {
      icon: <FaFlask className="text-[#0047AB] text-2xl" />,
      title: "Professional Formulas",
      description: "Engineering-grade compounds designed for superior gloss and correction.",
    },
    {
      icon: <FaCar className="text-[#0047AB] text-2xl" />,
      title: "Showroom Finish",
      description: "Achieve a deep, wet-look shine that enhances your vehicle's aesthetic.",
    },
    {
      icon: <FaGlobeAmericas className="text-[#0047AB] text-2xl" />,
      title: "Global Standards",
      description: "Trusted by elite detailers worldwide for consistent, high-performance results.",
    },
  ];

  return (
    <section id="features">
      <div
        id="features-title"
        className="transition-all duration-1000 opacity-100 translate-y-0 text-center mb-10"
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
          Why Choose Weinber Products?
        </h2>
        <p className="text-gray-600">
          Engineered for professionals, designed for enthusiasts. Experience the future of car care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {features.map((f, idx) => (
          <div
            key={idx}
            id={`feature-${idx}`}
            className="group transition-all duration-700 opacity-100 translate-y-0"
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            <div className="relative p-6 rounded-3xl bg-white shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Icon with hover animation */}
              <div className="w-16 h-16 rounded-full border border-[#0047AB] flex items-center justify-center mb-6 mx-auto 
                transition-transform duration-300 group-hover:scale-110">
                {f.icon}
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
                {f.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFeatures;
