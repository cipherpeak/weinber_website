import { motion } from "framer-motion";

export default function OurBrands() {
  const brands = [
    { id: 1, name: "Appam & Co.", logo: "https://paragonrestaurant.in/wp-content/uploads/2022/10/salkara.png" },
    { id: 2, name: "Xpress", logo: "https://paragonrestaurant.in/wp-content/uploads/2024/11/salkara-express-logo-1.png" },
    { id: 3, name: "Meat & Mackerel", logo: "https://paragonrestaurant.in/wp-content/uploads/2022/10/mgrill-2.png" },
    { id: 4, name: "Cafe Calicut", logo: "https://paragonrestaurant.in/wp-content/uploads/2024/11/salkara-express-logo-1.png" },
    { id: 5, name: "Paragon Since 1939", logo: "https://paragonrestaurant.in/wp-content/uploads/2024/11/appam-co.png" },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden mt-9">

      {/* Content Container */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-black px-12 md:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* "Our" title */}
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-black mb-4">Our</motion.h2>

        {/* "BRANDS" title */}
        <motion.h3 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-widest text-black mb-16 md:mb-24">
          BRANDS
        </motion.h3>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-12 w-full mx-w-6xl mx-auto items-center justify-items-center">
          {brands.map((brand) => (
            <motion.div key={brand.id} variants={itemVariants} className="flex items-center justify-center p-2">
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={`${brand.name} Logo`}
                className="max-w-[150px] max-h-[80px] w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}