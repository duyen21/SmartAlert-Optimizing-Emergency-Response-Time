import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { auth } from '../firebaseConfig';
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Fuke from '../pages/Fuke'; 

function NavigateBar() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const handleLogout = async () => {
    await auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
        setEmail(user.email);
      } else {
        setLoggedIn(false);
        setEmail('');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#features">Smart Alert</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/home">Home</Nav.Link>
            
            

            <Nav.Link href="/map">Map</Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            <NavDropdown title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Whoarewe">Who Are We?</NavDropdown.Item>
              <NavDropdown.Item href="/ProjectSummary">
                Project Summary
              </NavDropdown.Item>
              <NavDropdown.Item href="/Methods">How to Use the Application</NavDropdown.Item>

            </NavDropdown>

            {loggedIn && <Nav.Link href="/alert">Review Alerts</Nav.Link>}
            {loggedIn && <Nav.Link href="/createform">Add Alert</Nav.Link>}
          </Nav>
          <Nav>
            {loggedIn ? (
              <>
                <Navbar.Text className="me-3">Welcome, {email}</Navbar.Text>
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link href="login">Login</Nav.Link>
                <Nav.Link href="register">Create Account</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavigateBar;
