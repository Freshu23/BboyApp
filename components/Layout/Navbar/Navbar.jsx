import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import clsx from "clsx";
import { Modal, Chip, Chips } from "@mantine/core";
import Button from "../../shared/Button/Button";
import { categories } from "../../../utils/categories";

const Sidebar = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.navbarLeft}>
        <Link href="/" passHref>
          <div className={styles.logoContainer}>BBOYAPP</div>
        </Link>
      </div>

      <div
        className={styles.burgerContainer}
        onClick={() => setOpened(!opened)}
      >
        <svg
          style={{ overflow: "visible" }}
          width="25"
          height="25"
          viewBox="0 0 38 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 760">
            <line
              id="Line 4"
              y1="2.5"
              x2="38"
              y2="2.5"
              stroke="black"
              strokeWidth="4"
              className={clsx({ ["line"]: true, ["line-1-open"]: opened })}
            />
            <line
              id="Line 6"
              y1="25.5"
              x2="38"
              y2="25.5"
              stroke="black"
              strokeWidth="4"
              className={clsx({ ["line"]: true, ["line-2-open"]: opened })}
            />
            <line
              id="Line 5"
              y1="14"
              x2="38"
              y2="14"
              stroke="black"
              strokeWidth="4"
              className={clsx({ ["line"]: true, ["line-3-open"]: opened })}
            />
          </g>
        </svg>
      </div>

      <ul
        className={clsx({
          [styles.menuList]: true,
          [styles.openMenuList]: opened,
        })}
      >
        <Link href="/" passHref>
          <a
            className={clsx(styles.link, {
              [styles.linkActive]: router.pathname === "/",
            })}
          >
            Events
          </a>
        </Link>

        <Link href="/login">
          <a className={styles.link}>Account</a>
        </Link>

        <li>
          <Link href="/add-event" passHref>
            <Button text={"Add event"} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
