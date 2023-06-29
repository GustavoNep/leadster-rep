import styled from "styled-components";
import { AiOutlineDownload } from "react-icons/ai";
import { Video } from "@/types/video";

const Button = styled.button`
  display: flex;
  max-width: 110px;
  align-items: center;
  padding: 8px;
  border: none;
  border-radius: 7px;

  
  background-color: #0084ff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }
`;
const Wrapper = styled.div`
`
const Icon = styled(AiOutlineDownload)`
  margin-right: 8px;
`;

type Props = {
  cateVideo: Video | null;
  downloadIndex: number;
}
export default function CategoryButtons({cateVideo, downloadIndex} : Props) {

  const fileName = cateVideo && cateVideo.downloads.length > downloadIndex ? cateVideo.downloads[downloadIndex].fileName : "";

  return (
    <Wrapper>
      <div></div>
      <Button>
        <Icon />
        <span>{fileName}</span>
      </Button>
    </Wrapper>
  );
}
