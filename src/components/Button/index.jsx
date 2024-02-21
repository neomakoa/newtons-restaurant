import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="btn btn-dark text-primary col-6 col-md-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
