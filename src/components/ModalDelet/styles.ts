import styled from "styled-components";

export const ModalHeaderdIV = styled.div`
  display: flex;
  justify-content: start;
  color: black;
  padding: 1px 0 20px;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
`;

export const ModalBodyStyled = styled.div`
  padding: 10% 0;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 8px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: rgba(119, 119, 119, 0.2);
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 30%;
  z-index: 1050;
  width: 40%;
  outline: 0;
`;
export const ModalDiv = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  padding: 5%;
`;
