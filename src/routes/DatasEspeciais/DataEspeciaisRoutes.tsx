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
      <Route path="/anonovo" element={<AnoNovo />} />
      <Route path="/diadasmaes" element={<DiaDasMaes />} />
      <Route path="/diadoamigo" element={<DiaDoAmigo />} />
      <Route path="/diadoamigo" element={<DiaDoAmigo />} />
      <Route path="/diadosnamorados" element={<DiaDosNamorados />} />
      <Route path="/diadospais" element={<DiaDoPais />} />
      <Route path="/diadosprofessores" element={<DiaDosProfessores/>} />
      <Route path="/diainternacionaldamulher" element={<DiaInternacionalDaMulher/>} />
      <Route path="/natal" element={<Natal/>} />
    </Routes>
  );
};

export default DataEspeciaisRoutes;
