import React from "react";
import PageLayout from "../../components/PageLayout/PageLayout";

const layoutsItems = [
  {
    title: "LGBT",
    buttonValues: ["Aniversário", "Romântica"],
  },
];

const lgbt: React.FC = () => {
  return <PageLayout layoutsItems={layoutsItems} />;
};

export default lgbt;
