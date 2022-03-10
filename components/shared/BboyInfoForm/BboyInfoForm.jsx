import React from 'react';
import styles from './BboyInfoForm.module.css';
import TextField from '@mui/material/TextField';

const BboyInfoForm = ({ title, onDelete, canDelete, onChange }) => {
  return (
    <form className={styles.form}>
      <div className={styles.titleRow}>
        <h3>{title} </h3>
        {canDelete ? (
          <button onClick={onDelete} className={styles.deleteBtn}>
            X
          </button>
        ) : null}
      </div>
      <div className={styles.formRow}>
        <TextField
          id='standard-multiline-static'
          label='Full Name'
          name='name'
          multiline
          variant='standard'
          onChange={onChange}
          className={styles.textInput}
        />
      </div>
      <div className={styles.formRow}>
        <TextField
          id='standard-multiline-static'
          label='BBoy nickname'
          name='nickname'
          multiline
          variant='standard'
          onChange={onChange}
          className={styles.textInput}
        />
      </div>
      <div className={styles.formRow}>
        <TextField
          id='standard-multiline-static'
          label='Email'
          name='email'
          multiline
          variant='standard'
          onChange={onChange}
          className={styles.textInput}
        />
      </div>
    </form>
  );
};

export default BboyInfoForm;
