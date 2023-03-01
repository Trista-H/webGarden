
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImgCoverStory from './coverStory/cs20230301.jpg';
import ImgCoverStoryA from './coverStory/cs20230301a.jpg';
import ImgCoverStoryB from './coverStory/cs20230301b.jpg';
import ImgCoverStoryC from './coverStory/cs20230301c.jpg';
import ImgCoverStoryD from './coverStory/cs20230301d.jpg';

function coverStory() {
  return (
    <>
      <div className="overlay-img">
        <h2>Orchid</h2>
        <img src={ImgCoverStory} className="d-block w-100" alt="Cover Story" />
      </div>
      <Container fluid className="cf-bg">
        <Row>
          <Col>
            <Container>
              <Row>
                <Col xs="6" md="3">
                  <Card>
                    <Card.Img variant="top" src={ImgCoverStoryA} />
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
                    <Card.Img variant="top" src={ImgCoverStoryB} />
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
                    <Card.Img variant="top" src={ImgCoverStoryC} />
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
                    <Card.Img variant="top" src={ImgCoverStoryD} />
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

export default coverStory;