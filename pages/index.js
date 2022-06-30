import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import EventsList from "../components/EventsList/EventsList";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import clsx from "clsx";

const Map = dynamic(() => import("/components/Map/MapComponent"), {
  ssr: false,
});

export default function Home() {
  const events = useSelector((state) => state.event.events);
  const [mobileMapActive, setMobileMapActive] = useState(false);
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setMobileMapActive(!mobileMapActive);
        }}
        className={styles.mapButton}
      >
        <img className={styles.icon} alt="test" src={"./map-mobile.png"} />
        {mobileMapActive ? "Events" : "Map"}
      </button>
      <div
        className={clsx({
          [styles.eventsListContainerHidden]: mobileMapActive,
        })}
      >
        <EventsList />
      </div>
      <div
        className={clsx({
          [styles.mapContainer]: true,
          [styles.mapContainerActive]: mobileMapActive,
        })}
      >
        {typeof window !== "undefined" && <Map events={events} />}
      </div>
    </div>
  );
}
