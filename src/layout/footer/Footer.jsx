import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useState } from "react";
import whatsapp from "../../assets/logo/logo.jpg";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <footer className="bg-white text-black border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
            {/* Logo & Tagline */}
            <div className="text-center md:text-left">
              <img
                src="/logo.png"
                alt="Weinber Inc Logo"
                className="h-24 md:h-32 mx-auto md:mx-0 mb-2"
              />
              <p className="text-base font-medium text-gray-700">
                Premium Auto Care. Made in USA.
              </p>
            </div>

            {/* Shop Section */}
            <div>
              <button
                className="md:hidden flex justify-between items-center w-full text-left font-semibold text-black"
                onClick={() => toggleSection("shop")}
              >
                Products
                <span>{openSection === "shop" ? "−" : "+"}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 hidden md:block">
                Products
              </h3>
              <ul
                className={`space-y-2 text-gray-700 ${openSection === "shop" ? "block" : "hidden md:block"
                  }`}
              >
                <li>
                  <Link to="/products" className="hover:text-[#0047AB]">
                    Ceramic Coatings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-[#0047AB]"
                  >
                    Waxes & Polishes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-[#0047AB]"
                  >
                    Detailing Sprays
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-[#0047AB]">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Section */}
            <div>
              <button
                className="md:hidden flex justify-between items-center w-full text-left font-semibold text-black"
                onClick={() => toggleSection("about")}
              >
                Company
                <span>{openSection === "about" ? "−" : "+"}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 hidden md:block">
                Company
              </h3>
              <ul
                className={`space-y-2 text-gray-700 ${openSection === "about" ? "block" : "hidden md:block"
                  }`}
              >
                <li>
                  <Link to="/about" className="hover:text-[#0047AB]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="hover:text-[#0047AB]">
                    Warranty Info
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-[#0047AB]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#0047AB]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Section */}
            <div>
              <button
                className="md:hidden flex justify-between items-center w-full text-left font-semibold text-black"
                onClick={() => toggleSection("contact")}
              >
                Contact Info
                <span>{openSection === "contact" ? "−" : "+"}</span>
              </button>
              <h3 className="text-lg font-semibold mb-4 hidden md:block">
                Contact Info
              </h3>
              <div
                className={`text-sm text-gray-700 space-y-2 ${openSection === "contact" ? "block" : "hidden md:block"
                  }`}
              >
                <p className="font-semibold">Weinber Inc.</p>
                <p>1234 Detailers Way</p>
                <p>Detroit, MI 48201, USA</p>
                <p>
                  Phone:{" "}
                  <a href="tel:+15550001234" className="hover:text-[#0047AB]">
                    +1 555 000 1234
                  </a>
                </p>
                <p>
                  Mail:{" "}
                  <a
                    href="mailto:info@weinberinc.com"
                    className="hover:text-[#0047AB]"
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
                className="text-[#0047AB] border border-[#0047AB] p-3 rounded-full hover:bg-[#0047AB] hover:text-white transition"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#0047AB] border border-[#0047AB] p-3 rounded-full hover:bg-[#0047AB] hover:text-white transition"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#0047AB] border border-[#0047AB] p-3 rounded-full hover:bg-[#0047AB] hover:text-white transition"
              >
                <BiLogoFacebook size={22} />
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 space-y-3 md:space-y-0">
              <p>
                © 2025 Weinber Inc. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

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
