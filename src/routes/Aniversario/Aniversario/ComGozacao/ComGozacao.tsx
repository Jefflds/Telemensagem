import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./ComGozacao.data";

const ComGozacao: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default ComGozacao;
