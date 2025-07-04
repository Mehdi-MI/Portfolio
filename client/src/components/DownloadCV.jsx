import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  return (
    <a
      href="/Hasbellaoui_Mehdi.pdf"
      download="Mehdi_CV.pdf"
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
    >
      <FaDownload />
      Download CV
    </a>
  );
};

export default DownloadCV;
