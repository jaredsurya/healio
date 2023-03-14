import { Box } from "@mui/material";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const markerIcon = L.icon({
  iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

function Map() {
  const position = [51.505, -0.09];

  const markers = [
    {
      position: [51.5, -0.09],
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

  return (
    <Box p={.5}>
      A MAP OF THE WORLD GOES HERE
      <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
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
    </Box>
  );
}

export default Map;
