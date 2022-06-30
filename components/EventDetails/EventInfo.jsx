import React from "react";
import styles from "./EventInfo.module.css";
import Chip from "../shared/Chip/Chip";
// import DetailsMap from "../Map/DetailsMap/DetailsMap";
import Image from "next/image";
const EventInfo = ({ event, handleModal }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.upperSection}>
        <div className={styles.logo}>
          <Image width="100%" height="100%" src={event.logoURL} alt="logo" />
        </div>

        <div className={styles.detailsWrapper}>
          <h1 className={styles.infoTitle}>{event.name}</h1>
          <div className={styles.infoRow}>
            {/* <img className={styles.infoIcon} src={"/location.png"} /> */}
            <p>{event.place}</p>
          </div>
          <div className={styles.infoRow}>
            {/* <img className={styles.infoIcon} src={"/calendar.png"} /> */}
            <p>{event.date}</p>
          </div>
          <h2>Categories</h2>
          <div className={styles.infoRow}>
            {event.categories.map((category) => (
              <Chip key={Math.random()} value={category} />
            ))}
          </div>
          <button
            onClick={() => handleModal(true)}
            className={styles.registerButton}
          >
            Register
          </button>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.lowerSection}>
        <div className={styles.descriptionWrapper}>
          <h2 style={{ marginTop: 0 }}>Event description</h2>
          <p className={styles.infoDescription}>{event.description}</p>
        </div>
        {/* <DetailsMap event={event} /> */}
      </div>
    </div>
  );
};

export default EventInfo;
