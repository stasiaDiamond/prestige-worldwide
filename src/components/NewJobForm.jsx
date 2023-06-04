import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function NewJobForm() {
    const [workDesc, setWorkDesc] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [jobType, setJobType] = useState('');
    const [jobDate, setJobDate] = useState('');
    const [jobTime, setJobTime] = useState('');
    const [jobCost, setJobCost] = useState('');
    const [jobNotes, setJobNotes] = useState('');

    const saveNewJob = () => {
        // Implement the logic to save the new job using the form state
        console.log('New job saved!');
        console.log('Work Description:', workDesc);
        console.log('Client Name:', clientName);
        console.log('Client Phone:', clientPhone);
        console.log('Client Email:', clientEmail);
        console.log('Client Address:', clientAddress);
        console.log('Job Type:', jobType);
        console.log('Job Date:', jobDate);
        console.log('Job Time:', jobTime);
        console.log('Job Cost:', jobCost);
        console.log('Job Notes:', jobNotes);
    };
    
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
    <Form>
        <Form.Group controlId="formWorkDescription">
        <Form.Label>Work Description</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setWorkDesc(e.target.value)}
            placeholder="Enter work description title" />
        <Form.Text className="text-muted">
            All info except Notes will appear on the invoice.
        </Form.Text>
        </Form.Group>

        <Form.Group controlId="formClientName">
        <Form.Label>Client Name</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Enter client's first and last name" />
        </Form.Group>

        <Form.Group controlId="formClientPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="Enter client phone number" />
        </Form.Group>

        <Form.Group controlId="formClientEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setClientEmail(e.target.value)}
            placeholder="Enter client's email" />
        </Form.Group>

        <Form.Group controlId="formClientAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setClientAddress(e.target.value)}
            placeholder="Cost of service" />
        </Form.Group>

        <Form.Group controlId="formJobType">
        <Form.Label>JOB TYPE DROPDOWN MENU!!!!!!</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setJobType(e.target.value)}
            placeholder="Choose job type" />
        </Form.Group>

        <Form.Group controlId="formDate">
        <Form.Label>IS THERE A FANCY DATE TYPE!?!?</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setJobDate(e.target.value)}
            placeholder="Enter date of job" />
        </Form.Group>

        <Form.Group controlId="formJobTime">
        <Form.Label>HH MM AM/PM FANCY!?!?</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setJobTime(e.target.value)}
            placeholder="" />
        </Form.Group>

        <Form.Group controlId="formJobCost">
        <Form.Label>Job Cost</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setJobCost(e.target.value)}
            placeholder="Cost of service" />
        </Form.Group>

        <Form.Group controlId="formJobNotes">
        <Form.Label>Notes</Form.Label>
        <Form.Control 
            type="text" 
            onChange={(e) => setJobNotes(e.target.value)}
            placeholder="Notes will not be shared with client." />
        </Form.Group>

        <Button 
            onClick={() => saveNewJob()} 
            variant="primary" type="submit"
        >
            Submit
        </Button>
    </Form>
    </Col>
      </Row>
    </Container>
    );
}

// function App() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/contact" element={<NewJobForm />} />
//           {/* Other routes */}
//         </Routes>
//       </Router>
//     );
//   }

export default NewJobForm;
