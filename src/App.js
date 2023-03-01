import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import ImgLogo from './img/logo.png';
import ImgCart from './img/cart.png';

import CarouselHome from './components/carouselHome.jsx';
import NavbarCommon from './components/navbarCommon.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Container fluid>
          <Row>
            <Col>
              <Container>
                <Row>
                  <Col xs="8" sm="6">
                    <img src={ImgLogo} alt="Logo" />CW H.’s  Shop
                  </Col>
                  <Col xs="4" sm="6">
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
        <CarouselHome />
        <NavbarCommon />
      </main>
      <footer className=''>

      </footer>
    </div>
  );
}

export default App;
