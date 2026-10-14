import React from 'react';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full border-b bg-white p-4 font-semibold">Header</header>
      <main className="flex-1 p-6">{children}</main>
      <footer className="w-full border-t bg-white p-4 text-center text-sm text-gray-500">
        Footer
      </footer>
    </div>
  );
};