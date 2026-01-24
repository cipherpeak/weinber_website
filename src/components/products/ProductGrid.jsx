import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function ProductGrid({
  categories,
  activeCategory,
  filteredProducts,
  setActiveCategory,
}) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [showAllProducts, setShowAllProducts] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setShowAllProducts(false);
  }, [activeCategory]);

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

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [filteredProducts, showAllProducts]);

  const productsToShow = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 6);

  // Check if there are more products to show
  const hasMoreProducts = filteredProducts.length > 6;

  return (
    <section ref={sectionRef} className="py-10 px-4">
      <div
        id="products-title"
        className={`transition-all duration-1000 text-center mb-10 ${isVisible["products-title"]
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
          }`}
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">Professional Series</h2>
        <p className="text-gray-600">
          Engineered for perfectionists. Our professional-grade detailing products deliver showroom results for every vehicle.
        </p>
      </div>

      <div
        id="products-tabs"
        className={`flex gap-3 mb-10 flex-wrap justify-center transition-all duration-700 ${isVisible["products-tabs"]
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-10"
          }`}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 cursor-pointer rounded-md text-sm font-medium transition-all duration-300 ${activeCategory === cat
              ? "bg-[#0047AB] text-white"
              : "border border-[#0047AB] text-[#0047AB] "
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToShow.map((product, index) => (
          <div
            key={product.id}
            id={`product-${product.id}`}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-500 hover:scale-105 ${isVisible[`product-${product.id}`]
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover "
              />
              <div className="absolute top-3 left-3 bg-[#0047AB] text-white text-xs font-semibold px-2 py-1 rounded">
                {product.category}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p
                className={`text-gray-700 text-sm mb-2 ${isExpanded ? "" : "line-clamp-2"
                  }`}
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ cursor: "pointer" }}
                title={isExpanded ? "" : "Click to read more"}
              >
                {product.description}
              </p>

              {/* Pack sizes/variants */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                {product.cta.map((buttonText, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (buttonText === "Know More") {
                        navigate(`/products/${product.id}`);
                      } else {
                        window.open("https://www.amazon.com", "_blank");
                      }
                    }}
                    className={`flex-1 min-w-[120px] cursor-pointer text-sm font-medium py-2 px-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2 ${buttonText === "Shop Online" ||
                      buttonText === "Shop on Amazon" ||
                      buttonText === "Know More"
                      ? "bg-[#0047AB] text-white hover:bg-blue-800"
                      : "border border-[#0047AB] text-[#0047AB] "
                      }`}
                  >
                    {buttonText}
                    <ArrowRight size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {hasMoreProducts && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAllProducts(!showAllProducts)}
            className="bg-[#0047AB] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-md flex items-center justify-center gap-2 mx-auto"
          >
            {showAllProducts ? "Show Less" : `Show More Products`}
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;