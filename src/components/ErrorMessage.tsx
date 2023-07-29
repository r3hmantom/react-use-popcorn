import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="error">
      <span>🚩</span>
      {message}
    </p>
  );
};

export default ErrorMessage;
