import styled from "styled-components";
import AnouButton from "../Buttons/AnouButton";
import AnnouLine from "../AnnouLine";
import Image from "next/image";
import loadImg from "../../assets/asset-header.png";

const Container = styled.div`
  height: 70vh;
  background-color: var(--dsc-color-bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const AnouStyle = styled.div`
  display: flex;
  justify-content: center;
`;
const AnouText = styled.div`
  display: flex;
  justify-content: center;
  h3 {
    font-size: 5vw;
    font-weight: 200;
    text-overflow: ellipsis;
  }

  @media (min-width: 576px) {
    h3 {
      font-size: 4vh;
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 5vh;
    }
  }
`;

const AnouTitle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  h1 {
    font-size: 10vw;
    background: linear-gradient(-45deg, #2c83fb, #1f76f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 6vh;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 8vh;
    }
  }
`;

const ImageLoad = styled(Image)`
  position: absolute;
  top: 10%;
  left: 99%;
  transform: translateX(-50%);
  width: 8%;
  height: 33%;
  @media (min-width: 576px) {
    left: 99%;
  }
`;

const AnouDesc = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.05vw;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (min-width: 576px) {
    p {
      font-size: 1.23vh;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.7vh;
    }
  }
`;

export default function Annoucement() {
  return (
    <Container>
      <Wrapper>
        <AnouStyle>
          <AnouButton text="WEBINARS EXCLUSIVOS" />
        </AnouStyle>
        <AnouText>
          <h3>Menos Conversinha,</h3>
        </AnouText>
        <AnouTitle>
          <h1>
            Mais Conversã
            <ImageLoad src={loadImg} alt="/" width={20}/>o
          </h1>
        </AnouTitle>
        <AnnouLine mgtop="0" mtbot="0" />
        <AnouDesc>
          <p>
            Conheça as estratégias que <b>mudarem o jogo</b> e como aplicá-las
            no seu negócio
          </p>
        </AnouDesc>
      </Wrapper>
    </Container>
  );
}
