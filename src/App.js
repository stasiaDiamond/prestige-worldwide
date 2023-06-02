import React from "react";
import './index';
import NavTabs from "./components/NavTabs";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './components/pages/dashboard';
import Invoices from './components/pages/invoice';
import Schedule from './components/pages/schedule';
import Welcome from "./components/pages/welcomepage";


function App() {
//   const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
//     <>
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Only Hands</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
            
//             <Nav className="me-auto">
//               <Nav.Link href="#features">Dashboard</Nav.Link>
//               <Nav.Link href="#pricing">Schedule</Nav.Link>
//               <Nav.Link href="#pricing">Invoices</Nav.Link>


//               <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
//                 <NavDropdown.Item href="#action/3.1">Do we need...</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   A dropdown?
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Is this...</NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="#action/3.4">
//                   necessary?
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

//             <Nav>
//               <Nav.Link href="#add-job"> + New Job </Nav.Link>
//               <Nav.Link eventKey={2} href="#memes">
//                 Send Invoice
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//     <categoryCards/>
//   </>
//   );
// }


  <BrowserRouter>
    <NavTabs/>
    <Routes>
    <Route path="/" element={<Welcome/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/invoice" element={<Invoices/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
    </Routes>
  </BrowserRouter>
);
}

export default App;
