import { Building, FlaskConical, Shield, Award, Droplets, SprayCan, CheckCircle, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BiWorld } from "react-icons/bi";

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
      icon: <Award className="h-8 w-8" />,
      title: "American Quality",
      description: "Manufactured in Detroit, USA since 1992.",
      color: "white",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Advanced Protection",
      description: "Nano-ceramic technology for superior durability.",
      color: "white",
    },
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "Lab Tested",
      description: "Rigorously tested formulations for verified results.",
      color: "white",
    },
    {
      icon: <BiWorld className="h-8 w-8" />,
      title: "Global Trust",
      description: "Used by professional detailers in 40+ countries.",
      color: "white",
    },
  ];

  const processes = [
    {
      icon: <FlaskConical className="h-8 w-8" />,
      title: "R&D Lab",
      description: "Formulating the latest in surface science.",
      delay: "0ms",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Manufacturing",
      description: "Precision blending in our ISO certified facility.",
      delay: "200ms",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Control",
      description: "Every batch tested for consistency and performance.",
      delay: "400ms",
    },
    {
      icon: <SprayCan className="h-6 w-6" />,
      title: "Your Garage",
      description: "Professional grade results in your hands.",
      delay: "600ms",
    },
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 flex flex-col gap-16" ref={sectionRef}>
      {/* Hero Section - Why Weinber */}
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div
            id="hero-title"
            className={`text - center mb - 20 transition - all duration - 1000 ${isVisible["hero-title"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
              } `}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-black mb-6 text-balance">
              Why{" "}
              <span className="bg-[#0047AB] bg-clip-text text-transparent">
                Weinber
              </span>
              ?
            </h1>
            <p className="text-black">
              Because your car deserves the best protection
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature - ${index} `}
                className={`group transition - all duration - 700 ${isVisible[`feature-${index}`]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                  } `}
                style={{ transitionDelay: `${index * 200} ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w - 20 h - 20 rounded - full bg - gradient - to - r ${feature.color} border - [#0047AB] text - [#0047AB] border flex items - center justify - center text - 3xl mb - 6 mx - auto group - hover: scale - 110 transition - transform duration - 300`}
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
              className="px-8 py-4 border border-blue-600 text-black rounded-lg transition-colors duration-300"
            >
              <h1 className="">Weinber is more than protection, it’s a commitment to perfection on every surface.</h1>
            </button>
          </div> */}
        </div>
      </section>

      {/* From Lab to Garage Section */}
      <section className=" bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                id="field-title"
                className={`transition - all duration - 1000 ${isVisible["field-title"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                  } `}
              >
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0047AB] mb-4 text-balance">
                  <span className="text-black">From</span> Lab to Garage
                </h2>
                <p className="text-black text-sm sm:text-base mx-auto mb-8">
                  Engineered science in every bottle.
                </p>
              </div>

              <div className="space-y-8 relative">
                <div className="absolute left-8 top-0 bottom-0 w-0 border-l-2 border-dotted border-[#0047AB]"></div>

                {processes.map((process, index) => (
                  <div key={index} className="relative">
                    <div
                      id={`process - ${index} `}
                      className={`flex items - start gap - 6 transition - all duration - 700 ${isVisible[`process-${index}`]
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                        } `}
                      style={{ transitionDelay: process.delay }}
                    >
                      <div className="w-16 h-16 rounded-full white flex items-center justify-center border border-[#0047AB] text-[#0047AB] text-2xl flex-shrink-0 relative z-10 bg-white">
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
              className={`transition - all duration - 1000 ${isVisible["field-image"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
                } `}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1574755869458-7c87c26425a1?q=80&w=1000&auto=format&fit=crop"
                  alt="Car Detailing Process"
                  className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-medium mb-2 opacity-90">
                      Precision Detailing
                    </p>
                    <h3 className="text-2xl font-bold text-balance">
                      Science. Shine. Satisfaction. Weinber.
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