
import { Col, Container, Row } from "react-bootstrap";
import { TitleWithLine } from "../../components/Texts/Texts";
import { HomeContainer, Text, Text2 } from "./Home.styles";

import React from "react";


import whastapp from "../../assets/whatsapp.png";
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
          <section className="mt-4 mb-4" >
            <Col sm={12} className="text-center">
              <TitleWithLine title="Telemensagem Para todas ocasiões!" /> 
            </Col>
            <Col sm={12} className="text-center">
              <p>
              Demonstre todo seu amor através de palavras que tocam o coração, dedicamos-nos a expressar sentimentos profundos. Nossas mensagens capturam a essência do amor. Surpreenda e encante aqueles que você ama, trazendo o amor das palavras à vida.
              </p>
            </Col>

            <Col sm={12} className="text-center">
              {/* <h4>
                <strong>NOVIDADE!</strong>
              </h4> */}
             
            </Col>
          </section>
          
          <section className="mt-4 mb-4">


          
            <Col sm={12}>
              
              {/* <TitleWithLine title="Dúvidas e Pedidos" /> */}
            </Col>
            <Col
              sm={12}
              className="text-center DuvidasEpedidos d-flex flex-column"
            >
              <p>Whatsapp:</p>
             
              <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212" target="blank">
                <img
                  src={whastapp}
                  alt=""
                  className="img-fluid mt-2"
                  width={100}
                />
              </a>
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
