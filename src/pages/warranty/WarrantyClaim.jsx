import { useState } from "react";
import { motion } from "framer-motion";

export default function WarrantyClaim() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        warrantyId: "",
        name: "",
        email: "",
        issueDescription: "",
        images: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = (e) => {
        e.preventDefault();
        setStep((prev) => prev + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Claim Submitted:", formData);
        setStep(3); // Success step
    };

    return (
        <section className="py-16 px-4 max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Warranty <span className="text-[#0047AB]">Claim</span>
                    </h1>
                    <p className="text-gray-600">
                        We stand by our products. If you're experiencing an issue, let us make it right.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full">
                        <motion.div
                            className="h-full bg-[#0047AB]"
                            initial={{ width: "0%" }}
                            animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>

                    {step === 1 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Step 1: Verify Warranty</h2>
                            <form onSubmit={handleNext}>
                                <div className="mb-6">
                                    <label htmlFor="warrantyId" className="block text-sm font-medium text-gray-700 mb-2">Warranty Registration ID</label>
                                    <input
                                        type="text"
                                        id="warrantyId"
                                        name="warrantyId"
                                        required
                                        value={formData.warrantyId}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter the ID received in confirmation email"
                                    />
                                </div>
                                <div className="mb-8">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Registered Email</label>
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
                                <button
                                    type="submit"
                                    className="w-full bg-[#0047AB] text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    Verify & Continue
                                </button>
                            </form>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                        >
                            <h2 className="text-2xl font-bold mb-6">Step 2: Describe Issue</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700 mb-2">Issue Description</label>
                                    <textarea
                                        id="issueDescription"
                                        name="issueDescription"
                                        required
                                        rows="6"
                                        value={formData.issueDescription}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all"
                                        placeholder="Please describe the defect or issue in detail..."
                                    ></textarea>
                                </div>
                                <div className="flex gap-4">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="w-1/3 bg-gray-100 text-gray-700 font-bold py-3 rounded-xl hover:bg-gray-200 transition-all"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-2/3 bg-[#0047AB] text-white font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                                    >
                                        Submit Claim
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Claim Submitted</h2>
                            <p className="text-gray-600 mb-8">
                                Your claim reference ID is <span className="font-mono font-bold text-black">CLM-2024-8392</span>.
                                Our team will review your request and contact you within 24-48 hours.
                            </p>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-black transition-colors"
                            >
                                Return to Home
                            </button>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
