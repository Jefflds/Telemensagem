import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

import AdoreiTeConhecer from "./AdoreiTeConhecer/AdoreiTeConhecer";
import Amante from "./Amante/Amante";
import BomDiaTardeNoite from "./BomDiaTardeNoite/BomDiaTardeNoite";
import Carinho from "./Carinho/Carinho";
import Conquista from "./Conquista/Conquista";
import ConviteParaSair from "./ConviteParaSair/ConviteParaSair.tsx";
import Declaracao from "./Declaracao/Declaracao";
import Despedida from "./Despedida/Despedida";
import Distantes from "./Distantes/Distantes";
import DesculpaRomantica from "./DesculpaRomantica/DesculpaRomantica";
import Erotica from "./Erotica/Erotica";
import EsposoEsposa from "./EsposoEsposa/EsposoEsposa";
import EstouMagoadocomVoce from "./EstouMagoadocomVoce/EstouMagoadocomVoce";
import ExNamoradoExEsposa from "./ExNamoradoExEsposa/ExNamoradoExEsposa";
import Ficantes from "./Ficantes/Ficantes";
import FimdeRelacionamento from "./FimdeRelacionamento/FimdeRelacionamento";
import IniciodeNamoro from "./IniciodeNamoro/IniciodeNamoro";
import NamoradoNamorada from "./NamoradoNamoradas/NamoradoNamorada.tsx";
import NaoCorrespondido from "./NaoCorrespondido/NaoCorrespondido";
import ObrigadoPelosMomentos from "./ObrigadoPelosMomentos/ObrigadoPelosMomentos";
import Otimismo from "./Otimismo/Otimismo";
import Paquera from "./Paquera/Paquera";
import PedidoCasamento from "./PedidoCasamento/PedidoCasamento";
import PedidoNamoro from "./PedidoNamoro/PedidoNamoro";
import Picante from "./Picante/Picante";
import Reconciliacao from "./Reconciliacao/Reconciliacao";
import Reencontro from "./Reencontro/Reencontro";
import Tumultuado from "./Tumultuado/Tumultuado";
import Saudade from "./Saudade/Saudade";
import VoceEspecial from "./VoceEspecial/VoceEspecial";
import ParaNoivoa from "./ParaNoivoa/ParaNoiva.tsx";
import { Route, Routes } from "react-router-dom";
const layoutsItems = [
  {
    title: "Românticas",
    buttonValues: [
      "Adorei te Conhecer",
      "Amante",
      "Bom Dia/Tarde/Noite",
      "Carinho",
      "Conquista",
      "Convite Para Sair",
      "Declaração",
      "Despedida",
      "Distantes",
      "Desculpa Romântica",
      "Erótica",
      "Esposo/Esposa",
      "Estou Magoado(a) Com Você",
      "Ex Namorado(a)/Ex Esposo(a)",
      "Ficantes",
      "Fim de Relacionamento",
      "Início de Namoro",
      "Namorado/Namorada",
      "Não Correspondido",
      "Obrigado(a) Pelos Momentos",
      "Otimismo",
      "Paquera",
      "Pedido de Casamento",
      "Pedido de Namoro",
      "Picante",
      "Reconciliação",
      "Reencontro",
      "Tumultuado",
      "Saudade",
      "Você é Especial",
      "Para Noivo(a)",
    ],
  },
];

// ... [importações e código anterior]

const RomanticosRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout layoutsItems={layoutsItems} />} />

      {/* Rotas para cada componente correspondente */}
      <Route path="adorei-te-conhecer" element={<AdoreiTeConhecer />} />
      <Route path="amante" element={<Amante />} />
      <Route path="bom-dia-tarde-noite" element={<BomDiaTardeNoite />} />
      <Route path="carinho" element={<Carinho />} />
      <Route path="conquista" element={<Conquista />} />
      <Route path="convite-para-sair" element={<ConviteParaSair />} />
      <Route path="declaracao" element={<Declaracao />} />
      <Route path="despedida" element={<Despedida />} />
      <Route path="distantes" element={<Distantes />} />
      <Route path="desculpa-romantica" element={<DesculpaRomantica />} />
      <Route path="erotica" element={<Erotica />} />
      <Route path="esposoesposa" element={<EsposoEsposa />} />
      <Route path="estou-magoadoa-com-voce" element={<EstouMagoadocomVoce />} />
      <Route path="ex-namoradoaex-esposoa" element={<ExNamoradoExEsposa />} />
      <Route path="ficantes" element={<Ficantes />} />
      <Route path="fim-de-relacionamento" element={<FimdeRelacionamento />} />
      <Route path="inicio-de-namoro" element={<IniciodeNamoro />} />
      <Route path="namoradonamorada" element={<NamoradoNamorada />} />
      <Route path="nao-correspondido" element={<NaoCorrespondido />} />
      <Route path="obrigadoa-pelos-momentos" element={<ObrigadoPelosMomentos />} />
      <Route path="otimismo" element={<Otimismo />} />
      <Route path="paquera" element={<Paquera />} />
      <Route path="pedido-de-casamento" element={<PedidoCasamento />} />
      <Route path="pedido-de-namoro" element={<PedidoNamoro />} />
      <Route path="picante" element={<Picante />} />
      <Route path="reconciliacao" element={<Reconciliacao />} />
      <Route path="reencontro" element={<Reencontro />} />
      <Route path="tumultuado" element={<Tumultuado />} />
      <Route path="saudade" element={<Saudade />} />
      <Route path="voce-e-especial" element={<VoceEspecial />} />
      <Route path="para-noivoa" element={<ParaNoivoa />} />
    </Routes>
  );
};

export default RomanticosRoutes;


