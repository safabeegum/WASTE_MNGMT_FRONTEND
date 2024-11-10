import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude, longitude }) => {
    useEffect(() => {
        const map = L.map('map').setView([latitude, longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Assigned Pickup Location')
            .openPopup();

        return () => {
            map.remove();
        };
    }, [latitude, longitude]);

    return <div id="map" style={{ height: '400px' }} />;
};

export default MapComponent;
