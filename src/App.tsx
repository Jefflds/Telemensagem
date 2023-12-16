import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";

import Evangelico from "./routes/Evagelicas/Evangelicas";
import Variedades from "./routes/Variadas/Variadas";
import Lgbt from "./routes/Lgbt/Lgbt";
import DataEspeciais from "./routes/DatasEspeciais/DatasEspeciais";

import Banner from "./layout/Banner/Banner";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Romanticos from "./routes/Romanticos/Romanticos";
import AniversarioRoutes from "./routes/Aniversario/AniversarioRoutes";
import ButtonWhats from "./components/buttonWhats/buttonWhats";

const App: React.FC = () => {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aniversario/*" element={<AniversarioRoutes />} />
        <Route path="/romanticas" element={<Romanticos />} />
        <Route path="/evangelicas" element={<Evangelico />} />
        <Route path="/variadas" element={<Variedades />} />
        <Route path="/lgbt" element={<Lgbt />} />
        <Route path="/datasespeciais" element={<DataEspeciais />} />
       

      </Routes>
      <ButtonWhats/>
      <Footer />
    </Router>
  );
};

export default App;
