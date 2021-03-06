import React from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import styles from "./MapComponent.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getEvents } from "../../firebase/service/events";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { setCurrentEvent } from "../../redux/reducer/counterSlice";
import Image from "next/image";

const MapComponent = ({ events }) => {
  // const events = useSelector((state) => state.event.events);
  console.log(events);
  const dispatch = useDispatch();
  const router = useRouter();
  const icon = L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
      <img alt="test" className={styles.markerIcon} src={"/marker.png"} />
    ),
  });
  const handleRedirect = (event) => {
    dispatch(setCurrentEvent(event));
    router.push("/event-details");
  };
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        className={styles.map}
        center={[51.505, -0.09]}
        zoom={3}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />
        {events.map((event) => (
          <Marker
            key={Math.random()}
            icon={icon}
            position={[event.lat, event.lng]}
          >
            <div onClick={() => handleRedirect(event)}>
              <Popup className={styles.popUp}>
                <img className={styles.popupLogo} src={event.logoURL} />
                <div className={styles.popupRightSide}>
                  <h3 className={styles.eventName}>{event.name}</h3>
                  <div className={styles.popupRow}>
                    <img className={styles.popupIcon} src={"/location.png"} />
                    <p className={styles.popupText}>{event.place}</p>
                  </div>
                  <div className={styles.popupRow}>
                    <img className={styles.popupIcon} src={"/calendar.png"} />
                    <p className={styles.popupText}>{event.date}</p>
                  </div>
                </div>
              </Popup>
            </div>
          </Marker>
        ))}
        {/* {events.map(())}
        <Marker
          position={[51.505, -0.09]}
          icon={L.divIcon({
            iconSize: [size, size],
            iconAnchor: [size / 2, size + 9],
            className: "mymarker",
            html: "????",
          })}
        ></Marker> */}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
