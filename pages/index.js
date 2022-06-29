import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import EventsList from "../components/EventsList/EventsList";
import Map from "../components/Map/Map";

export default function Home() {
  return (
    <div className={styles.container}>
      <button className={styles.mapButton}>
        {/* <Image className={styles.icon} alt="test" src={"./map-mobile.png"} /> */}
        Map
      </button>
      <EventsList />
      <div className={styles.mapContainer}>
        <Map />
      </div>
    </div>
  );
}
