import Image from "next/image";
import styled from "styled-components";
import imgInfo from "../../assets/corpo.png";
import AnnouLine from "../AnnouLine";
import InfoButton from "../Buttons/InfoButton";
import seloImg from "../../assets/selo.png";
import cardImg from "../../assets/nocard.webp";
import starImg from "../../assets/rating.webp";

const Container = styled.div`
  height: 70vh;
  height: 100%;
  width: 100%;
  background-color: rgba(240, 248, 255, 1);
`;
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 84%;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 25px;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 90%;
  }
  @media (min-width: 678px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    max-width: 968px;
  }
`;

const ImgCont = styled.div`
  @media (min-width: 678px) {
    flex: 1;
  }
`;
const InfoCont = styled.div`
  @media (min-width: 678px) {
    flex: 1;
  }
  font-weight: none;
  padding-top: 4px;

  @media (min-width: 678px) {
    padding-top: 10%;
  }
  @media (min-width: 1200px) {
    padding-top: 14%;
  }
`;
const ImageCont = styled(Image)`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (min-width: 576px) {
    width: 60%;
    height: 60%;
  }
  @media (min-width: 678px) {
    width: 100%;
    height: 100%;
  }
`;

const TextHigh = styled.span`
  font-weight: 700;
`;
const LineLimit = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  max-width: 71%;
  margin: 0 auto;
  gap: 10%;

`;

const ImageSelo = styled(Image)`
  width: 30%;
  height: 45%;
  object-fit: contain;
`;

const CreditCont = styled.div`
  padding-top: 14px;
  display: flex;
  font-size: 0.6rem;
  justify-content: center;
  align-items: center;
  gap: 1.5%;
`;

const TitleCont = styled.div`
  display: flex;
  h2 {
    font-size: 4vw;
    color: #1c3c50;
    font-weight: normal;
  }
  @media (min-width: 678px) {
    h2 {
      font-size: 2vw;
    }
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 1.7rem;
    }
  }
`;
const DescCont = styled.div`
  display: flex;
  font-size: 3vw;
  padding-top: 3px;
  @media (min-width: 678px) {
    font-size: 2vw;
  }
  @media (min-width: 1200px) {
    font-size: 1.3rem;
  }
`;
const TitleDesc = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;

export default function InfoContainer() {
  return (
    <Container>
      <Wrapper>
        <ImgCont>
          <ImageCont src={imgInfo} alt="/" />
        </ImgCont>
        <InfoCont>
          <TitleDesc>
            <TitleCont>
              <h2>
                Pronto para triplicar sua <br></br>{" "}
                <TextHigh>Geração de Leads?</TextHigh>
              </h2>
            </TitleCont>
            <DescCont>
              <p>
                Criação e ativação em <TextHigh>4 minutos.</TextHigh>
              </p>
            </DescCont>
          </TitleDesc>
          <LineLimit>
            <AnnouLine mgtop="15px" mtbot="15px" />
          </LineLimit>
          <ButtonDiv>
            <InfoButton text="VER DEMONSTRAÇÃO" />
            <ImageSelo src={seloImg} alt="/" />
          </ButtonDiv>
          <CreditCont>
            <Image src={cardImg} alt="/" width={14} />
            <p>
              <TextHigh>Não</TextHigh> é necessário Cartão de Crédito |
            </p>
            <Image src={starImg} alt="/" width={70} />
            <span>4.9/5 média de satisfação</span>
          </CreditCont>
        </InfoCont>
      </Wrapper>
    </Container>
  );
}
