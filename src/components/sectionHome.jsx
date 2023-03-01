import { Container, Row, Col } from 'react-bootstrap';
import ImgNewArrival from './newArrival/na20230301.jpg';
import ImgNewArrivalA from './newArrival/na20230301a.jpg';
import ImgNewArrivalB from './newArrival/na20230301b.jpg';
import ImgNewArrivalC from './newArrival/na20230301c.jpg';
import ImgNewArrivalD from './newArrival/na20230301d.jpg';

function sectionHome() {
  return (
    <Container fluid className="sectionHome">
      <Row>
        <Col>
          <Container>
            <Row>
              <Col sm="12" md="6">
                <h2>News & Event<small>More</small></h2>
                <ul>
                  <li>Integer bibendum sem at fermentum porta. Integer viverra neque massa. Duis consectetur vel quam et commodo. Sedsem dictum fermentum eg</li>
                  <li>Amet nulla sit amet sem dictum fermentum eg</li>
                  <li>Et quis est. Donec consequat lorem ut orci tris</li>
                  <li>Tique, vel convallis libero pulvinar. Aliquam lacinia augue sed arcu pharetra, sit amet lacinia enim </li>
                  <li>S pellentesque lobortis.</li>
                  <li>In varius aliquet posuere. Morbi ac ligula et lorem pretium euismod. Etiam dignissim facilisis dignissim. Sed elit nibh, blandit eget sem in, porta ullamcorper urna. Curabitur et aliquam diam.</li>
                </ul>
              </Col>
              <Col sm="12" md="6">
                <h2>Discount<small>More</small></h2>
                <ul>
                  <li>Integer bibendum sem at fermentum porta. Integer viverra neque massa. Duis consectetur vel quam et commodo. Sedsem dictum fermentum eg</li>
                  <li>Amet nulla sit amet sem dictum fermentum eg</li>
                  <li>Et quis est. Donec consequat lorem ut orci tris</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default sectionHome;