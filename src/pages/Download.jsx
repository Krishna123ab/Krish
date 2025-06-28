import React from "react";
import downloadImage from "../assets/WhatsApp Image 2025-06-26.jpg";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-4 pb-20 flex flex-col items-center justify-center">

      {/* Main Download Block */}
      <div className="bg-white rounded-2xl p-8 w-full max-w-[1380px] flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center pt-20">
          <img
            src={downloadImage}
            alt="Download MovaFlix"
            className="w-full max-w-[850px] h-auto rounded-xl shadow-no"
          />
        </div>

        {/* Right Side - Text + Download */}
        <div className="w-full md:w-1/2 p-2 flex flex-col justify-center text-lg text-gray-800 space-y-4">
          <h1 className="text-4xl bg-gradient-to-b from-[red] to-[black] text-transparent bg-clip-text font-bold mb-4">
            Download MovaFlix
          </h1>

          <table className="w-full text-left text-gray-700 mb-4">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-bold text-lg">App Name</td>
                <td className="py-2 text-lg">MovaFlix</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-bold text-lg">Version</td>
                <td className="py-2 text-lg">2.0.0</td>
              </tr>
              <tr>
                <td className="py-2 font-bold text-lg">Download Size</td>
                <td className="py-2 text-lg">73.1 MB</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-start">
            <a
              href="https://github.com/Krishna123ab/Krish/releases/download/v2.0/MovaFlix.apk"
              download
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-black transition-all duration-300"
            >
              Download App
            </a>
          </div>
        </div>
      </div>

      {/* How to Install Block */}
      <div className="mt-10 bg-white shadow-xl rounded-2xl p-8 w-full max-w-[1380px]">
        <h2 className="text-4xl bg-gradient-to-b from-[red] to-[black] text-transparent bg-clip-text  mb-6">
          How to Install MovaFlix App
        </h2>
        <p className="text-gray-800 mb-4 font-bold">
          This movie streaming application with advanced features is not available on the Play Store. To install it, follow the steps below:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-800 text-lg leading-relaxed px-2 md:px-10">
          <li>Go to your phone’s <strong>Settings</strong> → <strong>Security</strong> or <strong>Privacy</strong>.</li>
          <li>Enable <strong>“Install from Unknown Sources”</strong>.</li>
          <li>Now, open your <strong>File Manager</strong> and locate the downloaded APK file.</li>
          <li>Tap on the file and press <strong>Install</strong>. Wait a few seconds.</li>
          <li>Once installed, open the app, sign in, and start enjoying your favorite movies and series for free.</li>
        </ol>
      </div>

    </div>
  );
}
