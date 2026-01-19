import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Loading() {
  const [loading, setLoading] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      controls.start({
        opacity: 1,
        transition: { duration: 1 },
      });
    } else {
      controls.start({
        opacity: 0,
        transition: { duration: 1 },
      });
    }
  }, [loading, controls]);

  return (
    <motion.div
      className="fixed bg-[#FFF] top-0 left-0 w-full h-full flex justify-center items-center z-10"
      animate={controls}
    >
      <div className="p-6 rounded-md max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="flex flex-col items-center justify-center">
          <motion.img
            src="/logo.png"
            alt="Weinber Inc Loader"
            className="w-64 h-auto md:w-80 lg:w-96 object-contain"
            animate={{
              scale: [0.8, 1.2, 1],
              opacity: [0, 1],
              transition: { duration: 1.5, ease: "easeInOut" },
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Loading;