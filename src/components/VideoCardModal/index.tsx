import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import AnnouLine from "../AnnouLine";
import CategoryButtons from "../Buttons/CategoryButtons";
import { Video } from "@/types/video";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;
const ModalContent = styled.div`
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 0px;
  height: 100%;
  max-width: 470px;
  width: 100%;
  max-height: 520px;
  overflow-y: auto;
  z-index: 1001;

  @media (min-width: 380px) {
    max-height: 560px;
  }
`;
const VideoContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  position: relative;
  overflow: hidden;
`;
const YouTubeVideo = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const TitleVideo = styled.div`
  height: 90px;
`;
const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CardTitle = styled.div`
  display: flex;
  max-width: 230px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  h5 {
    font-size: 15px;
  }
`;
const StyledCloseIcon = styled(AiOutlineClose)`
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 10px;
`;
const HighlightedText = styled.span`
  color: #0084ff;
`;
const DescCard = styled.div`
  h5 {
    font-size: 14px;
  }
`;
const InfoCont = styled.div`
  padding: 4% 5% 4% 5%;
`;
const DescriptCard = styled.div`
  margin-top: 8px;
  p {
    font-size: 13px;
  }
`;
const DownStyle = styled.div`
  margin-top: 20px;
`;
const CategoryStyle = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

type VideoCardModalProps = {
  video: Video | null;
  onClose: () => void;
};

export default function VideoCardModal({
  video,
  onClose,
}: VideoCardModalProps) {
  const videoId = video ? video.videoId : "";

  return (
    <ModalOverlay>
      <ModalContent>
        <TitleVideo>
          <CloseIcon>
            <StyledCloseIcon onClick={onClose} />
          </CloseIcon>
          <CardTitle>
            <h5>
              <HighlightedText>Webinar:</HighlightedText> {video?.title}
            </h5>
          </CardTitle>
        </TitleVideo>
        <VideoContainer>
          <YouTubeVideo
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        </VideoContainer>
        <InfoCont>
          <DescCard>
            <h5>Descrição</h5>
            <AnnouLine mgtop="5px" mtbot="0px" />
          </DescCard>
          <DescriptCard>
            <p>{video ? video.description : ""}</p>
          </DescriptCard>
          <DownStyle>
            <h5>Downloads</h5>
          </DownStyle>
          <AnnouLine mgtop="5px" mtbot="10px" />
          <CategoryStyle>
            <CategoryButtons cateVideo={video} downloadIndex={0} />
            <CategoryButtons cateVideo={video} downloadIndex={1} />
            <CategoryButtons cateVideo={video} downloadIndex={2} />
          </CategoryStyle>
        </InfoCont>
      </ModalContent>
    </ModalOverlay>
  );
}
