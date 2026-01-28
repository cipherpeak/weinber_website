import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Check, Star, Info, Share2, MessageCircle, ArrowRight } from "lucide-react";
import { products } from '../../components/products/Products';

// Dummy data for the product - in real app this would come from backend based on ID
const dummyProduct = {
    id: 1,
    name: "Ceramic Coating Pro",
    category: "Professional Series",
    // price: "$89.99",
    rating: 4.8,
    reviews: 124,
    description: "Experience the ultimate protection for your vehicle with our Ceramic Coating Pro. Engineered using advanced nanotechnology, this coating bonds permanently to your car's paint, creating a hydrophobic layer that repels water, dirt, and contaminants while providing a brilliant, mirror-like shine.",
    features: [
        "9H Hardness Protection",
        "Ultra-Hydrophobic Effect",
        "UV & Oxidation Resistant",
        "High Gloss Finish",
        "Lasts up to 5 Years",
        "Professional Grade Formulation"
    ],
    images: [
        "https://placehold.co/600x600/0047AB/FFFFFF/png?text=Product+Image+1",
        "https://placehold.co/600x600/003380/FFFFFF/png?text=Detail+Shot",
        "https://placehold.co/600x600/0055CC/FFFFFF/png?text=Application"
    ],
    // sizes: ["50ml", "100ml", "Kit"],
    sku: "WBR-PRO-001"
};

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);

    // Find related products (same category, excluding current)
    const relatedProducts = products
        .filter(p => p.category === dummyProduct.category && p.id !== dummyProduct.id)
        .slice(0, 4);

    // If not enough related, fill with others
    if (relatedProducts.length < 4) {
        const remaining = products
            .filter(p => p.category !== dummyProduct.category && p.id !== dummyProduct.id)
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...remaining);
    }

    return (
        <div className="bg-white min-h-screen pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* ... (existing breadcrumb) */}
                <button
                    onClick={() => navigate('/products')}
                    className="inline-flex items-center bg-[#0047AB] text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-900/20 hover:bg-blue-800 hover:shadow-blue-900/30 transform hover:-translate-y-0.5 transition-all mb-10 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Products
                </button>

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left Column - Image Gallery */}
                        <div className="bg-gray-100 p-8 flex flex-col items-center justify-center relative">
                            {/* ... (existing image gallery code) */}
                            <div className="relative w-full aspect-square max-w-[500px] mb-6 overflow-hidden rounded-xl shadow-lg bg-white">
                                <img
                                    src={dummyProduct.images[activeImage]}
                                    alt={dummyProduct.name}
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-[#0047AB] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                    Best Seller
                                </div>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-2 w-full max-w-[500px] justify-center">
                                {dummyProduct.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === index
                                            ? 'border-[#0047AB] shadow-md scale-105'
                                            : 'border-transparent opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Product Info */}
                        <div className="p-8 lg:p-12 flex flex-col h-full">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="text-[#0047AB] font-semibold text-sm tracking-widest uppercase">{dummyProduct.category}</span>
                                <span className="text-gray-300">|</span>
                                <div className="flex items-center text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-gray-500 text-xs ml-1 font-medium">{dummyProduct.rating} ({dummyProduct.reviews} reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{dummyProduct.name}</h1>

                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {dummyProduct.description}
                            </p>

                            {/* REMOVED Key Features Grid from here */}

                            <div className="h-px bg-gray-100 w-full mb-8"></div>

                            {/* Action Buttons */}
                            <div className="mt-auto flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="flex-1 bg-[#0047AB] text-white font-bold py-4 px-8 rounded-full shadow-lg shadow-blue-900/20 hover:bg-blue-800 hover:shadow-blue-900/30 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                                >
                                    <MessageCircle size={20} />
                                    Enquire Now
                                </button>

                                <button className="flex-1 border-2 border-[#0047AB] text-[#0047AB] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                                    <Share2 size={20} />
                                    Share Product
                                </button>
                            </div>

                            <div className="mt-6 flex items-center justify-between text-xs text-gray-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#0047AB] rounded-full"></span>
                                    Professional Grade
                                </div>
                                <span>SKU: {dummyProduct.sku}</span>
                            </div>
                        </div>
                    </div>

                    {/* Specifications & Features Section */}
                    <div className="bg-gray-50 border-t border-gray-200 p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Product Specifications</h3>
                        <div className="w-full">
                            {/* Key Features moved here */}
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-4">Key Features</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {dummyProduct.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                                            <div className="bg-blue-50 p-1 rounded-full text-[#0047AB] mt-0.5">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {relatedProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-2 left-2 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                        {product.category}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-gray-900 mb-1 truncate">{product.name}</h4>
                                    <p className="text-gray-500 text-xs line-clamp-2 mb-3 h-8">{product.description}</p>
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="block w-full text-center bg-[#0047AB] text-white font-semibold py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm"
                                    >
                                        View Details
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
