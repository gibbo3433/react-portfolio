import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

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
            {" "}
            Jordan Gibbs{" "}
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
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
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
