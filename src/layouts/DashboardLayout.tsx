'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Providers } from '@/components/Providers';
import { useAppDispatch, useAppSelector, toggleSidebar, logout, RootState } from '@/store';
import { AppShell, SidebarContainer } from '@/components/styled/Layout.styled';
import { Button } from '@/components/common';

function DashboardContent({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const isSidebarOpen = useAppSelector((state: RootState) => state.ui.isSidebarOpen);
  const { user, isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth/login');
  };

  const navLinks = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/packages', label: 'Packages' },
    { href: '/dashboard/profile', label: 'User Profile' },
  ];

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
        <div className="flex flex-col h-full justify-between p-5 text-white">
          <div className="space-y-6">
            <header className="text-xl font-black tracking-tight text-blue-400">
              FastBox
            </header>
            <nav>
              <ul className="space-y-1.5 text-sm">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-3 py-2 rounded-lg font-medium transition ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
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

          <div className="pt-4 border-t border-slate-800 space-y-3">
            {isAuthenticated && user && (
              <div className="px-1 text-xs">
                <p className="font-semibold text-white truncate">{user.name}</p>
                <p className="text-slate-400 truncate">{user.email}</p>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-xs font-semibold text-rose-400 hover:bg-rose-950/30 rounded-lg transition"
            >
              Log Out
            </button>
          </div>
        </div>
      </SidebarContainer>

      <section className="flex-1 flex flex-col min-w-0">
        <header className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-1.5 text-slate-600 rounded-lg hover:bg-slate-100 lg:hidden"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          <div className="ml-auto flex items-center gap-3">
            {user ? (
              <span className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full font-medium">
                {user.role.toUpperCase()}
              </span>
            ) : (
              <Button size="sm" variant="outline" onClick={() => router.push('/auth/login')}>
                Sign In
              </Button>
            )}
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-y-auto max-w-6xl w-full mx-auto">
          {children}
        </main>
      </section>
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