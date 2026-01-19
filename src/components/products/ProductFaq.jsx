import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductFaq = ({ isVisible, faqs, ChevronDown, openFAQ, setOpenFAQ }) => {
  return (
    <section id="faq">
      <div
        id="faq-title"
        className="transition-all duration-1000 mb-6 opacity-100 translate-y-0"
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">Frequently Asked Questions</h2>
      </div>

      <div className="divide-y">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            id={`faq-${idx}`}
            className="py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <motion.button
              onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              className="flex justify-between w-full text-left text-gray-800 font-medium cursor-pointer"
              whileTap={{ scale: 0.99 }}
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openFAQ === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {openFAQ === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: "auto", 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.4, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductFaq;