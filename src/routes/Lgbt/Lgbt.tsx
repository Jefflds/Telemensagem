import React from "react";
import { Content, CenteredParagraph, ColoredSpan,Container, Button } from "../Aniversario/Aniversario.styles";
const lgbt: React.FC = () => {
    return (
      <Content>
      <Container>
        <br />
        <br />
        <CenteredParagraph>
          <ColoredSpan>
            <Button href="lgbt-aniversario.html">Aniversário</Button>
            <Button href="lgbt-romantica.html">Romântica</Button>
          </ColoredSpan>
        </CenteredParagraph>
        <br />
        <br />
      </Container>
    </Content>
    
    );
  };
  
  export default lgbt;