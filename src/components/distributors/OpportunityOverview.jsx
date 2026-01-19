import {
  Building2,
  Truck,
  Globe,
  Handshake,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const OpportunityOverview = () => {
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

    // Observe all elements with IDs
    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el);
    });

    // Also observe the main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const opportunities = [
    {
      icon: Building2,
      title: "Authorized Detailer",
      description:
        "Become a certified Weinber Studio. Access exclusive professional coatings (Sirius Pro), training certification, and marketing support.",
      color: "text-[#0047AB]",
    },
    {
      icon: Truck,
      title: "Regional Distributor",
      description:
        "Distribute Weinber's full range of professional and consumer products in your territory. High margins and dedicated account management.",
      color: "text-[#0047AB]",
    },
    {
      icon: Globe,
      title: "International Importer",
      description:
        "Bring the American standard of detailing to your country. We offer full export support, compliance documentation, and master distribution rights.",
      color: "text-[#0047AB]",
    },
    {
      icon: Handshake,
      title: "OEM Partner",
      description:
        "Private label solutions and bulk chemical supply for automotive manufacturers and large-scale facility management.",
      color: "text-[#0047AB]",
    },
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Proven Business Model",
      description: "30+ years of manufacturing excellence and global brand presence.",
    },
    {
      icon: TrendingUp,
      title: "Training & Certification",
      description: "Comprehensive Weinber University training for your team.",
    },
    {
      icon: Award,
      title: "Premium Product Quality",
      description: "Made in USA, ISO 9001 certified, and lab-tested performance.",
    },
    {
      icon: Users,
      title: "Strong Brand Recognition",
      description: "Weinber is synonymous with 'The Art of Perfection' in the detailing world.",
    },
  ];

  return (
    <div className="py-10 md:py-16 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        {/* Header */}
        <div
          id="overview-header"
          className={`text-center mb-16 transition-all duration-1000 ${isVisible["overview-header"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
            }`}
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            A Partnership for Success
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            Discover the opportunity that aligns with your vision and expertise.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => {
            const IconComponent = opportunity.icon;
            return (
              <div
                key={index}
                id={`opportunity-${index}`}
                className={`group transition-all duration-700 ${isVisible[`opportunity-${index}`]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div className="w-20 h-20 rounded-full bg-white border border-[#0047AB] text-[#0047AB] flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {opportunity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Avees Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              id="why-choose-title"
              className={`text-3xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${isVisible["why-choose-title"]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-20"
                }`}
            >
              Why Partner with Weinber?
            </h3>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    id={`why-choose-${index}`}
                    className={`flex items-start gap-4 group transition-all duration-700 ${isVisible[`why-choose-${index}`]
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-20"
                      }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-[#0047AB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                      <IconComponent className="h-6 w-6 text-[#0047AB]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            id="why-choose-image"
            className={`transition-all duration-1000 ${isVisible["why-choose-image"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
              }`}
          >
            <div className="relative">
              <img
                src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1754295652/Brainstorming_of_Diverse_Team_Corporate_Coworkers_Collaborating_on_a_Project_in_a_Modern_Office___Premium_AI-generated_image_mdn9mj.jpg"
                alt="Professional team collaboration"
                className="rounded-3xl shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};