import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

const layoutsItems = [
  {
    title: "Evangélicas",
    buttonValues: [
      "Aniversário Amigo(a)",
      "Aniversário Esposa",
      "Aniversário Esposo",
      "Aniversário Filho(a)",
      "Aniversário Irmão/Irmã",
      "Aniversário Mãe",
      "Aniversário Namorado(a)",
      "Aniversário Neutro",
      "Aniversário Pai",
      "Aniversário Pastor",
      "Aniversário Sogro(a)",
      "Aniversário Tio(a)",
      "Romântica",
    ],
  },
];

const Evangelico: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Evangelico;
