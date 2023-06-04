import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
    return (
      <div className="row justify-content-center" id="cards">
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/child-care-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Child Care</h2>
                </Card.Title>
            <Card.Text>
              examples: Babysitting, Taking kids to park, Feeding....etc
            </Card.Text>
            <Button variant="success" className="butt1">Create New</Button><hr />
            <Button variant="primary" className="butt2">View All</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/cleaning-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Cleaning</h2>
                </Card.Title>
            <Card.Text>
              examples: houses, cars, garages, taking things to the dump for people....etc
            </Card.Text>
            <Button variant="success">Create New</Button><hr />
            <Button variant="primary">View All</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/cooking-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Cooking</h2>
                </Card.Title>
            <Card.Text>
              examples: meal prepping, grocery shopping....etc
            </Card.Text>
            <Button variant="success">Create New</Button><hr />
            <Button variant="primary">View All</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/dog-walking-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Dog Walking</h2>
                </Card.Title>
            <Card.Text>
              examples: taking dogs on walks, hikes, picking up dog poop....etc
            </Card.Text>
            <Button variant="success">Create New</Button><hr />
            <Button variant="primary">View All</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/yard-work-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Yard Work</h2>
                </Card.Title>
            <Card.Text>
              examples: mowing lawns, pulling weeds, watering plants....etc
            </Card.Text>
            <Button variant="success">Create New</Button><hr />
            <Button variant="primary">View All</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '22rem' }}>
          <Card.Img variant="top" src="images/handy-work-icon.png" />
          <Card.Body>
            <Card.Title>
                <h2>Hand Jobs</h2>
                </Card.Title>
            <Card.Text>
              examples: building something, big or small..size doesnt matter....etc
            </Card.Text>
            <Button variant="success">Create New</Button><hr />
            <Button variant="primary">View All</Button>
          </Card.Body>
        </Card>
  </div>
    );
}


export default CardExample;


