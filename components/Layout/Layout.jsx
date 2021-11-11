import React from "react";
import Sidebar from "./sidebar/Sidebar";
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Sidebar />
      <div className={styles.contentRight}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
