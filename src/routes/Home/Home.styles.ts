import styled from "styled-components";

export const HomeContainer = styled.section`
  background: #fff;
  padding: 30px;
  * {
    overflow: hidden;
  }
  button {
    background-color: #b0228a;
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

  .DuvidasEpedidos {
    p {
      font-weight: 800;
    }
    span {
      svg {
        margin-left: 2%;
        margin-bottom: 2px;
        fill: #25d366;
      }
    }
  }

  h2 {
    font-size: 3rem;
    color: #b0228a;
    font-weight: bold;
  }
`;
