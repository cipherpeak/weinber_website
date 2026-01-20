import React from 'react';
import { motion } from 'framer-motion';

const ManufacturingHeading = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                    Manufacturing excellence since 1992,
                    <br />
                    <span className="text-[#0047AB]">Made in the USA</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
                >
                    Product innovation, futuristic R&D initiatives and a penchant to offer unique quality to our customers
                </motion.p>
            </div>
        </section>
    );
};

export default ManufacturingHeading;
