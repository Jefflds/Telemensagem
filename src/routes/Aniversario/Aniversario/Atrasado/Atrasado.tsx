import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Atrasado.data";

const Atrasado: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Atrasado;
