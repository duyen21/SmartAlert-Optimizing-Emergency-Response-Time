import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import { firestore } from '../firebaseConfig';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import L from 'leaflet';

const getFillColor = (density) => {
  // Define color based on density
  // Replace with your own logic if needed
};

const style = (feature) => {
  return {
    fillColor: getFillColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  };
};

const highlightFeature = (e) => {
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7
  });
};

const resetHighlight = (e) => {
  const layer = e.target;

  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7
  });
};

const Map = () => {
  const [emergencyData, setEmergencyData] = useState([]);
  const [statesData, setStatesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection('emergency1').where('verified', '==', 'true').get();
      setEmergencyData(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
	fetch('/us-states.js')
      .then((response) => response.json())
      .then((data) => setStatesData(data));
  }, []);

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });
  
  return (
    <div className="map-wrapper">
      <MapContainer
        center={[38, -97]} // Center of the USA
        zoom={5}
        style={{ height: '1000px', width: '1800px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
		{emergencyData.map((alert) => (
          <Marker position={[alert.userLocation.latitude, alert.userLocation.longitude]} key={alert.id}>
            <Popup>
              <strong>Emergency Type:</strong> {alert.emergencyType} <br />
              <strong>Time:</strong> {alert.time} <br />
              <strong>Location:</strong> {alert.location} <br />
              <strong>Severity:</strong> {alert.severity} <br />
            </Popup>
          </Marker>
        ))}
        {statesData && (
          <GeoJSON
            data={statesData}
            style={style}
            onEachFeature={(feature, layer) => {
              layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
              });
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
