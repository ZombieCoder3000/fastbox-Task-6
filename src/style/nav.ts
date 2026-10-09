import styled from "styled-components";
import Link from "next/link";

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
