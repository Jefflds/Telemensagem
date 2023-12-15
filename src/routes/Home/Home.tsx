
import { Col, Container, Row } from "react-bootstrap";
import { TitleWithLine } from "../../components/Texts/Texts";
import { HomeContainer } from "./Home.styles";

import React from "react";

import { FaWhatsapp } from "react-icons/fa";
// import TalkWithUs from "../../assets/TalkWithUs";
import ListenOnline from "../../components/ListenOnline/ListenOnline";

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
          </section>
          <section className="mt-4 mb-4">
            <Col sm={12}>
              <TitleWithLine title="Dúvidas e Pedidos" />
            </Col>
            <Col
              sm={12}
              className="text-center DuvidasEpedidos d-flex flex-column"
            >
              <p>Em nosso Whatsapp ou nos Telefones:</p>
              <span>
                (11) 9 6366-5212
                <FaWhatsapp size={32} />
              </span>
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212">
                <img
                  // src={TalkWithUs}
                  alt=""
                  className="img-fluid mt-2"
                  width={200}
                />
              </a>
            </Col>
          </section>
          <section className="mt-4 mb-4 text-center">
            <h2>Ouça Online!</h2>
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
