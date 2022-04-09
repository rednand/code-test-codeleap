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
  ShowingModalEdit: boolean;
  clickModalEdit: () => void;
}

const ModalEdit: React.FC<ModalProps> = ({
  ShowingModalEdit,
  clickModalEdit,
  children,
}) => {
  useEffect(() => {
    const listner = function (e: KeyboardEvent) {
      if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        ShowingModalEdit && clickModalEdit();
      }
    };

    window.addEventListener("keyup", listner);

    return () => {
      window.removeEventListener("keyup", listner);
    };
  }, [ShowingModalEdit, clickModalEdit]);

  return ShowingModalEdit ? (
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
  clickModalEdit: () => void;
}

export const ModalHeaderEdit: React.FC<ModalHeaderProps> = ({ children }) => (
  <ModalHeaderdIV>{children || "Title"}</ModalHeaderdIV>
);

export const ModalBodyEdit: React.FC = ({ children }) => (
  <ModalBodyStyled>{children}</ModalBodyStyled>
);

export const ModalFooterEdit: React.FC<ModalHeaderProps> = ({ children }) => (
  <ModalFooterStyled>{children}</ModalFooterStyled>
);

export const useModalEdit = () => {
  const [ShowingModalEdit, setShowingModalDelete] = useState(false);

  function clickModalEdit() {
    setShowingModalDelete(!ShowingModalEdit);
  }

  return {
    ShowingModalEdit,
    clickModalEdit,
  };
};

export default ModalEdit;