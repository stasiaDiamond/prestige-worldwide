import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function DogWalking() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./images/dog-walking.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default DogWalking;