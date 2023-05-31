import React from "react";
import './App.css';

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CategoryCards from "./components/CategoryCards.jsx";
// import AsideMenu from "./components/AsideMenu";

function App() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Only Hands</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
              <Nav.Link href="#features">Dashboard</Nav.Link>
              <Nav.Link href="#pricing">Schedule</Nav.Link>

              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Do we need...</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  A dropdown?
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Is this...</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  necessary?
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="#add-job"> + New Job </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Send Invoice
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    {/* <AsideMenu/> */}
    <CategoryCards/>
  </>
  );
}

export default App;
