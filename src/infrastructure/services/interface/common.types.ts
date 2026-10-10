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

export type FeatureIconName =
  | "zap"
  | "shield"
  | "mapPin"
  | "dollar"
  | "clock"
  | "smartphone";

export type GradientTone =
  | "violet"
  | "blue"
  | "pink"
  | "green"
  | "orange"
  | "red";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconName;
  tone: GradientTone;
}
