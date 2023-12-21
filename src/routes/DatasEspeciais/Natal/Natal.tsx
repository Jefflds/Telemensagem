import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Natal.data";

const Natal: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default Natal;

