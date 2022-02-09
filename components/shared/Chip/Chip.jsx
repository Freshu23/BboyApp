import React from 'react';
import styles from './Chip.module.css';

const Chip = ({ value }) => {
  return <div className={styles.chip}>{value}</div>;
};

export default Chip;
