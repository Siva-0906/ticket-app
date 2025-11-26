export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-red-600 text-white hover:bg-red-700 active:scale-95 disabled:bg-red-300",
    secondary:
      "bg-gray-700 text-white hover:bg-gray-600 active:scale-95 disabled:bg-gray-400",
    outline:
      "border border-red-500 text-red-500 hover:bg-red-500 hover:text-white active:scale-95 disabled:border-gray-400 disabled:text-gray-400",
    ghost:
      "text-red-500 hover:bg-red-100 active:scale-95 disabled:text-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
