import React from "react";
import {
  Button,
  CenteredParagraph,
  ColoredSpan,
  Container,
  Content,
  StrongSpan,
} from "./PageLayout.styles";

const PageLayout: React.FC = () => {
  return (
    <Content>
      <Container>
        <br />
        <br />
        <CenteredParagraph>
          <ColoredSpan>
            <StrongSpan>Aniversário</StrongSpan>
          </ColoredSpan>
        </CenteredParagraph>
        <CenteredParagraph>
          <ColoredSpan>
            <Button href="aniversario-amigo-a.">Amiga/Amigo</Button>
            <Button href="aniversario-neutro">Neutro</Button>
            <Button href="aniversario-pessoa-especial">Pessoa Especial</Button>
            <Button href="aniversario-atrasado">Atrasado</Button>
            <Button href="aniversario-antecipado">Antecipado</Button>
            <Button href="aniversario-com-gozacao">Com Gozação</Button>
            <Button href="aniversario-com-otimismo">Com Otimismo</Button>
            <Button href="aniversario-pessoa-distante">Pessoa Distante</Button>
            <Button href="aniversario-cliente">Cliente</Button>
            <Button href="aniversario-crianca">Criança</Button>
            <Button href="aniversario-15-anos">15 anos</Button>
            <Button href="aniversario-casamento-terceiros">
              Casamento Terceiros
            </Button>
          </ColoredSpan>
        </CenteredParagraph>
        <CenteredParagraph>
          <ColoredSpan>
            <StrongSpan>Aniversário Familiar</StrongSpan>
          </ColoredSpan>
        </CenteredParagraph>
        <CenteredParagraph>
          <ColoredSpan>
            <Button href="aniversario-maepai.html">Mãe/Pai</Button>
            <Button href="aniversario-filho-a.html">Filho/Filha</Button>
            <Button href="aniversario-irmao-irma.html">Irmão/Irmã</Button>
            <Button href="aniversario-sogro-a.html">Sogra/Sogro</Button>
            <Button href="aniversario-genro-nora.html">Genro/Nora</Button>
            <Button href="aniversario-cunhado-a.html">Cunhada/Cunhado</Button>
            <Button href="aniversario-tio-a.html">Tia/Tio</Button>
            <Button href="aniversario-sobrinho-a.html">
              Sobrinha/Sobrinho
            </Button>
            <Button href="aniversario-primo-a.html">Prima/Primo</Button>
            <Button href="aniversario-avos.html">Avó/Avô</Button>
            <Button href="aniversario-neto-a.html">Neta/Neto</Button>
            <Button href="aniversario-padrinho-madrinha.html">
              Madrinha/Padrinho
            </Button>
            <Button href="aniversario-afilhado-a.html">
              Afilhada/Afilhado
            </Button>
            <Button href="aniversario-comadre-compadre.html">
              Comadre/Compadre
            </Button>
          </ColoredSpan>
        </CenteredParagraph>
        <CenteredParagraph>
          <ColoredSpan>
            <StrongSpan>Aniversário Romântico</StrongSpan>
          </ColoredSpan>
        </CenteredParagraph>
        <CenteredParagraph>
          <ColoredSpan>
            <Button href="aniversario-namorado-a.html">
              Namorada/Namorado
            </Button>
            <Button href="aniversario-ficante.html">Ficantes</Button>
            <Button href="aniversario-esposa.html">Esposa/Esposo</Button>
            <Button href="aniversario-noiva.html">Noiva/Noivo</Button>
            <Button href="aniversario-ex-namoradoa-ex-esposoa.html">
              Ex namorado(a)/Ex esposo(a)
            </Button>
            <Button href="aniversario-casamento.html">Casamento</Button>
            <Button href="aniversario-noivado.html">Noivado</Button>
            <Button href="aniversario-namoro.html">Namoro</Button>
            <Button href="aniversario-amante.html">Amante</Button>
            <Button href="aniversario-reconciliacao.html">Reconciliação</Button>
            <Button href="aniversario-de-relacionamento.html">
              De Relacionamento
            </Button>
            <Button href="aniversario-com-conquista.html">Com Conquista</Button>
          </ColoredSpan>
        </CenteredParagraph>
        <br />
        <br />
      </Container>
    </Content>
  );
};

export default PageLayout;
