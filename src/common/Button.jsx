export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyle =
    "flex items-center gap-1.5 px-[18px] py-2.5 rounded-lg text-[13.5px] font-semibold transition-colors cursor-pointer";

  const variants = {
    primary:
      "bg-[#4F46E5] hover:bg-[#4338CA] text-white shadow-[0_2px_8px_rgba(79,70,229,0.3)]",
    secondary:
      "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}