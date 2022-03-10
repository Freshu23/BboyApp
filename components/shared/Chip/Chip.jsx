import React from 'react';
import styles from './Chip.module.css';
import clsx from 'clsx';

const Chip = ({ value, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={clsx({ [styles.chip]: true, [styles.chipActive]: isActive })}>
      {value}
    </div>
  );
};

export default Chip;
