import React from "react";
import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface VariadasProps extends PageLayoutProps {}

const Variadas: React.FC<VariadasProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Variadas;
