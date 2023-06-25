import styled from "styled-components";
const ButtonDiv = styled.div`
  border: solid 2px var(--dsc-color-btn-primary);
  display: inline-block;
  white-space: nowrap;
  padding: 5px 20px;
  border-radius: 30px;
  border-bottom-left-radius: 1px;
  p {
    font-size: 14px;
    font-weight: 800;
    color: var(--dsc-color-btn-primary);
  }
`;

export default function AnouButton() {
  return (
    <div>
      <ButtonDiv>
        <p>WEBINAR EXCLUSIVOS</p>
      </ButtonDiv>
    </div>
  );
}
