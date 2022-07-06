import React from "react";
import styles from "./EventBlock.module.css";
import { setCurrentEvent } from "../../redux/reducer/counterSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const EventBlock = ({ event }) => {
  const dispatch = useDispatch();
  const handleRedirect = (event) => {
    dispatch(setCurrentEvent(event));
    router.push("/event-details");
  };
  const router = useRouter();

  return (
    <div
      className={styles.blockContainer}
      onClick={() => handleRedirect(event)}
    >
      <div className={styles.logoContainer}>
        <Image
          src={event.logoURL}
          alt="logo"
          width={100}
          height={100}
          style={{ borderRadius: 12 }}
        />
      </div>
      {/* <img className={styles.blockImage} src={event.logoURL} /> */}
      <div className={styles.blockInfo}>
        <h1 className={styles.eventTitle}>{event.name}</h1>
        <div className={styles.blockRow}>
          <img className={styles.blockIcon} src={"/location.png"} />
          <p className={styles.popupText}>{event.place}</p>
        </div>
        <div className={styles.blockRow}>
          <img className={styles.blockIcon} src={"/calendar.png"} />
          <p className={styles.popupText}>{event.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventBlock;
