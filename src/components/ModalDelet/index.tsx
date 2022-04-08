import React, { useState, useEffect } from "react";
import ReactFrom from "react-dom";
import {
  ModalHeaderdIV,
  ModalFooterStyled,
  ModalBodyStyled,
  ModalOverlay,
  ModalWrapper,
  ModalDiv,
} from "./styles";

interface ModalProps {
  isShowing: boolean;
  toggle: () => void;
}

const Modal: React.FC<ModalProps> = ({ isShowing, toggle, children }) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        isShowing && toggle();
      }
    };

    window.addEventListener("keyup", listner);

    return () => {
      window.removeEventListener("keyup", listner);
    };
  }, [isShowing, toggle]);

  return isShowing ? (
    <>
      <ModalOverlay>
        <ModalWrapper>
          <ModalDiv>{children}</ModalDiv>
        </ModalWrapper>
      </ModalOverlay>
    </>
  ) : null;
};

interface ModalHeaderProps {
  toggle: () => void;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  toggle,
  children,
}) => <ModalHeaderdIV>{children || "Title"}</ModalHeaderdIV>;

export const ModalBody: React.FC = ({ children }) => (
  <ModalBodyStyled>{children}</ModalBodyStyled>
);

export const ModalFooter: React.FC<ModalHeaderProps> = ({
  children,
  toggle,
}) => <ModalFooterStyled onClick={toggle}>{children}</ModalFooterStyled>;

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  };
};

export default Modal;
