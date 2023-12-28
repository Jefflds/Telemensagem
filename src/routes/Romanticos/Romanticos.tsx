import React from "react";
import PageLayout, {
  PageLayoutProps,
} from "../../components/PageLayout/PageLayout";

interface RomanticosProps extends PageLayoutProps {}

const Romanticos: React.FC<RomanticosProps> = ({ layoutsItems }) => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default Romanticos;
