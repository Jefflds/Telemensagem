import React from "react";
import { Route, Routes } from "react-router-dom";
import DataEspeciais from "./DatasEspeciais";
import AnoNovo from "./AnoNovo/AnoNovo";
import DiaDasMaes from "./DiaDasMaes/DiaDasMaes";
import DiaDoAmigo from "./DiaDoAmigo/DiaDoAmigo";
import DiaDosNamorados from "./DiaDosNamorados/DiaDosNamorados";
import DiaDoPais from "./DiaDoPais/DiaDoPais";
import DiaDosProfessores from "./DiaDosProfessores/DiaDosProfessores";
import DiaInternacionalDaMulher from "./DiaInternacionalDaMulher/DiaInternacionalDaMulher";
import Natal from "./Natal/Natal";

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
      <Route path="/ano-novo" element={<AnoNovo />} />
      <Route path="/dia-das-maes" element={<DiaDasMaes />} />
      <Route path="/dia-do-amigo" element={<DiaDoAmigo />} />
      <Route path="/dia-do-amigo" element={<DiaDoAmigo />} />
      <Route path="/dia-dos-namorados" element={<DiaDosNamorados />} />
      <Route path="/dia-dos-pais" element={<DiaDoPais />} />
      <Route path="/dia-dos-professores" element={<DiaDosProfessores/>} />
      <Route path="/dia-internacional-da-mulher" element={<DiaInternacionalDaMulher/>} />
      <Route path="/natal" element={<Natal/>} />
    </Routes>
  );
};

export default DataEspeciaisRoutes;
