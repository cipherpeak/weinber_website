import { Calendar } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Mock image import
const farmToFork = "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

// UI Components
const Badge = ({ children, className = "", ...props }) => (
  <span
    className={`inline-flex items-center rounded-full px-4 py-1 text-sm font-medium ${className}`}
    {...props}
  >
    {children}
  </span>
);

const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-xl bg-white ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div
    className={`p-6 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const timeline = [
  {
    year: "1992",
    title: "Inception in Detroit",
    description: "Weinber Inc. was founded in the heart of Motor City, driven by a passion for automotive perfection."
  },
  {
    year: "1998",
    title: "Nano-Tech Breakthrough",
    description: "Developed our proprietary silica-based coating formula, setting a new standard for durability."
  },
  {
    year: "2005",
    title: "Global Expansion",
    description: "Expanded operations to Europe and Asia, partnering with elite detailing studios."
  },
  {
    year: "2012",
    title: "ISO 9001 Certified",
    description: "Achieved international quality standards for our state-of-the-art manufacturing facility."
  },
  {
    year: "2018",
    title: "Consumer Line Launch",
    description: "Empowered enthusiasts with our professional-grade DIY detailing products."
  },
  {
    year: "2022",
    title: "Graphene Innovation",
    description: "Introduced SIRIUS ULTRA Graphene Coating, pushing the boundaries of surface protection."
  },
  {
    year: "2025",
    title: "Future of Detailing",
    description: "Continuing to lead the industry with sustainable, high-performance solutions."
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const lineVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const dotVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
};

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

function CompanyHistory() {
  const timelineRef = useRef(null);
  const heroRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: false, margin: "-100px" });
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative py-20 bg-black text-white"
        ref={heroRef}
      >
        <motion.div
          className="container mx-auto px-4"
          variants={heroVariants}
          initial="hidden"
          animate={isHeroInView ? "visible" : "hidden"}
        >
          <motion.div className="text-center max-w-4xl mx-auto" variants={heroItemVariants}>
            <Badge className="mb-6 bg-blue-100 text-[#0047AB] font-medium">
              Since 1992
            </Badge>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={heroItemVariants}
            >
              Our Story
            </motion.h1>
            <motion.p
              className="text-xl opacity-90 leading-relaxed"
              variants={heroItemVariants}
            >
              For over three decades, Weinber Inc. has been defining the standards of automotive surface protection.
              From our labs in Detroit to garages worldwide, we deliver excellence in every drop.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Farm to Fork Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                From Lab to Garage
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey begins in our advanced R&D centers, where chemists and detailers collaborate
                to create next-generation formulas. Every product is rigorously tested to ensure it meets
                the Weinber standard of perfection.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0047AB] rounded-full"></div>
                  <span>In-house R&D and Manufacturing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0047AB] rounded-full"></div>
                  <span>Global Sourcing of Raw Materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0047AB] rounded-full"></div>
                  <span>Strict Quality Control Protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#0047AB] rounded-full"></div>
                  <span>Eco-Friendly Formulations</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <motion.img
                src="https://images.unsplash.com/photo-1574755869458-7c87c26425a1?q=80&w=1000&auto=format&fit=crop"
                alt="Lab to Garage Process"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Precision Engineering</p>
                <p className="text-sm opacity-90">Where science meets shine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Our Journey
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Three decades of innovation, quality, and unwavering commitment to automotive perfection.
            </motion.p>
          </div>

          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#0047AB] origin-top"
              variants={lineVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            />

            <motion.div
              className="space-y-12"
              variants={containerVariants}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  {/* Animated Timeline Dot */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#0047AB] rounded-full border-4 border-white shadow-lg flex items-center justify-center"
                    variants={dotVariants}
                  >
                    <Calendar className="w-4 h-4 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className="border border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge className="bg-[#0047AB] text-white text-lg font-semibold px-3 py-1">
                              {item.year}
                            </Badge>
                          </div>
                          <h3 className="font-semibold text-xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompanyHistory;