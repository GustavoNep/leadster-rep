import styled from "styled-components";
import VideoCard from "../VideoCard";
import AnnouLine from "../AnnouLine";
import Pagination from "../Pagination";
import ButtonLead from "../Buttons/ButtonLead";
import OrderButton from "../Buttons/OrderButton";
import { useEffect, useState } from "react";
import VideoCardModal from "../VideoCardModal";
import { videos } from "@/constants";
import { Video } from "@/types/video";
import Link from "next/link";
import { useContext } from "react";
import ButtonStateProvider, { ButtonStateContext } from '../../app/ButtonStateContext';


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
  user-select: none;

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
  user-select: none;
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

const ITEMS_PER_PAGE = 9;

export default function VideosRow() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const { activeButton, setActiveButton} = useContext(ButtonStateContext);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const videosPerPage = videos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(videos.length / ITEMS_PER_PAGE);

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
          <Link href='/agencia'>
            <ButtonLead text="Agências" onClick={() => setActiveButton('agencia')} active={activeButton === 'agencia'}/>
          </Link>
          <Link href="/chatbot">
            <ButtonLead text="Chatbot" onClick={() => setActiveButton('chatbot')} active={activeButton === 'chatbot'}/>
          </Link>
          <Link href='/marketing'>
            <ButtonLead text="Marketing Digital" onClick={() => setActiveButton('marketing')} active={activeButton === 'marketing'}/>
          </Link>
          <Link href='/'>
            <ButtonLead text="Geração de Leads" onClick={() => setActiveButton('Geração de Leads')} active={activeButton === 'Geração de Leads'}/>
          </Link>
          <Link href='/midia'>
            <ButtonLead text="Mídia Page" onClick={() => setActiveButton('midia')} active={activeButton === 'midia'}/>
          </Link>
        </ButtonRow>
        <OrderStyle>
          <OrderButton />
        </OrderStyle>
      </WrapItems>
      <LineCont>
        <AnnouLine mgtop="15px" mtbot="30px" />
      </LineCont>
      <Wrapper>
        {videosPerPage.map((video) => (
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
      <Pagination 
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      {isModalOpen && (
        <ModalWrapper>
          <VideoCardModal video={selectedVideo} onClose={closeModal} />
        </ModalWrapper>
      )}
    </Container>
  );
}
