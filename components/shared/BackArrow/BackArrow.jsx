import React from "react";
import Link from "next/link";
import { ArrowLeft } from "react-feather";
import styles from "./BackArrow.module.css";

const BackArrow = (link) => {
  return (
    <Link passHref href={link}>
      <ArrowLeft className={styles.backArrow} />
    </Link>
  );
};

export default BackArrow;
