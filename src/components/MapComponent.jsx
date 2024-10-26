import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        L.marker([51.5, -0.09]).addTo(map)
            .bindPopup('Hello, OpenStreetMap!')
            .openPopup();

        // Cleanup function to remove map when component unmounts
        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" style={{ height: '400px' }} />;
};

export default MapComponent;
