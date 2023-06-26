import styled from "styled-components";

type Props = {
  mgtop: string;
  mtbot: string;
};

const AnnouLin = styled.div<Props>`
  border-bottom: 1.6px solid rgba(128, 128, 128, 0.3);
  margin-top: ${(props) => props.mgtop || "0"};
  margin-bottom: ${(props) => props.mtbot || "0"};
`;

export default function AnnouLine({ mgtop, mtbot }: Props) {
  return <AnnouLin mgtop={mgtop} mtbot={mtbot} />;
}
