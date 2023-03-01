import { Container, Row, Col } from 'react-bootstrap';

import ImgLogo from './img/logo.png';
import ImgCart from './img/cart.png';

import CarouselHome from './components/carouselHome.jsx';
import NavbarCommon from './components/navbarCommon.jsx';
import CoverStory from './components/coverStory.jsx';
import NewArrival from './components/newArrival.jsx';
import SectionHome from './components/sectionHome.jsx';
import FooterContent from './components/footerContent.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Container fluid className="cf-bg">
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col xs="8">
                    <h1><img src={ImgLogo} alt="Logo" />TristaH’s Shop</h1>
                  </Col>
                  <Col xs="4">
                    <span className='cart-item'>
                      <img src={ImgCart} alt="Cart" />
                      <span className='cart-item'>
                        0
                      </span>
                    </span>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </header>
      <main className=''>
        <NavbarCommon />
        <CarouselHome />
        <CoverStory />
        <NewArrival />
        <SectionHome />
      </main>
      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}

export default App;
