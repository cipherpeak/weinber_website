import { Building, Leaf, Sprout, Users, Zap, Shield, Clock, X, Package, Home, FlaskConical, Factory, PackageCheck, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { GiCoconuts } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";

const WhyWeinber = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Premium Products",
      description: "One-stop shop for DIY enthusiasts and professionals.",
      color: "white",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "20+ Years Experience",
      description: "Two decades of excellence in coatings & additive products.",
      color: "white",
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "American Made Excellence",
      description: "Sought after globally for unmatched premium performance.",
      color: "white",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Trusted Manufacturer",
      description: "Quality products surpassing industry standards.",
      color: "white",
    },
  ];

  const processes = [
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Advanced Formulations",
      description: "Designed for ultimate car care excellence.",
      delay: 0,
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: "Precision Manufacturing",
      description: "Consistent quality in every batch.",
      delay: 0.2,
    },
    {
      icon: <PackageCheck className="h-6 w-6" />,
      title: "Quality Packaging",
      description: "Ensuring safety from facility to you.",
      delay: 0.4,
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Professional Care",
      description: "Your car treated with the best.",
      delay: 0.6,
    },
  ];

  return (
    <div className="bg-white py-10 md:py-16 px-4 flex flex-col gap-16">
      {/* Hero Section - Why Weinber */}
      <section className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 text-balance">
              Weinber Inc. -{" "}
              <span className="bg-[#0047AB] bg-clip-text text-transparent">
                Crafting Excellence
              </span>
            </h1>
            <p className="text-black uppercase tracking-widest font-semibold">
              Experience the ultimate in automotive care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${feature.color} border-[#0047AB] text-[#0047AB] border flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* From Lab to Lane Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={slideInLeft}
              >
                <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0047AB] mb-4 text-balance">
                  <span className="text-black">From</span> Lab to Lane
                </h2>
                <p className="text-black text-sm sm:text-base mx-auto mb-8">
                  Every product tells the story of quality.
                </p>
              </motion.div>

              <div className="space-y-8 relative">
                <div className="absolute left-8 top-0 bottom-0 w-0 border-l-2 border-dotted border-[#0047AB]"></div>

                {processes.map((process, index) => (
                  <motion.div
                    key={index}
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, delay: process.delay }
                      }
                    }}
                  >
                    <div className="flex items-start gap-6">
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
                  </motion.div>
                ))}

              </div>

            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideInRight}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/dtutjoxdz/image/upload/v1769765567/Untitled_1.7.1_dsxpiy.jpg"
                  alt="Weinber Quality"
                  className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-medium mb-2 opacity-90">
                      Weinber Excellence
                    </p>
                    <h3 className="text-2xl font-bold text-balance">
                      Lab to Lane. Pure. Authentic. Weinber.
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyWeinber;