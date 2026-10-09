import React, { useEffect } from "react";
import Button from "./button";
import {
  CloseButton,
  Overlay,
  PopupBody,
  PopupContainer,
  PopupFooter,
  PopupHeader,
} from "@/style/popup";
import { Subheading } from "@/style/text";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <PopupContainer
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <PopupHeader>
          <Subheading>{title}</Subheading>
          <CloseButton type="button" aria-label="Close" onClick={onClose}>
            ✕
          </CloseButton>
        </PopupHeader>
        <PopupBody>{children}</PopupBody>
        <PopupFooter>
          {footer ?? (
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          )}
        </PopupFooter>
      </PopupContainer>
    </Overlay>
  );
};

export default Modal;
