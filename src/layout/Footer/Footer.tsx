import {
  FooterBottom,
  FooterColumn,
  FooterContainer,
  FooterSocial,
  FooterTop,
  StyledLink,
} from "./Footer.styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <div className="container">
          <div className="row">
            <FooterColumn className="col-md-4">
              <h3>HORÁRIOS</h3>
              <p>
                <strong>Segunda a Sexta-feira</strong>
                <br />
                08 às 22 hs
              </p>
              <p>
                <strong>Sábados, Domingos e Feriados</strong>
                <br />
                08 às 22 hs
              </p>
              <p>
                <strong>Observação</strong>
                <br />
                Passamos telemensagens fora do horário de atendimento
              </p>
            </FooterColumn>

            <FooterColumn className="col-md-4">
              <h3>NOVIDADES !!!</h3>
              <p>
                <img
                  src="https://www.spptelemensagem.com.br/img/upload/source/coracao.png"
                  alt=""
                  width="21"
                  height="19"
                />
                &nbsp;Troca de fundo musical
              </p>
              <p>
                <img
                  src="https://www.spptelemensagem.com.br/img/upload/source/coracao.png"
                  alt=""
                  width="21"
                  height="19"
                />
                &nbsp;Reação Gravada
              </p>
              <p>
                <img
                  src="https://www.spptelemensagem.com.br/img/upload/source/coracao.png"
                  alt=""
                  width="21"
                  height="19"
                />
                &nbsp;Telemensagem Personalizada (com sua voz)
              </p>
              <p className="center">
                <StyledLink
                  href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5511946933765"
                  target="_blank"
                >
                  <img
                    src="https://www.spptelemensagem.com.br/img/upload/source/zap-img_1.png"
                    alt=""
                  />
                </StyledLink>
              </p>
            </FooterColumn>

            <FooterColumn className="col-md-4">
              <h3>FORMAS DE PAGAMENTO</h3>
              <p>
                PIX, Transferência, Depósito em Conta, Cartões de Crédito e
                Boleto Bancário.
              </p>
              <p>
                <img
                  src="https://www.spptelemensagem.com.br/img/upload/source/bancos.png"
                  alt=""
                  width="281"
                  height="110"
                />
              </p>
              <p>
                <strong>Dúvidas e pedidos:</strong>
              </p>
              <p>
                (11) 9 6366-5212 &nbsp;
                <img
                  src="https://www.spptelemensagem.com.br/img/upload/source/whatsapp.png"
                  alt=""
                  width="22"
                  height="26"
                />
              </p>
              <p>desstak@hotmail.com</p>
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
            Copyright &copy; 2023 -{" "}
            <strong>Loucura de Amor | Telemensagens </strong>. Todos os direitos
            reservados.
          </div>

          <div className="col-md-8 centro d-flex">
            <StyledLink
              href="https://www.instagram.com/jefflds_company/"
              className="empresa"
              target="_blank"
            >
              Criador de Sites: HastyDev
            </StyledLink>
          </div>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
