'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Providers } from '@/components/Providers';
import { useAppDispatch, useAppSelector, toggleSidebar, RootState } from '@/store';
import { AppShell, SidebarContainer, MainContainer } from '@/components/styled/Layout.styled';
import { APP_NAME, ROUTES } from '@/constants';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSidebarOpen);

  const links = [
    { label: 'Overview', href: ROUTES.DASHBOARD },
    { label: 'Profile', href: ROUTES.PROFILE },
  ];

  return (
    <AppShell>
      {isSidebarOpen && (
        <div
          role="presentation"
          onClick={() => dispatch(toggleSidebar())}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <SidebarContainer $isOpen={isSidebarOpen}>
        <div className="flex flex-col h-full justify-between p-5 text-white">
          <div className="space-y-6">
            <header className="text-xl font-black tracking-tight text-blue-400">
              {APP_NAME}
            </header>
            <nav>
              <ul className="space-y-1 text-sm">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-3 py-2 rounded-lg font-medium transition ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </SidebarContainer>

      <MainContainer>
        <header className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-1.5 text-slate-600 rounded-lg hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Navigation"
          >
            ☰
          </button>
        </header>

        <section className="flex-1 p-6 max-w-6xl w-full mx-auto">
          {children}
        </section>
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