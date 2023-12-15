import styled from "styled-components";

export const FooterStyled = styled.div`
  background: #530000;
`;

export const FooterContainer = styled.div`
  background-color: #530000;
  * {
    overflow: hidden;
  }
`;

export const FooterTop = styled.div`
  padding: 50px 0 0 0;
`;

export const FooterBottom = styled.div`
  background-color: #D00100;
  color: #ffffff;
  padding: 10px 0;
`;

export const FooterColumn = styled.div`
  margin-bottom: -20px;

  h3 {
    font-size: 24px;
    text-decoration: underline;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    font-size: 16px;
    color: #fff;
    text-transform: capitalize;
  }

  span {
    font-size: 16px;
    color: #212529;
  }

  strong {
    font-size: 16px;
    color: #fff;
  }
`;


export const FooterSocial = styled.ul`
  list-style: none;
`;

export const CopyrightText = styled.div`
  padding: 0 !important;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #ffffff;
  }
`;
