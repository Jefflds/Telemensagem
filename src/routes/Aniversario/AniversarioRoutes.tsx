import React from "react";
import { Route, Routes } from "react-router-dom";
import Aniversario from "./Aniversario";
import AmigaAmigo from "./AmigaAmigo/AmigaAmigo"; 
import Neutro from "./Neutro/Neutro";
import PessoaEspecial from "./PessoaEspecial/PessoaEspecial";
import Atrasado from "./Atrasado/Atrasado"; 
import Antecipado from "./Antecipado/Antecipado"; 
import ComGozacao from "./ComGozacao/ComGozacao";
import ComOtimismo from "./ComOtimismo/ComOtimismo"; 
import PessoaDistante from "./PessoaDistante/PessoaDistante"; 
import Cliente from "./Cliente/Cliente"; 
import Crianca from "./Crianca/Crianca"; 
import QuinzeAnos from "./QuinzeAnos/QuinzeAnos"; 
import Casamento from "./Casamento/Casamento"; 
import Terceiros from "./Terceiros/Terceiros";
import MaePai from "./MaePai/MaePai";
import FilhoFilha from "./FilhoFilha/FilhoFilha";
import IrmaoIrma from "./irmaoirma/irmaoirma";
import SograSogro from "./sograsogro/sograsogro";
import GenroNora from "./genronora/genronora";
import CunhadaCunhado from "./cunhadacunhado/cunhadacunhado";
import TiaTio from "./tiatio/tiatio";
import SobrinhaSobrinho from "./sobrinhasobrinho/sobrinhasobrinho";
import PrimaPrimo from "./primaprimo/primaprimo";
import AvoAvo from "./avoavo/avoavo";
import NetaNeto from "./netaneto/netaneto";
import MadrinhaPadrinho from "./madrinhapadrinho/madrinhapadrinho";
import AfilhadaAfilhado from "./afilhadaafilhado/afilhadaafilhado";
import ComadreCompadre from "./comadrecompadre/comadrecompadre";
import NamoradaNamorado from "./namoradanamorado/namoradanamorado";
import Ficantes from "./ficantes/ficantes";
import EsposaEsposo from "./esposaesposo/esposaesposo";
import NoivaNoivo from "./noivanoivo/noivanoivo";
import ExNamoradoExEsposo from "./exnamoradoaexesposoa/exnamoradoaexesposoa";
import CasamentoRota from "./casamento/casamento";
import Noivado from "./noivado/noivado";
import Namoro from "./namoro/namoro";
import Amante from "./amante/amante";
import Reconciliacao from "./reconciliacao/reconciliacao";
import DeRelacionamento from "./derelacionamento/derelacionamento";
import ComConquista from "./comconquista/comconquista";

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
      <Route path="/amigaamigo" element={<AmigaAmigo />} />
      <Route path="/neutro" element={<Neutro />} />
      <Route path="/pessoaespecial" element={<PessoaEspecial />} />
      <Route path="/atrasado" element={<Atrasado />} />
      <Route path="/antecipado" element={<Antecipado />} />
      <Route path="/comgozacao" element={<ComGozacao />} />
      <Route path="/comotimismo" element={<ComOtimismo />} />
      <Route path="/pessoadistante" element={<PessoaDistante />} />
      <Route path="/cliente" element={<Cliente />} />
      <Route path="/crianca" element={<Crianca />} />
      <Route path="/15anos" element={<QuinzeAnos />} />
      <Route path="/casamento" element={<Casamento />} />
      <Route path="/terceiros" element={<Terceiros />} />
      <Route path="/maepai" element={<MaePai />} />
      <Route path="/filhofilha" element={<FilhoFilha />} />
      <Route path="/irmaoirma" element={<IrmaoIrma />} />
      <Route path="/sograsogro" element={<SograSogro />} />
      <Route path="/genronora" element={<GenroNora />} />
      <Route path="/cunhadacunhado" element={<CunhadaCunhado />} />
      <Route path="/tiatio" element={<TiaTio />} />
      <Route path="/sobrinhasobrinho" element={<SobrinhaSobrinho />} />
      <Route path="/primaprimo" element={<PrimaPrimo />} />
      <Route path="/avoavo" element={<AvoAvo />} />
      <Route path="/netaneto" element={<NetaNeto />} />
      <Route path="/madrinhapadrinho" element={<MadrinhaPadrinho />} />
      <Route path="/afilhadaafilhado" element={<AfilhadaAfilhado />} />
      <Route path="/comadrecompadre" element={<ComadreCompadre />} />
      <Route path="/namoradanamorado" element={<NamoradaNamorado />} />
      <Route path="/ficantes" element={<Ficantes />} />
      <Route path="/esposaesposo" element={<EsposaEsposo />} />
      <Route path="/noivanoivo" element={<NoivaNoivo />} />
      <Route path="/exnamoradoaexesposoa" element={<ExNamoradoExEsposo />} />
      <Route path="/casamento" element={<CasamentoRota />} />
      <Route path="/noivado" element={<Noivado />} />
      <Route path="/namoro" element={<Namoro />} />
      <Route path="/amante" element={<Amante />} />
      <Route path="/reconciliacao" element={<Reconciliacao />} />
      <Route path="/derelacionamento" element={<DeRelacionamento />} />
      <Route path="/comconquista" element={<ComConquista />} />
    </Routes>
  );
};

export default AniversarioRoutes;
