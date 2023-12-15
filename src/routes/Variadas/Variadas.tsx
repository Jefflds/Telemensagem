import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

const layoutsItems = [
  {
    title: "Variadas",
    buttonValues: [
      "Agradecimento",
      "Amizade",
      "Bom Dia/Tarde/Noite",
      "Boa Sorte/Sucesso",
      "Boa Viagem",
      "Boas Vindas",
      "Bodas Prata/Ouro",
      "Conforto",
      "Desculpas Familiares",
      "Desculpa Neutra",
      "Despedida",
      "Formatura",
      "Gestante",
      "Gozação",
      "Homenagem",
      "Maternidade",
      "Otimismo",
      "Parabéns pelo Casamento",
      "Pêsames",
      "Saudade Neutra",
      "Vitória",
    ],
  },
];

const Variedades: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Variedades;
