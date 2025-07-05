import React from "react";
import { FaDownload } from "react-icons/fa";

const DownloadCV = () => {
  // Convert Google Drive view link to direct download link
  const googleDriveDirectLink = "https://drive.google.com/file/d/1b98dZwFUPYorY-5skco10tbFY29epHqV/view?usp=drivesdk";
  
  return (
    <a
      href={googleDriveDirectLink}
      download="Hasbellaoui_Mehdi_CV.pdf"
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
    >
      <FaDownload />
      Download CV
    </a>
  );
};

export default DownloadCV;