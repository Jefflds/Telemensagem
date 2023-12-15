import React from "react";
import { Container } from "react-bootstrap";
import { PageAudioLayoutContainer } from "./PageAudioLayout.styles";

interface SubItem {
  id: string;
  subTitle: string;
  src: string;
}

interface AudioItem {
  id: string;
  title: string;
  subItems: SubItem[];
}

interface PageAudioLayoutProps {
  audioData: AudioItem[];
}

const PageAudioLayout: React.FC<PageAudioLayoutProps> = ({ audioData }) => {
  return (
    <PageAudioLayoutContainer>
      <Container>
        {audioData.map((audio: AudioItem) => (
          <div
            key={audio.id}
            className="d-flex align-items-start justify-content-center flex-column mb-3"
          >
            <h2>{audio.title}</h2>
            {audio.subItems.map((subItem: SubItem) => (
              <div key={subItem.id} className="mb-3 d-flex flex-column">
                <h3 className="mt-2 mb-2">{subItem.subTitle}</h3>
                <span className="mt-2 mb-2">{`${subItem.id}-${subItem.subTitle}`}</span>
                <audio className="mt-2 mb-2" controls src={subItem.src}></audio>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </PageAudioLayoutContainer>
  );
};

export default PageAudioLayout;
