import React, { useState, useEffect } from "react";
import {
  ModalHeaderdIV,
  ModalFooterStyled,
  ModalBodyStyled,
  ModalOverlay,
  ModalWrapper,
  ModalDiv,
} from "./styles";

interface ModalProps {
  ShowingModalDelete: boolean;
  clickModalDelete: () => void;
}

const ModalDelete: React.FC<ModalProps> = ({ ShowingModalDelete, clickModalDelete, children }) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();

        ShowingModalDelete && clickModalDelete();
      }
    };

    window.addEventListener("keyup", listner);

    return () => {
      window.removeEventListener("keyup", listner);
    };
  }, [ShowingModalDelete, clickModalDelete]);

  return ShowingModalDelete ? (
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
  clickModalDelete: () => void;
}

export const ModalHeaderDelete: React.FC<ModalHeaderProps> = ({
  clickModalDelete,
  children,
}) => <ModalHeaderdIV>{children || "Title"}</ModalHeaderdIV>;

export const ModalBody: React.FC = ({ children }) => (
  <ModalBodyStyled>{children}</ModalBodyStyled>
);

export const ModalFooterDelete: React.FC<ModalHeaderProps> = ({
  children,
  clickModalDelete,
}) => <ModalFooterStyled onClick={clickModalDelete}>{children}</ModalFooterStyled>;

export const useModalDelete = () => {
  const [ShowingModalDelete, setShowingModalDelete] = useState(false);

  function clickModalDelete() {
    setShowingModalDelete(!ShowingModalDelete);
  }

  return {
    ShowingModalDelete,
    clickModalDelete,
  };
};

export default ModalDelete;
