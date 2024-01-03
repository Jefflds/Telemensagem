import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Neutro.data";

const Neutro: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Neutro;
