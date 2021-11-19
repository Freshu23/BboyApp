import React from "react";
import styles from "./EventInfo.module.css";

const EventInfo = ({ event }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.bannerWrapper}>
        <img className={styles.eventThumbnail} src={event.logoURL} />
        <div
          className={styles.eventBanner}
          style={{ background: `url(${event.logoURL})` }}></div>
      </div>
      <h1 className={styles.infoTitle}>{event.name}</h1>
      <div className={styles.infoRow}>
        <img className={styles.infoIcon} src={"/location.png"} />
        <p>{event.place}</p>
      </div>
      <div className={styles.infoRow}>
        <img className={styles.infoIcon} src={"/calendar.png"} />
        <p>{event.date}</p>
      </div>
      <p>{event.description}</p>
    </div>
  );
};

export default EventInfo;
