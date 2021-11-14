import React from 'react'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ReactDOMServer from 'react-dom/server'
import styles from './MapComponent.module.css'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { getEvents } from '../../firebase/firebaseConfig'

const MapComponent = () => {
    const [events,setEvents] = useState([])
    const addEvents =(data)=>{
        setEvents(prevEvents=>[...prevEvents,data])
    }
    useEffect(()=>{
        getEvents(addEvents);
    },[])

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
                {events.map(event=><Marker icon={icon} position={[event.lat,event.lng]}>
                    <Popup>{event.name}</Popup>
                </Marker>)}

        </MapContainer>
        </div>

    )
}

export default MapComponent;