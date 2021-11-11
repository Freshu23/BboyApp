import React from "react";
import Map from "../components/Map/Map";
import { useEffect } from "react";

const MapView = ()=>{
    useEffect(()=>{
        console.log('elo')
        setTimeout(window.dispatchEvent(new Event('resize')),500)
    },[])
    return(
        <div>
            <Map/>
        </div>
    )
}

export default MapView;