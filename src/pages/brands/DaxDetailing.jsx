import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Layers, PenTool, Droplet, ArrowRight, Star, Download, CirclePlay, Diamond } from "lucide-react";
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, hoverScale } from "../../utils/animations";

import daxDetailingProducts from "../../assets/brand/dax-detailing-products.png";

const DaxDetailing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="bg-white text-gray-900">
            <div className="hidden">
                <title>DAX Detailing — Polishes, Compounds & Interior Care | Weinber Inc.</title>
                <meta name="description" content="DAX Detailing professional polishes and compounds." />
            </div>

            {/* Hero Section - Matching Banner.jsx */}
            <section className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-[28rem] lg:h-[50rem] rounded-3xl overflow-hidden group">
                    <motion.div
                        className="absolute inset-0"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <img
                            src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769777164/2149193628_bse3uo.jpg"
                            alt="Dax Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-12 mt-16 md:mt-0">
                            <div className="max-w-4xl">
                                <motion.h1
                                    className="text-white font-bold tracking-tight text-balance leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                >
                                    <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                                        Dax Detailing
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.2 }}
                                >
                                    DAX Detailing stands as a broad professional-grade portfolio for achieving showroom-quality detailing results across all vehicle surfaces.
                                </motion.p>

                                <motion.div
                                    className="mt-6 sm:mt-8 flex gap-3"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link to="/products" state={{ activeCategory: 'Dax Detailing' }}>
                                        <motion.button
                                            className="px-8 py-3 bg-[#0047AB] text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                                            whileHover={hoverScale}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Sparkles size={18} />
                                            Our Products
                                        </motion.button>
                                    </Link>
                                    <motion.button
                                        className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                                        whileHover={hoverScale}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Download size={18} />
                                        Download Brochure
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Matching OurStory.jsx */}
            <section className="py-10 md:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <motion.div
                            className="order-2 md:order-1"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLeft}
                        >
                            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                                Showroom Quality <br />
                                <span className="text-[#0047AB]">Results</span>
                            </h2>
                            <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                                <p>
                                    Car Detailing is the performance of thorough cleaning, restoration, Polishing & finishing of an automobile, both inside and out, to produce a show-quality level of detail. One very important thing to point out about auto detailing is that it involves much more than just car washing.<br /> <br />

                                    It will also include polishing paint damage and restoring, as well as thoroughly cleaning areas which are normally ignored such as the engine and under-chassis. Exterior detailing involves cleaning and restoring or exceeding the original condition of the surface of the cars finish.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 md:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#0047AB] rounded-xl z-0"></div>
                                <div className="relative h-72 md:h-96 rounded-xl overflow-hidden shadow-md bg-white border border-gray-100 z-10">
                                    <img
                                        src={daxDetailingProducts}
                                        alt="Dax Tools"
                                        className="w-full h-full object-contain p-4"
                                    />
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Comprehensive Care Section */}
            <section className="py-10 md:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Layers className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Thorough Cleaning</h3>
                            <p className="text-gray-600 text-sm">
                                Involves much more than just washing, including thoroughly cleaning ignored areas like the engine and under-chassis.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Sparkles className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Restoration & Polishing</h3>
                            <p className="text-gray-600 text-sm">
                                Includes polishing paint damage and restoring the surface to exceed the original condition of the car's finish.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Diamond className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Showroom Quality</h3>
                            <p className="text-gray-600 text-sm">
                                Producing a show-quality level of detail both inside and out through thorough cleaning, restoration, and finishing.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Products Section - Matching ProductShowCase.jsx */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                            Essential <span className="text-[#0047AB]">Kits</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Kit 1 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1605218457332-dd092f25492d?q=80&w=600&auto=format&fit=crop"
                                    alt="STARTER"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    STARTER
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Quick Detailer Kit</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Everything needed for a rapid gloss enhancement.
                                </p>
                                <motion.button
                                    className="w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                                    whileHover={hoverScale}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Details
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Kit 2 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop"
                                    alt="PRO"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    PRO
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Paint Correction Kit</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Complete system for removing swirls and defects.
                                </p>
                                <motion.button
                                    className="w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                                    whileHover={hoverScale}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Add to Cart
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* Kit 3 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1552934440-5bb95cc9ad5a?q=80&w=600&auto=format&fit=crop"
                                    alt="Interior"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    INTERIOR
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Interior Revival Kit</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Deep clean and condition leather and plastics.
                                </p>
                                <motion.button
                                    className="w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                                    whileHover={hoverScale}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    View Details
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default DaxDetailing;
