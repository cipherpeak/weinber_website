import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { fadeInUp, fadeIn, staggerContainer } from "../../utils/animations";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation variants


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show loading state
    Swal.fire({
      title: "Sending Message...",
      text: "Please wait while we process your inquiry.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "89f095d6-4485-4063-ba02-6c8e76e2f811",
          ...formData,
          from_name: "Weinber Website Contact Form",
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for your message. We'll get back to you soon!",
          confirmButtonColor: "#0047AB",
        });

        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later or contact us directly.",
        confirmButtonColor: "#0047AB",
      });
    }
  };

  const mainBranch = {
    country: "USA",
    company: "Weinber Inc.",
    address: ["New Hyde Park", "NY 11040, USA"],
    email: "sales@weinberinc.com",
    isMain: true,
  };

  const regionalBranches = [
    {
      country: "UAE",
      company: "Redtronic LLC",
      address: ["Dubai, UAE"],
      email: "info@redtronicllc.com",
    },
    {
      country: "Qatar",
      company: "Advantage Trading & Services WLL",
      address: ["Doha, Qatar"],
      email: "info@advantagewll.com",
    },
    {
      country: "India",
      company: "Redtronic LLP",
      address: ["Cochin, Kerala"],
      email: "sales.ind@weinberinc.com",
    },
    {
      country: "KSA",
      company: "Gentle Car Wash and Polishing",
      address: ["Al Hessa, KSA"],
      email: "sales.ksa@weinberinc.com",
    },

  ];

  const socialLinks = [

    {
      icon: FiInstagram,
      href: "#",
      label: "Instagram",
    },
    { icon: FiFacebook, href: "#", label: "Facebook" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.0 }}
        variants={staggerContainer}
        className="py-16 px-4"
      >
        <motion.div
          variants={fadeInUp}
          className="container mx-auto text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with <span className="text-[#0047AB]">Weinber</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We're here to answer your questions and discuss how we can help you
            succeed. Contact our main office or find a partner near you.
          </p>
        </motion.div>
      </motion.section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Branches */}
          <div className="space-y-12">
            {/* Main Branch Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Headquarters
              </h2>
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-[#0047AB] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <FiMapPin className="w-64 h-64 text-[#0047AB]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <FiMapPin className="w-8 h-8 text-[#0047AB]" />
                    <h2 className="text-3xl font-bold text-gray-900">{mainBranch.country}</h2>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{mainBranch.company}</h3>
                    <div className="text-lg text-gray-600 space-y-1">
                      {mainBranch.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-lg font-medium text-[#0047AB]">
                      <FiMail className="w-5 h-5" />
                      <a href={`mailto:${mainBranch.email}`} className="hover:underline">
                        {mainBranch.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Regional Branches Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              <motion.h3
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-8"
              >
                Regional Partners
              </motion.h3>

              <div className="flex flex-wrap justify-center gap-6">
                {regionalBranches.map((branch, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full w-full md:w-[calc(50%-12px)]"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FiMapPin className="w-5 h-5 text-[#0047AB]" />
                      <h4 className="text-xl font-bold text-gray-900">{branch.country}</h4>
                    </div>

                    <div className="flex-grow space-y-3">
                      {branch.company && (
                        <p className="font-semibold text-gray-800">{branch.company}</p>
                      )}
                      {branch.address.length > 0 && (
                        <div className="text-gray-600 text-sm">
                          {branch.address.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#0047AB] break-words">
                        <FiMail className="w-4 h-4 flex-shrink-0" />
                        <a href={`mailto:${branch.email}`} className="hover:underline truncate">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <div className="relative">
                        <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <div className="relative">
                        <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid grid-cols-1 gap-6">
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="product">Product Enquiry</option>
                        <option value="distributor">Distributor</option>
                        <option value="warranty">Warranty Registration</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </motion.div>
                  </div>

                  {/* Message */}
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <div className="relative">
                      <FiMessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                        placeholder="Tell us about your inquiry..."
                      ></textarea>
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div variants={itemVariants}>
                    <button
                      type="submit"
                      className="w-full cursor-pointer bg-[#0047AB] text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 flex items-center justify-center gap-2 group hover:bg-blue-800 hover:shadow-lg"
                    >
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      <span>Send Message</span>
                    </button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Full Width Map Section */}
        {/* <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
           variants={containerVariants}
           className="mb-16"
         >
           <motion.div
             variants={fadeInUp}
             className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
           >
             <div className="p-6 border-b border-gray-200">
               <h3 className="text-2xl font-bold text-gray-900">Global Presence</h3>
               <p className="text-gray-600">Weinber Inc. Worldwide Headquarters</p>
             </div>
             <div className="relative h-96 w-full">
               <iframe
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.204092734053!2d-73.69813392319675!3d40.73553443617331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2628e9327914f%3A0x6b6d517b6a1e7bce!2sNew%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sin!4v1769236338187!5m2!1sen!2sin"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Our Location"
               ></iframe>
             </div>
           </motion.div>
         </motion.div> */}
      </div>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-[#0047AB] to-blue-800 mb-5 rounded-3xl p-10 md:p-12 text-center relative overflow-hidden mx-auto max-w-4xl"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Follow Us For More
          </h3>
          <p className="text-blue-100 text-lg mb-8">
            Stay connected and get the latest detailing tips and product launches
          </p>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-7 h-7 text-[#0047AB]  transition-colors" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
      </motion.section>
    </div>
  );
};

export default Contact;
