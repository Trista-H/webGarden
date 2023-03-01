import { Container, Row, Col, Card } from 'react-bootstrap';
import ImgNewArrival from './newArrival/na20230301.jpg';
import ImgNewArrivalA from './newArrival/na20230301a.jpg';
import ImgNewArrivalB from './newArrival/na20230301b.jpg';
import ImgNewArrivalC from './newArrival/na20230301c.jpg';
import ImgNewArrivalD from './newArrival/na20230301d.jpg';

function newArrival() {
  return (
    <>
      <div className="overlay-img">
        <h2>New arrival</h2>
        <img src={ImgNewArrival} className="d-block w-100" alt="New Arrival" />
      </div>
      <Container fluid className="cf-bg">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col xs="6" md="3">
                  <Card>
                    <Card.Img variant="top" src={ImgNewArrivalA} />
                    <Card.Body>
                      <Card.Title>Integer bibendum sem at fermentum</Card.Title>
                      <Card.Text>
                        NTD 150
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="6" md="3">
                  <Card>
                    <Card.Img variant="top" src={ImgNewArrivalB} />
                    <Card.Body>
                      <Card.Title>Integer bibendum sem at fermentum</Card.Title>
                      <Card.Text>
                        NTD 150
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="6" md="3">
                  <Card>
                    <Card.Img variant="top" src={ImgNewArrivalC} />
                    <Card.Body>
                      <Card.Title>Integer bibendum sem at fermentum</Card.Title>
                      <Card.Text>
                        NTD 150
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs="6" md="3">
                  <Card>
                    <Card.Img variant="top" src={ImgNewArrivalD} />
                    <Card.Body>
                      <Card.Title>Integer bibendum sem at fermentum</Card.Title>
                      <Card.Text>
                        NTD 150
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default newArrival;