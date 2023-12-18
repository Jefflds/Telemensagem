import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Crianca.data";

const Crianca: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Crianca;
