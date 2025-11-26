// src/components/payments/QRCodeBox.jsx

/**
 * Props:
 * - label?: string (text above QR, e.g., "Show this at the theatre")
 * - value?: string (booking Id / info – just shown as small text below)
 * - size?: number (pixel size of the QR square, default 160)
 *
 * NOTE: This is a UI placeholder box.
 * Later you can integrate a real QR library and render inside this container.
 */

const QRCodeBox = ({ label, value, size = 160 }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {label && (
        <p className="text-sm text-gray-300 text-center">
          {label}
        </p>
      )}

      {/* QR visual container */}
      <div
        className="bg-white rounded-lg shadow-xl flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <div className="w-[70%] h-[70%] bg-gray-300 flex items-center justify-center text-[10px] text-black font-semibold">
          QR CODE
        </div>
      </div>

      {value && (
        <p className="text-[11px] text-gray-400 text-center break-all max-w-xs">
          Ref: {value}
        </p>
      )}
    </div>
  );
};

export default QRCodeBox;
