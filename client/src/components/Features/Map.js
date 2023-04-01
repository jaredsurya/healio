import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import SwitcherContext from "../../utils/switcherContext";
import HealersServicesContext from "../../utils/healersServicesContext";
import { useNavigate } from "react-router-dom";

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
  const { healers, setRenderHealer } = useContext(HealersServicesContext);
  const [userLocation, setUserLocation] = useState([43.0481, -76.1474]);
  const [markers, setMarkers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error(error);
      }
    );
    let newMarkers;
    if (healers) {
      newMarkers = healers.map((healer) => ({
        id: healer.id,
        position: [healer.lat, healer.lon],
        name: healer.full_name,
        description: healer.phone_number,
      }));
    }
    setMarkers(newMarkers);
  }, [healers]);

  const position = userLocation;

  const handleMarkerClick = (e) => {
    setRenderHealer(e.id);
    navigate(`/main/healer/${e.id}`);
    // Pass the marker data to your feed component
    console.log("Clicked marker:", e);
  };

  if (size === "large") {
    return (
      <Box>
        <Typography variant="h5" align="center" gutterBottom>
          Use the map markers to find your local healers:
        </Typography>
        <Box p={0.5}>
          {userLocation && (
            <MapContainer
              center={position}
              zoom={11}
              style={{ height: "80vh",
              border: "3px solid #0e643e",
              borderRadius: "10px",  
            }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {markers.map((marker) => (
                <Marker
                  key={marker.position.toString()}
                  position={marker.position}
                  icon={markerIcon}
                >
                  <Popup>
                    <Box
                      onClick={() => handleMarkerClick(marker)}
                      sx={{ "&:hover": { cursor: "pointer" } }}
                    >
                      <h3>{marker.name}</h3>
                      <p>{marker.description}</p>
                    </Box>
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
        <Typography align="center" p="5px" sx={{ "&:hover": { cursor: "pointer", color: "blue" } }} onClick={() => setFeed("map")}>
          Use the map markers to find your local healers:
        </Typography>
        {userLocation && (
          <MapContainer
            center={position}
            zoom={9}
            style={{
              border: "3px solid #0e643e",
              borderRadius: "10px",
              minHeight: "410px"
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markers.map((marker) => (
              <Marker
                key={marker.position.toString()}
                position={marker.position}
                icon={markerIcon}
              >
                <Popup>
                  <Box
                    onClick={() => handleMarkerClick(marker)}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <h3>{marker.name}</h3>
                    <p>{marker.description}</p>
                  </Box>
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
