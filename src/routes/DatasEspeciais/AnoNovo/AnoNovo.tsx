import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./AnoNovo.data";

const AnoNovo: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default AnoNovo;