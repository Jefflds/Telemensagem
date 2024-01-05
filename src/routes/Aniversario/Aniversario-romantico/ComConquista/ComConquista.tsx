import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./ComConsquista.data.ts";

const ComConsquista: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default ComConsquista;