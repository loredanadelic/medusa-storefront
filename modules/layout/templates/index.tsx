import React from "react";
import { ReactNode } from "react";
import Nav from "./nav";
const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white">
      <Nav />
      <div className="relative">{children}</div>
    </div>
  );
};

export default Layout;
