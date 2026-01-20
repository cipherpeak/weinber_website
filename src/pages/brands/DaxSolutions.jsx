import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Fuel, Settings, TriangleAlert, FileText, Check, ArrowRight, Activity, Zap } from "lucide-react";

const DaxSolutions = () => {
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
                <title>DAX Solutions — Engine Additives & Fuel System Treatments | Weinber Inc.</title>
                <meta name="description" content="DAX Solutions keeps engines clean and efficient with professional fuel system cleaners, oil treatments, and engine flushes." />
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486262715619-72a604e3d7e9?q=80&w=2070&auto=format&fit=crop"
                        alt="Engine Components"
                        className="w-full h-full object-cover opacity-40"
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
                            Protect What <br />
                            <span className="text-teal-500">Powers</span> Your Vehicle.
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                            Advanced chemical formulations designed to clean injectors, protect lubricating systems, and restore engine performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2">
                                <Fuel size={20} />
                                View Additives
                            </Link>
                            <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
                                Data Sheets
                            </button>
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
                            System <span className="text-teal-600">Integrity</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            DAX Solutions focuses on internal automotive care — fuel and oil additives, engine cleaners, and treatments designed to remove deposits, restore efficiency, and prolong engine life. Our range supports modern internal combustion engines and addresses common issues like injector clogging, varnish buildup, and minor leaks.
                        </p>
                        <div className="h-1 w-20 bg-teal-600" />
                    </motion.div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 p-8 flex items-center justify-center border border-gray-200">
                        <Settings className="w-48 h-48 text-teal-600 opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-white p-6 rounded-xl shadow-xl max-w-xs text-center border border-teal-100">
                                <Activity className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                                <h3 className="font-bold text-xl mb-2">Restores Efficiency</h3>
                                <p className="text-sm text-gray-500">Proven to improve fuel economy by cleaning vital intake components.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Products */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Performance Chemistry</h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Product 1 */}
                        <div className="bg-white rounded-xl shadow-lg border-l-8 border-teal-500 overflow-hidden hover:shadow-2xl transition-all p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Fuel System Cleaner</h3>
                                    <span className="text-teal-600 font-bold text-sm tracking-wider uppercase">Gasoline / Petrol</span>
                                </div>
                                <Fuel className="text-gray-300 w-10 h-10" />
                            </div>
                            <p className="text-gray-600 mb-6">Complete fuel system cleanup in one tank. Removed deposits from injectors, intake valves, and combustion chambers.</p>
                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">DOSAGE</span>
                                    <span className="font-bold">1 Bottle / 60L Tank</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">FREQUENCY</span>
                                    <span className="font-bold">Every 5,000 km</span>
                                </div>
                            </div>
                            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors">View Details</button>
                        </div>

                        {/* Product 2 */}
                        <div className="bg-white rounded-xl shadow-lg border-l-8 border-blue-600 overflow-hidden hover:shadow-2xl transition-all p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Diesel Injector Cleaner</h3>
                                    <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Diesel Heavy Duty</span>
                                </div>
                                <Zap className="text-gray-300 w-10 h-10" />
                            </div>
                            <p className="text-gray-600 mb-6">Concentrated formula with soot dispersants to de-coke injectors and restore lost power in diesel engines.</p>
                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">COMPATIBILITY</span>
                                    <span className="font-bold">Common Rail / TDI</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">BENEFIT</span>
                                    <span className="font-bold">Reduces Smoke</span>
                                </div>
                            </div>
                            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">View Details</button>
                        </div>

                        {/* Product 3 */}
                        <div className="bg-white rounded-xl shadow-lg border-l-8 border-yellow-500 overflow-hidden hover:shadow-2xl transition-all p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Engine Oil Treatment</h3>
                                    <span className="text-yellow-600 font-bold text-sm tracking-wider uppercase">All Oil Types</span>
                                </div>
                                <Droplet className="text-gray-300 w-10 h-10" />
                            </div>
                            <p className="text-gray-600 mb-6">Fortifies motor oil with anti-wear polymers and friction modifiers. Helps reduce minor oil leaks and consumption.</p>
                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">APPLICATION</span>
                                    <span className="font-bold">Add to Warm Oil</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">RESULT</span>
                                    <span className="font-bold">Smoother Idle</span>
                                </div>
                            </div>
                            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">View Details</button>
                        </div>

                        {/* Product 4 */}
                        <div className="bg-white rounded-xl shadow-lg border-l-8 border-[#0047AB] overflow-hidden hover:shadow-2xl transition-all p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">Engine Flush</h3>
                                    <span className="text-[#0047AB] font-bold text-sm tracking-wider uppercase">Pre-Change Service</span>
                                </div>
                                <TriangleAlert className="text-gray-300 w-10 h-10" />
                            </div>
                            <p className="text-gray-600 mb-6">Powerful solvent blend to dissolve sludge and suspended deposits before an oil change. 5-minute fast acting formula.</p>
                            <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">USAGE</span>
                                    <span className="font-bold">Idle Only</span>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="block text-gray-500 text-xs">SAFETY</span>
                                    <span className="font-bold">Do Not Drive</span>
                                </div>
                            </div>
                            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-bold hover:bg-[#0047AB] transition-colors">View Details</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Notes */}
            <section className="py-20 px-6 bg-gray-900 text-white">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-12">Technical Compatibility</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="bg-teal-900/50 p-3 rounded-lg h-fit">
                                    <Check className="text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Modern Engine Safe</h3>
                                    <p className="text-gray-400">Formulated to be safe for GDI (Gasoline Direct Injection) and Turbocharged engines.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-teal-900/50 p-3 rounded-lg h-fit">
                                    <Check className="text-teal-400" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-2">Emission System Compliant</h3>
                                    <p className="text-gray-400">Will not harm catalytic converters or oxygen sensors when used as directed.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 p-8 rounded-2xl border border-white/20">
                            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                                <TriangleAlert className="text-yellow-500" />
                                DPF Warning
                            </h3>
                            <p className="text-gray-300 mb-4 text-sm">
                                For diesel vehicles equipped with DPF (Diesel Particulate Filters), ensure you use our specifically marked "DPF Safe" additives. Incorrect use of standard additives may cause filter blockage.
                            </p>
                            <Link to="/contact" className="text-teal-400 font-bold hover:underline">Contact support for DPF guidance &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
                    <div className="space-y-4">
                        <details className="group border border-gray-200 rounded-lg open:bg-gray-50 transition-all p-4">
                            <summary className="flex justify-between items-center cursor-pointer font-bold list-none">
                                <span>How often should I use fuel system cleaner?</span>
                                <span className="transition group-open:rotate-180">
                                    <ArrowRight className="rotate-90" />
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-3 pt-3 border-t border-gray-200 text-sm">
                                We recommend a typical regimen of every 5,000–10,000 km, or at every oil change interval. This helps maintain optimal injector spray patterns.
                            </div>
                        </details>
                        <details className="group border border-gray-200 rounded-lg open:bg-gray-50 transition-all p-4">
                            <summary className="flex justify-between items-center cursor-pointer font-bold list-none">
                                <span>Will DAX Solutions void my warranty?</span>
                                <span className="transition group-open:rotate-180">
                                    <ArrowRight className="rotate-90" />
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-3 pt-3 border-t border-gray-200 text-sm">
                                Our products are designed to meet OEM specifications. However, we always recommend checking your specific vehicle manufacturer's warranty terms regarding aftermarket additives.
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* B2B CTA */}
            <section className="py-24 px-6 bg-teal-600 text-white text-center">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6">Fleet & Professional Solutions</h2>
                    <p className="text-xl opacity-90 mb-10">Bulk mixing options and service line products available for independent garages and fleet operators.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/contact">
                            <button className="bg-white text-teal-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors w-full sm:w-auto">
                                Request Fleet Pricing
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DaxSolutions;
