import styled, { keyframes } from "styled-components";

import thumbImg from "../../assets/thumbnail.png";
import Image from "next/image";

const moveCard = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(3px, 0);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Container = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    animation: ${moveCard} 0.5s ease-in-out;
  }
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

type Props = {
    onClick: Function;
    title: String;
}

export default function VideoCard({ onClick, title }: Props) {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Container onClick={onClick ? handleClick : undefined} >
      <ImgCont>
        <ImageWrapper src={thumbImg} alt="thumbLeadster" />
      </ImgCont>
      <DescCont>
        <p>{title}</p>
      </DescCont>
    </Container>
  );
}
