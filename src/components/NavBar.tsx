import React from "react";
import { NavBarProps } from "../types";

const NavBar: React.FC<NavBarProps> = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default NavBar;
