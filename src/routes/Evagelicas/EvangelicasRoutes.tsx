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
      <Route path="/aniversario-amigoa" element={<AniversarioAmigo />} />
      <Route path="/aniversario-filhoa" element={<AniversarioFilho />} />
      <Route path="/aniversario-irmaoirma" element={<AniversarioIrmaoIrma />} />
      <Route path="/aniversario-mae" element={<AniversarioMae />} />
      <Route path="/aniversario-namoradoa" element={<AniversarioNamorado />} />
      <Route path="/aniversario-neutro" element={<AniversarioNeutro />} />
      <Route path="/aniversario-pai" element={<AniversarioPai />} />
      <Route path="/aniversario-pastor" element={<AniversarioPastor />} />
    </Routes>
  );
};

export default Evangelico;
