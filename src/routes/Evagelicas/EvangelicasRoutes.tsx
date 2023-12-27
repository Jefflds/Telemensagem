import React from "react";

import { Route, Routes } from "react-router-dom";
import Evangelicas from "./Evangelicas";
import AniversarioAmigo from "./AniversarioAmigo/AniversarioAmigo";
import AniversarioFilho from "./AniversarioFilhoFilha/AniversarioFilhoFilha";
import AniversarioIrmaoIrma from "./AniversarioIrmaoIrma/AniversarioIrmaoIrma";
import AniversarioMae from "./AniversarioMae/AniversarioMae";
import AniversarioNamorado from "./AniversarioNamoradoNamorada/AniversarioNamoradoNamorada";
import AniversarioNeutro from "./AniversarioNeutro/AniversarioNeutro";
import AniversarioPai from "./AniversarioPai/AniversarioPai";
import AniversarioPastor from "./AniversarioPastor/AniversarioPastor";

const layoutsItems = [
  {
    title: "Evangélicas",
    buttonValues: [
      "Aniversário Amigo(a)",
      "Aniversário Filho(a)",
      "Aniversário Irmão/Irmã",
      "Aniversário Mãe",
      "Aniversário Namorado(a)",
      "Aniversário Neutro",
      "Aniversário Pai",
      "Aniversário Pastor",
    ],
  },
];

const Evangelico: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Evangelicas layoutsItems={layoutsItems} />} />
      <Route path="/aniversarioamigoa" element={<AniversarioAmigo />} />
      <Route path="/aniversariofilho" element={<AniversarioFilho />} />
      <Route path="/aniversarioirmaoirma" element={<AniversarioIrmaoIrma />} />
      <Route path="/aniversariomae" element={<AniversarioMae />} />
      <Route path="/aniversarionamorado" element={<AniversarioNamorado />} />
      <Route path="/aniversarioneutro" element={<AniversarioNeutro />} />
      <Route path="/aniversariopai" element={<AniversarioPai />} />
      <Route path="/aniversariopastor" element={<AniversarioPastor />} />
    </Routes>
  );
};

export default Evangelico;
