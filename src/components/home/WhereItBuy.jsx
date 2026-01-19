import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation, Clock } from "lucide-react";

function WhereItBuy() {
  const [isVisible, setIsVisible] = useState({});
  const sectionRef = useRef(null);

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
  }, []);

  const retailers = [
    {
      name: "blinkit",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/Swiggy-Instamart-Photoroom_n0rp8c.avif",
      url: "https://blinkit.com/s/?q=avees",
    },
    {
      name: "Amazon",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/107302170_now0uu.webp",
      url: "https://www.amazon.in/stores/ArayacherrilVarkeySonsPrivateLimited/page/845DC96C-907A-4AD1-AC9D-AA2AF5129460?is_byline_deeplink=true&deeplink=CB166B1D-3A54-48AA-B41E-03CBD177798D&redirect_store_id=845DC96C-907A-4AD1-AC9D-AA2AF5129460&lp_asin=B09R7WRRT2&ref_=ast_bln&store_ref=bl_ast_dp_brandLogo_sto",
    },
    {
      name: "Swiggy Instamart",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/swiggy_instamart-Photoroom_1_orrfed.avif",
      url: "#",
    },
    {
      name: "blinkit",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/Swiggy-Instamart-Photoroom_n0rp8c.avif",
      url: "https://blinkit.com/s/?q=avees",
    },
    {
      name: "Amazon",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/107302170_now0uu.webp",
      url: "#",
    },
    {
      name: "Swiggy Instamart",
      logo: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1758704353/swiggy_instamart-Photoroom_1_orrfed.avif",
      url: "#",
    },
  ];

  // Store locations data with images
  const storeLocations = [
    {
      id: 1,
      name: "Alappuzha",
      address: "Meenakshi Mandiram, Kurattissery",
      distance: "2.5 km",
      timing: "9:30 AM - 7:45 PM",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail3_gdeiqi.webp",
      mapUrl: "https://maps.app.goo.gl/46cpqPzJFUCbpKTNA",
    },
    {
      id: 2,
      name: "Pathanamthitta",
      address: "Parackal, Mulakuzha",
      distance: "5.8 km",
      timing: "09:00 AM - 07:00 PM",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295127/retail1_qqtlr4.webp",
      mapUrl: "https://maps.app.goo.gl/4MJevjA8u9MhMUwbA",
    },
    {
      id: 3,
      name: "Thiruvananthapuram",
      address: "Akkulam Rd, Kochulloor, Ulloor",
      distance: "3.2 km",
      timing: "9:00 AM - 9:00 PM",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295129/Screenshot_2025-08-01_at_6.16.19_PM_rgg2q3.png",
      mapUrl: "https://maps.app.goo.gl/s8URuLXGDL9xydrX6",
    },
  ];

  // Function to handle map navigation
  const handleMapNavigation = (mapUrl) => {
    window.open(mapUrl, "_blank");
  };

  return (
    <div 
      ref={sectionRef}
      id="where-to-buy" // Added this ID for the scroll functionality
      className="w-full bg-background flex items-center justify-center py-10 md:py-16 px-4"
      initial="hidden"
    >
      <div className="w-full max-w-7xl mx-auto">

        {/* Our Stores Section */}
        <div 
          id="our-stores"
          className={`transition-all duration-1000 ${
            isVisible["our-stores"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10 mt-16">
            <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
              Our Stores
            </h3>
            <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
              Avees Retail Counters in Kerala. Experience authenticity at the source.
            </p>
          </div>

          {/* Store Cards with Images - Modern Minimal Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 mb-10">
            {storeLocations.map((store, index) => (
              <div
                key={store.id}
                id={`store-${store.id}`}
                className={`bg-white rounded-2xl  shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group ${
                  isVisible[`store-${store.id}`]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <div className="h-40 overflow-hidden relative">
                  <img 
                    src={store.image} 
                    alt={store.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm">
                    <MapPin className="h-4 w-4 text-[#0047AB]" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{store.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-tight">{store.address}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <Clock className="h-4 w-4 mr-1.5 text-gray-400" />
                    <span>{store.timing}</span>
                  </div>
                  
                  <button
                    onClick={() => handleMapNavigation(store.mapUrl)}
                    className="w-full cursor-pointer rounded-lg transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2 bg-[#0047AB] text-white py-2.5 px-4 text-sm font-medium"
                  >
                    <Navigation size={16} />
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default WhereItBuy;