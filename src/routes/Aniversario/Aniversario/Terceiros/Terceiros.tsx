import React from "react";
import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Terceiros.data";

const Terceiros: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>;
}
export default Terceiros;