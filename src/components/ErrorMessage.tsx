import React from "react";
import { ErrorMessageProps } from "../types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <p className="error">
      <span>🚩</span>
      {message}
    </p>
  );
};

export default ErrorMessage;
