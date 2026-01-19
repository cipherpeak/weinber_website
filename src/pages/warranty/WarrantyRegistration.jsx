import { useState } from "react";
import { motion } from "framer-motion";

export default function WarrantyRegistration() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        productSku: "",
        purchaseDate: "",
        dealerName: "",
        uniqueCode: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Form Data Submitted:", formData);
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                >
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
                <h2 className="text-3xl font-bold bg-[#0047AB] bg-clip-text text-transparent mb-4">Registration Successful!</h2>
                <p className="text-gray-600 max-w-md">
                    Your warranty has been successfully registered. A confirmation email has been sent to {formData.email}.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[#0047AB] hover:underline"
                >
                    Register another product
                </button>
            </div>
        )
    }

    return (
        <section className="py-16 px-4 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Warranty <span className="text-[#0047AB]">Registration</span>
                    </h1>
                    <p className="text-gray-600">
                        Activate your warranty to ensure comprehensive protection for your Weinber product.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div>
                            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-2">Date of Purchase</label>
                            <input
                                type="date"
                                id="purchaseDate"
                                name="purchaseDate"
                                required
                                value={formData.purchaseDate}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label htmlFor="productSku" className="block text-sm font-medium text-gray-700 mb-2">Product SKU / Name</label>
                            <input
                                type="text"
                                id="productSku"
                                name="productSku"
                                required
                                value={formData.productSku}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                placeholder="e.g. WB-CERAMIC-9H"
                            />
                        </div>
                        <div>
                            <label htmlFor="dealerName" className="block text-sm font-medium text-gray-700 mb-2">Dealer / Store Name</label>
                            <input
                                type="text"
                                id="dealerName"
                                name="dealerName"
                                value={formData.dealerName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                placeholder="Where did you buy it?"
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="uniqueCode" className="block text-sm font-medium text-gray-700 mb-2">Unique Authenticity Code</label>
                        <input
                            type="text"
                            id="uniqueCode"
                            name="uniqueCode"
                            required
                            value={formData.uniqueCode}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all font-mono tracking-widest uppercase"
                            placeholder="XXXX-XXXX-XXXX-XXXX"
                        />
                        <p className="text-xs text-gray-500 mt-2">Found on the scratch-off label on the product packaging.</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#0047AB] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Register Warranty
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
