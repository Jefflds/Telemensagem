import styled from "styled-components";

export const HeaderNav = styled.nav`
   background: #eeeeee;
  display: flex;
  width: 100%;
  transition: background 0.3s;
  font-weight: 600;
 

  &.fixed {
    position: fixed;
    top: 0;
    z-index: 1000;
  }
  
 
  .nav-link {
    color: #000; 
    height: 100%;
    transition: .5s all;


    &:hover {
      color: #000; 
      background: #F3A8C2 ;
      border-radius: 10px;
      border-bottom: 5px solid #F3A8C2 ;
      
    }

    &.active {
      color: #000; 
      background:  #F3A8C2;
      border-radius: 10px;
      border-bottom: 5px solid #F4E7F5;
      
    }
  }
  
`;



