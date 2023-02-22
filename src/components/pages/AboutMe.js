import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


export default function AboutMe() {
  return (
    <>
    <Card style={{ display: 'flex', flexDirection: 'row', margin: '5rem',}}>

    <Card.Img variant="top" src="https://pbs.twimg.com/media/EzBLojZXAAIeey4?format=jpg&name=900x900" alt="monkey" style={{ width: '400px', height: '500px', padding: 12}}  />
     
    <Accordion>
        <Accordion.Item eventKey="0" style={{ backgroundColor: 'lightblue' }}>
        <Accordion.Header style={{ backgroundColor: 'lightblue' }} >About me</Accordion.Header>
        <Accordion.Body>
          Hi, my names Jordan, but you can call me Gibbo. I'm currently a student learning how to code and this is my first shot at a react portfolio!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{ backgroundColor: 'lightblue' }} >
        <Accordion.Header>Coding Journey</Accordion.Header>
        <Accordion.Body>
          So far, I have been coding for just over six months now and have nearly completed my course here at Birmingham University. I have learnt so many news and exciting tools to help me on my journey of becoming a developer!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{ backgroundColor: 'lightblue' }} >
        <Accordion.Header>Hobbies and Interests</Accordion.Header>
        <Accordion.Body>
          I have a wide selection of hobbies. First, I play lots of sports in my spare time such as tennis, football and mixed netball. Other interests include playing competitive Magic: The Gathering across the UK and playing video games such as The Witcher and Halo.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Card>
    </>
  );
}

