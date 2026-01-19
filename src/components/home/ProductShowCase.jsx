import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Placeholder images
const ceramicCoating =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop";
const carWax =
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop";
const sprayDetailer =
  "https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop";
const accessories =
  "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=600&auto=format&fit=crop";

function ProductShowCase() {
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

    setTimeout(() => {
      document.querySelectorAll("[id^='product-item-']").forEach((el) => {
        observer.observe(el);
      });

      const titleEl = document.getElementById("showcase-title");
      const subtitleEl = document.getElementById("showcase-subtitle");
      const buttonEl = document.getElementById("view-all-button");

      if (titleEl) observer.observe(titleEl);
      if (subtitleEl) observer.observe(subtitleEl);
      if (buttonEl) observer.observe(buttonEl);
    }, 100);

    return () => observer.disconnect();
  }, []);

  const productItems = [
    {
      id: 1,
      category: "Coating",
      name: "Ceramic Coatings",
      image: ceramicCoating,
      description:
        "Professional grade 9H ceramic coatings for ultimate paint protection and gloss.",
      features: [
        "9H Hardness Protection",
        "Hydrophobic Effect",
        "5+ Year Durability",
      ],
    },
    {
      id: 2,
      category: "Wax",
      name: "Premium Waxes",
      image: carWax,
      description:
        "Handcrafted carnauba waxes and synthetic sealants for deep, wet-look shine.",
      features: [
        "High Carnauba Content",
        "Deep Wet Shine",
        "Easy Application",
      ],
    },
    {
      id: 3,
      category: "Detailer",
      name: "Detailing Sprays",
      image: sprayDetailer,
      description:
        "Quick detailers and waterless wash solutions for maintaining that showroom glow.",
      features: [
        "Streak-Free Finish",
        "Boosts Gloss",
        "Safe on All Surfaces",
      ],
    },
    {
      id: 4,
      category: "Tools",
      name: "Accessories",
      image: accessories,
      description:
        "Microfiber towels, applicators, and brushes designed for delicate automotive surfaces.",
      features: [
        "Scratch-Free Materials",
        "Durable Construction",
        "Professional Grade",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="showcase-title"
            className={`text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 transition-all duration-1000 ${isVisible["showcase-title"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
              }`}
          >
            <span className="text-[#0047AB]">Weinber</span> Products
          </h2>
          <p
            id="showcase-subtitle"
            className={`text-black text-sm sm:text-base mx-auto transition-all duration-1000 delay-200 ${isVisible["showcase-subtitle"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
              }`}
          >
            Engineered for perfection. Crafted for enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productItems.map((item, index) => (
            <div
              key={item.id}
              id={`product-item-${item.id}`}
              className={`group transition-all duration-700 ${isVisible[`product-item-${item.id}`]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-white transition-all duration-500 transform hover:-translate-y-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg border border-gray-100">
                <div className="relative md:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 md:bg-white bg-[#0047AB] md:text-[#0047AB] text-white text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {item.name}
                  </h3>
                  <p className="text-black mb-4 text-sm">{item.description}</p>

                  <div className="hidden md:block border-t border-gray-100 pt-4 mb-4">
                    <ul className="space-y-2">
                      {item.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-xs text-black"
                        >
                          <svg
                            className="w-3 h-3 text-[#0047AB] mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/products"
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <button className="w-full bg-[#0047AB] cursor-pointer text-white font-medium py-2 px-4 rounded-md transition-all transform hover:scale-105 duration-300">
                        View Details
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to="/products">
          <div
            id="view-all-button"
            className={`text-center transition-all duration-1000 ${isVisible["view-all-button"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
              }`}
          >
            <button className="bg-[#0047AB] cursor-pointer text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">
              View All Products
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ProductShowCase;
