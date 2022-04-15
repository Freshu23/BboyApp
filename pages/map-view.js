import React from "react";
import Map from "../components/Map/Map";
import { useEffect } from "react";

const MapView = () => {
  useEffect(() => {
    setTimeout(window.dispatchEvent(new Event("resize")), 500);
  }, []);
  return <Map />;
};

export default MapView;
