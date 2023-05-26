import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { auth } from '../firebaseConfig';

const Login = () => {
    const [error, setError] = useState('');
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      try {
        await auth.signInWithEmailAndPassword(email, password);
        setError('Success!');
        alert(`Logged in as ${email}`);
      } catch (error) {
        setError(error.message);
      }
    };
  
    return (
      <Container>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
  
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  };
  
  export default Login;
  