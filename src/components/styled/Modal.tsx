import React from 'react';
import styled from "styled-components";

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  left: 0;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const ModalCard = styled.div`
  position: relative;
  width: 60rem;
  height: fit-content;
  min-height: 30rem;
  text-align: center;
  z-index: 2;
  background-color: white;
  margin: auto;
  top: 20rem;
  border-radius: 1.2rem;
  box-shadow: 0px 4px 30px #00000014;
  h3 {
    font-family: var(--font-poppins);
    color: #393939;
    font-size: 2.4rem;
    font-weight: 600;
    padding-bottom: 1rem;
    padding-top: 5rem;
  }
  p {
    font-family: var(--font-poppins);
    color: #799283;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 4rem;
  }
`;

const XCloseContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  svg {
    fill: #e23428;
  }
`;

interface ModalProps {
  closeModalHandler: () => void;
  name: string;
  request: string;
}

const Modal: React.FC<ModalProps> = ({ closeModalHandler, name, request }) => {
  return (
    <div>
      <BackDrop onClick={closeModalHandler}>
        <ModalCard onClick={e => e.stopPropagation()}>
          <XCloseContainer onClick={closeModalHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
            >
              <path d="m12.45 38.85-3.3-3.3L20.7 24 9.15 12.45l3.3-3.3L24 20.7 35.55 9.15l3.3 3.3L27.3 24l11.55 11.55-3.3 3.3L24 27.3Z" />
            </svg>
          </XCloseContainer>
          <h3>{name} sent this request:</h3>
          <p>{request}</p>
        </ModalCard>
      </BackDrop>
    </div>
  );
};

export { Modal };