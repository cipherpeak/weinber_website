import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Check, Star, Info, Download, MessageCircle, ArrowRight } from "lucide-react";
import { API_ENDPOINTS } from "../../config";

const ProductDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeImage, setActiveImage] = useState(0);
    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.productsPage);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Find current product
                const currentProductRaw = data.find(p => p.id === parseInt(id));

                if (currentProductRaw) {
                    // Map API data structure to UI requirements
                    const mappedProduct = {
                        id: currentProductRaw.id,
                        name: currentProductRaw.name,
                        category: currentProductRaw.brand, // Map brand to category
                        rating: 4.8, // Hardcoded as API doesn't provide rating
                        reviews: 124, // Hardcoded
                        description: currentProductRaw.description,
                        features: currentProductRaw.features ? currentProductRaw.features.map(f => f.feature) : [],
                        images: currentProductRaw.images && currentProductRaw.images.length > 0 
                            ? currentProductRaw.images.map(img => img.image) 
                            : ["https://placehold.co/600x600?text=No+Image"],
                        sku: `WBR-${currentProductRaw.id}`,
                        brand: currentProductRaw.brand
                    };
                    setProduct(mappedProduct);

                    // Find related products (same brand, excluding current)
                    const related = data
                        .filter(p => p.brand === currentProductRaw.brand && p.id !== currentProductRaw.id)
                        .slice(0, 4)
                        .map(p => ({
                            id: p.id,
                            name: p.name,
                            category: p.brand,
                            description: p.description,
                            image: p.images && p.images.length > 0 ? p.images[0].image : "https://placehold.co/600x600?text=No+Image"
                        }));
                    
                    // Fill with others if unrelated are not enough (optional, based on previous logic)
                    if (related.length < 4) {
                         const remaining = data
                            .filter(p => p.brand !== currentProductRaw.brand && p.id !== currentProductRaw.id)
                            .slice(0, 4 - related.length)
                            .map(p => ({
                                id: p.id,
                                name: p.name,
                                category: p.brand,
                                description: p.description,
                                image: p.images && p.images.length > 0 ? p.images[0].image : "https://placehold.co/600x600?text=No+Image"
                            }));
                        related.push(...remaining);
                    }

                    setRelatedProducts(related);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product details:", error);
                setLoading(false);
            }
        };

        fetchProductData();
        // Reset active image when id changes
        setActiveImage(0);
    }, [id]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!product) {
        return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
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
                                    src={product.images[activeImage]}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                                />

                            </div>
                            {product.images.length > 1 && (
                                <div className="flex gap-4 overflow-x-auto pb-2 w-full max-w-[500px] justify-center">
                                    {product.images.map((img, index) => (
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
                            )}
                        </div>

                        {/* Right Column - Product Info */}
                        <div className="p-8 lg:p-12 flex flex-col h-full">
                            <div className="mb-2 flex items-center gap-2">
                                <span className="text-[#0047AB] font-semibold text-sm tracking-widest uppercase">{product.category}</span>
                                <span className="text-gray-300">|</span>
                                <div className="flex items-center text-yellow-400">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-gray-500 text-xs ml-1 font-medium">{product.rating} ({product.reviews} reviews)</span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{product.name}</h1>

                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {product.description}
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

                                <button className="flex-1 border-2 border-[#0047AB] text-[#0047AB] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                    <Download size={20} />
                                    Download Brochure
                                </button>
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
                                    {product.features.map((feature, idx) => (
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
