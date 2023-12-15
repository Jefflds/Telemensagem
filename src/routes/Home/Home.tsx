
import { Col, Container, Row } from "react-bootstrap";
import { TitleWithLine } from "../../components/Texts/Texts";
import { HomeContainer } from "./Home.styles";

import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import TalkWithUs from "../../assets/TalkWithUs.svg";
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
              Demonstre todo seu amor através de palavras que tocam o coração, dedicamos-nos a expressar sentimentos profundos. Nossas mensagens capturam a essência do amor. Surpreenda e encante aqueles que você ama, trazendo o amor das palavras à vida.
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
                  src={TalkWithUs}
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
