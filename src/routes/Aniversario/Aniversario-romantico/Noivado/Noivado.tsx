import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Noivado.data.ts";

const Noivado: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Noivado;