import styled from "styled-components";
import VideoCard from "../VideoCard";
import AnnouLine from "../AnnouLine";
import Pagination from "../Pagination";
import ButtonLead from "../Buttons/ButtonLead";
import OrderButton from "../Buttons/OrderButton";
import { useState } from "react";
import VideoCardModal from "../VideoCardModal";
import { videos } from "@/constants";
import { Video } from "@/types/video";

const Container = styled.div`
  height: 100%;
`;
const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  @media (min-width: 1024px) {
    max-width: 968px;

  } 
`;
const LineCont = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  @media (min-width: 1024px) {
    max-width: 968px;
  } 
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
  padding-bottom: 15px;

  @media (min-width: 576px) {
    justify-content: flex-start;
  }
`;

const WrapItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 50px;

  @media (min-width: 576px) {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    max-width: 968px;

  } 

 
`;

const OrderStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function VideosRow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  type Props = {
    video: Video;
  };

  const openModal = ({ video }: Props) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  return (
    <Container>
      <WrapItems>
        <ButtonRow>
          <ButtonLead text="Agências" />
          <ButtonLead text="Chatbot" />
          <ButtonLead text="Marketing Digital" />
          <ButtonLead text="Geração de Leads" />
          <ButtonLead text="Mídia Page" />
        </ButtonRow>
        <OrderStyle>
          <OrderButton />
        </OrderStyle>
      </WrapItems>
      <LineCont>
        <AnnouLine mgtop="15px" mtbot="30px" />
      </LineCont>
      <Wrapper>
        {videos.map((video) => (
          <VideoCard
            onClick={() => openModal({ video })}
            title={video.title}
            key={video.id}
          />
        ))}
      </Wrapper>
      <LineCont>
        <AnnouLine mgtop="30px" mtbot="0px" />
      </LineCont>
      <Pagination />
      {isModalOpen && (
        <ModalWrapper>
          <VideoCardModal video={selectedVideo} onClose={closeModal} />
        </ModalWrapper>
      )}
    </Container>
  );
}
