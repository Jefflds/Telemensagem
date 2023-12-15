import React from "react";
import { Route, Routes } from "react-router-dom";
import Aniversario from "./Aniversario";

const layoutsItems = [
  {
    title: "Aniversário",
    buttonValues: [
      "Amiga/Amigo",
      "Neutro",
      "Pessoa Especial",
      "Atrasado",
      "Antecipado",
      "Com Gozação",
      "Com Otimismo",
      "Pessoa Distante",
      "Cliente",
      "Criança",
      "15 anos",
      "Casamento",
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
      "Cunhada/Cunhado",
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
      "Amante",
      "Reconciliação",
      "De Relacionamento",
      "Com Conquista",
    ],
  },
];

const AniversarioRoutes: React.FC = () => {
  const Element = (item: string) => {
    const normalizedStr = item.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return "/" + normalizedStr;
  };

  return (
    <Routes>
      <Route path="/" element={<Aniversario layoutsItems={layoutsItems} />} />
    </Routes>
  );
};

export default AniversarioRoutes;
