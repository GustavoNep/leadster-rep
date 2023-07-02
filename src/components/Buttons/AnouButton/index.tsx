import styled from "styled-components";

const Button = styled.button`
  border: solid 2px var(--dsc-color-btn-primary);
  padding: 1px 5px;
  color: var(--dsc-color-btn-primary);
  background-color: transparent;
  font-size: 0.44rem;
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
    font-size: 0.6rem;
    padding: 5px 20px;
  }
  @media (min-width: 768px) {
    font-size: 0.63rem;
  }
  @media (min-width: 1024px) {
    font-size: 0.75rem;
  }
  @media (min-width: 1200px) {
    font-size: 0.9rem;
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
