import React, { useEffect, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const ScannerQr = ({ onClose, onScanSuccess }) => {
  const scannerRef = useRef(null);

  useEffect(() => {
    scannerRef.current = new Html5QrcodeScanner("reader", {
      qrbox: { width: 250, height: 250 },
      fps: 10,
    });

    scannerRef.current.render(handleScanSuccess, handleScanError);

    function handleScanSuccess(result) {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
      onScanSuccess(result);
      onClose();
    }

    function handleScanError(error) {
      console.log("QR Code Scan Error: ", error);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
      }
    };
  }, [onScanSuccess, onClose]);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center bg-white">
      <div id="reader"></div>
    </div>
  );
};

export default ScannerQr;
