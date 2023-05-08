import React, { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import MarkerClusterGroup from '@changey/react-leaflet-markercluster';
import axios from "axios";
import { Annonce } from "../models/annonce";
import Header from "../components/Header";

const MapPage: React.FC = () => {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/annonces");
      setAnnonces(result.data);
    }
    fetchData();
  }, []);

    return (
        <div className="overflow-y-hidden">
            <Header />
            <div className="MapPage h-screen">
                {/* center on the world with max dezoom */}
                <MapContainer center={[20, 0]} zoom={3} scrollWheelZoom={true} className="h-full">
                    <TileLayer
                        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MarkerClusterGroup>
                    {annonces.map((annonce) => (
                    <Marker key={annonce._id} position={[annonce.latitude, annonce.longitude]}>
                        <Popup>
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{annonce.title}</h3>
                                <p className="text-gray-700 mb-2">{annonce.location}</p>
                                <p className="text-gray-700 mb-2">{annonce.max_customer} guests</p>
                                <p className="text-gray-700 mb-2">
                                    {annonce.beds_nb} beds - {annonce.rooms_nb} rooms
                                </p>
                            </div>
                        </Popup>
                    </Marker>
                    ))}
                    </MarkerClusterGroup>
                </MapContainer>
            </div>
        </div>
      );
}

export default MapPage;
