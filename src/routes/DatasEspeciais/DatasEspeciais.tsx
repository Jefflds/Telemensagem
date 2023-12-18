import React from "react";
import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface DataEspeciaisProps extends PageLayoutProps {}

const DataEspeciais: React.FC<DataEspeciaisProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default DataEspeciais;
