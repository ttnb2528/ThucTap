import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScannerQr = ({ onClose, onScanSuccess }) => {
  useEffect(() => {
    function onScanFailure(error) {
      // handle scan failure, usually better to ignore and keep scanning.
      // for example:
      console.warn(`Code scan error = ${error}`);
    }

    const html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(onScanSuccess, onScanFailure);

    // Cleanup function to stop the scanner when component unmounts
    return () => {
      html5QrcodeScanner.clear();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60 z-50 flex justify-center items-center">
      <div
        className="w-[40%] h-[75%] bg-white rounded-md relative overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <span onClick={onClose} className="p-2 font-semibold cursor-pointer">
          Quay lại
        </span>
        <div id="reader"></div>
      </div>
    </div>
  );
};

export default ScannerQr;
