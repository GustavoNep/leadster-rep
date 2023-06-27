import Image from "next/image";
import styled from "styled-components";
import imgInfo from "../../assets/corpo.png";
import AnnouLine from "../AnnouLine";
import InfoButton from "../Buttons/InfoButton";
import seloImg from "../../assets/selo.png";
import cardImg from '../../assets/nocard.webp'
import starImg from '../../assets/rating.webp'

const Container = styled.div`
  height: 550px;
  background-color: var(--dsc-color-bg-primary);
`;
const Wrapper = styled.div`
  display: flex;
  gap: 50px;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
`;
const ImgCont = styled.div`
  flex: 1;
`;
const InfoCont = styled.div`
  margin-top: 13%;

  flex: 1;
  font-weight: none;
  h2 {
    font-size: 37px;
    color: #1c3c50;
    font-weight: normal;
  }

  p {
    margin: 5px 0;
  }
`;
const ImageCont = styled(Image)`
  width: 100%;
  padding-top: 20px;
  height: 100%;
  object-fit: contain;
`;

const TextHigh = styled.span`
  font-weight: 700;
`;
const LineLimit = styled.div`
  max-width: 460px;
`;
const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ImageSelo = styled(Image)`
  width: 30%;
  height: 45%;
  object-fit: contain;
`;

const CreditCont = styled.div`
    padding-top: 8px;
    display: flex;
    font-size: 10px;
    align-items: center;
    letter-spacing: 0.5px;
    gap: 3px;
`


export default function InfoContainer() {
  return (
    <Container>
      <Wrapper>
        <ImgCont>
          <ImageCont src={imgInfo} alt="/" />
        </ImgCont>
        <InfoCont>
          <h2>
            Pronto para triplicar sua <br></br>{" "}
            <TextHigh>Geração de Leads?</TextHigh>
          </h2>
          <p>
            Criação e ativação em <TextHigh>4 minutos.</TextHigh>
          </p>
          <LineLimit>
            <AnnouLine mgtop="13px" mtbot="15px" />
          </LineLimit>
          <ButtonDiv>
            <InfoButton text="VER DEMONSTRAÇÃO" />
            <ImageSelo src={seloImg} alt="/" />
          </ButtonDiv>
          <CreditCont>
            <Image src={cardImg} alt="/" width={14}/>
            <p><TextHigh>Não</TextHigh> é necessário Cartão de Crédito |</p>
            <Image src={starImg} alt="/" width={70}/>
            <span>4.9/5 média de satisfação</span>
          </CreditCont>
        </InfoCont>
      </Wrapper>
    </Container>
  );
}
