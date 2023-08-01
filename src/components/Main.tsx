import React from "react";
import { MainProps } from "../types";

const Main: React.FC<MainProps> = ({ children }) => {
  return <main className="main">{children}</main>;
};

export default Main;
