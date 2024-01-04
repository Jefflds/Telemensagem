import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface AniversarioProps extends PageLayoutProps {}

const Aniversario: React.FC<AniversarioProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Aniversario;
