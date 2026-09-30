'use client';

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector, removeToast } from '@/store';
import { ToastMessage } from '@/store/slices/toastSlice';

const ToastItem: React.FC<{ toast: ToastMessage }> = ({ toast }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, 4000);
    return () => clearTimeout(timer);
  }, [dispatch, toast.id]);

  const typeStyles = {
    success: 'bg-emerald-600 text-white border-emerald-700',
    error: 'bg-rose-600 text-white border-rose-700',
    info: 'bg-blue-600 text-white border-blue-700',
  };

  return (
    <div
      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg shadow-lg border text-sm transition-all animate-slide-in ${
        typeStyles[toast.type]
      }`}
    >
      <span>{toast.message}</span>
      <button
        onClick={() => dispatch(removeToast(toast.id))}
        className="opacity-75 hover:opacity-100 font-bold ml-2 text-xs"
      >
        ✕
      </button>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const toasts = useAppSelector((state) => state.toast.toasts);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};