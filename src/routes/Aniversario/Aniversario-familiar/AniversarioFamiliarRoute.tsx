import { Route, Routes } from "react-router-dom";
import MaePai from "./MaePai/MaePai";
import FilhoFilha from "./FilhoFilha/FilhoFilha";
import IrmaoIrma from "./IrmaoIrma/IrmaoIrma";
import SograSogro from "./SograSogro/SograSogro";
import GenroNora from "./GenroNora/GenroNora";
import CunhadoCunhada from "./CunhadoCunhada/CunhadoCunhada";
import TiaTio from "./TiaTio/TiaTio";
import SobrinhaSobrinho from "./SobrinhaSobrinho/SobrinhaSobrinho";
import PrimaPrimo from "./PrimaPrimo/PrimaPrimo";
import AvoAvo from "./AvoAvo/AvoAvo";
import NetaNeto from "./NetaNeto/NetaNeto";
import MadrinhaPadrinho from "./MadrinhaPadrinho/MadrinhaPadrinho";
import AfilhadaAfilhado from "./AfilhadaAfilhado/AfilhadaAfilhado";
import ComadreCompadre from "./ComadreCompadre/ComadreCompadre";

const AniversarioFamiliarRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/maepai" element={<MaePai />} />
      <Route path="/filhofilha" element={<FilhoFilha />} />
      <Route path="/irmaoirma" element={<IrmaoIrma />} />
      <Route path="/sograsogro" element={<SograSogro />} />
      <Route path="/genronora" element={<GenroNora />} />
      <Route path="/cunhadocunhada" element={<CunhadoCunhada />} />
      <Route path="/tiatio" element={<TiaTio />} />
      <Route path="/sobrinhasobrinho" element={<SobrinhaSobrinho />} />
      <Route path="/primaprimo" element={<PrimaPrimo />} />
      <Route path="/avoavo" element={<AvoAvo />} />
      <Route path="/netaneto" element={<NetaNeto />} />
      <Route path="/madrinhapadrinho" element={<MadrinhaPadrinho />} />
      <Route path="/afilhadaafilhado" element={<AfilhadaAfilhado />} />
      <Route path="/comadrecompadre" element={<ComadreCompadre />} />
    </Routes>
  );
};

export default AniversarioFamiliarRoute;
