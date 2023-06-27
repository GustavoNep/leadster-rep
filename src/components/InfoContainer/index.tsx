import Image from "next/image";
import styled from "styled-components";
import imgInfo from "../../assets/corpo.png";

const Container = styled.div`
  height: 550px;
  background-color: var(--dsc-color-bg-primary);
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1150px;
  margin: 0 auto;
`;
const ImgCont = styled.div`
    flex: 1;
`;
const InfoCont = styled.div`
    flex: 1;
    padding: 50px;
    padding-top: 160px;
    padding-left: 60px;
`;
const ImageCont = styled(Image)`
  width: 106%;
  padding-top: 20px;
  height: 100%;
  object-fit: contain;
`;
export default function InfoContainer() {
  return (
    <Container>
      <Wrapper>
        <ImgCont>
          <ImageCont src={imgInfo} alt="/" />
        </ImgCont>
        <InfoCont>
          <h2>Pronto para triplicar sua Geração de Leads ddddddddd?</h2>
          <p>Criação e ativação em 4 minutos.</p>
          <div>
            <button>VER DEMONSTRAÇÃO</button>
            
          </div>
          <div>
            
            <p>Não é necessário Cartão de Crédito |</p>
            
            <span>4.9/5 média de satisfação</span>
          </div>
        </InfoCont>
      </Wrapper>
    </Container>
  );
}
