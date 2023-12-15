import styled from "styled-components";

export const FooterStyled = styled.div`
  background: #ffebfb;
`;

export const FooterContainer = styled.div`
  background-color: #ffebfb;
  * {
    overflow: hidden;
   }
`;

export const FooterTop = styled.div`
  padding: 50px 0 0 0;
`;

export const FooterBottom = styled.div`
  background-color: #c888b7;
  color: #ffffff;
  padding: 10px 0;
`;

export const FooterColumn = styled.div`
  margin-bottom: -20px;

  h3 {
    font-size: 24px;
    text-decoration: underline;
    margin-bottom: 20px;
    color: #a64b79;
  }

  p {
    font-size: 16px;
    color: #b0228a;
  }

  span {
    font-size: 16px;
    color: #212529;
  }

  strong {
    font-size: 16px;
    color: #993300;
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
    color: #b0228a;
  }
`;
