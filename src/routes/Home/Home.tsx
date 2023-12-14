import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TitleWithLine } from "../../components/Texts/Texts";
import { HomeContainer } from "./Home.styles";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <Row>
          <Col sm={12}>
            <TitleWithLine title="Bem vindo ao nosso site!" />
          </Col>
          <Col sm={12} className="text-center">
            <p>
              Respeito, Dedicação e Qualidade. Transformando momentos,
              cultivando sentimentos e encantando corações.
            </p>
          </Col>
          <Col sm={12} className="text-center">
            <h4>
              <strong>NOVIDADE!</strong>
            </h4>
            <button>Video Mensagem</button>
          </Col>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default Home;
