import { Building, Leaf, Sprout, Users, Zap, Shield, Clock, X, Package, Home } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { GiCoconuts } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";

const WhyWeinber = () => {
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

  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Kuttanad Heritage",
      description: "Flavors nurtured below sea level.",
      color: "white",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Clean Label Promise",
      description: "100% natural, no preservatives.",
      color: "white",
    },
    {
      icon: <GiCoconuts className="h-8 w-8" />,
      title: "Authentic Kerala Taste",
      description: "Stone ground, coconut milk rich recipes.",
      color: "white",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Trusted for Generations",
      description: "30+ years of excellence, now global.",
      color: "white",
    },
  ];

 const processes = [
    {
      icon: <PiFarm className="h-8 w-8" />,
      title: "Sustainable Farming",
      description: "Cultivated in below sea level paddy fields.",
      delay: "0ms",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Traditional Milling",
      description: "Stone ground, time honored methods.",
      delay: "200ms",
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: "Hygienic Packaging",
      description: "Modern facilities, strict quality controls.",
      delay: "400ms",
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Your Kitchen",
      description: "Authentic Kerala taste, preservative free.",
      delay: "600ms",
    },
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 flex flex-col gap-16" ref={sectionRef}>
      {/* Hero Section - Why Avees */}
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div
            id="hero-title"
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["hero-title"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 text-balance">
              Why{" "}
              <span className="bg-[#b30000] bg-clip-text text-transparent">
                Avees
              </span>
              ?
            </h1>
            <p className="text-black">
            Because every grain tells a story
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible[`feature-${index}`]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} border-[#b30000] text-[#b30000] border flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-black text-center leading-relaxed text-pretty">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
                    {/* <div className="flex justify-center mt-16">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border border-red-600 text-black rounded-lg transition-colors duration-300"
            >
              <h1 className="">Avees is more than food, it’s Kuttanad’s heritage, carried to your table.</h1>
            </button>
          </div> */}
        </div>
      </section>

      {/* From Field to Fork Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                id="field-title"
                className={`transition-all duration-1000 ${
                  isVisible["field-title"]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
              >
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#b30000] mb-4 text-balance">
                  <span className="text-black">From</span> Field to Fork
                </h2>
                <p className="text-black text-sm sm:text-base mx-auto mb-8">
                  Every grain tells the story of Kuttanad.
                </p>
              </div>

              <div className="space-y-8 relative">
                <div className="absolute left-8 top-0 bottom-0 w-0 border-l-2 border-dotted border-[#b30000]"></div>

                {processes.map((process, index) => (
                  <div key={index} className="relative">
                    <div
                      id={`process-${index}`}
                      className={`flex items-start gap-6 transition-all duration-700 ${
                        isVisible[`process-${index}`]
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-20"
                      }`}
                      style={{ transitionDelay: process.delay }}
                    >
                      <div className="w-16 h-16 rounded-full white flex items-center justify-center border border-[#b30000] text-[#b30000] text-2xl flex-shrink-0 relative z-10 bg-white">
                        {process.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3">
                          {process.title}
                        </h3>
                        <p className="text-black leading-relaxed text-pretty">
                          {process.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
              
            </div>

            <div
              id="field-image"
              className={`transition-all duration-1000 ${
                isVisible["field-image"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756362912/kuttanad-landscape-CTDZeafT_hiawjw.jpg"
                  alt="Kuttanad Backwaters - Below Sea Level, Above Expectations"
                  className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-medium mb-2 opacity-90">
                      Kuttanad Backwaters
                    </p>
                    <h3 className="text-2xl font-bold text-balance">
                      Farm to Kitchen. Pure. Authentic. Avees.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWeinber;