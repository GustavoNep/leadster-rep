import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 5px;
  background-color: #0084ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
const Wrapper = styled.div``
const Icon = styled(AiOutlineDownload)`
  margin-right: 8px;
`;

export default function CategoryButtons() {
  return (
    <Wrapper>
      <div></div>
      <Button>
        <Icon />
        <span>Spreadsheet.xls</span>
      </Button>
    </Wrapper>
  );
}
