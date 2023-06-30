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
    max-width: 97%;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    max-width: 1248px;
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
    padding-top: 8%;
  }
  @media (min-width: 1024px) {
    
    
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
  max-width: 77%;
  margin: 0 auto;
  @media (min-width: 576px) {
    max-width: 80%;
  }
  @media (min-width: 678px) {
    max-width: 79%;
  }
  @media (min-width: 1024px) {
    max-width: 85%;
  } 
  
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  gap: 4%;
  justify-content: center;
  @media (min-width: 576px) {
    max-width: 80%;
    justify-content: center;
  }
  @media (min-width: 678px) {
    max-width: 95%;
  }
  @media (min-width: 1024px) {
    justify-content: flex-start;
    max-width: 85%;
    padding-top: 16px;
  } 
  
`;

const ImageSelo = styled(Image)`
  width: 30%;
  height: 45%;
  object-fit: contain;
  @media (min-width: 1024px) {
    width: 36%;
  } 
  @media (min-width: 1200px) {
    width: 28%;
  } 
`;

const CreditCont = styled.div`
  padding-top: 14px;
  display: flex;
  font-size: 0.24rem;
  justify-content: center;
  align-items: center;
  gap: 2%;
  font-weight: 400;
  max-width: 80%;
  margin: 0 auto;
  justify-content: center;
  @media (min-width: 678px) {
    justify-content: center;
    max-width: 90%;
    font-size: 0.33rem;
  }
  @media (min-width: 1024px) {
    max-width: 90%;
    padding-top: 20px;
    font-size: 0.65rem;
  } 
  @media (min-width: 1200px) {
    max-width: 100%;
    padding-top: 30px;
    font-size: 0.96rem;
    padding-left: 8%;
    
  } 
  
`;

const TitleCont = styled.div`
  display: flex;
  h2 {
    font-size: 4vw;
    color: #1c3c50;
    font-weight: normal;
  }

  @media (min-width: 576px) {
    justify-content: center;
  }
  @media (min-width: 678px) {
    justify-content: flex-start;
    h2 {
      font-size: 2vw;
      
    }
  }
  @media (min-width: 1024px) {
    h2 {
      font-size: 2.3rem;
    }
  }
`;
const DescCont = styled.div`
  display: flex;
  font-size: 3vw;
  padding-top: 3px;
  @media (min-width: 576px) {
    justify-content: center;
  }
  @media (min-width: 678px) {
    font-size: 2vw;
    justify-content: flex-start;
  }
  @media (min-width: 1024px) {
    font-size: 1.1rem;
    padding-top: 5%;
  }
`;
const TitleDesc = styled.div`

  max-width: 70%;
  margin: 0 auto;
  @media (min-width: 678px) {
    max-width: 78%;
  }
  @media (min-width: 1024px) {
    max-width: 85%;
  }
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
            <AnnouLine mgtop="20px" mtbot="15px" />
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
