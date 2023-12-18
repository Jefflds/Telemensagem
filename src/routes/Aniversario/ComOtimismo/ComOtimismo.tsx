import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./ComOtimismo.data";

const ComOtimismo: React.FC = () => {
    return <PageAudioLayout audioData={audioData} />;
}

export default ComOtimismo;