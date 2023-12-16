import React from "react";
import {
  FooterBottom,
  FooterColumn,
  FooterContainer,
  FooterSocial,
  FooterTop,
  StyledLink,
} from "./Footer.styled";


import bancos from "../../assets/bancos.png";
import coracao from "../../assets/imgFooter/coracao.png";
import whatsapp from "../../assets/whatsapp.png";


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
              {/* <h3>EXCLUSIVIDADE!</h3> */}
              <p>
               
                &nbsp;Troca de fundo musical;
              </p>
              <p>
               
                &nbsp;Reação Gravada;
              </p>
              <p>
               
                &nbsp;Telemensagens Personalizadas.
              </p>
              <p className="center">
                <StyledLink
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5511963665212"
                  target="_blank"
                >
                 <img src={whatsapp} alt="" width="70" height="auto" />
                </StyledLink>
              </p>
            </FooterColumn>

            <FooterColumn className="col-md-4">
              <h3>PAGAMENTO</h3>
              <p>
                PIX, Transferência, Depósito em Conta, Cartões de Crédito e
                Boleto Bancário.
              </p>
             
              <p>
                <strong>Dúvidas e pedidos:</strong>
              </p>
              <p>
                (11) 9 6366-5212 &nbsp;
                <img
                  src={whatsapp}
                  alt=""
                  width="22"
                  height="26"
                />
              </p><p style={{ textTransform: 'lowercase' }}>desstak@hotmail.com</p>


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
        <div className="container d-flex ">
          <div className="col-md-8 d-flex p ">
            Copyright &copy; 2023 -
            <strong>Loucura de Amor | Telemensagens. </strong> Todos os direitos
            reservados.
          </div>

          <div className="col-md-8 centro d-flex">
            <StyledLink
              href="https://www.instagram.com/jefflds_company/"
              className="empresa"
              target="_blank"
            >
              Created by: HastyDev
            </StyledLink>
          </div>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
