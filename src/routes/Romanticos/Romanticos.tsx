import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

const layoutsItems = [
  {
    title: "Românticas",
    buttonValues: [
      "Adorei te Conhecer",
      "Amante",
      "Bom Dia/Tarde/Noite",
      "Carinho",
      "Conquista",
      "Convite Para Sair",
      "Declaração",
      "Despedida",
      "Distantes",
      "Desculpa Romântica",
      "Erótica",
      "Esposo/Esposa",
      "Estou Magoado(a) Com Você",
      "Ex Namorado(a)/Ex Esposo(a)",
      "Ficantes",
      "Fim de Relacionamento",
      "Início de Namoro",
      "Namorado/Namorada",
      "Não Correspondido",
      "Obrigado(a) Pelos Momentos",
      "Otimismo",
      "Paquera",
      "Pedido de Casamento",
      "Pedido de Namoro",
      "Picante",
      "Reconciliação",
      "Reencontro",
      "Tumultuado",
      "Saudade",
      "Você é Especial",
      "Para Noivo(a)",
    ],
  },
];

const Romanticos: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Romanticos;
