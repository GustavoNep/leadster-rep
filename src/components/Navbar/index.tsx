import Image from "next/image";
import styled from "styled-components";
import imgLogo from "../../assets/logo.png";

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--dsc-color-card-bg);
`;

const Wrapper = styled.div` 
`;

const Logo = styled(Image)`
  width: 130px;
  height: 30px;
`;

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo src={imgLogo} alt="leadster logo" />
      </Wrapper>
    </Container>
  );
}
