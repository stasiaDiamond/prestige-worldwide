import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';

function categoryCards() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/child-care-icon.png" />
                        </Card>
                    </Col>

                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/cleaning-icon.png" />
                        </Card>
                        </Col>
                </Row>
                
                <Row>
                <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/cooking-icon.png" />
                        </Card>
                        </Col>

                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/dog-walking-icon.png" />
                        </Card>
                        </Col>
                </Row>

                <Row>
                <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/yard-work-icon.png" />
                        </Card>
                        </Col>

                    <Col xs={4}>
                        <Card className="shadow-lg">
                            <Card.Img variant="top" src="images/handy-work-icon.png" />
                        </Card>
                        </Col>
                </Row>
            </Container>
        </>
    );
}

export default categoryCards;