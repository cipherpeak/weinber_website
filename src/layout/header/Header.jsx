import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { GiShoppingBag } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import siriusLogo from "../../assets/logo/sirius_logo.webp";
import daxDetailingLogo from "../../assets/logo/dax-detailing.png";
import daxSolutionsLogo from "../../assets/logo/dax-solutions.webp";
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
      name: "Warranty",
      dropdown: [
        {
          name: "Register Warranty",
          link: "/warranty-registration",
          image: "https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop",
          description: "Register your product for extended warranty",
        },
        {
          name: "Warranty Claim",
          link: "/warranty-claim",
          image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
          description: "File a claim for your warranty coverage",
        },
      ],
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

  return (
    <motion.header
      className="bg-white/70 backdrop-blur-md w-full fixed top-0 z-50 shadow-sm p-1"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
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
                          <motion.div
                            className="absolute left-1/2 transform -translate-x-1/2 mt-16 w-max max-w-7xl z-50"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={dropdownVariants}
                          >
                            {/* Arrow tip */}
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-200"></div>

                            <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden p-6`}>
                              <div className={`grid gap-4 ${item.dropdown.length === 2 ? 'grid-cols-1 md:grid-cols-2 w-[85vw] md:w-[500px]' : 'grid-cols-2 lg:grid-cols-4 w-[90vw] lg:w-[1000px]'}`}>
                                {item.dropdown.map((subItem, subIndex) => (
                                  <motion.a
                                    key={subIndex}
                                    href={subItem.link}
                                    onClick={(e) => handleDropdownLink(e, subItem.link)}
                                    className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                                    variants={cardVariants}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                  >
                                    {/* Image Container */}
                                    <div className="relative h-32 overflow-hidden">
                                      <img
                                        src={subItem.image}
                                        alt={subItem.name}
                                        className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                      />
                                      {/* Gradient Overlay */}
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                      <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-[#0047AB] transition-colors duration-300">
                                        {subItem.name}
                                      </h3>
                                      <p className="text-xs text-gray-600 leading-relaxed">
                                        {subItem.description}
                                      </p>

                                    </div>

                                    {/* Hover Effect Border */}
                                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#0047AB]/20 transition-all duration-300"></div>
                                  </motion.a>
                                ))}
                              </div>
                            </div>
                          </motion.div>
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col"
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