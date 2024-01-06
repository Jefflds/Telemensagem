import { Routes, Route } from "react-router-dom";
import NamoradoNamorada from "./NamoradoNamorada/NamoradoNamorada"
import Ficantes from "./Ficantes/Ficantes"
import EsposaEsposo from "./EsposaEsposo/EsposaEsposo.tsx"
import NoivaNoivo from "./NoivaNoivo/NoivaNoivo.tsx"
import ExNamoradoExEsposa from "./ExNamoradoExEsposa/ExNamoradoExEsposa.tsx"
import Casamento from "./Casamento/Casamento.tsx"
import Noivado from "./Noivado/Noivado.tsx"
import Namoro from "./Namoro/Namoro.tsx"

import DeRelacionamento from "./DeRelacionamento/DeRelacionamento.tsx"
import ComConquista from "./ComConquista/ComConquista.tsx"
import Reconciliacao from "./Reconciliacao/Reconciliacao.tsx"


const AniversarioRomanticoRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/namoradanamorado" element={<NamoradoNamorada/>}/>
      <Route path="/ficantes" element={<Ficantes/>}/>
      <Route path="/esposaesposo" element={<EsposaEsposo/>}/>
      <Route path="/noivanoivo" element={<NoivaNoivo/>}/>
      <Route path="/ex-namoradoaex-esposoa" element={<ExNamoradoExEsposa/>}/>
      <Route path="/casamento" element={<Casamento/>}/>
      <Route path="/noivado" element={<Noivado/>}/>
      <Route path="/namoro" element={<Namoro/>}/>
    
      <Route path="/reconciliacao" element={<Reconciliacao/>}/>
      <Route path="/de-relacionamento" element={<DeRelacionamento/>}/>
      <Route path="/com-conquista" element={<ComConquista/>}/>

    </Routes>
  );
}

export default AniversarioRomanticoRoute