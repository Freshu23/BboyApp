import React from "react";
import styles from "./Sidebar.module.css";
import Link from 'next/link';

const Sidebar = () => {
  const resizeMap = () =>{
    console.log('elo')
    setTimeout(window.dispatchEvent(new Event('resize')),500)
  }
  return (
    <div className={styles.sidebarContainer}>
      <Link href="/">
        <div className={styles.logoContainer}>LOGO</div>
      </Link>
      <ul className={styles.menuList}>
        <li>
          <h3 className={styles.link}>EVENTS</h3>
        </li>
        <li>
          <Link onClick={resizeMap} href='/map-view'>
            <h3 className={styles.link}>MAP</h3>
          </Link>
        </li>
        <li>
          <h3 className={styles.link}>ACCOUNT</h3>
        </li>
        <li>
          <Link href='/add-event'>
            <h3 className={styles.link}>ADD EVENT</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
