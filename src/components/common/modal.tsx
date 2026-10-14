'use client';

import React from 'react';
import styled from 'styled-components';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Backdrop = styled.aside`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
`;

const Dialog = styled.article`
  width: 100%;
  max-width: 32rem;
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const ModalTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.25rem;
  color: #64748b;
  cursor: pointer;
  padding: 0.25rem;

  &:hover {
    color: #0f172a;
  }
`;

const ModalBody = styled.section`
  padding: 1.5rem;
`;

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <Backdrop onClick={onClose} role="dialog" aria-modal="true">
      <Dialog onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          {title && <ModalTitle>{title}</ModalTitle>}
          <CloseButton onClick={onClose} aria-label="Close modal">×</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </Dialog>
    </Backdrop>
  );
};

export default Modal;
