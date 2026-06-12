import { motion as Motion } from "framer-motion";

const variants = {
  primary:
    "border-[#101312] bg-[#101312] text-white shadow-[0_10px_24px_rgba(16,19,18,0.18)] hover:bg-[#202522]",
  light:
    "border-white bg-[#f7f3ea] text-[#101312] hover:bg-white",
  outline:
    "border-current bg-transparent text-current hover:bg-current/10",
  ghost: "border-transparent bg-transparent text-current hover:bg-black/5",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  onClick,
}) => {
  return (
    <Motion.button
      type={type}
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
    >
      {children}
    </Motion.button>
  );
};

export default Button;
