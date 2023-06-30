import styled from "styled-components";

const Button = styled.button`
  background-color: #0083ff;
  //padding: 11px 18px;
  padding: 5px 10px;
  font-size: 0.5rem;
  border: none;
  transition: background-color 0.7s ease, color 0.7s ease,
    border-color 0.5s ease;
  cursor: pointer;
  border-radius: 28px;
  font-weight: 600;
  color: white;
  text-align: center;

  &:hover {
    background-color: white;
    color: #0083ff;
    outline: 1px solid #0083ff;
  }

  @media (min-width: 576px) {
    padding: 7px 12px;
    font-size: 0.8rem;
  }
  @media (min-width: 678px) {
    padding: 7px 12px;
    font-size: 0.6rem;
  }

  @media (min-width: 1024px) {
    padding: 9px 17px;
    font-size: 0.9rem;
  }
  @media (min-width: 1200px) {
    padding: 17px 23px;
    font-size: 1rem;
  } 
`;

const Arrow = styled.span`
  margin-left: 13px;
  color: white;
  transition: color 0.6s ease;

  ${Button}:hover & {
    color: #0083ff;
  }
`;

type Props = {
  text: string;
};

export default function InfoButton({ text }: Props) {
  return (
    <Button>
      {text}
      <Arrow>➤</Arrow>
    </Button>
  );
}
