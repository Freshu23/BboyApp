import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import EventsList from "../components/EventsList/EventsList";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const Map = dynamic(() => import("/components/Map/MapComponent"), {
  ssr: false,
});

export default function Home() {
  const events = useSelector((state) => state.event.events);

  return (
    <div className={styles.container}>
      <button className={styles.mapButton}>
        {/* <Image className={styles.icon} alt="test" src={"./map-mobile.png"} /> */}
        Map
      </button>
      <EventsList />
      <div className={styles.mapContainer}>
        {typeof window !== "undefined" && <Map events={events} />}
      </div>
    </div>
  );
}
