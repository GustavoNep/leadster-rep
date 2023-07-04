import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const growAnimation = keyframes`
  from {
    transform: scale(1);
    background-color: rgba(0, 0, 0, 0.2);
  }
  to {
    transform: scale(1.2);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ButtonSocialContainer = styled.div`
  display: flex;
  margin-left: 2px;
  padding-top: 10px;
  padding-bottom: 6px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    animation: ${growAnimation} 0.6s forwards;
  }

  svg {
    color: #fff;
    font-size: 20px;
  }
`;

export default function ButtonSocial() {
  return (
    <ButtonSocialContainer>
      <SocialIcon href="https://www.linkedin.com/in/gustavo-nepomuceno-deusdara-4a26b7228/" target="_blank">
        <FaLinkedin />
      </SocialIcon>
      <SocialIcon href="https://www.facebook.com/leadsterplatform/?locale=pt_BR" target="_blank">
        <FaFacebook />
      </SocialIcon>
      <SocialIcon href="https://www.instagram.com/leadster.com.br/" target="_blank">
        <FaInstagram />
      </SocialIcon>
    </ButtonSocialContainer>
  );
}
