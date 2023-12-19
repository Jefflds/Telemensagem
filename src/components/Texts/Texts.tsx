import React from "react";
import { TitleWithLineContainer } from "./Texts.styles";

interface TitleWithLineProps {
  title: string;
}

export const TitleWithLine: React.FC<TitleWithLineProps> = ({title}) => {
  return (
    <TitleWithLineContainer>
      <h3>
        <div className="title   text-wrap">{title}</div>
        <span className=" ">
          <span className="line ">
            <span></span>
          </span>
        </span>
      </h3>
    </TitleWithLineContainer>
  );
};

