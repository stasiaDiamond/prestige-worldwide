import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
        <img
              alt="logo"
              src="./images/logo-transparent.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/invoices">Invoices</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/childcare">Child Care</NavDropdown.Item>
              <NavDropdown.Item href="/cleaning">Cleaning</NavDropdown.Item>
              <NavDropdown.Item href="/cooking">Cooking</NavDropdown.Item>
              <NavDropdown.Item href="/dogwalking">Dog Walking</NavDropdown.Item>
              <NavDropdown.Item href="/handjobs">Hand Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/yardwork">Yard Work</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;