import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

export const ConfirmationModal = ({ isOpen, onClose }) => {
  const whatsappNumber = "15551234567"; // Replace with actual Weinber WhatsApp number
  const whatsappMessage = "Hi%20Weinber%20Team,%20I%20just%20submitted%20a%20Business%20Opportunity%20enquiry.%20Can%20you%20tell%20me%20more?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  // Don't render if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-white rounded-lg max-w-md w-full mx-4 shadow-lg">
        {/* Close button (X) */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>

        {/* Modal content */}
        <div className="p-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Application Received! Thank You.
            </h2>
          </div>

          <div className="text-center space-y-6 mt-4">
            <p className="text-gray-600 leading-relaxed">
              We have received your enquiry. Our partnership team is reviewing your application
              and will contact you shortly via email to discuss the next steps.
            </p>

            <div className="space-y-4">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                Prefer to chat now? Message us on WhatsApp for immediate assistance
              </button>

              <button
                onClick={onClose}
                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};