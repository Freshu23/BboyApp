import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ReactDOMServer from 'react-dom/server'
import styles from './MapComponent.module.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
const MapComponent = () => {
    const icon = L.divIcon({
        className: 'custom-icon',
        html: ReactDOMServer.renderToString(<img className={styles.markerIcon} src={'/placeholder.png'}/>)
      });
    return (
        <div className={styles.map}>
            <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                <Marker icon={icon} position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div>

    )
}

export default MapComponent;