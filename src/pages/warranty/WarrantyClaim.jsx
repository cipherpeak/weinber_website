import { useState } from "react";
import { motion } from "framer-motion";

export default function WarrantyClaim() {
    const [formData, setFormData] = useState({
        // Claim Details
        serialNumber: "",
        issueDate: "",
        issueDescription: "",
        claimImages: null,
        warrantyCard: null,


    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? (files.length > 1 ? files : files[0]) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log("Claim Submitted:", formData);
        setSubmitted(true);
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
                <h2 className="text-3xl font-bold bg-[#0047AB] bg-clip-text text-transparent mb-4">Claim Submitted</h2>
                <p className="text-gray-600 max-w-md mb-8">
                    Your claim reference ID is <span className="font-mono font-bold text-black">CLM-2024-8392</span>.
                    Our team will review your request and contact you within 24-48 hours.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors"
                    >
                        Return to Home
                    </button>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 text-[#0047AB] hover:underline"
                    >
                        Submit another claim
                    </button>
                </div>
            </div>
        )
    }

    const inputClasses = "w-full px-4 py-3 bg-gray-100 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all";
    const labelClasses = "block text-sm font-semibold text-gray-800 mb-2";

    return (
        <section className="py-16 px-4 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Details of <span className="text-[#0047AB]">Claim</span>
                    </h1>
                    <p className="text-gray-600">
                        Please provide the details of your issue below.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-10">

                    {/* DETAILS OF CLAIM */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black border-b pb-4 mb-6">DETAILS OF CLAIM</h2>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="serialNumber" className={labelClasses}>Serial No. *</label>
                                <input
                                    type="text"
                                    id="serialNumber"
                                    name="serialNumber"
                                    required
                                    value={formData.serialNumber}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="Enter Product Serial Number"
                                />
                            </div>

                            <div>
                                <label htmlFor="issueDate" className={labelClasses}>Which date was the issue first noticed? *</label>
                                <input
                                    type="date"
                                    id="issueDate"
                                    name="issueDate"
                                    required
                                    value={formData.issueDate}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>

                            <div>
                                <label htmlFor="issueDescription" className={labelClasses}>What areas are affected? *</label>
                                <textarea
                                    id="issueDescription"
                                    name="issueDescription"
                                    required
                                    rows="4"
                                    value={formData.issueDescription}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-gray-100 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#0047AB] focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Please describe the defect or issue in detail..."
                                ></textarea>
                            </div>

                            {/* Claim Images Upload */}
                            <div>
                                <label className={labelClasses}>Upload Images and supporting documents *</label>
                                <p className="text-sm text-gray-500 mb-2">(At least 3 images are required to process your claim - please provide 1 from further away, and up close)</p>
                                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label htmlFor="claimImages" className="relative cursor-pointer bg-white rounded-md font-medium text-[#0047AB] hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0047AB]">
                                                <span>Upload files</span>
                                                <input id="claimImages" name="claimImages" type="file" multiple className="sr-only" onChange={handleChange} required />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                        {formData.claimImages && (
                                            <p className="text-sm text-green-600 font-medium mt-2">
                                                {formData.claimImages.length} file(s) selected
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Warranty Card Upload */}
                            <div>
                                <label className={labelClasses}>Upload warranty confirmation/Picture of warranty card. *</label>
                                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="space-y-1 text-center">
                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label htmlFor="warrantyCard" className="relative cursor-pointer bg-white rounded-md font-medium text-[#0047AB] hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0047AB]">
                                                <span>Upload a file</span>
                                                <input id="warrantyCard" name="warrantyCard" type="file" className="sr-only" onChange={handleChange} required />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                        {formData.warrantyCard && (
                                            <p className="text-sm text-green-600 font-medium mt-2">
                                                Selected: {formData.warrantyCard.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#0047AB] text-white font-bold py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
                    >
                        Submit
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
