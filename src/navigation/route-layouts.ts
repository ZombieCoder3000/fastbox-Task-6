import { ROUTES } from "@/constants";
import type { LayoutComponent } from "@/infrastructure/services/interface/common.types";
import AuthLayout from "@/components/layout/auth-layout";
import DashboardLayout from "@/components/layout/dashboard-layout";
import MainLayout from "@/components/layout/main-layout";

type RouteLayout = {
  prefixes: string[];
  layouts: LayoutComponent[];
  exact?: boolean;
};

const routeLayouts: RouteLayout[] = [
  {
    prefixes: [ROUTES.AUTH],
    layouts: [AuthLayout],
  },
  {
    prefixes: [ROUTES.DASHBOARD],
    layouts: [MainLayout, DashboardLayout],
  },
  {
    prefixes: [ROUTES.HOME],
    layouts: [MainLayout],
    exact: true,
  },
];

export function getLayoutsForPath(pathname: string): LayoutComponent[] {
  const match = routeLayouts.find(({ prefixes, exact }) =>
    prefixes.some((prefix) =>
      exact ? pathname === prefix : pathname.startsWith(prefix),
    ),
  );

  return match?.layouts ?? [];
}
