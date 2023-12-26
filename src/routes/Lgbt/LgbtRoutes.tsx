import { Routes, Route } from "react-router-dom";
import Lgbt from "./Lgbt";
import LGBTRomantica from "./Romantica/LGBTRomantica";
import LGBTAniversario from "./Aniversario/LGBTAniversario";

const layoutsItems = [
  {
    title: "LGBT",
    buttonValues: ["Aniversário", "Romântica"],
  },
];

const LgbtRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Lgbt layoutsItems={layoutsItems} />} />
      <Route path="/aniversario" element={<LGBTAniversario/>}/>
      <Route path="/romantica" element={<LGBTRomantica />}/>
    </Routes>
  );
};

export default LgbtRoutes;
