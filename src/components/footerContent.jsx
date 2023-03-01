import { Container, Row, Col } from 'react-bootstrap';

function footerContent() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Container>
          <Row>
            <Col>
              © Trista H.
              About
              Terms
              FAQ
            </Col>
          </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default footerContent;