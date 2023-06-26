import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 30px;
  height: 100%;
  max-width: 550px;
  width: 100%;
  max-height: 50vh;
  overflow-y: auto;
`;

export default function VideoCardModal({ onClose }: any) {
  return (
    <ModalOverlay>
      <ModalContent>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
}
