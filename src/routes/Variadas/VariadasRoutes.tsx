import { Routes, Route } from "react-router-dom";
import Variadas from "./Variadas";

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

const VariadasRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Variadas layoutsItems={layoutsItems}/>} />
    </Routes>
  );
};

export default VariadasRoutes;
