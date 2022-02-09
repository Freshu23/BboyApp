import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
