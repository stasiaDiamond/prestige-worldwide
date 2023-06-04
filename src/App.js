import React from "react";
import './index';
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/pages/dashboard';
import Invoices from './components/pages/invoice';
import Schedule from './components/pages/schedule';
import Welcome from "./components/pages/welcomepage";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CategoryCards from "./components/CategoryCards.jsx";
import ContactForm from "./components/SendEmailTesting";
// import AsideMenu from "./components/AsideMenu";

function App() {
//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Only Hands</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
            <Nav className="me-auto">
              <Nav.Link href="#dashboard">Dashboard</Nav.Link>
              <Nav.Link href="#schedule">Schedule</Nav.Link>
              <Nav.Link href="#invoices">Invoices</Nav.Link>


            </Nav>

            <Nav>
              <Nav.Link href="#add-job"> + New Job </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <ContactForm/>
    <CategoryCards/>
  </>
  );
}

export default App;
