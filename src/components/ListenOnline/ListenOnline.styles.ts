import styled from "styled-components";

export const ListenOnlineContainer = styled.div`
  flex-wrap: wrap;
  gap: 0px;
  .itemContainer {
    width: 33%;
  }

  .icon {
    background-color: #b0228a;
    border-radius: 50%;
    width: 50px;
    margin-right: 5%;

    svg {
      fill: #c888b7;
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
        text-decoration: underline;
        font-size: 14pt;
        
    }
  }
`;
