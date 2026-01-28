import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { GiShoppingBag } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import siriusLogo from "../../assets/logo/sirius_logo.png";
import daxDetailingLogo from "../../assets/logo/dax-detailing.png";
import daxSolutionsLogo from "../../assets/logo/dax-solutions.png";
import advantageLogo from "../../assets/logo/advantage-logo.png";
import weinberLogo from "../../assets/logo/weinber_logo.png";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastScrollY.current;

    // Clear existing timeout when scrolling
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    if (latest > previous && latest > 50) {
      // Scrolling down and past top
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }

    // Set timeout to show navbar after scrolling stops
    scrollTimeout.current = setTimeout(() => {
      setIsVisible(true);
    }, 800); // 800ms delay

    lastScrollY.current = latest;
  });

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Brands",
      dropdown: [
        {
          name: "SIRIUS",
          link: "/brands/sirius",
          image: siriusLogo,
          description: "Premium Nano-Ceramic & Graphene Coatings",
        },
        {
          name: "DAX Detailing",
          link: "/brands/dax-detailing",
          image: daxDetailingLogo,
          description: "Polishes, Compounds & Restoration Systems",
        },
        {
          name: "DAX Solutions",
          link: "/brands/dax-solutions",
          image: daxSolutionsLogo,
          description: "Engine Additives & Fuel System Treatments",
        },
        {
          name: "Advantage",
          link: "/brands/advantage",
          image: advantageLogo,
          description: "High-Performance Engine Oils & Automotive Fluids",
        }
      ]
    },
    {
      name: "About Us",
      link: "/about",
    },

    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const mobileDropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const navigate = useNavigate();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownLink = (e, link) => {
    e.preventDefault();
    handleLinkClick();
    navigate(link);
  };

  const HeaderDropdown = ({ items, variants, onClose }) => {
    const [hoveredItem, setHoveredItem] = useState(items[0]);

    return (
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-[700px] z-50 origin-top"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
      >
        {/* Arrow tip */}
        <div className="absolute -top-2 left-[calc(50%-8px)] w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden flex">
          {/* Left Column: List */}
          <div className="w-1/2 bg-gray-50/50 p-4 border-r border-gray-100">
            <ul className="space-y-1">
              {items.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${hoveredItem.name === item.name
                      ? "bg-white shadow-sm text-[#0047AB]"
                      : "text-gray-600 hover:bg-white/60 hover:text-gray-900"
                      }`}
                    onMouseEnter={() => setHoveredItem(item)}
                    onClick={onClose}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1 rounded-lg ${hoveredItem.name === item.name ? "bg-blue-50" : "bg-gray-100 group-hover:bg-gray-50"}`}>
                        {/* Small icon placeholder if image is logo, or just first letter */}
                        {typeof item.image === 'string' && item.image.includes('http') ? (
                          <img src={item.image} alt="" className="w-12 h-12 object-contain" />
                        ) : (
                          <img src={item.image} alt="" className="w-12 h-12 object-contain" />
                        )}
                      </div>
                      <span className="font-semibold">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Preview */}
          <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">

            <AnimatePresence mode="wait">
              <motion.div
                key={hoveredItem.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col items-center"
              >
                <div className="w-full h-40 mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={hoveredItem.image}
                    alt={hoveredItem.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{hoveredItem.name}</h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  {hoveredItem.description}
                </p>

                <Link
                  to={hoveredItem.link}
                  onClick={onClose}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-blue-50 text-[#0047AB] font-semibold rounded-lg hover:bg-[#0047AB] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Details
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.header
      className="w-full fixed top-0 z-50 flex justify-center md:pt-5 pt-2 px-2 md:px-5 pointer-events-none"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="bg-white/70 backdrop-blur-md w-full max-w-7xl rounded-3xl shadow-sm pointer-events-auto">
        <div className="flex items-center justify-between px-4 py-3 md:py-4">
          <Link to="/">

            <div className="flex items-center cursor-pointer py-1.5">
              <img
                src={weinberLogo}
                alt="Weinber Inc Logo"
                className="md:h-10 h-7 w-auto object-contain"
              />
            </div>
          </Link>

          <div className="flex-1 hidden md:flex justify-center">
            <div className="hidden md:block relative">
              <nav className="w-full">
                <ul className="flex justify-center gap-8 py-3 text-gray-700 font-medium relative">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative group"
                      onMouseEnter={() =>
                        item.dropdown && setActiveDropdown(index)
                      }
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="flex items-center gap-1 hover:text-[#0047AB] transition-colors duration-300 cursor-pointer text-sm font-semibold"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="flex items-center gap-1 hover:text-[#0047AB] transition-colors duration-300 cursor-pointer text-sm font-semibold">
                          {item.name}
                          {activeDropdown === index ? (
                            <IoIosArrowUp className="text-xs transition-transform duration-300" />
                          ) : (
                            <IoIosArrowDown className="text-xs transition-transform duration-300" />
                          )}
                        </div>
                      )}

                      {item.dropdown && (
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <HeaderDropdown
                              items={item.dropdown}
                              variants={dropdownVariants}
                              onClose={() => setActiveDropdown(null)}
                            />
                          )}
                        </AnimatePresence>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <BiMessageSquareDetail className="text-white text-xl" />
              <span className="hidden sm:inline">Enquire Now</span>
            </Link>

            <button
              className="md:hidden text-gray-700 hover:text-[#0047AB] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col pointer-events-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-end p-4 border-b border-gray-100">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 hover:text-[#0047AB] transition-colors duration-300 p-2"
              >
                <FiX size={28} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="flex flex-col gap-2 text-gray-800 font-medium">
                {navItems.map((item, index) => (
                  <li key={index} className="relative">
                    {item.link ? (
                      <Link
                        to={item.link}
                        className="block px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-[#0047AB] transition-all duration-300 border border-transparent hover:border-blue-100"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-blue-50 hover:text-[#0047AB] transition-all duration-300 border border-transparent hover:border-blue-100"
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === index ? null : index
                            )
                          }
                        >
                          {item.name}
                          {activeDropdown === index ? (
                            <IoIosArrowUp className="text-lg transition-transform duration-300" />
                          ) : (
                            <IoIosArrowDown className="text-lg transition-transform duration-300" />
                          )}
                        </button>

                        <AnimatePresence>
                          {activeDropdown === index && item.dropdown && (
                            <motion.div
                              className="overflow-hidden mt-2 ml-4"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ul className="flex flex-col gap-3">
                                {item.dropdown.map((subItem, subIndex) => (
                                  <motion.li
                                    key={subIndex}
                                    className="rounded-xl hover:bg-blue-50 transition-all duration-300 border border-gray-100"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                  >
                                    <Link
                                      to={subItem.link}
                                      className="flex items-center gap-3 p-3 text-gray-700"
                                      onClick={handleLinkClick}
                                    >
                                      <img
                                        src={subItem.image}
                                        alt={subItem.name}
                                        className="w-16 h-16 object-cover rounded-lg"
                                      />
                                      <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900">
                                          {subItem.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 mt-1">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </motion.li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-100">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#0047AB] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-md"
              >
                <BiMessageSquareDetail className="text-xl" />
                Enquire Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;