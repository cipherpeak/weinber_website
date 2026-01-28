import { useState, useRef, useEffect } from "react";
import { ChevronDown, ShieldCheck, Droplets, SprayCan, Sparkles, Leaf, ArrowRight } from "lucide-react";
import { FaCarSide } from "react-icons/fa";
import ProductGrid from "./ProductGrid";
import ProductFeatures from "./ProductFeatures";
import ProductFaq from "./ProductFaq";
import { motion } from "framer-motion";
import ProductBanner from "./ProductBanner";
import { Link, useLocation } from "react-router-dom";

// Categories - Updated for Car Detailing
// Categories - Updated for Car Detailing
const categories = [
  "All",
  "Sirius",
  "Dax Detailing",
  "Dax Solutions",
  "Advantage",
];

// Products - Automotive Detailing
// Products - Automotive Detailing
export const products = [
  {
    id: 1,
    name: "Ceramic Coating Kit",
    description: "Professional grade 9H ceramic coating for 5+ years of protection.",
    category: "Sirius",
    sizes: ["50ml", "100ml"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Ultra-Gloss Wax",
    description: "Carnauba-infused liquid wax for a deep, wet-look shine.",
    category: "Dax Detailing",
    sizes: ["16oz", "1 Gallon"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Interior Detailer",
    description: "Cleans and protects plastic, vinyl, and leather surfaces.",
    category: "Dax Detailing",
    sizes: ["16oz", "1 Gallon"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1605218427360-3638d6899a61?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "PH Neutral Shampoo",
    description: "Safe for coatings, high-foam formula for scratch-free washing.",
    category: "Dax Detailing",
    sizes: ["16oz", "1 Gallon"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1601362840136-e0c1df5c468e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Iron Remover",
    description: "Dissolves embedded iron particles and brake dust instantly.",
    category: "Dax Detailing",
    sizes: ["16oz", "1 Gallon"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1616423666945-8c7c10b7f082?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Leather Conditioner",
    description: "Restores soft feel and protects leather from UV damage.",
    category: "Dax Detailing",
    sizes: ["16oz"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1594968940801-b3716d7a468e?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Microfiber Towel Set",
    description: "Premium edgeless 500 GSM towels for buffing and drying.",
    category: "Dax Detailing",
    sizes: ["6-Pack", "12-Pack"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1606752393282-3d8b5845c470?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Tire Shine Gel",
    description: "No-sling formula for high-gloss, long-lasting black tires.",
    category: "Dax Detailing",
    sizes: ["16oz"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1550961812-706d87178303?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Fuel Injector Cleaner",
    description: "Restores lost power and improves fuel economy.",
    category: "Dax Solutions",
    sizes: ["12oz"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1635773124508-8e622b7d59c9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Oil System Cleaner",
    description: "Dissolves sludge and deposits for a cleaner engine.",
    category: "Dax Solutions",
    sizes: ["12oz"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1486262715619-72a604e3d7e9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "5W-30 Full Synthetic Oil",
    description: "Advanced protection for modern turbocharged engines.",
    category: "Advantage",
    sizes: ["1 Quart", "5 Gallons"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1504222490245-4f67dd74ae48?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Transmission Fluid",
    description: "High-performance fluid for smooth shifting and wear protection.",
    category: "Advantage",
    sizes: ["1 Quart"],
    cta: ["Know More"],
    image: "https://images.unsplash.com/photo-1594968940801-b3716d7a468e?q=80&w=600&auto=format&fit=crop",
  },
];

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
    question: "How long does the ceramic coating last?",
    answer:
      "Our PRO coating lasts up to 5 years with proper maintenance, while spray coatings last 6-12 months.",
  },
  {
    question: "Is the shampoo safe for matte paint?",
    answer: "Yes, our PH Neutral Shampoo is safe for matte, satin, and glossy finishes.",
  },
  {
    question: "Do you offer bulk sizes for professional detailers?",
    answer:
      "Yes, we offer 1-gallon and 5-gallon sizes for shops and mobile detailers. Contact usage for pricing.",
  },
  {
    question: "Can I use the interior detailer on screens?",
    answer:
      "We recommend our dedicated Glass & Tech Cleaner for navigation screens and gauge clusters.",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFAQ, setOpenFAQ] = useState(null);
  const sectionRefs = {
    products: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    cta: useRef(null),
  };

  const location = useLocation();

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
  }, [location]);

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