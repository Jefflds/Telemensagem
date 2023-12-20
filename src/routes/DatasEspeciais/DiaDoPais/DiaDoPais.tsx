import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./DiaDosPais.data";

const DiaDosPais: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default DiaDosPais;