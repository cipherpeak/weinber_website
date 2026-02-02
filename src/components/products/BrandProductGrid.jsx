import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { API_ENDPOINTS } from "../../config";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/animations";

function BrandProductGrid({ brandName, title }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isVisible, setIsVisible] = useState({});
    const sectionRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_ENDPOINTS.productsPage);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Filter products by brand and map to grid structure
                const brandProducts = data
                    .filter(item => item.brand === brandName)
                    .slice(0, 4) // Show only 4 products as requested
                    .map(item => ({
                        id: item.id,
                        name: item.name,
                        description: item.description,
                        category: item.brand,
                        image: item.images && item.images.length > 0 ? item.images[0].image : "",
                        sizes: [] // Assuming sizes might be added later by API
                    }));

                setProducts(brandProducts);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching products for", brandName, ":", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, [brandName]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible((prev) => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting,
                    }));
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll("[id]");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [products]);

    if (loading) {
        return (
            <div className="py-20 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0047AB] mx-auto"></div>
            </div>
        );
    }

    if (products.length === 0) {
        return null; // Don't show the section if no products match
    }

    return (
        <section ref={sectionRef} className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    id={`${brandName.toLowerCase().replace(/\s+/g, '-')}-title`}
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                        {title.split(' ').map((word, i) =>
                            word.toLowerCase() === brandName.toLowerCase() || (brandName.toLowerCase().includes(word.toLowerCase()) && word.length > 3) ? (
                                <span key={i} className="text-[#0047AB]"> {word} </span>
                            ) : (
                                <span key={i}> {word} </span>
                            )
                        )}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            id={`product-${product.id}`}
                            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:scale-105 ${isVisible[`product-${product.id}`]
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-20"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative h-48 overflow-hidden bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 bg-[#0047AB] text-white text-[10px] font-bold px-2 py-1 rounded">
                                    {product.category}
                                </div>
                            </div>

                            <div className="p-5 flex flex-col h-[calc(100%-12rem)]">
                                <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                                    {product.description}
                                </p>

                                <div className="mt-auto">
                                    <button
                                        onClick={() => navigate(`/products/${product.id}`)}
                                        className="w-full cursor-pointer bg-[#0047AB] text-white text-sm font-medium py-3 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                                    >
                                        View Details
                                        <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BrandProductGrid;
