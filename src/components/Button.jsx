import { motion } from "framer-motion";

const variants = {
  primary: "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg",
  outline: "border border-white/20 text-white hover:bg-white/10",
  ghost: "text-white/70 hover:text-white",
};

const Button = ({ children, variant = "primary", className = "", onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
