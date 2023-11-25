import React from "react";

const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className="m-2 bg-blue-900 px-4 py-2 text-white rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
