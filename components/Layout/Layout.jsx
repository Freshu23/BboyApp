import React from "react";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
