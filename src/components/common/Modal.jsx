import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  title = "",
  children,
  showCloseButton = true,
  size = "md", // "sm" | "md" | "lg"
}) {
  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  const handleBackdropClick = (e) => {
    // Close only if clicking on backdrop, not inside modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className={`w-full ${sizeClasses[size]} mx-4 bg-gray-900 text-white rounded-xl shadow-xl overflow-hidden`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <h2 className="text-lg font-semibold truncate">{title}</h2>
            {showCloseButton && (
              <button
                onClick={onClose}
                aria-label="Close"
                className="text-gray-400 hover:text-white text-xl leading-none"
              >
                ×
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="p-4 max-h-[70vh] overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
