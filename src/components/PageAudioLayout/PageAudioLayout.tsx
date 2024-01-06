import { Container, Row, Col } from "react-bootstrap";
import { PageAudioLayoutContainer } from "./PageAudioLayout.styles";
import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

interface SubItem {
  id: string;
  subTitle: string;
  src: string;
}

interface AudioItem {
  id: string;
  title: string;
  subTitle: string;
  subItems: SubItem[];
}

interface PageAudioLayoutProps {
  audioData: AudioItem[];
}

const PageAudioLayout: React.FC<PageAudioLayoutProps> = ({ audioData }) => {
  return (
    <PageAudioLayoutContainer>
      <Container fluid>
        {audioData.map((audio: AudioItem) => (
          <div key={audio.id} className="mb-3">
            <h2>{audio.title}</h2>
            <h3 className="mt-2 mb-2">{audio.subTitle}</h3>
            {audio.subItems.map((subItem: SubItem) => (
              <Row key={subItem.id} className="mb-3">
                <Col xs={12} lg={6} xl={4}>
                  <div className="d-flex flex-column">
                    <span className="mt-2 mb-2">{`${subItem.id}-${subItem.subTitle}`}</span>
                    <audio
                      controlsList="nodownload"
                      className="w-100 d-block mt-1 mb-1"
                      controls
                      src={subItem.src}
                    ></audio>
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                  </div>
                </Col>
              </Row>
            ))}
          </div>
        ))}
      </Container>
    </PageAudioLayoutContainer>
  );
};

export default PageAudioLayout;
