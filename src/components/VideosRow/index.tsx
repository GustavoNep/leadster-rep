import styled from "styled-components";
import VideoCard from "../VideoCard";
import AnnouLine from "../AnnouLine";

const Container = styled.div`
  height: 850px;
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
  margin-top: 40px;
`;
const PageStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  span {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right: 2px;
  }

  .pagination-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 0 1px;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      color: #2c83fb;
      font-weight: 700;
      border-color: #2c83fb;
    }
  }
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
      <LineCont>
        <AnnouLine />
      </LineCont>
      <PageStyle>
        <span>Página</span>
        <div className="pagination">
          <div className="pagination-item">1</div>
          <div className="pagination-item">2</div>
          <div className="pagination-item">3</div>
          <div className="pagination-item">4</div>
        </div>
      </PageStyle>
    </Container>
  );
}
