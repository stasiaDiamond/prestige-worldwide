import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from "react-bootstrap";
import CategoryCards from "./components/CategoryCards.jsx";
import SendEmailTesting from "./components/SendEmailTesting";

function App() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Router>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Only Hands</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/schedule">Schedule</Nav.Link>
              <Nav.Link as={Link} to="/invoices">Invoices</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/add-job"> + New Job </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/email-testing"> Send Email Testing </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route path="/email-testing" element={<EmailTestingPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>

    </Router>
  );
}

function DashboardPage() {
  // Component for the Dashboard page
  return <CategoryCards />;
}

function SchedulePage() {
  // Component for the Schedule page
  return <h1>Enter schedule component here</h1>;
}

function InvoicesPage() {
  // Component for the Invoices page
  return <h1>Enter invoices component here</h1>;
}

function AddJobPage() {
  // Component for the Add Job page
  return <h1>Enter Add a job form here</h1>;
}

function EmailTestingPage() {
  // Component for the Email Testing page
  return <SendEmailTesting />;
}

function HomePage() {
  // Default component or home page
  return <CategoryCards />;
}

export default App
