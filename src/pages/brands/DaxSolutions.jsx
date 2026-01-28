import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Fuel, Settings, TriangleAlert, FileText, Check, ArrowRight, Activity, Zap } from "lucide-react";

import daxSolutionsProducts from "../../assets/brand/dax-solutions-products.png";

const DaxSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white text-gray-900">
            <div className="hidden">
                <title>DAX Solutions — Engine Additives & Fuel System Treatments | Weinber Inc.</title>
                <meta name="description" content="DAX Solutions keeps engines clean and efficient with professional fuel system cleaners, oil treatments, and engine flushes." />
            </div>

            {/* Hero Section - Matching Banner.jsx */}
            <section className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-[28rem] lg:h-[50rem] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=2070&auto=format&fit=crop"
                            alt="Dax Solutions Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-12 mt-16 md:mt-0">
                            <div className="max-w-4xl">
                                <motion.h1
                                    className="text-white font-bold tracking-tight text-balance leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent block">
                                        Engine & Mechanical
                                    </span>
                                    <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                                        Performance
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                    DAX Solutions complements exterior detailing with internal care essentials that improve vehicle reliability and efficiency.
                                </motion.p>

                                <motion.div
                                    className="mt-6 sm:mt-8 flex gap-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <Link to="/contact">
                                        <button className="px-8 py-3 bg-[#0047AB] text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                                            View Additives
                                            <ArrowRight size={18} />
                                        </button>
                                    </Link>
                                    <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-lg">
                                        Data Sheets
                                    </button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Matching OurStory.jsx */}
            <section className="py-10 md:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                        <motion.div
                            className="order-2 md:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                                Internal <br />
                                <span className="text-[#0047AB]">Automotive Care</span>
                            </h2>
                            <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                                <p>
                                    DAX Solutions is Weinber Inc.’s brand focused on internal automotive care — specifically chemical additives and compounds formulated to support mechanical systems.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 md:order-2"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#0047AB] rounded-xl z-0"></div>
                                <div className="relative h-[24rem] md:h-[30rem] rounded-xl overflow-hidden shadow-md bg-white p-0 flex items-center justify-center z-10 border border-gray-100">
                                    <img
                                        src={daxSolutionsProducts}
                                        alt="Dax Tools"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Solutions Section */}
            <section className="py-10 md:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Fuel className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Engine Additives</h3>
                            <p className="text-gray-600 text-sm">
                                Products such as engine oil system detergents, fuel system cleaners, and oil treatments that help clean, protect and optimize engine performance.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Settings className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Mechanical Support</h3>
                            <p className="text-gray-600 text-sm">
                                Formulations meant to reduce internal contamination, prevent leaks, maintain smooth operation, and extend component life.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">System Performance</h3>
                            <p className="text-gray-600 text-sm">
                                Advanced chemical engineering to restore lost power, improve fuel economy, and reduce emissions in modern engines.
                            </p>
                        </div>
                    </div>
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
                        variants={fadeIn}
                    >
                        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                            Performance <span className="text-[#0047AB]">Chemistry</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Product 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1486262715619-72a604e3d7e9?q=80&w=2070&auto=format&fit=crop"
                                    alt="Engine Components"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    ADDITIVES
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Engine Additives & Treatments</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Products such as engine oil system detergents, fuel system cleaners, and oil treatments that help clean, protect and optimize engine performance.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop"
                                    alt="DIESEL"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    MECHANICAL
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Mechanical Support</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Formulations meant to reduce internal contamination, prevent leaks, maintain smooth operation, and extend component life.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1552934440-5bb95cc9ad5a?q=80&w=600&auto=format&fit=crop"
                                    alt="OIL ADDITIVE"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    OIL ADDITIVE
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Engine Oil Treatment</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Fortifies motor oil with anti-wear polymers and friction modifiers for older engines.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b95ddd71a6?q=80&w=600&auto=format&fit=crop"
                                    alt="SERVICE"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    SERVICE
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Engine Flush</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Powerful solvent blend to dissolve sludge before oil change.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DaxSolutions;
