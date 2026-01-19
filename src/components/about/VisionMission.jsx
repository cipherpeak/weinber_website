import { Eye, Zap } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const VisionMission = () => {
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

  return (
    <div className="py-10 md:py-16 px-4 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Vision Card */}
          <div
            id="vision-card"
            className={`group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 ${
              isVisible["vision-card"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#0047AB] text-[#0047AB] flex items-center justify-center text-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                <Eye className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To shape the future of authentic Kerala cuisine by bringing the timeless taste of Kuttanad to the world, while serving as a model of sustainable agri business that honors tradition and embraces innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div
            id="mission-card"
            className={`group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 border border-gray-100 ${
              isVisible["mission-card"]
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#0047AB] text-[#0047AB] flex items-center justify-center text-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                <Zap className="h-7 w-7 md:h-8 md:w-8 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To blend traditional culinary wisdom with modern innovation, creating authentic and convenient food experiences while empowering our community, supporting local farmers, and nurturing the land that sustains us all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;