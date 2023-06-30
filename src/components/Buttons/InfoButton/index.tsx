import styled from "styled-components";

const Button = styled.button`
  background-color: #0083ff;
  padding: 11px 18px;
  border: none;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  border-radius: 28px;
  font-weight: 600;
  color: white;
  text-align: center;

  &:hover {
    color: #ccdef1;
  }
  font-size: 0.5rem;
  &:active {
  }
  @media (min-width: 1024px) {
    padding: 14px 24px;
    font-size: 0.7rem;
  } 

  
`;
type Props = {
    text: String;
}

export default function InfoButton({text} : Props) {
  return (
    <Button>
      {text}
    </Button>
  );
}
