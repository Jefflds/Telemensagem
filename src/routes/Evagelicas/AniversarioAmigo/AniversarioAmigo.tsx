import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./AniversarioAmigo.data";

const AniversarioAmigo: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default AniversarioAmigo;
