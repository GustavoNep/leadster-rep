import styled from "styled-components";
import { listItems } from "@/constants";

const Container = styled.div`
  width: 100%;
  height: 350px;
`;

const ListContainer = styled.div`
  flex-direction: column;
  ul {
    list-style: none;
  }
`;

const ListTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;

const ListItem = styled.li`
  font-size: 14px;
  margin-bottom: 4px;
`;

const ListWrapper = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 30px;
`;

export default function Footer() {
  return (
    <Container>
      <div>
        <div>Logo</div>
        <div>
          <p>Transformando visitantes em clientes</p>
        </div>
      </div>
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
          <div>
            <span>Email: contato@leadster.com.br</span>
            <span>Telefone:(42)98828-9851</span>
          </div>
        </ListContainer>
      </ListWrapper>
      <div></div>
    </Container>
  );
}
