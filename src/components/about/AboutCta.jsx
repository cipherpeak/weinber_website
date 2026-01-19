import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion";
import { Link } from 'react-router-dom';

function AboutCta() {
    const buttonRef = useRef(null);
    const isInView = useInView(buttonRef, { once: true, amount: 0.1 });

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
        <div className="py-10 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* See Level Above Expectation Section */}
                <motion.div
                    className="relative bg-gradient-to-r from-[#0047AB] to-blue-800 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100"
                    variants={slideInVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                backgroundSize: "40px 40px",
                            }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white md:mb-6">
                            Below sea level. <br /> Above expectation
                        </h3>
                        <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 leading-relaxed">
                            From the heart of Kuttanad's backwaters, we craft authentic Kerala
                            flavors rooted in tradition and elevated by passion, delivering
                            quality that goes beyond expectations
                        </p>

                        <motion.div
                            ref={buttonRef}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link to="/products">
                            
                                <button className="px-6 cursor-pointer md:px-8 py-2 md:py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-blue-700 transition-all transform hover:scale-105 duration-300 text-sm md:text-base ">
                                    Explore Products
                                </button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-white opacity-10"></div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white opacity-10"></div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutCta