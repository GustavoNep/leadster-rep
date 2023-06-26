import styled from "styled-components";
import VideoCard from "../VideoCard";
import AnnouLine from "../AnnouLine";
import Pagination from "../Pagination";
import ButtonLead from "../ButtonLead";
import OrderButton from "../OrderButton";

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

const ButtonRow = styled.div`
  
`;
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


`
export default function VideosRow() {
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
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Wrapper>
      <LineCont>
        <AnnouLine mgtop="30px" mtbot="0px" />
      </LineCont>
      <Pagination />
    </Container>
  );
}
