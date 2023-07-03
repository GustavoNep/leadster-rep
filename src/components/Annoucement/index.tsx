import styled from "styled-components";
import AnouButton from "../Buttons/AnouButton";
import AnnouLine from "../AnnouLine";
import Image from "next/image";
import loadImg from "../../assets/asset-header.png";
import { keyframes } from "styled-components";
import Link from "next/link";

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  height: 30vh;
  background-color: var(--dsc-color-bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (min-width: 576px) {
    height: 70vh;
  }
`;
const Wrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  user-select: none;
  animation: ${slideInAnimation} 0.5s ease-in-out;
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
      font-size: 3.5vh;
    }
  }

  @media (min-width: 768px) {
    h3 {
      font-size: 4vh;
    }
  }
  @media (min-width: 1024px) {
    h3 {
      font-size: 5vh;
    }
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 6vh;
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
      font-size: 8vh;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 9vh;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 9.8vh;
    }
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 12vh;
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
  animation: ${fadeInAnimation} 1s ease-in-out;

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
      font-size: 1.62vh;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.82vh;
    }
  }

  @media (min-width: 1024px) {
    p {
      font-size: 1.98vh;
    }
  }
  @media (min-width: 1200px) {
    p {
      font-size: 2.45vh;
    }
  }
`;

export default function Annoucement() {
  return (
    <Container>
      <Wrapper>
        <AnouStyle>
          <Link href='https://leadster.com.br/' target="_blank">
            <AnouButton text="WEBINARS EXCLUSIVOS" />
          </Link>
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
