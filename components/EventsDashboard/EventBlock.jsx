import React from 'react';
import styles from './EventBlock.module.css';
import { setCurrentEvent } from '../../redux/reducer/counterSlice';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const EventBlock = ({ event }) => {
  const dispatch = useDispatch();
  const handleRedirect = event => {
    dispatch(setCurrentEvent(event));
    router.push('/event-details');
  };
  const router = useRouter();

  return (
    <div
      className={styles.blockContainer}
      onClick={() => handleRedirect(event)}>
      <img className={styles.blockImage} src={event.logoURL} />
      <div className={styles.blockInfo}>
        <h1 className={styles.eventTitle}>{event.name}</h1>
        <div className={styles.blockRow}>
          <img className={styles.blockIcon} src={'/location.png'} />
          <p className={styles.popupText}>{event.place}</p>
        </div>
        <div className={styles.blockRow}>
          <img className={styles.blockIcon} src={'/calendar.png'} />
          <p className={styles.popupText}>{event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventBlock;
