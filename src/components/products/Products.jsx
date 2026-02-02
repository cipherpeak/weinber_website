import { useState, useRef, useEffect } from "react";
import { ChevronDown, ShieldCheck, Droplets, SprayCan, Sparkles, Leaf, ArrowRight } from "lucide-react";
import { FaCarSide } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import ProductFeatures from "./ProductFeatures";
import ProductFaq from "./ProductFaq";
import { motion } from "framer-motion";
import ProductBanner from "./ProductBanner";
import { Link, useLocation } from "react-router-dom";
import { API_ENDPOINTS } from "../../config";

// Features (Car Detailing Focus)
const features = [
  {
    title: "Advanced Chemistry",
    description: "Formulated with cutting-edge SiO2 and polymers for max durability.",
    icon: <ShieldCheck className="h-8 w-8 text-[#0047AB]" />,
  },
  {
    title: "Eco-Friendly",
    description:
      "Biodegradable formulas that are tough on dirt but safe for the environment.",
    icon: <Leaf className="h-8 w-8 text-[#0047AB]" />,
  },
  {
    title: "Professional Results",
    description:
      "Engineered for pros, accessible for enthusiasts. Showroom finish every time.",
    icon: <Sparkles className="h-8 w-8 text-[#0047AB]" />,
  },
  {
    title: "Surface Safe",
    description:
      "PH-balanced cleaners that won't strip waxes or damage sensitive finishes.",
    icon: <Droplets className="h-8 w-8 text-[#0047AB]" />,
  },
];

// FAQs - Auto Detailing
const faqs = [
  {
    question: "What does car protection actually protect against?",
    answer: "Car protection products help protect the vehicle from UV rays, oxidation, fading, light scratches, stains, heat, and environmental damage.",
  },
  {
    question: "Can Borophene coating be applied over Glossy PPF?",
    answer: "Yes, borophene coating can be applied over PPF to enhance gloss, hydrophobic properties, and ease of maintenance.",
  },
  {
    question: "Do ceramic coatings make washing easier?",
    answer: "Yes, ceramic coatings create a hydrophobic surface that repels water, dirt, and grime.",
  },
  {
    question: "What makes SIRIUS car detailing products high quality?",
    answer: "SIRIUS products are developed using advanced formulations, premium raw materials, and strict quality control to deliver professional-grade performance and reliable results.",
  },
  {
    question: "Why should I choose SIRIUS & DAX?",
    answer: "SIRIUS & DAX combine premium quality, high performance, safety, and consistent results, making them a trusted choice for professional detailers and car care enthusiasts.",
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const sectionRefs = {
    products: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    cta: useRef(null),
  };

  const location = useLocation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.productsPage);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Map API data to the structure expected by ProductGrid
        const mappedProducts = data.map(item => ({
          id: item.id,
          name: item.name,
          description: item.description,
          category: item.brand, // Map brand to category for filtering
          brand: item.brand,
          sizes: [], // API doesn't provide sizes suitable for grid chips currently
          cta: ["Know More"],
          image: item.images && item.images.length > 0 ? item.images[0].image : "",
          features: item.features // Pass features just in case
        }));

        setProducts(mappedProducts);

        // Extract unique brands for categories
        const brands = ["All", ...new Set(data.map(item => item.brand))].filter(Boolean);
        setCategories(brands);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Add useEffect to handle state from navigation
  useEffect(() => {
    if (location.state && location.state.activeCategory) {
      const category = location.state.activeCategory;
      if (categories.includes(category)) {
        setActiveCategory(category);
      }
    }
  }, [location, categories]);

  // Animation variants for left-to-right entrance and exit
  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <ProductBanner />
      <div className="max-w-7xl mx-auto">
        {/* PRODUCTS */}
        <motion.section
          id="products"
          ref={sectionRefs.products}
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          className="py-10 md:py-16 px-4"
        >
          <ProductGrid
            categories={categories}
            activeCategory={activeCategory}
            filteredProducts={filteredProducts}
            setActiveCategory={setActiveCategory}
          />
        </motion.section>

        {/* FEATURES */}
        <motion.section
          id="features"
          ref={sectionRefs.features}
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          className="py-10 md:py-16 px-4"
        >
          <ProductFeatures features={features} />
        </motion.section>

        {/* FAQ */}
        <motion.section
          id="faq"
          ref={sectionRefs.faq}
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          className="py-10 md:py-16 px-4"
        >
          <ProductFaq
            faqs={faqs}
            ChevronDown={ChevronDown}
            openFAQ={openFAQ}
            setOpenFAQ={setOpenFAQ}
          />
        </motion.section>

        {/* CTA */}
        <motion.section
          id="cta"
          ref={sectionRefs.cta}
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          className="border border-blue-100 rounded-2xl py-4 px-4 m-3 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8"
        >
          <div>
            <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Partner With Us
            </h3>
            <p className="text-gray-600 text-sm">
              Join our network of professional detailers and distributors. Exclusive pricing available.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link to="/about">
              <motion.button className="bg-[#0047AB] cursor-pointer text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2">
                About Us
                <ArrowRight size={18} />
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button className="bg-white border text-[#0047AB] border-[#0047AB] cursor-pointer px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 hover:bg-blue-50">
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
}