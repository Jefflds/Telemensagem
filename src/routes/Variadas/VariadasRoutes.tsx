import { Routes, Route } from "react-router-dom";
import Variadas from "./Variadas";
import Amizade from "./Amizade/Amizade";
import Agradecimento from "./Agradecimento/Agradecimento";
import BomDia from "./BomDia/BomDia";
import BoaSorte from "./BoaSorte/BoaSorte";
import BoaViagem from "./BoaViagem/BoaViagem";
import BoasVindas from "./BoasVindas/BoasVindas";
import BodasPrata from "./BodasPrata/BodasPrata";
import Conforto from "./Conforto/Conforto";
import DesculpasFamiliares from "./DesculpasFamiliares/DesculpasFamiliares";
import DesculpaNeutra from "./DesculpaNeutra/DesculpaNeutra";
import Despedida from "./Despedida/Despedida";
import Formatura from "./Formatura/Formatura";
import Gestante from "./Gestante/Gestante";
import Gozação from "./Gozação/Gozação";
import Homenagem from "./Homenagem/Homenagem";
import Maternidade from "./Maternidade/Maternidad.tsx";
import Otimismo from "./Otimismo/Otimismo";
import ParabensPeloCasamento from "./ParabensPeloCasamento/ParabensPeloCasamento";
import Pesames from "./Pesames/Pesames";
import SaudadeNeutra from "./SaudadeNeutra/SaudadeNeutra";
import Vitória from "./Vitória/Vitória";

const layoutsItems = [
  {
    title: "Variadas",
    buttonValues: [
      "Agradecimento",
      "Amizade",
      "Bom Dia/Tarde/Noite",
      "Boa Sorte/Sucesso",
      "Boa Viagem",
      // "Boas Vindas",
      // "Bodas Prata/Ouro",
      // "Conforto",
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
      <Route path="/" element={<Variadas layoutsItems={layoutsItems} />} />
      <Route path="/bomdiatardenoite" element={<BomDia />} />
      <Route path="/boasortesucesso" element={<BoaSorte />} />
      <Route path="/boaviagem" element={<BoaViagem />} />
      <Route path="/boasvindas" element={<BoasVindas />} />
      <Route path="/amizade" element={<Amizade />} />
      <Route path="/agradecimento" element={<Agradecimento />} />
      <Route path="/desculpasfamiliares" element={<DesculpasFamiliares />} />
      <Route path="/desculpaneutra" element={<DesculpaNeutra />} />
      <Route path="/despedida" element={<Despedida />} />
      <Route path="/formatura" element={<Formatura />} />
      <Route path="/gestante" element={<Gestante />} />
      <Route path="/gozacao" element={<Gozação />} />
      <Route path="/homenagem" element={<Homenagem />} />
      <Route path="/maternidade" element={<Maternidade />} />
      <Route path="/otimismo" element={<Otimismo />} />
      <Route path="/parabenspelocasamento"element={<ParabensPeloCasamento />} />
      <Route path="/pesames" element={<Pesames />} />
      <Route path="/saudadeneutra" element={<SaudadeNeutra />} />
      <Route path="/vitoria" element={<Vitória />} />
      <Route path="/bodasprata" element={<BodasPrata />} />
      <Route path="/conforto" element={<Conforto />} />
    </Routes>
  );
};

export default VariadasRoutes;
