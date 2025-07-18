import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  const baseStyle =
    "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition";
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyle = "bg-gray-300 text-black hover:bg-gray-400";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${
        variant === "primary" ? primaryStyle : secondaryStyle
      }`}
    >
      {label}
    </button>
  );
};

export default Button;