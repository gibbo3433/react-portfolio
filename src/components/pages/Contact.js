import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
  return (
    <Form style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',}} >

      <Form.Group style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 1000}} className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 1000 }} className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>

      <Form.Group style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: 1000 }} className="mb-3" controlId="formBasicMessage">
        <Form.Label>Messsage</Form.Label>
        <Form.Control type="message" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  }