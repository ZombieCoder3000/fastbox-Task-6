'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { Providers } from '@/components/Providers';
import { useAppDispatch, useAppSelector, toggleSidebar, RootState } from '@/store';
import { AppShell, SidebarContainer, MainContainer } from '@/components/styled/Layout.styled';
import { APP_NAME, ROUTES } from '@/constants';

const Backdrop = styled.aside`
  position: fixed;
  inset: 0;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1.25rem;
  color: #ffffff;
`;

const NavGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BrandTitle = styled.header`
  font-size: 1.25rem;
  font-weight: 900;
  letter-spacing: -0.025em;
  color: #60a5fa;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavListItem = styled.li`
  list-style: none;
`;

const NavItemLink = styled(Link)<{ $isActive: boolean }>`
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  text-decoration: none;
  transition: all 150ms ease-in-out;
  background-color: ${({ $isActive }) => ($isActive ? '#2563eb' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#cbd5e1')};

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? '#2563eb' : '#1e293b')};
  }
`;

const HeaderBar = styled.header`
  padding: 1rem;
  background-color: #ffffff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuButton = styled.button`
  padding: 0.375rem;
  color: #475569;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ContentArea = styled.section`
  flex: 1;
  padding: 1.5rem;
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
`;

function DashboardContent({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSidebarOpen);

  const links = [
    { label: 'Overview', href: ROUTES.DASHBOARD },
    { label: 'Profile', href: '/dashboard/profile' },
  ];

  return (
    <AppShell as="main">
      {isSidebarOpen && (
        <Backdrop
          role="presentation"
          aria-hidden="true"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      <SidebarContainer as="aside" $isOpen={isSidebarOpen}>
        <SidebarNav aria-label="Sidebar Navigation">
          <NavGroup>
            <BrandTitle>{APP_NAME}</BrandTitle>
            <NavList>
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <NavListItem key={link.href}>
                    <NavItemLink href={link.href} $isActive={isActive}>
                      {link.label}
                    </NavItemLink>
                  </NavListItem>
                );
              })}
            </NavList>
          </NavGroup>
        </SidebarNav>
      </SidebarContainer>

      <MainContainer as="section">
        <HeaderBar>
          <MenuButton
            type="button"
            onClick={() => dispatch(toggleSidebar())}
            aria-label="Toggle Navigation"
          >
            ☰
          </MenuButton>
        </HeaderBar>

        <ContentArea>{children}</ContentArea>
      </MainContainer>
    </AppShell>
  );
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <DashboardContent>{children}</DashboardContent>
    </Providers>
  );
}