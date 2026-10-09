import styled from "styled-components";
import { device } from "./device";

export const Overlay = styled.section`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.overlay};

  @media ${device.md} {
    align-items: center;
    padding: 1rem;
  }
`;

export const PopupContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32rem;
  max-height: 90vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg} ${({ theme }) => theme.radii.lg}
    0 0;

  @media ${device.md} {
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

export const PopupHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const PopupBody = styled.section`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
`;

export const PopupFooter = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;
