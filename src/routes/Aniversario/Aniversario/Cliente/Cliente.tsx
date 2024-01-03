import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Cliente.data";

const Cliente: React.FC = () => {
    return <PageAudioLayout audioData={audioData} />;
}

export default Cliente;