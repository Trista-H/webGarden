import { Container, Offcanvas, Nav, Navbar } from 'react-bootstrap';

function navbarCommon() {
  return (
    <>
      {[ 'md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbarCommon">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Herbs</Nav.Link>
                  <Nav.Link href="#action3">News & Event</Nav.Link>
                  <Nav.Link href="#action4">Gardening</Nav.Link>
                  <Nav.Link href="#action5">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbarCommon;