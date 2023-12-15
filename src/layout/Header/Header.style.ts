import styled from "styled-components";
import { rgba, shade } from "polished";
export const HeaderNav = styled.nav`
  background: ${shade(0.6, "#D00100" )} ;
  
  display: flex;
  .nav-link {
    color: #Ffff; 
    height: 100%;
    transition: .5s all;


    &:hover {
      color: #fff; 
      background: ${rgba("#D00100", 0.5)} ;
      border-radius: 10px;
      border-bottom: 5px solid #D00100 ;
      
    }

    &.active {
      color: #fff; 
      background: ${rgba("#D00100", 0.5)} ;
      border-radius: 10px;
      border-bottom: 5px solid ${rgba("#D00100", 0.5)};
      
    }
  }
  
`;



