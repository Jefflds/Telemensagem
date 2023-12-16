import { Col, Container, Row } from "react-bootstrap";
import { TitleWithLine } from "../../components/Texts/Texts";
import { HomeContainer } from "./Home.styles";

import React from "react";

import ListenOnline from "../../components/ListenOnline/ListenOnline";
import { FaWhatsapp } from "react-icons/fa";
import { StyledButtonWhatsapp } from "../../components/buttonWhats/buttonWhats2.styled";

const ListenItems = [
  "Aniversários",
  "Românticas",
  "Evangélicas",
  "Variadas",
  "LGBT",
  "Datas Especiais",
];

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Container>
        <Row>
          <section className="mt-4 mb-4">
            <Col sm={12} className="text-center">
              <TitleWithLine title="Telemensagem Para todas ocasiões!" />
            </Col>
            <Col sm={12} className="text-center">
              <p>
                Demonstre todo seu amor através de palavras que tocam o coração,
                dedicamos-nos a expressar sentimentos profundos. Nossas
                mensagens capturam a essência do amor. Surpreenda e encante
                aqueles que você ama, trazendo o amor das palavras à vida.
              </p>
            </Col>

            <Col sm={12} className="text-center">
              {/* <h4>
                <strong>NOVIDADE!</strong>
              </h4> */}
            </Col>
          </section>

          <section className="mt-4 mb-4">
           
            <Col
              sm={12}
              className="text-center DuvidasEpedidos d-flex flex-column"
            >
              <p>Whatsapp:</p>

              <div className="d-flex justify-content-center align-items-center">
      <a
        href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212"
        target="_blank"
      >
        <StyledButtonWhatsapp>
          <FaWhatsapp /> WhastApp
        </StyledButtonWhatsapp>
      </a>
    </div>
            </Col>
          </section>
          <section className="mt-4 mb-4 text-center">
            <h2>Escute agora!</h2>
            <div>
              <ListenOnline ListenItems={ListenItems} />
            </div>
          </section>
        </Row>
      </Container>
    </HomeContainer>
  );
};

export default Home;
