import styled from "styled-components";

const Button = styled.button`
  background-color: #0083ff;
  padding: 15px 25px;
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
  font-size: 13px;
  &:active {
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