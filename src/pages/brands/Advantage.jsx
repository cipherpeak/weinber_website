import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Wrench, Shield, Truck, Package, Download, ArrowRight } from "lucide-react";
import { fadeInUp, fadeIn, fadeInLeft, staggerContainer, hoverScale } from "../../utils/animations";

const Advantage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);



    return (
        <div className="bg-white text-gray-900">
            <div className="hidden">
                <title>Advantage — Premium Automotive Trading & Services | Weinber Inc.</title>
                <meta name="description" content="Advantage Trading & Services provides top-tier automotive products and solutions." />
            </div>

            {/* Hero Section - Matching Banner.jsx */}
            <section className="relative w-full md:p-5 p-2 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-[28rem] lg:h-[50rem] rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0">
                        <img
                            src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769765567/WhatsApp_Image_2026-01-29_at_21.46.14_bvdira.jpg"
                            alt="Advantage Hero"
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
                                    <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent block">
                                        The Weinber
                                    </span>
                                    <span className="bg-gradient-to-r from-[#0047AB] via-white to-white bg-clip-text text-transparent block mt-2">
                                        Advantage
                                    </span>
                                </motion.h1>

                                <motion.p
                                    className="mt-4 sm:mt-6 hidden md:block text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.2 }}
                                >
                                    Over 20 Years of Expertise in delivering products developed with long-standing experience in coatings, detailing chemistry and automotive care.
                                </motion.p>

                                <motion.div
                                    className="mt-6 sm:mt-8 flex gap-3"
                                    initial="hidden"
                                    animate="visible"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link to="/products" state={{ activeCategory: 'Advantage' }}>
                                        <button className="px-8 py-3 bg-[#0047AB] text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                                            <Package size={18} />
                                            Our Products
                                        </button>
                                    </Link>
                                    <button className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-all duration-300 hover:shadow-lg flex items-center gap-2">
                                        <Download size={18} />
                                        Download Brochure
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
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLeft}
                        >
                            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                                Quality & <br />
                                <span className="text-[#0047AB]">Innovation</span>
                            </h2>
                            <div className="text-gray-700 leading-relaxed mb-8 space-y-6">
                                <p>
                                    Automotive Oil Additives are specialized chemical agents formulated to significantly boost the lubricating properties of base oils. Manufacturers leverage these varied additives to customize standard base stocks for diverse, high-performance applications. In many advanced formulations, these vital additives constitute up to 5% of the total volume.<br /> <br />

                                    These agents are indispensable for maintaining modern engine health. They prevent oil degradation, seal against leaks, and defend critical engine components from wear and contamination. Without them, engines would suffer from breakdown and lack protection under varying operating temperatures.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 md:order-2"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#0047AB] rounded-xl z-0"></div>
                                <img
                                    src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769765567/WhatsApp_Image_2026-01-29_at_21.47.27_aytjn7.jpg"
                                    alt="Logistics"
                                    className="w-full h-72 md:h-96 object-cover rounded-xl shadow-md relative z-10"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Brand Highlights Section */}
            <section className="py-10 md:py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Lubrication</h3>
                            <p className="text-gray-600 text-sm">
                                Boosting the performance of base oils through specialized chemical compounding for targeted applications.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Truck className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Engine Longevity</h3>
                            <p className="text-gray-600 text-sm">
                                Vital protection that prevents contamination and breakdown, ensuring the long-term health of internal components.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                                <Wrench className="text-[#0047AB]" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Thermal Protection</h3>
                            <p className="text-gray-600 text-sm">
                                Maintaining oil integrity and protection capabilities across all operating temperatures to prevent failure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - Matching ProductShowCase.jsx */}
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
                            Our <span className="text-[#0047AB]">Services</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Service 1 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1566576912906-253c7c320d33?q=80&w=600&auto=format&fit=crop"
                                    alt="Distribution"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    LOGISTICS
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Product Distribution</h4>
                                <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">
                                    Seamless supply chain solutions for automotive consumables and equipment.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    Learn More
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b95ddd71a6?q=80&w=600&auto=format&fit=crop"
                                    alt="Consulting"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    VERSATILE
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Professional & DIY Focus</h4>
                                <p className="text-gray-500 text-xs line-clamp-3 mb-3 h-12">
                                    Formulations suitable for both professional detailers and car enthusiasts.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    Get Consultation
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=600&auto=format&fit=crop"
                                    alt="Sourcing"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    INNOVATION
                                </div>
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-gray-900 mb-1 truncate">Innovation & Quality</h4>
                                <p className="text-gray-500 text-xs line-clamp-3 mb-3 h-12">
                                    Continuous technological improvement in protective coatings, cleaning systems and performance additives to meet modern demands.
                                </p>
                                <button className="block w-full text-center bg-[#0047AB] text-white font-medium py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                                    View Details
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Advantage;
