import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./AmigaAmigo.data";

const AmigaAmigo: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default AmigaAmigo;