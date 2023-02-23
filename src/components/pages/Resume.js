import React from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

// At the start of my Resume I have shown all of my different proficiencies for potential clients to see
// I have then mapped these out below in the listgroup.map area to set them in a list
// Additionally, i have added my resume in a href inside a button which will allow my future clients to download my resume

export default function Resume() {
  const proficiencies = [
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "Handlebars",
    "Restful APIs",
    "React",
  ];

  return (
    <Container style={{ width: 400 }}>
      <h2 style={{ background: 'white', width: 350, textAlign: 'center', borderRadius: 50 }} >My Proficiencies:</h2>
      <ListGroup>
        {proficiencies.map((proficiency, index) => (
          <ListGroup.Item
            style={{ textAlign: "center", fontSize: 30 }}
            key={index}
          >
            {proficiency}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
        href="https://drive.google.com/file/d/1Y5PXNTqonmtDEBvysj8gGIDvn6oTQEug/view?usp=share_link"
        download
      >
        Resume Download Button
      </Button>
    </Container>
  );
}
