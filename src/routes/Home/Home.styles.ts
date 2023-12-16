import styled from "styled-components";

export const HomeContainer = styled.section`
  background: #fff;
  padding: 30px;
  * {
    overflow: hidden;
  }
  button {
    background-color: #F3A8C2;
    border: 0;
    border-radius: 3.5em;
    color: #fff !important;
    cursor: pointer;
    display: inline-block;
    height: 2.5em;
    line-height: 2.5em;
    outline: 0;
    margin-bottom: 6px;
    padding: 0 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    -ms-appearance: none;
    appearance: none;
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  strong{
    color: #F3A8C2;
  }

  p{
    font-weight: 600;
    color: #000;
    font-size:13pt;
  }

  .DuvidasEpedidos {
   
    span {
      svg {
        margin-left: 1%;
        margin-bottom: 2px;
        fill: #25d366;
        
      }
    }
  }

  h2 {
    font-size: 3rem;
    color: #F3A8C2 ;
    font-weight: bold;
  }
`;


export const Text = styled.h1`
      font-weight: 700;
      font-size: 25px;
      color: #F3A8C2;
`;

export const Text2 = styled.p`
font-weight: 500;
color: #fff;


`;
