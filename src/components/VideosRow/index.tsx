import styled from "styled-components";
import VideoCard from "../VideoCard";

const Container = styled.div`
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export default function VideosRow() {
  return (
    <Container>
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
    </Container>
  );
}
