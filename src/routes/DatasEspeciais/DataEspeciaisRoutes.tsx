import React from "react";
import { Route, Routes } from "react-router-dom";
import DataEspeciais from "./DatasEspeciais";

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

const DataEspeciaisRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DataEspeciais layoutsItems={layoutsItems} />} />
    </Routes>
  );
};

export default DataEspeciaisRoutes;
