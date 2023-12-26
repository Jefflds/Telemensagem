import React from "react";

import { Route, Routes } from "react-router-dom";
import Evangelicas from "./Evangelicas";
import AniversarioAmigo from "./AniversarioAmigo/AniversarioAmigo";
import AniversaioEsposa from "./AniversarioEsposa/AniversrioEsposa";
import AniversarioFilho from "./AniversarioFilho/AniversarioFilho";
import AniversarioIrmaoIrma from "./AniversarioIrmaoIrma/AniversarioIrmaoIrma";
import AniversarioMae from "./AniversarioMae/AniversarioMae";
import AniversarioNamorado from "./AniversarioNamorado/AniversarioNamorado";
import AniversarioNeutro from "./AniversarioNeutro/AniversarioNeutro";
import AniversarioPai from "./AniversarioPai/AniversarioPai";
import AniversarioPastor from "./AniversarioPastor/AniversarioPastor";
import AniversarioSogro from "./AniversarioSogro/AniversarioSogro";
import AniversarioTio from "./AniversarioTio/AniversarioTio";

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
  return (
    <Routes>
      <Route path="/" element={<Evangelicas layoutsItems={layoutsItems} />} />
      <Route path="/aniversarioamigoa" element={<AniversarioAmigo />} />
      <Route path="/aniversarioesposa" element={<AniversaioEsposa />} />
      <Route path="/aniversariofilho" element={<AniversarioFilho />} />
      <Route path="/aniversarioirmaoirma" element={<AniversarioIrmaoIrma />} />
      <Route path="/aniversariomae" element={<AniversarioMae />} />
      <Route path="/aniversarionamorado" element={<AniversarioNamorado />} />
      <Route path="/aniversarioneutro" element={<AniversarioNeutro />} />
      <Route path="/aniversariopai" element={<AniversarioPai />} />
      <Route path="/aniversariopastor" element={<AniversarioPastor />} />
      <Route path="/aniversariosogro" element={<AniversarioSogro />} />
      <Route path="/aniversariotio" element={<AniversarioTio />} />
    </Routes>
  );
};

export default Evangelico;
