import React from "react";
import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface EvangelicasProps extends PageLayoutProps {}

const Evangelicas: React.FC<EvangelicasProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Evangelicas;