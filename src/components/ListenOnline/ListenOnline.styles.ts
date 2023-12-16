import styled from "styled-components";

export const ListenOnlineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px;
  
  .itemContainer {
    width: 100%; 
  }

  .icon {
    background-color: #F3A8C2;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    margin-right: 5%;

    svg {
      fill: #fff;
    }
  }

  .content {
    text-align: start;
    h4 {
      font-weight: 400;
      line-height: 1;
      font-size: small;
      height: 20px;
    }

    span {
      
      font-size: 14pt;
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    .itemContainer {
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .itemContainer {
      width: 33%; 
    }
  }
`;

export const Styledbuttons = styled.button`

font-family: "Cabin", Sans-serif;
    font-size: 18px;
    color: #ffffff;
    background-color:  #F3A8C2!important;
    border: none;
    width: 200px;
    
    &:hover {
        
        color: #ffffff;
        transform: scale(0.9);
        background-color:  #F3A8C2!important;
        
        
    }
    &.active{
        background-color:  #F3A8C2!important;
        opacity: 0.8;
    }



`;
