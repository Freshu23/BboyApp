import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';
import GoogleButton from 'react-google-button';
import Input from '../Input/Input';
import styles from './SharedForm.module.css';
import { registerUser } from '../../../firebase/service/auth';
import { Notification } from '@mantine/core';
import { X } from 'tabler-icons-react';

const SharedForm = ({ type }) => {
  const [firebaseError, setFirebaseError] = useState(null);
  const [formDataDancer, setFormDataDancer] = useState({
    email: '',
    password: '',
    nickname: '',
    fullname: '',
  });
  const [formDataOrganizer, setFormDataOrganizer] = useState({
    email: '',
    password: '',
  });
  const [errorsDancer, setErrorsDancer] = useState({
    email: false,
    password: false,
    nickname: false,
    fullname: false,
  });
  const [errorsOrganizer, setErrorsOrganizer] = useState({
    email: false,
    password: false,
  });
  const handleChange = e => {
    type === 'dancer'
      ? setFormDataDancer({
          ...formDataDancer,
          [e.target.name]: e.target.value,
        })
      : setFormDataOrganizer({
          ...formDataOrganizer,
          [e.target.name]: e.target.value,
        });
  };

  const handleSubmit = e => {
    e.preventDefault();
    checkErrors();
  };

  const checkErrors = () => {
    const errorsTemp = {};
    if (type === 'dancer') {
      for (const key in formDataDancer) {
        formDataDancer[key] === ''
          ? (errorsTemp[key] = true)
          : (errorsTemp[key] = false);
      }
      setErrorsDancer(errorsTemp);
    } else {
      for (const key in formDataOrganizer) {
        formDataOrganizer[key] === ''
          ? (errorsTemp[key] = true)
          : (errorsTemp[key] = false);
      }
      setErrorsOrganizer(errorsTemp);
    }
    let isError = false;
    for (const key in errorsTemp) {
      if (errorsTemp[key]) {
        isError = true;
      }
    }
    if (!isError) {
      type === 'dancer'
        ? registerUser(
            formDataDancer.email,
            formDataDancer.password,
            setFirebaseError
          )
        : registerUser(
            formDataOrganizer.email,
            formDataOrganizer.password,
            setFirebaseError
          );
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      {firebaseError && (
        <Notification
          className={styles.alert}
          onClose={() => setFirebaseError(null)}
          icon={<X size={18} />}
          color='red'
          title={firebaseError}></Notification>
      )}
      <h3>BBOYAPP</h3>
      {type === 'login' && <h1>Log in</h1>}
      {type === 'dancer' && <h1>Create a dancer account</h1>}
      {type === 'organizer' && <h1>Create an organizer account</h1>}
      {type === 'login' || type === 'organizer' ? (
        <>
          <Input
            error={errorsOrganizer.email}
            onChange={handleChange}
            value={formDataOrganizer.email}
            name='email'
            placeholder='email'
            type='text'
            label='Email'
          />
          <Input
            error={errorsOrganizer.password}
            onChange={handleChange}
            value={formDataOrganizer.password}
            name='password'
            placeholder='password'
            type='password'
            label='Password'
          />
        </>
      ) : (
        <>
          <Input
            error={errorsDancer.nickname}
            onChange={handleChange}
            value={formDataDancer.nickname}
            name='nickname'
            placeholder='Bboy/Bgirl nickname'
            type='text'
            label='Nickname'
          />
          <Input
            error={errorsDancer.fullname}
            onChange={handleChange}
            value={formDataDancer.fullname}
            name='fullname'
            placeholder='full name'
            type='text'
            label='Full name'
          />
          <Input
            error={errorsDancer.email}
            onChange={handleChange}
            value={formDataDancer.email}
            name='email'
            placeholder='email'
            type='text'
            label='Email'
          />
          <Input
            error={errorsDancer.password}
            onChange={handleChange}
            value={formDataDancer.password}
            name='password'
            placeholder='password'
            type='password'
            label='Password'
          />
        </>
      )}

      <Button
        style={{ marginTop: 10 }}
        text='Register'
        className={styles.loginButton}
        type='submit'
      />
      <div className={styles.loginDivider}>
        <div
          className={styles.loginDividerLine}
          style={{ marginRight: 5 }}></div>
        <span>OR</span>
        <div
          className={styles.loginDividerLine}
          style={{ marginLeft: 5 }}></div>
      </div>
      <GoogleButton type='light' style={{ marginTop: 25 }} />
    </form>
  );
};

export default SharedForm;
