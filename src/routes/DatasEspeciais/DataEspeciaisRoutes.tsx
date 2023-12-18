import React from "react";
import { Route, Routes } from "react-router-dom";
import DataEspeciais from "./DatasEspeciais";

const layoutsItems = [
    {
      title: "Datas Especiais",
      buttonValues: [
        "Ano Novo",
        "Dia das Mães",
        "Dia do Amigo",
        "Dia dos Namorados",
        "Dia dos Pais",
        "Dia dos Professores",
        "Dia Internacional da Mulher",
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
