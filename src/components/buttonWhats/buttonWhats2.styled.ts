
import styled from "styled-components";

export const StyledButtonWhatsapp = styled.button`
    font-family: "Cabin", Sans-serif;
    font-size: 18px;
    line-height: 1.2em;
    fill: #ffffff;
    color: #ffffff;
    background-color: #61ce70!important;
    border-radius: 30px 30px 30px 30px;
    padding: 15px 60px 15px 60px;
    border: none;
    
    &:hover {
        
        color: #ffffff;
        
        transform: scale(0.9);
        background-color: #23a455!important;
        
        
    }
    &.active{
        background-color: #23a455!important;
        opacity: 0.8;

    }
`;