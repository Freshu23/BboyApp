import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import ReactDOMServer from "react-dom/server";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/dist/client/router";
import styles from "./DetailsMapComponent";
import Image from "next/image";

const MapComponent = ({ event }) => {
  const icon = L.divIcon({
    className: "custom-icon",
    html: ReactDOMServer.renderToString(
      <Image
        width={30}
        height={30}
        alt="icon"
        className={styles.markerIcon}
        src={"/marker.png"}
      />
    ),
  });

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        style={{
          height: 300,
          width: 850,
          borderRadius: "0 0 16px 16px",
          float: "right",
          zIndex: 0,
        }}
        center={[event.lat, event.lng]}
        zoom={10}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />

        <Marker
          key={Math.random()}
          icon={icon}
          position={[event.lat, event.lng]}
        ></Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
