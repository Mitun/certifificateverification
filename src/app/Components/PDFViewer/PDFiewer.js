import React from "react";

const PDFiewer = ({ isOpen }) => {
  const pdfURL = "/public/MITUN_SHIL.pdf"; // Replace with your PDF file URL or path

  return (
    <div className="flex items-center justify-center ">
      <iframe
        src={`/MITUN_SHIL.pdf`} // Note the leading '/'
        title="PDF Viewer"
        width="70%"
        height="500"
      />
    </div>
  );
};

export default PDFiewer;
