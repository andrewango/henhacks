import React, { useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";

export default function MapPlace() {
    
    const [viewport, setViewport] = useState({ latitude: 39.6780, longitude: -75.7506, width: "100vw", height: "100vh", zoom: 12});
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          zoom: 10,
        });
      });
    }, []);
    return (
      <div>
        {viewport.latitude && viewport.longitude && (
          <div>
            <Map
              mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              initialViewState={viewport}
              mapStyle="mapbox://styles/mapbox/streets-v11"
            >
              <Marker
                longitude={viewport.longitude}
                latitude={viewport.latitude}
              />
            </Map>
          </div>
        )}
      </div>
    );
  }
