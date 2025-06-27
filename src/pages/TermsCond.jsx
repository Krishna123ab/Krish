import React from "react";
import TermsImage from "../assets/accept-terms-animate.svg"; // adjust the path based on your structure

export const TermsAndConditions = () => {
  return (
    <div className="pt-20">

<div className="flex vtb:flex-col mtb:flex-col lD:flex-row bg-white rounded-2xl shadow-lg overflow-hidden max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full flex justify-center items-center mb-6 lD:mb-0">
        <img
          src={TermsImage}
          alt="Terms Illustration"
          className="w-3/4 max-w-[500px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full text-lg text-left px-4">
        <h2 className="text-3xl bg-gradient-to-r from-[red] to-[black] inline-block text-transparent bg-clip-text font-bold mb-4 text-[#2c3e50]">Terms & Conditions</h2>
        <p className="mb-4 text-lg mt-5">
          Welcome to <strong>MovaFlix Movies</strong>. By accessing or using our platform, you agree to the following terms and conditions:
        </p>

        <ul className="space-y-4 text-sm">
          <li className="text-lg">
            <strong>Account Usage:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>You must be at least 18 years old or have parental/guardian consent to use this service.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
            </ul>
          </li>

          <li className="text-lg">
            <strong>Content Access:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Licensed streaming content is for personal, non-commercial use only.</li>
              <li>Sharing, downloading, or redistributing content without permission is strictly prohibited.</li>
            </ul>
          </li>

          <li className="text-lg">
            <strong>Subscription and Billing:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Subscriptions are billed on a recurring basis unless canceled.</li>
              <li>No refunds for partial or unused subscription periods.</li>
            </ul>
          </li>

          <li className="text-lg">
            <strong>Prohibited Activities:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>No hacking, reverse engineering, or unauthorized access.</li>
            </ul>
          </li>

          <li className="text-lg">
            <strong>Content Availability:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Content may change without notice.</li>
              <li>No liability for unavailability due to technical or licensing issues.</li>
            </ul>
          </li>

          <li className="text-lg">
            <strong>Termination:</strong> Accounts may be suspended or terminated for violations.
          </li>

          <li className="text-lg">
            <strong>Liability:</strong> MovaFlixMovies is not responsible for damages from service interruptions or misuse.
          </li>

          <li className="text-lg">
            <strong>Changes to Terms:</strong> Continued use after updates constitutes acceptance.
          </li>
        </ul>

        <p className="my-7">
          By using MovaFlix Movies, you agree to comply with these terms. Contact support for any questions.
        </p>
      </div>
    </div>

    </div>
  );
};
