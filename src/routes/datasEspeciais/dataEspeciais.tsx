import React from "react";

import { Content, Paragraph, Span, Button, Container } from "./dataEspeciais.styled";
const DataEspeciais: React.FC = () => {
    return (
      <Content>
      <Container>
        <br />
        <br />
        <Paragraph>
          <Span>
            <Button href="datas-especiais-ano-novo.html">Ano Novo</Button>{' '}
            <Button href="datas-especiais-dia-do-amigo.html">Dia do Amigo</Button>{' '}
            <Button href="datas-especiais-dia-das-maes.html">Dia das Mães</Button>{' '}
            <Button href="datas-especiais-dia-do-professor.html">Dia dos Professores</Button>{' '}
            <Button href="datas-especiais-dia-dos-pais.html">Dia dos Pais</Button>{' '}
            <Button href="datas-especiais-dia-internacional-da-mulher.html">Dia Internacional da Mulher</Button>{' '}
            <Button href="datas-especiais-dia-dos-namorados.html">Dia dos Namorados</Button>{' '}
            <Button href="datas-especiais-natal.html">Natal</Button>
          </Span>
        </Paragraph>
        <br />
        <br />
      </Container>
    </Content>
    
    );
  };
  
  export default DataEspeciais;