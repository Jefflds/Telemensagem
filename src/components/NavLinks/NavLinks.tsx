// Arquivo: NavLinks.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavLink, StyledNavLinksContainer } from './NavLinks.styles'; // Importe os estilos e NavLink
import { Nav } from 'react-bootstrap';

const NavLinks: React.FC = () => {
  return (
    <StyledNavLinksContainer className="d-flex align-items-center gap-4">
      <Nav.Item>
        <StyledNavLink as={Link} to="/">
          Início
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/aniversarios">
          Aniversários
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/romanticas">
          Românticas
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/evangelicas">
          Evangélicas
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/lgbt">
          LGBT
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/datasEspeciais">
          Datas Especiais
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/duvidas">
          Dúvidas
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/project">
          O Projeto
        </StyledNavLink>
      </Nav.Item>

      <Nav.Item>
        <StyledNavLink as={Link} to="/contato">
          Contato
        </StyledNavLink>
      </Nav.Item>
    </StyledNavLinksContainer>
  );
};

export default NavLinks;
