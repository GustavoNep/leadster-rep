import styled from "styled-components";
import { listItems } from "@/constants";
import Logo from "../../assets/logo.png";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  height: 400px;
`;

const ListContainer = styled.div`
  
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
`;

const ListWrapper = styled.div`
  display: flex;
  gap: 8%;
  justify-content: center;
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
  padding: 45px 0;
`;
const EmailConta = styled.div`
  font-size: 12px;
  ul li {
    margin-top: 18px;
    cursor: pointer;
  }
`;

export default function Footer() {
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
                <ListItem key={Items}>{Items}</ListItem>
              ))}
            </ul>
          </ListContainer>
        ))}
        <ListContainer>
          <ListTitle>Siga a Leadster</ListTitle>
          <div>Icons</div>
          <EmailConta>
            <ul>
              <li>Email: contato@leadster.com.br</li>
              <li>Telefone:(42)98828-9851</li>
            </ul>
          </EmailConta>
        </ListContainer>
      </ListWrapper>
      <div></div>
    </Container>
  );
}
