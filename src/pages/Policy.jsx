import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import svg from "../assets/privacy-policy-animate.svg";

const policyData = [
  {
    title: "1. Right to Data Deletion",
    content:
      "In accordance with global data protection laws, you have the right to request the deletion of your personal data stored within our systems. Once your request is verified, we will remove your data from our servers unless certain legal obligations require us to retain it."
  },
  {
    title: "2. Information We Delete",
    content: `When submitting a data deletion request, the following data will be removed:

- Personal Information: Name, email address, phone number, and any other personally identifiable information.
- Account Details: Subscription history, payment details, and usage data.
- Watchlists and Preferences: Any watchlist, preferences, or custom content recommendations.

*Please note: After the data is deleted, you will no longer have access to your MovaFlix Movies account, and the action is irreversible*`
  },
  {
    title: "3. How to Submit a Data Deletion Request",
    content: `To request the deletion of your data:

- Email Request: Send an email to movaflixmovies@gmail.com with the subject line \"Data Deletion Request.\"
- Required Information: Include the following details in your email:
  - Your full name.
  - Your registered email address.
  - Reason for your data deletion request (optional).
- Verification: We may contact you to verify your identity before proceeding with the deletion.`
  },
  {
    title: "4. Processing Time",
    content: "Upon receiving and verifying your request, we will process the deletion within 30 days. You will be notified once your data has been successfully deleted."
  },
  {
    title: "5. Exceptions to Data Deletion",
    content: `Certain data may not be eligible for deletion if:

- Legal Obligations: We are required to retain your data for legal, regulatory, or contractual reasons.
- Ongoing Transactions: If there are any unresolved issues such as pending transactions, your data may be retained until those issues are resolved.`
  },
  {
    title: "6. Impact of Data Deletion",
    content: `Once your data is deleted:

- You will lose access to your MovaFlix Movies account.
- Any remaining subscription time will be forfeited, and no refunds will be issued.
- You will need to create a new account if you wish to use our services again in the future.`
  },
  {
    title: "7. Contact Us",
    content: `If you have any questions about this policy or need assistance with your data deletion request, please reach out to us at:

📧 Email: movaflixmovies@gmail.com

Our team is here to help you with any concerns related to your personal data and privacy.`
  }
];

export const Policy = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white text-black p-6 max-w-7xl mx-auto lm:mx-0 grid grid-cols-2 lD:grid-cols-2 lm:grid-cols-1 gap-8 items-center">
      {/* SVG Section */}
      <div className="flex justify-center lm:mt-20">
        <img src={svg} alt="Privacy Policy" className="w-full max-w-md" />
      </div>

      {/* Content Section */}
      <div className="lm:mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text">Privacy Policy</h2>
        {policyData.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
            >
              <span>{item.title}</span>
              {openIndices.includes(index) ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndices.includes(index) && (
              <div className="px-4 py-3 whitespace-pre-wrap text-sm text-gray-800">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};