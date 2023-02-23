import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// this form holds all of my different inputs if someone would like to get in touch with me
// I have personally styled all of the form to make it more appealing
// Adding required to form control makes it so that it sends the user a message telling them that they need to include something in the field before submitting
export default function Contact() {
  return (
    <Form
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Form.Group
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: 1000,
        }}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Label style={{ background: 'white', width: 150, textAlign: 'center', borderRadius: 50 }} >Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: 1000,
        }}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Label style={{ background: 'white', width: 150, textAlign: 'center', borderRadius: 50 }} >Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Form.Group
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: 1000,
        }}
        className="mb-3"
        controlId="formBasicMessage"
      >
        <Form.Label style={{ background: 'white', width: 150, textAlign: 'center', borderRadius: 50 }} >Messsage</Form.Label>
        <Form.Control required type="message" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
