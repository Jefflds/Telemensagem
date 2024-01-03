import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./PessoaDistante.data";

const PessoaDistante: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default PessoaDistante;
