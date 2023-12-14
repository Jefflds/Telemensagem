import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { HeaderNav } from "./header.style";


const Header: React.FC = () => {
  const location = useLocation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setActiveLink] = useState<string | null>(null);

  const handleNavItemClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <HeaderNav>
      <Container id="container1 row" className="mx-auto">
        <Navbar expand="lg">
          <Container fluid>
            <Navbar.Toggle
              aria-controls="navbarSupportedContent"
              className="custom-navbar-toggler"
            />

            <Navbar.Collapse
              id="navbarSupportedContent"
              role="navigation"
              className="text-center px-5"
            >
              <Nav className="ml-auto topnav w-100 justify-content-between px-5">
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => handleNavItemClick("/")}
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Início
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/aniversario"
                  onClick={() => handleNavItemClick("/aniversario")}
                  className={
                    location.pathname === "/aniversario" ? "active" : ""
                  }
                >
                  Aniversário
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/romanticas"
                  onClick={() => handleNavItemClick("/romanticas")}
                  className={
                    location.pathname === "/romanticas" ? "active" : ""
                  }
                >
                  Românticas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/evangelicas"
                  onClick={() => handleNavItemClick("/evangelicas")}
                  className={
                    location.pathname === "/evangelicas" ? "active" : ""
                  }
                >
                  Evangélicas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/variadas"
                  onClick={() => handleNavItemClick("/variadas")}
                  className={location.pathname === "/variadas" ? "active" : ""}
                >
                  Variadas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/lgbt"
                  onClick={() => handleNavItemClick("/lgbt")}
                  className={location.pathname === "/lgbt" ? "active" : ""}
                >
                  LGBT
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/datasEspeciais"
                  onClick={() => handleNavItemClick("/datasEspeciais")}
                  className={
                    location.pathname === "/datasEspeciais" ? "active" : ""
                  }
                >
                  Datas Especiais
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/duvidas"
                  onClick={() => handleNavItemClick("/duvidas")}
                  className={location.pathname === "/duvidas" ? "active" : ""}
                >
                  Dúvidas
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/contato"
                  onClick={() => handleNavItemClick("/contato")}
                  className={location.pathname === "/contato" ? "active" : ""}
                >
                  Contato
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </HeaderNav>
  );
};

export default Header;
