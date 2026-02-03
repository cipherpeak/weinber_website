import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeInUp, hoverScale } from "../../utils/animations";
import { API_ENDPOINTS } from "../../config";

// Placeholder images
const ceramicCoating =
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop";
const carWax =
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop";
const sprayDetailer =
  "https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop";
const accessories =
  "https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=600&auto=format&fit=crop";

const FALLBACK_PRODUCTS = [
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

function SiriusRelatedProducts() {
  const [productItems, setProductItems] = useState(FALLBACK_PRODUCTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShowcaseProducts = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.productsPage);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();

        if (data && data.length > 0) {
          const siriusProducts = data.filter((p) => p.brand === "Sirius");
          const mapped = siriusProducts.slice(0, 4).map((p) => ({
            id: p.id,
            category: p.brand || "Product",
            name: p.name,
            image:
              p.images && p.images.length > 0
                ? p.images[0].image
                : FALLBACK_PRODUCTS[0].image,
            description: p.description,
            features: p.features
              ? p.features.slice(0, 3).map((f) => (typeof f === "string" ? f : f.feature))
              : ["Professional Grade", "High Performance"],
          }));
          setProductItems(mapped);
        }
      } catch (err) {
        console.error("Error fetching showcase products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShowcaseProducts();
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            <span className="text-[#0047AB]">Our</span> Products
          </h2>
          <p className="text-black text-sm sm:text-base mx-auto">
            Engineered for perfection. Crafted for enthusiasts.
          </p>
        </motion.div>

        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
          {productItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-white transition-all duration-500 transform hover:-translate-y-2 rounded-lg shadow-md overflow-hidden hover:shadow-lg border border-gray-100 h-full flex flex-col">
                <div className="relative md:h-48 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 md:bg-white bg-[#0047AB] md:text-[#0047AB] text-white text-xs font-semibold px-2 py-1 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0047AB] mb-2">
                    {item.name}
                  </h3>
                  <p className="text-black mb-4 text-sm flex-grow">
                    {item.description && item.description.length > 100
                      ? `${item.description.slice(0, 100)}...`
                      : item.description}
                  </p>

                  {/* <div className="hidden md:block border-t border-gray-100 pt-4 mb-4">
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
                  </div> */}
                  <Link
                    to="/products"
                    className="mt-auto"
                  >
                    <div className="border-t border-gray-100 pt-4">
                      <motion.button
                        className="w-full bg-[#0047AB] cursor-pointer text-white font-medium py-3 px-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg"
                        whileHover={hoverScale}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Details
                        <ArrowRight size={18} />
                      </motion.button>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <Link to="/products">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <motion.button
              className="bg-[#0047AB] cursor-pointer text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md flex items-center justify-center gap-2 mx-auto"
              whileHover={hoverScale}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </Link> */}
      </div>
    </section>
  );
}

export default SiriusRelatedProducts;
