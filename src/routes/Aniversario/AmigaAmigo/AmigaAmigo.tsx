import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";

const audioData = [
    {
      id: "00",
      title: "Aniversário Amiga/Amigo",
      subItems: [
        {
          id: "01",
          subTitle: "Aniversário Amiga",
          src: "../../assets/audios/Aniversario/Amiga-Amigo/Telemensagem-SPP-(00).mp3",
        },
      ],
    },
  ];

const AmigaAmigo: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default AmigaAmigo;