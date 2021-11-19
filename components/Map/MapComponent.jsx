import React from "react";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import styles from "./MapComponent.module.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getEvents } from "../../firebase/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { setCurrentEvent } from "../../redux/reducer/counterSlice";

const MapComponent = () => {
  const events = useSelector(state => state.event.events);
  const dispatch = useDispatch();
  const router = useRouter();
  const icon = L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
      <img className={styles.markerIcon} src={"/placeholder.png"} />
    ),
  });
  const handleRedirect = event => {
    dispatch(setCurrentEvent(event));
    router.push("/event-details");
  };
  return (
    <div className={styles.map}>
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map(event => (
          <Marker key={event.lat} icon={icon} position={[event.lat, event.lng]}>
            <div onClick={() => handleRedirect(event)}>
              <Popup>
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
      </MapContainer>
    </div>
  );
};

export default MapComponent;
