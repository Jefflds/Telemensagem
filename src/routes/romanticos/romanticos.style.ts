import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  text-align: center;
`;

export const Button = styled.a`
  margin: 5px;
  padding: 10px 20px;
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

  &:hover {
    background: #c52299;
  }
`;