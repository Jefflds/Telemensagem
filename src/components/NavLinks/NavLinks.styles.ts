import { Nav } from "react-bootstrap";
import styled from 'styled-components';


export const StyledNavLink = styled(Nav.Link)`
  color: #410596;
  text-decoration: none;
  transition: .5s all;

  &:hover {
    color: #ffff;
  }
`;

export const StyledNavLinksContainer = styled.div`
  margin-left: 100px;

  @media (max-width: 991px) {
    margin-left: 0;
    flex-direction: column;

    .nav-item {
      text-align: center;
      border-bottom: 1px solid ${(props) => props.theme.colors.text};

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.colors.span} ;
      }
    }
  }
`;