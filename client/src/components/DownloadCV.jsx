import React from 'react';
import { FaDownload } from 'react-icons/fa';

const DownloadCV = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '../cv/Hasbellaoui Mehdi.pdf'; // Path to your CV in public folder
    link.download = 'Mehdi_CV.pdf'; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
    >
      <FaDownload />
      Download CV
    </button>
  );
};

export default DownloadCV;
