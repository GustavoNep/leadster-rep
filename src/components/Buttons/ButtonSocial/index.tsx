import styled from "styled-components";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const ButtonSocialContainer = styled.div`
  display: flex;
  margin-left: 2px;
  padding-top: 10px;
  padding-bottom: 6px;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;

  svg {
    color: #fff;
    font-size: 20px;
  }
`;

export default function ButtonSocial() {
  return (
    <ButtonSocialContainer>
      <SocialIcon>
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon>
        <FaFacebook />
      </SocialIcon>
      <SocialIcon>
        <FaInstagram />
      </SocialIcon>
    </ButtonSocialContainer>
  );
}
