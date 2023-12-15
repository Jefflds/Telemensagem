import React from "react";
import {
  Button,
  CenteredParagraph,
  ColoredSpan,
  Container,
  Content,
  StrongSpan,
} from "./PageLayout.styles";
import { Link } from "react-router-dom";

interface ItemsProps {
  title: string;
  buttonValues: string[];
}

interface PageLayoutProps {
  layoutsItems: ItemsProps[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ layoutsItems }) => {
  const LinkToRoute = (item: string) => {
    const normalizedStr = item.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    return normalizedStr;
  };

  return (
    <Content>
      {layoutsItems.map((layout, index) => (
        <Container key={index}>
          <CenteredParagraph>
            <ColoredSpan>
              <StrongSpan>{layout.title}</StrongSpan>
            </ColoredSpan>
          </CenteredParagraph>
          <CenteredParagraph>
            <ColoredSpan>
              {layout.buttonValues.map((button, buttonIndex) => (
                <Link key={buttonIndex} to={LinkToRoute(button)}>
                  <Button>{button}</Button>
                </Link>
              ))}
            </ColoredSpan>
          </CenteredParagraph>
        </Container>
      ))}
    </Content>
  );
};

export default PageLayout;
