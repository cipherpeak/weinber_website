import { Card, CardBody } from "@heroui/card";
import { motion } from "framer-motion";

const FamilyLeadership = () => {
  const leaders = [
    {
      name: "Arthur Weinber",
      role: "Founder & Chairman",
      description:
        "The visionary who started it all in Detroit. His obsession with paint perfection led to the first Weinber ceramic formulas.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Elena Weinber",
      role: "CEO",
      description:
        "Driving the global strategy and ensuring that Weinber remains synonymous with premium quality in 40+ countries.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Marcus Chen",
      role: "Head of R&D",
      description:
        "The mind behind SIRIUS technology. Leading our chemical engineers to push the boundaries of hydrophobic science.",
      image:
        "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "David Miller",
      role: "Director of Operations",
      description:
        "Ensuring that every bottle leaving our facility meets the rigorous ISO standards that professionals trust.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
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
      className="py-10 md:py-16 px-4 bg-muted/20"
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
            Family Leadership Four Pillars, <br /> One Vision
          </h2>
          <p className="text-black text-sm sm:text-base max-w-2xl mx-auto">
            A legacy of leadership built on passion, precision, and a relentless pursuit of the perfect finish.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {leaders.map((leader, index) => (
            <motion.div key={leader.name} variants={slideInVariants}>
              <Card className="bg-card border-border shadow-card hover:shadow-soft transition-all duration-300 group overflow-hidden">
                <CardBody className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 p-6 flex items-center justify-center bg-white">
                      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-1 border-[#0047AB] group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {leader.name}
                      </h3>
                      <p className="text-heritage-brown font-semibold mb-4 text-lg">
                        {leader.role}
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FamilyLeadership;
