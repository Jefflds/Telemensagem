import React from "react";
import {
  Button,
  CenteredParagraph,
  ColoredSpan,
  Content,
  StrongSpan,
} from "./PageLayout.styles";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

interface ItemsProps {
  title: string;
  buttonValues: string[];
}

export interface PageLayoutProps {
  layoutsItems: ItemsProps[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ layoutsItems }) => {
  const LinkToRoute = (item: string) => {
    const normalizedStr = item
      .toLowerCase()
      .replace(/[áàãâä]/g, "a")
      .replace(/[éèêë]/g, "e")
      .replace(/[íìîï]/g, "i")
      .replace(/[óòõôö]/g, "o")
      .replace(/[úùûü]/g, "u")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, "-");

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
                <Link
                  key={buttonIndex}
                  to={
                    layoutsItems.length > 1
                      ? `${LinkToRoute(layout.title)}/${LinkToRoute(button)}`
                      : LinkToRoute(button)
                  }
                >
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
