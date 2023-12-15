import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

const layoutsItems = [
  {
    title: "Datas Especiais",
    buttonValues: [
      "Ano Novo",
      "Dia do Amigo",
      "Dia das Mães",
      "Dia dos Professores",
      "Dia dos Pais",
      "Dia Internacional da Mulher",
      "Dia dos Namorados",
      "Natal",
    ],
  },
];

const DataEspeciais: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default DataEspeciais;
