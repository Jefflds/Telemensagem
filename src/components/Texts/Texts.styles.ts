import styled from "styled-components";

export const TitleWithLineContainer = styled.div`
  h3 {
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 25px;
    display: table;
    white-space: pre !important;
    width: 100% !important;
    color: #D00100;
 


    .title {
      margin-right: 20px;
    }
  }

  .sep-container {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;

    &::before {
      background: none repeat scroll 0 0 #ffffff;
      border: 2px solid #D00100;
      border-radius: 30px;
      content: "";
      display: block;
      height: 10px;
      position: absolute;
      width: 10px;
    }

    .line {
      margin-left: 9px;
      height: 1px !important;
      background: #D00100;
      display: block;
      width: 100%;
      margin-top: 4px;
    }
  }
`;
