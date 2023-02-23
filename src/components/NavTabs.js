import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// This is where my Nav bar is created
// Each Navbar.Brand has its own unique href for each of the pages in my directory
// Onclick starts the handlePageChange fucnction which makes it so each Navbar.Brand can move between each other
// this className makes suret that when we arrive on the chosen page, if correct, makes the links between each page continue to work

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container style={{ fontSize: "2.2rem" }}>
          <Navbar.Brand
            style={{ fontSize: "4rem" }}
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Jordan Gibbs
          </Navbar.Brand>
          <Nav className="m-3">
            <Nav.Link
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;
