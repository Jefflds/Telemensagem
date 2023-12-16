import React from "react";
import {
  FooterBottom,
  FooterColumn,
  FooterContainer,
  FooterSocial,
  FooterTop
  
} from "./Footer.styled";

import whatsapp from "../../assets/whatsapp.png";
import { StyledButtonWhatsapp } from "../../components/buttonWhats/buttonWhats2.styled";
import { FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <div className="container">
          <div className="row">
            <FooterColumn className="col-md-4 mb-4">
              <h3>FUNCIONAMENTO</h3>
              <p>
                <strong>Segunda a Sexta-feira:</strong>
                <br />
                08:00h às 22:00h
              </p>
              <p>
                <strong>Sábados, Domingos e Feriados:</strong>
                <br />
                08:00h às 22:00h
              </p>
            </FooterColumn>

            <FooterColumn className="col-md-4 mb-4">
              <h3>Serviços Excluisivos!</h3>
              <p>Troca de fundo musical;</p>
              <p>Reação Gravada;</p>
              <p>Telemensagens Personalizadas.</p>
              <p>Videos fotos Musicais</p>

              <a
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212"
                target="blank"
              >
                <StyledButtonWhatsapp>
                  <FaWhatsapp /> WhastApp
                </StyledButtonWhatsapp>
              </a>
            </FooterColumn>

            <FooterColumn className="col-md-4">
              <h3>PAGAMENTO</h3>
              <p>PIX, Transferência, Depósito em Conta e Cartões de Crédito.</p>

              <p>
                <strong>Dúvidas e pedidos:</strong>
              </p>
              <p>
                (11) 9 6366-5212 &nbsp;
                <a
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212"
                  about="blank"
                >
                  <img src={whatsapp} alt="" width="22" height="26" />
                </a>
              </p>
              <p style={{ textTransform: "lowercase" }}>desstak@hotmail.com</p>

              <p>&nbsp;</p>
            </FooterColumn>
          </div>
          <div className="row justify-content-end">
            <div className="col-md-12">
              <FooterSocial> </FooterSocial>
            </div>
          </div>
        </div>
      </FooterTop>

      <FooterBottom>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="col-md-8 d-flex p text-center">
            Copyright &copy; 2023 -{" "}
            <strong>Loucura de Amor | Telemensagens. </strong> Todos os direitos
            reservados.
          </div>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
