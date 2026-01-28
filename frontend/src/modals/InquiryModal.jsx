import React, { useState } from 'react';
import InquiryModal from './InquiryModal';

const Inquiry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="inquiry-page min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Loan Inquiry
          </h1>
          <p className="text-lg text-gray-600">
            Submit your loan inquiry and get the best offers from our partner banks
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Quick Loan Inquiry
          </h2>
          <p className="text-gray-600 mb-6">
            Fill out the form below to receive personalized loan offers from multiple banks.
            Our experts will contact you within 24 hours.
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your Inquiry
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Compare offers from multiple banks</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Zero processing fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Quick approval process</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Expert guidance throughout</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Required Documents
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Identity proof (Aadhaar/PAN)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Address proof</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Income proof (Salary slips/ITR)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Bank statements (last 6 months)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <InquiryModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Inquiry;
