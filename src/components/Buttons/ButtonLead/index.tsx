import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  margin-right: 10px;
  border: 1px solid black;
  color: black;
  padding: 8px 16px;
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
  border-radius: 22px;
  font-weight: 600;
  color: var(--dsc-color-font-primary);
  text-align: center;
  &:hover {
    color: #2c83fb;
    border-color: #2c83fb;
  }
  font-size: 13px;
  &:active {
    background-color: var(--dsc-color-bg-tertiary);
    color: white;
  }
`;
type Props = {
    text: String;
}

export default function ButtonLead({text} : Props) {
  return (
    <Button>
      {text}
    </Button>
  );
}
