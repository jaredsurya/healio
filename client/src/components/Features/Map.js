import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SwitcherContext from "../../utils/switcherContext";

const markerIcon = L.icon({
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function Map({ size }) {
  const { feed, setFeed } = useContext(SwitcherContext);
  const [userLocation, setUserLocation] = useState([43.0481, -76.1474]);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const position = userLocation;

  const markers = [
    {
      position: [43.0481, -76.1474],
      name: "Marker 1",
      description: "This is marker 1",
    },
    {
      position: [51.49, -0.1],
      name: "Marker 2",
      description: "This is marker 2",
    },
    {
      position: [51.51, -0.1],
      name: "Marker 3",
      description: "This is marker 3",
    },
  ];

  const handleMarkerClick = (marker) => {
    // Pass the marker data to your feed component
    console.log("Clicked marker:", marker);
  };

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center" gutterBottom>
          Find your healing services below:
        </Typography>
        <Box p={0.5}>
          A MAP OF THE WORLD GOES HERE
          {userLocation && (
            <MapContainer
              center={position}
              zoom={10}
              style={{ height: "400px" }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {markers.map((marker) => (
                <Marker
                  key={marker.position.toString()}
                  position={marker.position}
                  icon={markerIcon}
                >
                  <Popup>
                    <h3>{marker.name}</h3>
                    <p>{marker.description}</p>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </Box>
      </Box>
    );
  } else {
    return (
      <Box p={0.5}>
        <Typography align="center" p="5px" onClick={() => setFeed("map")}>Use the map markers to find your local healers:</Typography>
        {userLocation && (
          <MapContainer center={position} zoom={10} style={{ height: "400px", border: "3px solid #0e643e", borderRadius: "10px" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker) => (
              <Marker
                key={marker.position.toString()}
                position={marker.position}
                icon={markerIcon}
                
              >
                <Popup onClick={() => handleMarkerClick(marker)}>
                  <h3>{marker.name}</h3>
                  <p>{marker.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </Box>
    );
  }
}

export default Map;
