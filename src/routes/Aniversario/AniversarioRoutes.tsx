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
];

const AniversarioRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Aniversario layoutsItems={layoutsItems} />} />
      <Route path="/amigaamigo" element={<AmigaAmigo />} />
      <Route path="/neutro" element={<Neutro />} />
      <Route path="/pessoa-especial" element={<PessoaEspecial />} />
      <Route path="/antecipado" element={<Antecipado />} />
      <Route path="/com-gozacao" element={<ComGozacao />} />
      <Route path="/com-otimismo" element={<ComOtimismo />} />
      <Route path="/pessoa-distante" element={<PessoaDistante />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/crianca" element={<Crianca />} />
      <Route path="/terceiros" element={<Terceiros />} />
      <Route path="/atrasado" element={<Atrasado />} />
    </Routes>
  );
};

export default AniversarioRoutes;
