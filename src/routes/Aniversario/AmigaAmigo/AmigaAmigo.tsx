import React from "react";
import PageAudioLayout from "../../../components/PageAudioLayout/PageAudioLayout";
import Audio from "../../../assets/Msgaudios/Aniversário/Aniversá<rio-Amiga-Amigo />


const audioData = [
    {
      id: "00",
      title: "Aniversário Amiga/Amigo",
      subItems: [
        {
          id: "01",
          subTitle: "Aniversário Amiga",
          src: Audio,
        },
      ],
    },
  ];

const AmigaAmigo: React.FC = () => {
    return <PageAudioLayout audioData={audioData}/>
}

export default AmigaAmigo;