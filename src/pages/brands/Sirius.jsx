import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Sparkles, Droplets, Zap, CheckCircle, ArrowRight, Download, FlaskConical, FileText } from "lucide-react";

const Sirius = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white font-sans text-gray-900">
            {/* 1. Page Metadata (Simulated) */}
            <div className="hidden">
                <title>SIRIUS — Premium Nano-Ceramic & Graphene Coatings | Weinber Inc.</title>
                <meta name="description" content="SIRIUS pro nano-ceramic and graphene coatings deliver 9H hardness, extreme hydrophobicity and UV/chemical protection." />
            </div>

            {/* 2. Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop"
                        alt="High contrast car paint with water beads"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Protect & Shine <br />
                            <span className="text-blue-500">SIRIUS</span> Nano-Ceramic.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                            9H nano-ceramic and graphene-infused formulas engineered for long-term gloss, chemical resistance, and superior hydrophobicity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#0047AB] hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                                <Download size={20} />
                                Get Datasheet
                            </button>
                            <Link to="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                Find Certified Applicator
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Brand Overview */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-black">
                            Engineered for <span className="text-[#0047AB]">Extreme Conditions</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            SIRIUS is the professional protective line engineered to preserve paint finishes under extreme environmental, chemical, and UV exposure. Combining advanced nano-ceramic chemistry with graphene particle technology, SIRIUS products deliver high gloss, long durability, and easy maintenance for both professional detailers and informed DIYers.
                        </p>
                        <div className="h-1 w-20 bg-[#0047AB]" />
                    </motion.div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
                            alt="Nano coating application"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* 4. Key Benefits */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Why Choose SIRIUS?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Advanced protection technology that outperforms traditional waxes and sealants.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Long-Term Barrier", desc: "Up to 5+ years of durability with proper maintenance." },
                            { icon: Sparkles, title: "Extreme Gloss", desc: "Deep, mirror-like finish that enhances paint clarity." },
                            { icon: Zap, title: "UV & Chemical Resistance", desc: "Protects against oxidation, bird droppings, and acid rain." },
                            { icon: Droplets, title: "Super Hydrophobic", desc: "Self-cleaning effect repels water and dirt instantly." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <item.icon className="w-12 h-12 text-[#0047AB] mb-6" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Flagship Products */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">The <span className="text-[#0047AB]">SIRIUS</span> Collection</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Product Card 1 */}
                        <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                            <div className="md:w-1/3 bg-gray-200 relative min-h-[250px]">
                                <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0" alt="Sirius Pro" />
                            </div>
                            <div className="p-8 md:w-2/3">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">SIRIUS PRO</h3>
                                        <span className="text-[#0047AB] font-semibold text-sm tracking-wider">NANO CERAMIC COATING</span>
                                    </div>
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded">9H</span>
                                </div>
                                <p className="text-gray-600 mb-6">Ultra-hydrophobic 9H coating delivering extreme gloss and protection for automotive finishes.</p>
                                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> 50ml / 100ml packs</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> 3-5 Year Durability</li>
                                </ul>
                                <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-[#0047AB] transition-colors">
                                    View Specifications
                                </button>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                            <div className="md:w-1/3 bg-gray-200 relative min-h-[250px]">
                                <img src="https://images.unsplash.com/photo-1550529126-7243c3d3dd5c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0" alt="Sirius Ultra" />
                            </div>
                            <div className="p-8 md:w-2/3">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">SIRIUS ULTRA</h3>
                                        <span className="text-[#0047AB] font-semibold text-sm tracking-wider">GRAPHENE COATING</span>
                                    </div>
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded">10H</span>
                                </div>
                                <p className="text-gray-600 mb-6">Hybrid graphene-ceramic formula for superior thermal stability and scratch resistance.</p>
                                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> 50ml pack</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> 5+ Year Durability</li>
                                </ul>
                                <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-[#0047AB] transition-colors">
                                    View Specifications
                                </button>
                            </div>
                        </div>

                        {/* Product Card 3 */}
                        <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                            <div className="md:w-1/3 bg-gray-200 relative min-h-[250px]">
                                <img src="https://images.unsplash.com/photo-1632733711679-529326f6db12?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0" alt="Sirius PPF" />
                            </div>
                            <div className="p-8 md:w-2/3">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">SIRIUS PPF</h3>
                                        <span className="text-[#0047AB] font-semibold text-sm tracking-wider">PAINT PROTECTION FILM</span>
                                    </div>
                                    <span className="bg-black text-white text-xs px-2 py-1 rounded">TPU</span>
                                </div>
                                <p className="text-gray-600 mb-6">Self-healing, high-clarity thermoplastic polyurethane film for impact protection.</p>
                                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> Gloss & Matte Finishes</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> 10 Year Warranty</li>
                                </ul>
                                <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-[#0047AB] transition-colors">
                                    View Specifications
                                </button>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all">
                            <div className="md:w-1/3 bg-gray-200 relative min-h-[250px]">
                                <img src="https://images.unsplash.com/photo-1549429406-8c704044debb?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover absolute inset-0" alt="Sirius Leather" />
                            </div>
                            <div className="p-8 md:w-2/3">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">SIRIUS INTERIOR</h3>
                                        <span className="text-[#0047AB] font-semibold text-sm tracking-wider">LEATHER & FABRIC</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">Breathable protective barrier that repels spills, stains, and UV damage on interior surfaces.</p>
                                <ul className="text-sm text-gray-500 mb-6 space-y-2">
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> Hydrophobic</li>
                                    <li className="flex items-center gap-2"><CheckCircle size={16} className="text-[#0047AB]" /> Safe for delicate materials</li>
                                </ul>
                                <button className="w-full bg-black text-white py-3 rounded-lg font-bold hover:bg-[#0047AB] transition-colors">
                                    View Specifications
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. How It Works */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-8">Precision Application</h2>
                            <p className="text-gray-400 mb-8 border-l-4 border-[#0047AB] pl-4">
                                SIRIUS coatings form a permanent bond with the surface, requiring precise preparation and application for optimal results.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { step: "01", title: "Surface Prep", desc: "Decontamination, paint correction, and final IPA wipe to ensure a virgin surface." },
                                    { step: "02", title: "Layering", desc: "Application of base coat followed by top coat using cross-hatch method." },
                                    { step: "03", title: "Curing", desc: "Infrared curing or 24-hour ambient cure in a controlled environment." }
                                ].map((item) => (
                                    <div key={item.step} className="flex gap-4">
                                        <span className="text-[#0047AB] font-bold text-xl">{item.step}</span>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-4">
                                <button className="border border-white hover:bg-white hover:text-black py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                    <FileText size={18} />
                                    Download App Guide
                                </button>
                                <button className="border border-white hover:bg-white hover:text-black py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                                    <FlaskConical size={18} />
                                    SDS
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative">
                            <img
                                src="https://images.unsplash.com/photo-1582294155100-c9772bf6d194?q=80&w=1000&auto=format&fit=crop"
                                alt="Detailer applying coating"
                                className="rounded-2xl shadow-2xl opacity-90"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-[#0047AB] p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="font-bold text-xl mb-1">Professional Grade</p>
                                <p className="text-sm opacity-90">Certified applicator training available.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Use Cases */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Trusted Protection For</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["Luxury Vehicles", "Marine Vessels", "Aviation", "Industrial"].map((item) => (
                            <div key={item} className="p-6 bg-gray-50 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:text-[#0047AB] hover:border-[#0047AB] transition-colors cursor-default">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FAQ Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How long does SIRIUS Pro last?", a: "Longevity depends on maintenance and environment, but professional applications typically last 3-5+ years." },
                            { q: "Can SIRIUS be applied over PPF or vinyl?", a: "Yes, specific formulations are safe for films and wraps. We recommend a test patch." },
                            { q: "Is it safe for matte finishes?", a: "We have specific matte-safe coatings that offer protection without adding unwanted gloss." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-2">{item.q}</h3>
                                <p className="text-gray-600">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 10. Final CTA */}
            <section className="py-24 px-6 bg-[#0047AB] text-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience SIRIUS?</h2>
                    <p className="text-xl opacity-90 mb-10">Whether you're a professional detailer or a car enthusiast, we have the perfect protection solution for you.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <button className="bg-white text-[#0047AB] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                                Find an Applicator
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                                Become a Distributor
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sirius;
