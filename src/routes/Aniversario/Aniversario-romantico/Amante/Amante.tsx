import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Amante.data.ts";

const Amante: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Amante;