import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { auth, firestore } from '../firebaseConfig';
import './Alert.css';
// import { useNavigate  } from "react-router-dom";

const Alert = () => {
  const [alerts, setAlerts] = useState([]);
  const [numRows, setNumRows] = useState(5);
  const [loading, setLoading] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });

    const fetchData = async () => {
      const data = await firestore.collection("emergency1").where('verified', '==', '?').limit(100).get();
      console.log(data);
      setAlerts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
    // Cleanup

    return () => {
      unsubscribe();
    };

  }, [refreshData]);

  const showMoreRows = () => {
    setNumRows(numRows + 5);
  };

  const verifyAlert = async (id) => {
    setLoading(true);
    try {
      // const db = firebase.firestore();
      const docRef = firestore.collection("emergency1").doc(id);
      await docRef.update({ verified: 'true' });
      setRefreshData(!refreshData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const rejectAlert = async (id) => {
    setLoading(true);
    try {
      // const db = firebase.firestore();
      const docRef = firestore.collection("emergency1").doc(id);
      await docRef.update({ verified: 'false' });
      setRefreshData(!refreshData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container className="alert-container">
      <h2 className="alert-heading">Review to Publish Alerts</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Emergency Type</th>
            <th>Time</th>
            <th>Location</th>
            <th>Severity</th>
            <th>Verified</th>
            {loggedIn && <th>Verify this alert</th>}
          </tr>
        </thead>
        <tbody>
          {alerts.slice(0, numRows).map((alert) => (
            <tr key={alert.id}>
              <td>{alert.emergencyType}</td>
              <td>{alert.time}</td>
              <td>{alert.location}</td>
              <td>{alert.severity}</td>
              <td
                style={{
                  color: 'red',
                  
                }}
              >
                {alert.verified}
              </td>

              {loggedIn && !loading && (
                <td>
                <Button onClick={() => verifyAlert(alert.id)}>Verify</Button>
                {loading && <span>Verifying...</span>}
                <Button onClick={() => rejectAlert(alert.id)}>Reject</Button>
                {loading && <span>Rejecting...</span>}
                </td>
              )}
              
            
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="load-more-btn-container">
      <Button onClick={showMoreRows} variant="primary" size="lg" >
              Load More
            </Button>
      </div>
      

    </Container>
  );
};

export default Alert;
