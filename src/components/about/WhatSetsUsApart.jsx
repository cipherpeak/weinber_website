import { Heart, Lightbulb, Leaf, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhatSetsUsApart = () => {
  const differentiators = [
    {
      title: "Authenticity",
      subtitle: "Made in USA",
      description:
        "Proudly formulated and manufactured in Detroit, ensuring authentic American quality in every bottle.",
      icon: <Heart className="h-7 w-7 md:h-8 md:w-8" />,
    },
    {
      title: "Innovation",
      subtitle: "Advanced Chemistry",
      description:
        "Cutting-edge nano-technology and graphene formulas that redefine surface protection standards.",
      icon: <Lightbulb className="h-7 w-7 md:h-8 md:w-8" />,
    },
    {
      title: "Sustainability",
      subtitle: "Eco-Friendly",
      description:
        "Biodegradable ingredients and water-based formulas that are safe for you and the environment.",
      icon: <Leaf className="h-7 w-7 md:h-8 md:w-8" />,
    },
    {
      title: "Community",
      subtitle: "Professional Network",
      description:
        "Supporting a global community of detailers with training, certification, and business growth.",
      icon: <Users className="h-7 w-7 md:h-8 md:w-8" />,
    },
  ];

  // Animation variants for left-to-right entrance and exit
  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  // Stagger animation for children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-10 md:py-16 px-4 bg-background"
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            What Sets Weinber Apart
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            Four pillars of excellence that define our commitment to your vehicle, our partners, and the industry we lead.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {differentiators.map((diff, index) => (
            <motion.div key={diff.title} variants={slideInVariants}>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100  group  hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-[#0047AB] text-[#0047AB] flex items-center justify-center text-3xl transition-all duration-300 group-hover:scale-110">
                    {diff.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {diff.title}
                    </h3>
                    <h4 className="text-lg font-semibold text-heritage-brown mb-4">
                      {diff.subtitle}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhatSetsUsApart;
