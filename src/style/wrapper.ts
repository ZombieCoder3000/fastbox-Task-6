import styled from 'styled-components';
import { device } from './device';

export const MainWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: #f8fafc;
`;

export const ContentWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow-y: auto;
  padding: 1.5rem;
`;

export const SidebarWrapper = styled.aside<{ $isOpen?: boolean }>`
  width: 260px;
  background-color: #0f172a;
  transition: transform 0.25s ease-in-out;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 40;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  }
`;