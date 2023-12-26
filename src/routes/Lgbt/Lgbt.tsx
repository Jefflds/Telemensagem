import React from "react";
import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface LgbtProps extends PageLayoutProps {}

const Lgbt: React.FC<LgbtProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Lgbt;
