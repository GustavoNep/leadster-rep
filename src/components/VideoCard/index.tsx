import styled from "styled-components";
import thumbImg from "../../assets/thumbnail.png";
import Image from "next/image";

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
`;
const ImgCont = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 51%;
  position: relative;
`;
const DescCont = styled.div`

    padding: 13px;
    p {
        font-size: 14px;
        color: black;
        font-weight: 700;
        
    }
`;

const ImageWrapper = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default function VideoCard() {
  return (
    <Container>
      <ImgCont>
        <ImageWrapper src={thumbImg} alt="thumbLeadster" />
      </ImgCont>
      <DescCont>
        <p>Como aumentar sua Geração de Leads feat. Traktor</p>
      </DescCont>
    </Container>
  );
}
