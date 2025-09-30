import React from "react";
import "./Button.css";
type ButtonProps = {
  text: string; // Button label
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Extra styles (optional)
};
function Button({
  text,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
export default Button;
