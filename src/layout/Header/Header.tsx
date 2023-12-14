
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Container id="container1">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="mr-auto">
            {/* <img
              src={}
              alt="Logo"
              className="mt-2"
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            className="custom-navbar-toggler"
          />
          <Navbar.Collapse id="navbarSupportedContent" role="navigation">
            <Nav className="ml-auto topnav w-100 justify-content-between">
              <Nav.Link as={Link} to="/">
                Início
              </Nav.Link>
              <Nav.Link as={Link} to="/aniversario">
                Aniversário
              </Nav.Link>
              <Nav.Link as={Link} to="/romanticas">
              Românticas
              </Nav.Link>
              
              <Nav.Link as={Link} to="/evangelicas">
              Evangélicas
              </Nav.Link>
              <Nav.Link as={Link} to="/variadas">
              Variadas
              </Nav.Link>
              <Nav.Link as={Link} to="/lgbt">
              LGBT
              </Nav.Link>
              <Nav.Link as={Link} to="/datasEspeciais">
              Datas Especiais
              </Nav.Link>
              <Nav.Link as={Link} to="/duvidas">
              Dúvidas
              </Nav.Link>
              <Nav.Link as={Link} to="/contato">
              Contato
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
