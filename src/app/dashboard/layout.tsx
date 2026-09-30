'use client';

import React from 'react';
import { useAppDispatch, useAppSelector, toggleSidebar, RootState } from '@/store';
import { AppShell, SidebarContainer } from '@/components/styled/Layout.styled';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSidebarOpen);

  return (
    <AppShell>
      {isSidebarOpen && (
        <aside
          role="presentation"
          onClick={() => dispatch(toggleSidebar())}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      <SidebarContainer $isOpen={isSidebarOpen}>
        <nav className="flex flex-col p-5 space-y-4 text-white">
          <header className="text-lg font-bold tracking-wide">FastBox</header>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#overview" className="block px-3 py-2 rounded bg-gray-800 font-medium">
                Overview
              </a>
            </li>
            <li>
              <a href="#packages" className="block px-3 py-2 rounded hover:bg-gray-800 text-gray-300">
                Packages
              </a>
            </li>
          </ul>
        </nav>
      </SidebarContainer>

      <section className="flex-1 flex flex-col min-w-0">
        <header className="lg:hidden p-4 bg-white border-b border-gray-200">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-1.5 text-gray-600 rounded hover:bg-gray-100"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-5xl w-full mx-auto">
          {children}
        </main>
      </section>
    </AppShell>
  );
}