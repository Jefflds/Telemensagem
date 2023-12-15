import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Aniversario from "./routes/Aniversario/Aniversario";

import Evangelico from "./routes/Evagelicas/Evangelicas";
import Variedades from "./routes/Variadas/Variadas";
import Lgbt from "./routes/Lgbt/Lgbt";
import DataEspeciais from "./routes/DatasEspeciais/DatasEspeciais";
import Duvidas from "./routes/duvidas/duvidas";
import Contato from "./routes/contato/contato";
import Banner from "./layout/Banner/Banner";
import Header from "./layout/Header/Header";

import Footer from "./layout/Footer/Footer";
import Romanticos from "./routes/Romanticos/Romanticos";

const App: React.FC = () => {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aniversario" element={<Aniversario />} />
        <Route path="/romanticas" element={<Romanticos />} />
        <Route path="/evangelicas" element={<Evangelico />} />
        <Route path="/variadas" element={<Variedades />} />
        <Route path="/lgbt" element={<Lgbt />} />
        <Route path="/datasespeciais" element={<DataEspeciais />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
