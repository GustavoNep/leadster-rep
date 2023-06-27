import styled from "styled-components";
import VideoCard from "../VideoCard";
import AnnouLine from "../AnnouLine";
import Pagination from "../Pagination";
import ButtonLead from "../Buttons/ButtonLead";
import OrderButton from "../Buttons/OrderButton";
import { useState } from "react";
import VideoCardModal from "../VideoCardModal";

const Container = styled.div`
  height: 900px;
`;
const Wrapper = styled.div`
  padding: 10px;
  width: 100%;
  max-width: 946px;
  height: 700px;
  margin: 0 auto;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
`;
const LineCont = styled.div`
  width: 100%;
  max-width: 946px;
  margin: 0 auto;
`;

const ButtonRow = styled.div``;
const WrapItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 946px;
  margin: 0 auto;
  margin-top: 70px;
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
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
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
        <VideoCard onClick={openModal} />
      </Wrapper>
      <LineCont>
        <AnnouLine mgtop="30px" mtbot="0px" />
      </LineCont>
      <Pagination />
      {isModalOpen && (
        <ModalWrapper>
          <VideoCardModal onClose={closeModal} />
        </ModalWrapper>
      )}
    </Container>
  );
}
