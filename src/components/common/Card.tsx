'use client';

import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  header,
  footer,
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden ${className}`}
    >
      {header && (
        <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
          {header}
        </div>
      )}
      <div className="p-5">{children}</div>
      {footer && (
        <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/50">
          {footer}
        </div>
      )}
    </div>
  );
};