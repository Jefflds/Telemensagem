import styled from "styled-components";

export const HeaderNav = styled.nav`
  background: #F4E7F5;
  display: flex;
  .nav-link {
    color: #B0228A; 
    height: 100%;
    transition: .5s all;


    &:hover {
      color: #fff; 
      background: #B0228A;
      border-radius: 10px;
      border-bottom: 5px solid #E441B9;
      
    }

    &.active {
      background: #B0228A;
      color: #fff;
      border-radius: 10px;
      border-bottom: 5px solid #E441B9;
      
    }
  }
  
`;



