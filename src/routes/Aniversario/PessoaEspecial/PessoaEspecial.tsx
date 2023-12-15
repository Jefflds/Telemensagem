import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./PessoaEspecial.data";

const PessoaEspecial: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default PessoaEspecial;