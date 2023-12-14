import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <h3>Bem vindo ao nosso site</h3>
            <span className="sep-container">
              <span className="line">
                <span></span>
              </span>
            </span>
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default Home;

import styled from "styled-components";

const HomeContainer = styled.section`
  background: #fff;

  h3 {
    font-size: 24px;
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 25px;
    display: table;
    white-space: pre !important;
    width: 100% !important;
  }

  .sep-container {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;

    &::before {
      background: none repeat scroll 0 0 #ffffff;
      border: 2px solid #c888b7;
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
      background: #c888b7;
      display: block;
      width: 100%;
      margin-top: 4px;
    }
  }
`;
