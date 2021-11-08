import React from "react";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logoContainer}>LOGO</div>
      <ul>
        <li>
          <h3>EVENTS</h3>
        </li>
        <li>
          <h3>MAP</h3>
        </li>
        <li>
          <h3>ACCOUNT</h3>
        </li>
        <li>
          <h3>ADD EVENT</h3>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
