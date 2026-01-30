import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const APPLICATION_OPTIONS = {
    "PAINT PROTECTION FILMS": ["PPF MAGNIFENCE", "PPF MATTE", "PPF BLACK"],
    "COATINGS": ["CERAMIC COATING", "GRAPHENE COATING"]
};

export default function WarrantyRegistration() {
    const [formData, setFormData] = useState({
        // Product Information
        serialNumber: "",
        products: [{ applicationType: "", productName: "" }],

        // Customer Information
        firstName: "",
        lastName: "",
        email: "",
        phone: "",

        // Vehicle Information
        installationDate: "",
        chassisNo: "",
        vehicleModel: "",
        invoiceFile: null,

        // Dealer Information
        companyName: "",
        dealerName: "",
        dealerEmail: "",
        dealerPhone: "",
        dealerAddress: "",
        dealerCity: "",
        dealerState: "",
        dealerZip: "",
        dealerCountry: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value,
        }));
    };

    const addProductRow = () => {
        setFormData(prev => ({
            ...prev,
            products: [...prev.products, { applicationType: "", productName: "" }]
        }));
    };

    const removeProductRow = (index) => {
        if (formData.products.length > 1) {
            const newProducts = formData.products.filter((_, i) => i !== index);
            setFormData(prev => ({ ...prev, products: newProducts }));
        }
    };

    const handleProductChange = (index, e) => {
        const { name, value } = e.target;
        const newProducts = [...formData.products];
        newProducts[index][name] = value;
        // Reset product if application type changes
        if (name === 'applicationType') {
            newProducts[index].productName = "";
        }
        setFormData(prev => ({ ...prev, products: newProducts }));
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
                        Warranty <span className="text-[#0047AB]">Registration</span>
                    </h1>
                    <p className="text-gray-600">
                        Activate your warranty to ensure comprehensive protection for your Weinber product.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100 space-y-10">

                    {/* PRODUCT INFORMATION */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black border-b pb-4 mb-6">PRODUCT INFORMATION</h2>
                        <div className="space-y-8">
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
                                />
                            </div>

                            <AnimatePresence>
                                {formData.products.map((product, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="relative bg-gray-50/50 p-6 rounded-2xl border border-gray-100 space-y-4"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className={labelClasses}>Application Type</label>
                                                <select
                                                    name="applicationType"
                                                    value={product.applicationType}
                                                    onChange={(e) => handleProductChange(index, e)}
                                                    required
                                                    className={`${inputClasses} appearance-none`}
                                                >
                                                    <option value="">Select Type...</option>
                                                    {Object.keys(APPLICATION_OPTIONS).map(type => (
                                                        <option key={type} value={type}>{type}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className={labelClasses}>Select Product</label>
                                                <select
                                                    name="productName"
                                                    value={product.productName}
                                                    onChange={(e) => handleProductChange(index, e)}
                                                    required
                                                    disabled={!product.applicationType}
                                                    className={`${inputClasses} appearance-none ${!product.applicationType ? 'cursor-not-allowed opacity-50' : ''}`}
                                                >
                                                    <option value="">Select Product...</option>
                                                    {product.applicationType && APPLICATION_OPTIONS[product.applicationType].map(prod => (
                                                        <option key={prod} value={prod}>{prod}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {formData.products.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeProductRow(index)}
                                                className="absolute -top-3 -right-3 w-8 h-8 bg-white text-red-500 rounded-full shadow-md border border-red-100 flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer"
                                            >
                                                <FiTrash2 size={16} />
                                            </button>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>

                            <button
                                type="button"
                                onClick={addProductRow}
                                className="w-full py-4 border-2 border-dashed border-[#0047AB]/20 rounded-2xl text-[#0047AB] font-semibold flex items-center justify-center gap-2 hover:bg-[#0047AB]/5 transition-all cursor-pointer group"
                            >
                                <div className="w-8 h-8 bg-[#0047AB] text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <FiPlus size={20} />
                                </div>
                                Add Another Application Type
                            </button>
                        </div>
                    </div>

                    {/* CUSTOMER INFORMATION */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black border-b pb-4 mb-6">CUSTOMER INFORMATION</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="firstName" className={labelClasses}>First Name *</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className={labelClasses}>Last Name *</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className={labelClasses}>Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className={labelClasses}>Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={inputClasses}
                                    placeholder="+00 000 000 0000"
                                />
                            </div>
                        </div>
                    </div>

                    {/* VEHICLE INFORMATION */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black border-b pb-4 mb-6">VEHICLE INFORMATION</h2>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="installationDate" className={labelClasses}>Installation Date *</label>
                                <input
                                    type="date"
                                    id="installationDate"
                                    name="installationDate"
                                    required
                                    value={formData.installationDate}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="chassisNo" className={labelClasses}>Chassis No. *</label>
                                    <input
                                        type="text"
                                        id="chassisNo"
                                        name="chassisNo"
                                        required
                                        value={formData.chassisNo}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="vehicleModel" className={labelClasses}>Year, Make & Model *</label>
                                    <input
                                        type="text"
                                        id="vehicleModel"
                                        name="vehicleModel"
                                        required
                                        value={formData.vehicleModel}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>

                            {/* File Upload */}
                            <div>
                                <label className={labelClasses}>Upload proof of Purchase *</label>
                                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                                    <div className="space-y-1 text-center">
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <div className="flex text-sm text-gray-600 justify-center">
                                            <label
                                                htmlFor="invoiceFile"
                                                className="relative cursor-pointer bg-white rounded-md font-medium text-[#0047AB] hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#0047AB]"
                                            >
                                                <span>Upload a file</span>
                                                <input
                                                    id="invoiceFile"
                                                    name="invoiceFile"
                                                    type="file"
                                                    className="sr-only"
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                                        {formData.invoiceFile && (
                                            <p className="text-sm text-green-600 font-medium mt-2">
                                                Selected: {formData.invoiceFile.name}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-2 text-center">Attach a copy of your invoice or purchase receipt</p>
                            </div>
                        </div>
                    </div>

                    {/* DEALER INFORMATION */}
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-black border-b pb-4 mb-6">DEALER INFORMATION</h2>
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="companyName" className={labelClasses}>Company Name *</label>
                                    <input
                                        type="text"
                                        id="companyName"
                                        name="companyName"
                                        required
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dealerName" className={labelClasses}>Dealer Name *</label>
                                    <input
                                        type="text"
                                        id="dealerName"
                                        name="dealerName"
                                        required
                                        value={formData.dealerName}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="dealerEmail" className={labelClasses}>Email Address *</label>
                                    <input
                                        type="email"
                                        id="dealerEmail"
                                        name="dealerEmail"
                                        required
                                        value={formData.dealerEmail}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dealerPhone" className={labelClasses}>Phone *</label>
                                    <input
                                        type="tel"
                                        id="dealerPhone"
                                        name="dealerPhone"
                                        required
                                        value={formData.dealerPhone}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder="+00 000 000 0000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="dealerAddress" className={labelClasses}>Street Address *</label>
                                <input
                                    type="text"
                                    id="dealerAddress"
                                    name="dealerAddress"
                                    required
                                    value={formData.dealerAddress}
                                    onChange={handleChange}
                                    className={inputClasses}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="dealerCity" className={labelClasses}>City *</label>
                                    <input
                                        type="text"
                                        id="dealerCity"
                                        name="dealerCity"
                                        required
                                        value={formData.dealerCity}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dealerState" className={labelClasses}>State / Province *</label>
                                    <input
                                        type="text"
                                        id="dealerState"
                                        name="dealerState"
                                        required
                                        value={formData.dealerState}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="dealerZip" className={labelClasses}>ZIP / Postal Code *</label>
                                    <input
                                        type="text"
                                        id="dealerZip"
                                        name="dealerZip"
                                        required
                                        value={formData.dealerZip}
                                        onChange={handleChange}
                                        className={inputClasses}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="dealerCountry" className={labelClasses}>Country *</label>
                                    <select
                                        id="dealerCountry"
                                        name="dealerCountry"
                                        required
                                        value={formData.dealerCountry}
                                        onChange={handleChange}
                                        className={`${inputClasses} appearance-none`}
                                    >
                                        <option value="">Select country</option>
                                        <option value="United States">United States</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="India">India</option>
                                        {/* Add more countries as needed */}
                                    </select>
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
