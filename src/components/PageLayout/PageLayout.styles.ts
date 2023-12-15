import styled from "styled-components";

export const Content = styled.div`
  padding: 60px 0;
`;


export const CenteredParagraph = styled.p`
  text-align: center;
`;

export const StrongSpan = styled.span`
  font-size: 14pt;
  font-weight: bold;
  color: #800080;
`;

export const ColoredSpan = styled.span`
  color: #e4d3e8;
`;

export const Button = styled.button`
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
