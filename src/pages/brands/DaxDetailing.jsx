import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Layers, PenTool, Droplet, ArrowRight, Star, Download, CirclePlay } from "lucide-react";

const DaxDetailing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-white font-sans text-gray-900">
            <div className="hidden">
                <title>DAX Detailing — Polishes, Compounds & Interior Care | Weinber Inc.</title>
                <meta name="description" content="DAX Detailing offers a full range of professional polishes, compounds, waxes and interior systems for flawless finishes." />
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
                        alt="Polishing a car"
                        className="w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-white">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Restore. Polish. <br />
                            <span className="text-orange-500">DAX</span> Perfect.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                            Professional-grade compounds, polishes, and interior systems specifically engineered for flawless, showroom-quality finishes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                                <Sparkles size={20} />
                                View Products
                            </Link>
                            <Link to="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                Shop Kits
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Brand Overview */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold mb-6 text-black">
                            The Art of <span className="text-orange-600">Restoration</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            DAX Detailing is the performance finishing line focused on restoration and detailing — the products detailers rely on to remove defects, refine finishes, and deliver showroom results. Coverage spans from aggressive compounding to ultra-fine finishing polishes and complete interior care systems.
                        </p>
                        <div className="h-1 w-20 bg-orange-600" />
                    </motion.div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                        <img
                            src="https://images.unsplash.com/photo-1635773124508-8e622b7d59c9?q=80&w=1000&auto=format&fit=crop"
                            alt="Detailing Tools"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Product Families */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Professional Systems</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Compounds", sub: "Heavy Correction", icon: Layers, desc: "Remove heavy swirls, oxidation, and scratches." },
                            { title: "Polishes", sub: "Finishing & Gloss", icon: Sparkles, desc: "Refine paint to a mirror finish with zero hazing." },
                            { title: "Interior", sub: "Leather & Fabric", icon: PenTool, desc: "Clean and condition delicate interior surfaces." },
                            { title: "Waxes", sub: "Final Protection", icon: Droplet, desc: "Seal in the shine with carnauba and synthetic blends." }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500 hover:shadow-xl transition-all group">
                                <item.icon className="w-10 h-10 text-orange-600 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                                <p className="text-orange-600 font-medium text-sm mb-4">{item.sub}</p>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kits & Packages */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Essential Kits</h2>
                            <p className="text-gray-600">Curated bundles for every stage of detailing.</p>
                        </div>
                        <Link to="/contact" className="text-orange-600 font-bold hover:underline hidden md:block">View All Kits &rarr;</Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Kit 1 */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-200 transition-colors">
                            <div className="h-64 bg-gray-200 relative">
                                <img src="https://images.unsplash.com/photo-1605218457332-dd092f25492d?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Starter Kit" />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">STARTER</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Quick Detailer Kit</h3>
                                <p className="text-gray-600 text-sm mb-4">Everything needed for a rapid gloss enhancement.</p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li>• Spray Wax</li>
                                    <li>• Microfiber Towels</li>
                                    <li>• Tire Dressing</li>
                                </ul>
                                <button className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-colors">View Details</button>
                            </div>
                        </div>

                        {/* Kit 2 */}
                        <div className="border border-orange-200 rounded-2xl overflow-hidden shadow-lg relative transform md:-translate-y-4 bg-white">
                            <div className="absolute top-0 left-0 w-full bg-orange-600 text-white text-center text-xs font-bold py-1">BEST SELLER</div>
                            <div className="h-64 bg-gray-200 relative mt-6">
                                <img src="https://images.unsplash.com/photo-1625902382753-48092a54a01c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Correction Kit" />
                                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">PRO</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Paint Correction Kit</h3>
                                <p className="text-gray-600 text-sm mb-4">Complete system for removing swirls and defects.</p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li>• DAX Cut Compound</li>
                                    <li>• DAX Fine Polish</li>
                                    <li>• Pad Set (Cut/Polish/Finish)</li>
                                </ul>
                                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors">Add to Cart</button>
                            </div>
                        </div>

                        {/* Kit 3 */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-orange-200 transition-colors">
                            <div className="h-64 bg-gray-200 relative">
                                <img src="https://images.unsplash.com/photo-1552934440-5bb95cc9ad5a?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover" alt="Interior Kit" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Interior Revival Kit</h3>
                                <p className="text-gray-600 text-sm mb-4">Deep clean and condition leather and plastics.</p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    <li>• Leather Cleaner & Conditioner</li>
                                    <li>• Interior Detailer</li>
                                    <li>• Horsehair Brush</li>
                                </ul>
                                <button className="w-full border border-gray-900 text-gray-900 py-3 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-colors">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How To / Tutorials */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Master Your Craft</h2>
                        <p className="text-gray-400">Step-by-step guides to achieving perfection.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 w-full max-w-md hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-6">
                                <CirclePlay className="text-orange-500 w-12 h-12 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold bg-orange-600 px-2 py-1 rounded text-white">VIDEO</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Paint Correction 101</h3>
                            <p className="text-gray-400 text-sm mb-4">Learn the fundamentals of dual-action polishing and compound selection.</p>
                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="w-1/3 h-full bg-orange-500"></div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10 w-full max-w-md hover:bg-white/10 transition-colors cursor-pointer group">
                            <div className="flex justify-between items-start mb-6">
                                <CirclePlay className="text-orange-500 w-12 h-12 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-bold bg-orange-600 px-2 py-1 rounded text-white">GUIDE</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Leather Restoration</h3>
                            <p className="text-gray-400 text-sm mb-4">Proper techniques for deep cleaning and hydrating aged leather seats.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-orange-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <Star className="w-10 h-10 text-orange-500 mx-auto mb-6 fill-current" />
                    <h2 className="text-3xl font-bold mb-8">"DAX compounds cut my correction time by 30%. The finish is consistently flawless."</h2>
                    <div>
                        <p className="font-bold text-lg">Michael R.</p>
                        <p className="text-gray-600">Professional Detailer, Chicago</p>
                    </div>
                </div>
            </section>

            {/* Final Conversion */}
            <section className="py-24 px-6 bg-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6">Ready for Showroom Results?</h2>
                    <p className="text-xl text-gray-600 mb-10">Join thousands of professionals who trust DAX for their finishing needs.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-colors w-full sm:w-auto">
                                Buy Starter Kit
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-black text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                                Request Pro Pricing
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DaxDetailing;
