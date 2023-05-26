import React, { useRef, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { firestore } from '../firebaseConfig';
import firebase from 'firebase/compat/app';

const CreateForm = () => {

  const emergencyTypeRef = useRef();
  const timeRef = useRef();
  const locationRef = useRef();
  const severityRef = useRef();
//   const positionRef = useRef();
  const [position, setLocation] = useState({});
  const [inputLocationValue, setInputLocationValue] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setInputLocationValue(
          `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
        );
      });
  
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const emergencyData = {
      emergencyType: emergencyTypeRef.current.value,
      time: timeRef.current.value,
      location: locationRef.current.value,
      severity: severityRef.current.value,
      userLocation: new firebase.firestore.GeoPoint(position.latitude, position.longitude),
      verified: '?'
    };
  
    try {
      await firestore.collection('emergency1').add(emergencyData);
      alert('Emergency alert created successfully!');
    } catch (error) {
      console.error('Error creating emergency alert:', error);
    }
  };
  
  

  return (
    <Container>
      <h2>Create Emergency Alert</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="emergencyType">
          <Form.Label>Emergency Type</Form.Label>
          <Form.Control as="select" ref={emergencyTypeRef}>
            <option>Choose...</option>
            <option>Fire</option>
            <option>Flood</option>
            <option>Earthquake</option>
            <option>Cyclone</option>
            <option>Hurricane</option>
            <option>Unknown</option>
            {/* Add more options as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control type="datetime-local" ref={timeRef}/>
        </Form.Group>

        <Form.Group controlId="location">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter location" ref={locationRef}/>
        </Form.Group>

        <Form.Group controlId="severity">
          <Form.Label>Severity</Form.Label>
          <Form.Control type="number" min="1" max="5" placeholder="Enter severity (1-5)" ref={severityRef}/>
        </Form.Group>

        <Form.Group controlId="userLocation" >
            <Form.Label>userLocation</Form.Label>
            <Form.Control
            type="text"
            placeholder="userLocation"
            ref={position}
            value={inputLocationValue}
            required
            readOnly
            onClick={getLocation}
            />
        </Form.Group> 

        <Button variant="primary" type="submit">
          Submit
        </Button>
        
  
      </Form>
    </Container>
  );
};

export default CreateForm;
