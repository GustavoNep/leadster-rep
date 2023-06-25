import styled from "styled-components";
import AnouButton from "../AnouButton";

const Container = styled.div`
  height: 550px;
  background-color: var(--dsc-color-bg-primary);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 746px;
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
    font-size: 50px;
    font-weight: 200;
  }
`;

const AnouTitle = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 90px;
    background: linear-gradient(-45deg, #2c83fb, #1f76f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AnouDesc = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18.5px;
`;

export default function Annoucement() {
  return (
    <Container>
      <Wrapper>
        <AnouStyle>
          <AnouButton />
        </AnouStyle>
        <AnouText>
          <h3>Menos Conversinha,</h3>
        </AnouText>
        <AnouTitle>
          <h1>Mais Conversão</h1>
        </AnouTitle>
        <AnouDesc>
          <p>
            Conheça as estratégias que mudaram o jogo e como aplicá-las no seu
            negócio
          </p>
        </AnouDesc>
      </Wrapper>
    </Container>
  );
}
