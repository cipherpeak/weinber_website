import { Shield, Lock, Award, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const TrustSection = () => {
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

  const trustPoints = [
    {
      icon: Shield,
      title: "Confidential Process",
      description: "Your ideas are respected and privacy assured.",
    },
    {
      icon: Lock,
      title: "Secure Data Handling",
      description: "All information encrypted and stored safely.",
    },
    {
      icon: Award,
      title: "Professional Review",
      description: "Applications are carefully reviewed by our leadership team.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "From first call to launch, we guide you through every step.",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-4" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div 
          id="trust-header"
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible["trust-header"]
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            Your Inquiry is Confidential
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            We value your interest and ensure that all information shared will be treated with strict confidentiality and used solely to evaluate potential partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div
                key={index}
                id={`trust-point-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible[`trust-point-${index}`]
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-white border border-[#0047AB] text-[#0047AB] flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};