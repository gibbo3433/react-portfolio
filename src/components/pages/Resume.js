import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function Resume() {

  const proficiencies = [
    'HTML',
    'CSS',
    'Node.js',
    'SQL',
    'Handlebars',
    'Restful APIs',
    'React',
  ];

  return (
    <Container>
          <h2>My Proficiencies:</h2>
          <ListGroup>
            {proficiencies.map((proficiency, index) => (
              <ListGroup.Item style={{ textAlign: 'center', fontSize: 30 }} key={index}>{proficiency}</ListGroup.Item>
            ))}
          </ListGroup>
          <Button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10}} href="https://drive.google.com/file/d/1Y5PXNTqonmtDEBvysj8gGIDvn6oTQEug/view?usp=share_link" download>
            Resume Download Button
          </Button>
    </Container>
  );
}