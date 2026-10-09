import styled from "styled-components";
import { device } from "./device";

export const AppShell = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.layout.headerHeight};
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.md} {
    padding: 0 1.5rem;
  }

  @media ${device.lg} {
    padding: 0 2rem;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const FooterWrapper = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Container = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentMaxWidth};
  margin: 0 auto;
  padding: 1rem;

  @media ${device.md} {
    padding: 1.5rem;
  }

  @media ${device.lg} {
    padding: 2rem;
  }
`;

export const Row = styled.section<{
  $justify?: string;
  $align?: string;
  $gap?: string;
  $wrap?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ $justify }) => $justify ?? "flex-start"};
  align-items: ${({ $align }) => $align ?? "center"};
  gap: ${({ $gap }) => $gap ?? "1rem"};
  flex-wrap: ${({ $wrap }) => ($wrap ? "wrap" : "nowrap")};
`;

export const Column = styled.section<{
  $justify?: string;
  $align?: string;
  $gap?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => $justify ?? "flex-start"};
  align-items: ${({ $align }) => $align ?? "stretch"};
  gap: ${({ $gap }) => $gap ?? "1rem"};
`;

export const Grid = styled.section<{ $columns?: number }>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media ${device.md} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.lg} {
    grid-template-columns: repeat(${({ $columns }) => $columns ?? 3}, 1fr);
  }
`;

export const CardWrapper = styled.article`
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
`;

export const CardHeader = styled.header`
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CardBody = styled.section`
  padding: 1.25rem;
`;

export const CardFooter = styled.footer`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const AuthShell = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  min-height: 100vh;
  padding: 2.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const AuthCard = styled.article`
  width: 100%;
  max-width: 28rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media ${device.md} {
    padding: 2rem;
  }
`;

export const DashboardShell = styled.section`
  display: flex;
  flex: 1;
  align-items: flex-start;
  min-width: 0;
`;

export const DashboardContent = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
`;

export const DashboardToolbar = styled.header`
  position: sticky;
  top: ${({ theme }) => theme.layout.headerHeight};
  z-index: ${({ theme }) => theme.zIndex.toolbar};
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.toolbarHeight};
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.md} {
    padding: 0 1.5rem;
  }

  @media ${device.lg} {
    display: none;
  }
`;

export const SidebarWrapper = styled.aside<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.sidebar};
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.layout.sidebarWidth};
  max-width: 85vw;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.25s ease-in-out;

  @media ${device.lg} {
    position: sticky;
    top: ${({ theme }) => theme.layout.headerHeight};
    height: calc(100vh - ${({ theme }) => theme.layout.headerHeight});
    z-index: auto;
    flex-shrink: 0;
    transform: none;
  }
`;

export const SidebarOverlay = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.overlay};
  border: none;
  background-color: ${({ theme }) => theme.colors.overlay};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  transition: opacity 0.25s ease-in-out;

  @media ${device.lg} {
    display: none;
  }
`;

export const SidebarHeader = styled.header`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.headerHeight};
  padding: 0 1.25rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-weight: 900;
  font-size: 1.25rem;
`;

export const SidebarNav = styled.nav`
  padding: 0.5rem 0.75rem 1.5rem;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;
