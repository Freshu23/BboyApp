import React from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

const Input = ({
  type,
  text,
  name,
  onChange,
  value,
  placeholder,
  error,
  label,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={clsx({ [styles.input]: true }, { [styles.error]: error })}
        type={type}
        text={text}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={error ? 'Field required' : placeholder}
      />
    </div>
  );
};

export default Input;
