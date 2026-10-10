import styled from "styled-components";
import Link from "next/link";
import { Button } from "./btn";
import { device } from "./device";

export const NavLinkItem = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.radii.md};
  color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.onPrimary};
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.onPrimary : "transparent"};
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.onPrimary : "rgba(255, 255, 255, 0.12)"};
  }
`;

export const DesktopLinks = styled.nav`
  display: none;
  align-items: center;
  gap: 2.5rem;

  @media ${device.lg} {
    display: flex;
  }
`;

export const HeaderLink = styled(Link)`
  font-size: 1.0625rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.navText};
  transition: color 0.15s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.brand};
  }
`;

export const HeaderActions = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SignInLink = styled(HeaderLink)`
  display: none;

  @media ${device.md} {
    display: inline-block;
    margin-right: 1rem;
  }
`;

export const GetStartedLink = styled(Link)`
  display: none;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.onPrimary};
  background: ${({ theme }) => theme.gradients.brand};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 0.9;
  }

  @media ${device.md} {
    display: inline-flex;
  }
`;

export const MenuToggle = styled(Button)`
  @media ${device.lg} {
    display: none;
  }
`;

export const MobilePanel = styled.nav<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.lg} {
    display: none;
  }
`;

export const MobileLink = styled(HeaderLink)`
  padding: 0.75rem 0.5rem;
`;

export const MobileActions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media ${device.md} {
    display: none;
  }
`;

export const MobileSignIn = styled(HeaderLink)`
  padding: 0.75rem 0.5rem;
`;

export const MobileGetStarted = styled(GetStartedLink)`
  display: inline-flex;
  justify-content: center;
`;
