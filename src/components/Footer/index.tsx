import styled from "styled-components";
import { listItems } from "@/constants";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import ButtonSocial from "../Buttons/ButtonSocial";
import AnnouLine from "../AnnouLine";

const Container = styled.div`
  width: 100%;
  height: 70vh;
  height: 100%;
`;

const ListContain = styled.div`
  ul {
    list-style: none;
  }
  ul li {
  }
`;

const ListContainer = styled.div`
  padding-bottom: 14px;
  ul {
    list-style: none;
  }
  ul li {
    cursor: pointer;
  }
`;

const ListTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 12px;
`;

const ListItem = styled.li`
  font-size: 12px;
  margin-bottom: 4px;
  margin-top: 18px;
  opacity: 0.5;
`;

const ListWrapper = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 10%;
  }
  @media (min-width: 1200px) {
    gap: 12%;
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;
  p {
    padding-top: 5px;
    font-size: 10px;
    letter-spacing: 0.2px;
  }
`;

const LogoContainer = styled.div`
  padding: 40px 0;
`;

const EmailConta = styled.div`
  font-size: 12px;
  ul li {
    margin-top: 18px;
  }
`;

const SocialStyle = styled.div``;
const HighInfo = styled.span`
  color: #568899;
`;

const CopyrightContainer = styled.div`
  display: flex;
  font-size: 0.5rem;
  color: #568899;
  padding-top: 15px;
  padding-bottom: 25px;
  letter-spacing: 0.5px;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 0.4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    max-width: 920px;
    margin: 0 auto;
    justify-content: space-between;
    font-size: 0.6rem;
    p {
      font-size: 0.5rem;
    }
  }

  @media (min-width: 1200px) {
    max-width: 1000px;
    font-size: 0.7rem;
    p {
      font-size: 0.6rem;
    }
  }

  @media (min-width: 1400px) {
    max-width: 1120px;
    
  }
`;

const HighlightedText = styled.span`
  color: #0084ff;
  font-weight: bold;
`;

const LineLimit = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

export default function Footer() {
  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <LogoContainer>
        <LogoStyle>
          <Image src={Logo} alt="" width={180} />
        </LogoStyle>
        <LogoText>
          <p>Transformando visitantes em clientes.</p>
        </LogoText>
      </LogoContainer>
      <ListWrapper>
        {listItems.map((x, i) => (
          <ListContainer key={i}>
            <ListTitle>{x.title}</ListTitle>
            <ul>
              {x.items.map((Items) => (
                <ListItem key={Items} onClick={handleHomeClick}>
                  {Items}
                </ListItem>
              ))}
            </ul>
          </ListContainer>
        ))}
        <ListContain>
          <ListTitle>Siga a Leadster</ListTitle>
          <SocialStyle>
            <ButtonSocial />
          </SocialStyle>
          <EmailConta>
            <ul>
              <li>
                Email: <HighInfo>contato@leadster.com.br</HighInfo>{" "}
              </li>
              <li>
                Telefone: <HighInfo>(42)98828-9851</HighInfo>
              </li>
            </ul>
          </EmailConta>
        </ListContain>
      </ListWrapper>

      <LineLimit>
        <AnnouLine mtbot="10" mgtop="30px" />
      </LineLimit>

      <CopyrightContainer>
        <div>
          &copy; 2015-2022 Todos os direitos reservados |
          <HighlightedText> Leadster</HighlightedText>{" "}
        </div>
        <p>
          Rua José Loureiro, 464 - Centro - Curitiba Pr - CEP: 80010-000 |
          Termos de uso
        </p>
      </CopyrightContainer>
    </Container>
  );
}
