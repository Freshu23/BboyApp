import React from 'react';
import Navbar from './Navbar/Navbar';
import styles from './Layout.module.css';
import { getEvents } from '../../firebase/service/events';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setEvent } from '../../redux/reducer/counterSlice';

const Layout = ({ children, pageLoading }) => {
  const dispatch = useDispatch();
  const getEvent = data => {
    dispatch(setEvent(data));
  };
  useEffect(() => {
    getEvents(getEvent);
  }, []);
  return (
    <div className='content'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
