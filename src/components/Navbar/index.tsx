
import Image from "next/image";
import styled from "styled-components";
import imgLogo from "../../assets/logo.png";

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--dsc-color-card-bg);
`;
const Wrapper = styled.div``;


export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Image src={imgLogo} alt="leadster logo" width={130} height={30} />
      </Wrapper>
    </Container>
  );
}
