import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./DiaDasMaes.data";

const DiaDasMaes: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default DiaDasMaes;