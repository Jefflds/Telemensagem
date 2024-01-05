import React from "react";
import { Route, Routes } from "react-router-dom";
import Aniversario from "./AniversarioHome";
import AniversarioRoute from "./Aniversario/AniversarioRoute";
import AniversarioFamiliarRoute from "./Aniversario-familiar/AniversarioFamiliarRoute";
import AniversarioRomanticoRoute from "./Aniversario-romantico/AniversarioRomanticoRoute";

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
  {
    title: "Aniversário Familiar",
    buttonValues: [
      "Mãe/Pai",
      "Filho/Filha",
      "Irmão/Irmã",
      "Sogra/Sogro",
      "Genro/Nora",
      "Cunhado/Cunhada",
      "Tia/Tio",
      "Sobrinha/Sobrinho",
      "Prima/Primo",
      "Avó/Avô",
      "Neta/Neto",
      "Madrinha/Padrinho",
      "Afilhada/Afilhado",
      "Comadre/Compadre",
    ],
  },
  {
    title: "Aniversário Romântico",
    buttonValues: [
      "Namorada/Namorado",
      "Ficantes",
      "Esposa/Esposo",
      "Noiva/Noivo",
      "Ex Namorado(a)/Ex Esposo(a)",
      "Casamento",
      "Noivado",
      "Namoro",
     
      "Reconciliação",
      "De Relacionamento",
      "Com Conquista",
    ],
  },
];

const AniversarioRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Aniversario layoutsItems={layoutsItems} />} />
      <Route path="/aniversario/*" element={<AniversarioRoute />} />
      <Route
        path="/aniversario-familiar/*"
        element={<AniversarioFamiliarRoute />}
      />
      <Route
        path="/aniversario-romantico/*"
        element={<AniversarioRomanticoRoute/>}
      />
    </Routes>
  );
};

export default AniversarioRoutes;
