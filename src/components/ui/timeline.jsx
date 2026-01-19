import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white py-16 px-4" ref={containerRef}>
      {/* Centered heading and description */}
      <div className="max-w-7xl mx-auto py-4 md:py-6 px-2 md:px-8 lg:px-10 text-center">
        <h2 className="text-4xl md:text-5xl mb-2 md:mb-4 text-black font-bold mx-auto">
          Our Journey Through Time
        </h2>
        <p className="text-neutral-700 text-sm md:text-base max-w-lg mx-auto">
          A timeline of our growth and milestones over the years.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10 md:pb-16">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-6 md:pt-40">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 md:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 absolute left-2 md:left-3 w-8 md:w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-neutral-200 border border-neutral-300 p-1 md:p-2" />
              </div>
              <div className="hidden md:flex flex-col md:pl-20 absolute -bottom-20 left-0 w-full">
                <h3 className="text-xl md:text-3xl lg:text-5xl font-bold text-neutral-500">
                  {item.title}
                </h3>
                <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-neutral-700 mt-1 md:mt-2">
                  {item.subtitle}
                </h4>
              </div>
            </div>

            <div className="relative pl-12 md:pl-20 pr-2 md:pr-4 w-full">
              <div className="md:hidden flex flex-col mb-4">
                <h3 className="text-xl font-bold text-neutral-500">
                  {item.title}
                </h3>
                <h4 className="text-base font-semibold text-neutral-700 mt-1">
                  {item.subtitle}
                </h4>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-6 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-100 via-[#0047AB] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
