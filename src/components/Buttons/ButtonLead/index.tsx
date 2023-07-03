import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const Button = styled.button<ButtonProps>`
  background-color: white;
  margin-right: 10px;
  border: 1px solid black;
  color: black;
  padding: 8px 16px;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-color 0.3s ease;
  cursor: pointer;
  border-radius: 22px;
  font-weight: 600;
  color: var(--dsc-color-font-primary);
  text-align: center;
  font-size: 13px;
  &:hover {
    color: #2c83fb;
    border-color: #2c83fb;
  }
  ${(props) =>
    props.active &&
    css`
      background-color: #2c83fb;
      color: white;

      &:hover {
        background-color: #2c83fb;
        border-color: #2c83fb;
        color: white;
      }
    `}
`;

type Props = {
  text: string;
  active: boolean;
  onClick: () => void;
};

export default function ButtonLead({ text, active, onClick }: Props) {
  return <Button active={active} onClick={onClick}>{text}</Button>;
}
