import PageAudioLayout from "../../../../components/PageAudioLayout/PageAudioLayout";
import { audioData } from "./Reconciliacao.data.ts";

const Reconciliacao: React.FC = () => {
  return <PageAudioLayout audioData={audioData} />;
};

export default Reconciliacao;