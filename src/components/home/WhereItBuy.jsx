import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

function WhereItBuy() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Store locations data with images
  const storeLocations = [
    {
      id: 1,
      name: "SIRIUS PRO",
      description: "SIRIUS PRO is a premium quality nano ceramic coating engineered with advanced nano ceramic protective coating technology. Equipped with a 3D hybrid molecular structure, SIRIUS PRO coating is designed to give you the best surface protection with a high gloss and ultra hydrophobic finish.",
      image: "../src/assets/logo/sirius_logo.webp"
    },
    {
      id: 2,
      name: "DAX DETAILING",
      description: "DAX Detailing hosts a variety of products each with its own specific formula and application. From compounds, waxes, cleaner-conditioner to shines, DAX detailing offers products that transform your vehicle inside out to give it that show-quality level of finish and detail.",
      image: "../src/assets/logo/dax-detailing.png"
    },
    {
      id: 3,
      name: "DAX SOLUTIONS",
      description: "DAX Solutions include chemical compounds that work on the internals of your vehicle and keep it running smooth and efficient for a longer period of time. They provide vital support to modern internal combustion engines and avoid leaks, contamination and engine break downs.",
      image: "../src/assets/logo/dax-solutions.webp"
    },
  ];

  return (
    <div
      ref={sectionRef}
      id="where-to-buy" // Added this ID for the scroll functionality
      className="w-full bg-background flex items-center justify-center py-10 md:py-16 px-4"
      initial="hidden"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Our Stores Section */}
        <div
          id="our-stores"
          className={`transition-all duration-1000 ${isVisible["our-stores"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
            }`}
        >
          <div className="text-center mb-10 mt-16">
            <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Our Brands
            </h3>
            <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
              Our premium brands for your ultimate car detailing experience
            </p>
          </div>

          {/* Store Cards with Images - Modern Minimal Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mb-10">
            {storeLocations.map((store, index) => (
              <div
                key={store.id}
                id={`store-${store.id}`}
                className={`bg-white rounded-2xl  shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group ${isVisible[`store-${store.id}`]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                  }`}
              >
                <div className="h-32 overflow-hidden relative border-b border-gray-100">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-contain p-4 object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm border border-gray-100">
                    <ArrowRight className="h-4 w-4 text-[#0047AB]" />
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-center mb-3">
                    <h4 className="text-2xl font-bold text-gray-900 text-center">{store.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-4 flex-grow">
                    {store.description}
                  </p>

                  <button
                    className="w-full cursor-pointer rounded-lg transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2 bg-[#0047AB] text-white py-2.5 px-4 text-sm font-medium mt-auto"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WhereItBuy;