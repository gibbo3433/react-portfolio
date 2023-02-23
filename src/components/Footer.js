import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// This is my footer which generates on all pages of my portfoiio
// Each nav.link inludes a src which shows an image (e.g github) which then holds the href to my own github page. I have done this for my twitter and facebook too

export default function Footer() {
  return (
    <>
      <Navbar bg="success" variant="dark" className="fixed-bottom">
        <Container className="text-center">
          <Nav className="mx-auto" style={{ marginBottom: "-7px" }}>
            <Nav.Link href="https://github.com/gibbo3433">
              {" "}
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github icon"
                style={{ width: "100px", height: "100px" }}
              />{" "}
            </Nav.Link>
            <Nav.Link href="https://twitter.com/jog34331">
              {" "}
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
                alt="twitter icon"
                style={{ width: "100px", height: "100px" }}
              />{" "}
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/jog3433/">
              {" "}
              <img
                className=""
                src="https://cdn-icons-png.flaticon.com/512/44/44646.png"
                alt="facebook icon"
                style={{ width: "100px", height: "100px" }}
              />{" "}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
