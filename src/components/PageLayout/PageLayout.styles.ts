import styled from "styled-components";
import { rgba } from "polished";
export const Content = styled.div`
  padding: 60px 0;
`;


export const CenteredParagraph = styled.p`
  text-align: center;
`;

export const StrongSpan = styled.span`
  font-size: 16pt;
  font-weight: bold;
  color: #000; 
`;

export const ColoredSpan = styled.span`
    color: #000; 
`;

export const Button = styled.button`
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


 

  &:hover {
    background: #F3A8C2;
  }
`;
