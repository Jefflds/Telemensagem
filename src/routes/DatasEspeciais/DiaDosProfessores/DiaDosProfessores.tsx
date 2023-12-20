import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./DiaDosProfessores.data";

const DiaDosProfessores: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default DiaDosProfessores;

