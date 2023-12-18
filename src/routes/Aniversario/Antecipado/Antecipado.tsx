import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Antecipado.data";

const Antecipado: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default Antecipado;