import type { ComponentType, ReactNode } from "react";

export type WithChildren = { children: ReactNode };

export type LayoutComponent = ComponentType<WithChildren>;

export type StatusType = "idle" | "loading" | "success" | "error";

export interface BaseResponse<T> {
  data: T;
  message?: string;
  status: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
