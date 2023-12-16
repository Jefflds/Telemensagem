import styled from "styled-components";

export const FooterStyled = styled.div`
  background: #530000;
`;

export const FooterContainer = styled.div`
  background-color: #EEEEEE;
  * {
    overflow: hidden;
  }
`;

export const FooterTop = styled.div`
  padding: 50px 0 0 0;
`;

export const FooterBottom = styled.div`
  background-color: #F3A8C2;
  color: #000;
  padding: 10px 0;
`;

export const FooterColumn = styled.div`
  margin-bottom: -20px;

  h3 {
    font-size: 24px;
    text-decoration: underline;
    margin-bottom: 20px;
    color: #000;
  }

  p {
    font-size: 16px;
    color: #000;
    text-transform: capitalize;
  }

  span {
    font-size: 16px;
    color: #000;
  }

  strong {
    font-size: 16px;
    color: #000;
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
