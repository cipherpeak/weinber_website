import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Sparkles, Droplets, Zap, CheckCircle, ArrowRight, Download, FlaskConical, FileText } from "lucide-react";
import { fadeInUp, fadeIn, fadeInLeft, fadeInRight, staggerContainer, hoverScale } from "../../utils/animations";

const Sirius = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="bg-white text-gray-900">
            <div className="hidden">
                <title>SIRIUS — Premium Nano-Ceramic & Graphene Coatings | Weinber Inc.</title>
                <meta name="description" content="SIRIUS pro nano-ceramic and graphene coatings." />
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
                            src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769767266/C2767.00_00_12_15.Still006_auto_x2.jpg_copy_snu1hz.jpg"
                            alt="Sirius Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-12 mt-16 md:mt-0">
                            <div className="max-w-4xl">
                                <motion.h1
                                    className="text-white font-bold tracking-tight text-balance leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                                        Sirius
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.2 }}
                                >
                                    SIRIUS delivers premium protection solutions that both preserve the vehicle’s finish and elevate its visual quality through advanced nano-ceramic and graphene technologies.
                                </motion.p>

                                <motion.div
                                    className="mt-6 sm:mt-8 flex gap-3"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link to="/products" state={{ activeCategory: 'Sirius' }}>
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
                                Premium Car <br />
                                <span className="text-[#0047AB]">Detailing Products</span>
                            </h2>
                            <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                                <p>
                                    Sirius pro is the 3D hybrid molecular structure that creates a 3D matrix high gloss finish to the coated surfaces and ultra-hydrophobicity keeps safer for longer.<br /> <br />It focuses on high-performance coatings and protection films that defend vehicles from environmental elements while enhancing gloss and durability.
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
                                <img
                                    src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769767427/Sirius-pro2_xuzpoj.webp"
                                    alt="Sirius Coating"
                                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md relative z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Technologies Section */}
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
                                <Shield className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Coatings</h3>
                            <p className="text-gray-600 text-sm">
                                High-tech protective coatings engineered for superior hardness, hydrophobic performance, weather resistance and UV protection.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Automotive Protection Films</h3>
                            <p className="text-gray-600 text-sm">
                                Thermoplastic Polyurethane (TPU) films that guard automotive paint surfaces against scratches, chips and environmental damage.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Interior Protection</h3>
                            <p className="text-gray-600 text-sm">
                                Advanced protective solutions for leather, fabric, and vinyl surfaces to prevent staining, fading, and wear from daily use.
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
                            The <span className="text-[#0047AB]">SIRIUS</span> Collection
                        </h2>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Product 1 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop"
                                    alt="SIRIUS PRO"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    9H Ceramic
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">SIRIUS PRO</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Ultra-hydrophobic 9H coating delivering extreme gloss and protection.
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

                        {/* Product 2 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1550529126-7243c3d3dd5c?q=80&w=600&auto=format&fit=crop"
                                    alt="SIRIUS ULTRA"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    10H Graphene
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">SIRIUS ULTRA</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Hybrid graphene-ceramic formula for superior thermal stability.
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

                        {/* Product 3 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=600&auto=format&fit=crop"
                                    alt="SIRIUS PPF"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    PPF
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">SIRIUS PPF</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Self-healing, high-clarity thermoplastic polyurethane film.
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

                        {/* Product 4 */}
                        <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1549429406-8c704044debb?q=80&w=600&auto=format&fit=crop"
                                    alt="SIRIUS INTERIOR"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    Interior
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">SIRIUS INTERIOR</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Breathable protective barrier that repels spills and stains.
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

export default Sirius;
