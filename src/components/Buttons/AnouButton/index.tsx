import styled from "styled-components";

const Button = styled.button`
  border: solid 2px var(--dsc-color-btn-primary);
  padding: 1px 5px;
  color: var(--dsc-color-btn-primary);
  background-color: transparent;
  font-size: 0.5rem;
  font-weight: bold;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  border-radius: 30px;
  border-bottom-left-radius: 1px;
  cursor: pointer;
  &:hover {
    background-color: var(--dsc-color-btn-primary);
    color: var(--dsc-color-btn-inverse);
  }

  @media (min-width: 576px) {
    font-size: 0.8rem;
    padding: 5px 20px;
  }
`;

type Props = {
  text: string;
};

export default function AnouButton({ text }: Props) {
  return (
    <Button>{text}</Button>
  );
}
