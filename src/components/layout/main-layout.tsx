'use client';

import React from 'react';
import { MainWrapper, ContentWrapper, SidebarWrapper } from '@/style/wrapper';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toggleSidebar } from '@/slices/general.slice';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.general.isSidebarOpen);

  return (
    <MainWrapper>
      <SidebarWrapper $isOpen={isSidebarOpen}>
        <div className="p-5 text-white font-bold text-lg">FastBox</div>
      </SidebarWrapper>
      <ContentWrapper>
        <header className="mb-6 flex items-center justify-between pb-4 border-b border-slate-200">
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="p-2 text-sm text-slate-600 rounded bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </header>
        {children}
      </ContentWrapper>
    </MainWrapper>
  );
};