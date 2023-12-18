import React from "react";
import { Route, Routes } from "react-router-dom";
import Aniversario from "./Aniversario";
import AmigaAmigo from "./AmigaAmigo/AmigaAmigo";
import Neutro from "./Neutro/Neutro";
import PessoaEspecial from "./PessoaEspecial/PessoaEspecial";
import Antecipado from "./Antecipado/Antecipado";
import ComGozacao from "./ComGozacao/ComGozacao";
import ComOtimismo from "./ComOtimismo/ComOtimismo";
import PessoaDistante from "./PessoaDistante/PessoaDistante";
import Cliente from "./Cliente/Cliente";
import Crianca from "./Crianca/Crianca";
import Terceiros from "./Terceiros/Terceiros";
import Atrasado from "./Atrasado/Atrasado";

const layoutsItems = [
  {
    title: "Aniversário",
    buttonValues: [
      "Amiga/Amigo",
      "Antecipado",
      "Atrasado",
      "Cliente",
      "Com Gozação",
      "Com Otimismo",
      "Criança",
      "Neutro",
      "Pessoa Distante",
      "Pessoa Especial",
      "Terceiros",
    ],
  },
  //{
  //   title: "Aniversário Familiar",
  //    buttonValues: ["Mãe/Pai", "Filho/Filha", "Irmão/Irmã"],
  //},
  //{
  //   title: "Aniversário Romântico",
  //   buttonValues: ["Namorada/Namorado", "Ficantes", "Esposa/Esposo"],
  //},
];

const AniversarioRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Aniversario layoutsItems={layoutsItems} />} />
      <Route path="/amigaamigo" element={<AmigaAmigo />} />
      <Route path="/neutro" element={<Neutro />} />
      <Route path="/pessoaespecial" element={<PessoaEspecial />} />
      <Route path="/antecipado" element={<Antecipado />} />
      <Route path="/comgozacao" element={<ComGozacao />} />
      <Route path="/comotimismo" element={<ComOtimismo />} />
      <Route path="/pessoadistante" element={<PessoaDistante />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/crianca" element={<Crianca />} />
      <Route path="/terceiros" element={<Terceiros />} />
      <Route path="/atrasado" element={<Atrasado />} />
    </Routes>
  );
};

export default AniversarioRoutes;
