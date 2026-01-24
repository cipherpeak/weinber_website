import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useState } from "react";
import whatsapp from "../../assets/logo/logo.jpg";
import weinberLogo from "../../assets/logo/weinber_logo.png";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="w-full md:p-5 p-2 flex items-center justify-center">
        <footer className="bg-[#001529] text-white w-full rounded-3xl overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-10">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
              {/* Logo & Tagline */}
              <div className="text-center md:text-left">
                <div className="mb-4">
                  <img
                    src={weinberLogo}
                    alt="Weinber Inc Logo"
                    className="h-7 md:h-10 w-auto object-contain mx-auto md:mx-0"
                  />
                </div>
                <p className="text-base font-medium text-white/90">
                  Premium Auto Care. Made in USA.
                </p>
              </div>

              {/* Shop Section */}
              <div>
                <button
                  className="md:hidden flex justify-between items-center w-full text-left font-semibold text-white"
                  onClick={() => toggleSection("shop")}
                >
                  Products
                  <span>{openSection === "shop" ? "−" : "+"}</span>
                </button>
                <h3 className="text-lg font-semibold mb-4 hidden md:block text-white">
                  Products
                </h3>
                <ul
                  className={`space-y-2 text-white/80 ${openSection === "shop" ? "block" : "hidden md:block"
                    }`}
                >
                  <li>
                    <Link to="/products" className="hover:text-white transition-colors">
                      Ceramic Coatings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="hover:text-white transition-colors"
                    >
                      Waxes & Polishes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="hover:text-white transition-colors"
                    >
                      Detailing Sprays
                    </Link>
                  </li>
                  <li>
                    <Link to="/products" className="hover:text-white transition-colors">
                      Accessories
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About Section */}
              <div>
                <button
                  className="md:hidden flex justify-between items-center w-full text-left font-semibold text-white"
                  onClick={() => toggleSection("about")}
                >
                  Company
                  <span>{openSection === "about" ? "−" : "+"}</span>
                </button>
                <h3 className="text-lg font-semibold mb-4 hidden md:block text-white">
                  Company
                </h3>
                <ul
                  className={`space-y-2 text-white/80 ${openSection === "about" ? "block" : "hidden md:block"
                    }`}
                >
                  <li>
                    <Link to="/about" className="hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/warranty" className="hover:text-white transition-colors">
                      Warranty Info
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy" className="hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info Section */}
              <div>
                <button
                  className="md:hidden flex justify-between items-center w-full text-left font-semibold text-white"
                  onClick={() => toggleSection("contact")}
                >
                  Contact Info
                  <span>{openSection === "contact" ? "−" : "+"}</span>
                </button>
                <h3 className="text-lg font-semibold mb-4 hidden md:block text-white">
                  Contact Info
                </h3>
                <div
                  className={`text-sm text-white/80 space-y-2 ${openSection === "contact" ? "block" : "hidden md:block"
                    }`}
                >
                  <p className="font-semibold text-white">Weinber Inc.</p>
                  <p>1234 Detailers Way</p>
                  <p>Detroit, MI 48201, USA</p>
                  <p>
                    Phone:{" "}
                    <a href="tel:+15550001234" className="hover:text-white transition-colors">
                      +1 555 000 1234
                    </a>
                  </p>
                  <p>
                    Mail:{" "}
                    <a
                      href="mailto:info@weinberinc.com"
                      className="hover:text-white transition-colors"
                    >
                      info@weinberinc.com
                    </a>
                  </p>

                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex justify-center mt-10">
              <div className="flex space-x-5">
                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-white border border-white/30 p-3 rounded-full hover:bg-white hover:text-[#0047AB] transition-all"
                >
                  <FaYoutube size={22} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white border border-white/30 p-3 rounded-full hover:bg-white hover:text-[#0047AB] transition-all"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white border border-white/30 p-3 rounded-full hover:bg-white hover:text-[#0047AB] transition-all"
                >
                  <BiLogoFacebook size={22} />
                </a>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20 mt-8 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60 space-y-3 md:space-y-0">
                <p>
                  © 2025 Weinber Inc. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp
        phoneNumber="+15550001234"
        accountName="Weinber Support"
        statusMessage="Typically replies within 1 hour"
        avatar={whatsapp}
        chatMessage="Hello! Need help with our detailing products?"
        placeholder="Type a message..."
        allowClickAway={true}
      />
    </>
  );
}

export default Footer;
