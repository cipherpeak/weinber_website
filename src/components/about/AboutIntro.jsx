import { motion } from "framer-motion";

const AboutIntro = () => {
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

  return (
    <motion.section
      className="py-10 md:py-16 px-4 bg-background relative overflow-hidden"
      variants={slideInVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.1 }}
    >


      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Heading Section */}
        <motion.div
          className="text-center mb-16"
          variants={slideInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 text-foreground tracking-wide relative">
              Our Story
            </h2>
          </div>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            From the Motor City to the world—a journey of passion,
            innovation, and perfection.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text Content - Left Side */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="space-y-6 text-muted-foreground">
              <div className="relative pl-8 border-l-2 border-[#0047AB]">
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  From the industrial heart of Detroit, where automotive excellence is a way of life, Weinber was born in 1992 with a simple mission: to create the world's most advanced chemical surface protection.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#0047AB]">
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Founded by Arthur Weinber, a chemical engineer and car enthusiast, Weinber began as a small boutique lab formulating custom waxes. What started with a single beaker has today grown into a global manufacturing powerhouse, serving professionals in over 40 countries.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#0047AB]">
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Over the decades, Weinber expanded into ceramic coatings, graphene technology, paint protection films, and consumer detailing kits—all rooted in Detroit's tradition of manufacturing quality and durability.
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-[#0047AB]">
                <p className="text-lg md:text-xl leading-relaxed font-light">
                  Today, guided by a team of obsessive perfectionists, we continue to blend science with art—delivering showroom shines to every vehicle.
                </p>
              </div>
            </div>

            {/* Stats Section with Hover Animation - Made smaller */}
            <motion.div
              className="grid grid-cols-2 gap-4 mt-8 max-w-xs"
              variants={slideInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <div className="group transition-all duration-500">
                <div className="text-center p-3 bg-white/5 rounded-full backdrop-blur-sm border border-[#0047AB] transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="text-xl font-bold text-black group-hover:scale-105 transition-transform duration-300">
                    1992
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Established
                  </div>
                </div>
              </div>
              <div className="group transition-all duration-500">
                <div className="text-center p-3 bg-white/5 rounded-full backdrop-blur-sm border border-[#0047AB] transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="text-xl font-bold text-black group-hover:scale-105 transition-transform duration-300">
                    40+
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Countries
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Container - Right Side */}
          <motion.div
            className="w-full lg:w-1/2"
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <div className="relative">
              <div className="aspect-square md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
                <img
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop"
                  alt="Weinber detailing excellence"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutIntro;
