import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

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

const Aniversario: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Aniversario;
