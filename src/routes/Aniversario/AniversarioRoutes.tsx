import React from "react";
import { Route, Routes } from "react-router-dom";
import Aniversario from "./AniversarioHome";
import AmigaAmigo from "./Aniversario/AmigaAmigo/AmigaAmigo";
import Neutro from "./Aniversario/Neutro/Neutro";
import PessoaEspecial from "./Aniversario/PessoaEspecial/PessoaEspecial";
import Antecipado from "./Aniversario/Antecipado/Antecipado";
import ComGozacao from "./Aniversario/ComGozacao/ComGozacao";
import ComOtimismo from "./Aniversario/ComOtimismo/ComOtimismo";
import PessoaDistante from "./Aniversario/PessoaDistante/PessoaDistante";
import Cliente from "./Aniversario/Cliente/Cliente";
import Crianca from "./Aniversario/Crianca/Crianca"
import Terceiros from "./Aniversario/Terceiros/Terceiros";
import Atrasado from "./Aniversario/Atrasado/Atrasado";

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
